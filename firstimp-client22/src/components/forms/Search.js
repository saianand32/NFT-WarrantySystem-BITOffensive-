import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => ({ ...state }));
  const { text } = search;
  const history = useHistory();

  const handleChange = (e) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/shop?${text}`);
  };

  return (
    <form className="form-inline my-lg-2 my-lg-0" onSubmit={handleSubmit}>
      <input
      style={{width:"35vw",backgroundColor:"white",color:"black"}}
        type="search"
        value={text}
        className="form-control mr-sm-2"
        placeholder=" Search for Products"
        onChange={handleChange}
      />
      <SearchOutlined onClick={handleSubmit} style={{ pointer: "cursor" , color:"orange"}} />
    </form>
  );
  
};

export default Search;
