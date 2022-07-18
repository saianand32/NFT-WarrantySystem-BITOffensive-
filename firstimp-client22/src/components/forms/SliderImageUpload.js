import React, {useState} from "react";
import Resizer from "react-image-file-resizer";
import axios from "axios";
import { useSelector } from "react-redux";
import { Avatar, Badge } from "antd";
import { uploadSliderImg } from "../../functions/admin";
import { toast } from "react-toastify";

const FileUpload = ({ values, setValues, setLoading }) => {
  const { user } = useSelector((state) => ({ ...state }));
 const { images } = values;
const [image, setImage] = useState()
  const handleFileUploadAndResize = (e) => {
    //resize
    setLoading(true);
    let files = e.target.files;
    let allUploadedImages = images;

    for (let i = 0; i < files.length; i++) {
      Resizer.imageFileResizer(
        files[i],
        720,
        720,
        "JPEG",
        100,
        0,
        (uri) => {
          axios
            .post(
              `${process.env.REACT_APP_API}/uploadsliderimages`,
              { image: uri },
              {
                headers: {
                  authtoken: user ? user.token : "",
                },
              }
            )
            .then((res) => {
              setLoading(false);
              allUploadedImages.push(res.data);
              console.log(res)
             
              setValues({ ...values, images: allUploadedImages });
              setImage(allUploadedImages);
              console.log(image)
              console.log(images)
            })
            .catch((err) => {
              setLoading(false);
              console.log("CLOUDINARY ERROR: ", err);
            });
        },
        "base64"
      );
    }
  };
  console.log(images);

//   const  handleupload=()=>{
//     console.log(images)
//    uploadSliderImg(images, user.token)
//   .then((res) => {
//     console.log(res);
//     setLoading(false);
//     window.location.reload();
//   })
//   .catch((err) => {
//     console.log(err.response);
//     setLoading(false);
//     // if(err.response.status === 400) toast.error(`${err.response.data}`)
//     toast.error(err.response.data.err);
//   });

//   }

  const handleupload = () => {
    uploadSliderImg(  images).then((res) => {
      if (res.data.ok) {
        
        
        toast.success("Address Saved Successully");
      }
    });
  };

  const handleImageRemove = (public_id) => {
    setLoading(true);
    axios
      .post(
        `${process.env.REACT_APP_API}/removesliderimages`,
        { public_id },
        {
          headers: {
            authtoken: user ? user.token : "",
          },
        }
      )
      .then((res) => {
        setLoading(false);
        let filteredImages = images.filter((image) => {
          return (image.public_id !== public_id);
        });
        setValues({ ...values, images: filteredImages });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <>
      <div className="row">
        {images &&
          images.map((image) => (
            <Badge
              count="X"
              className="mr-5 mb-3"
              key={image.public_id}
              onClick={() => handleImageRemove(image.public_id)}
              style={{ cursor: "pointer" }}
            >
              <Avatar src={image.url} shape="square" size={150} />
            </Badge>
          ))}
      </div>
      <div className="row">
        <label className="btn btn-primary btn-raised">
          Choose File
          <input
            type="file"
            multiple
            accept="images"
            hidden
            onChange={handleFileUploadAndResize}
          />
        </label>
        <button  onClick={handleupload}>Submit okok</button>
      </div>
    </>
  );
};

export default FileUpload;
