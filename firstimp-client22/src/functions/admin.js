import axios from "axios";

export const getOrders = async (authtoken) =>
  await axios.get(`${process.env.REACT_APP_API}/admin/orders`, {
    headers: {
      authtoken,
    },
  });

export const updateOrderStatus = async (authtoken, orderId, orderStatus) =>
  await axios.put(
    `${process.env.REACT_APP_API}/admin/order-status`,
    {
      orderId,
      orderStatus,
    },
    {
      headers: {
        authtoken,
      },
    }
  );

  // sliderImages

  // export const uploadSliderImg = async (img, authtoken) =>
  // await axios.post(`${process.env.REACT_APP_API}/admin/uploadSliderImage`, img, {
  //   headers: {
  //     authtoken,
  //   },
  // });

  export const uploadSliderImg = async ( sliderImages) =>
  await axios.put(
    `${process.env.REACT_APP_API}/admin/uploadSliderImage`,
    { sliderImages },
   
  );