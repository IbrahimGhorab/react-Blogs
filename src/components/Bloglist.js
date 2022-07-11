import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { getAllPosts } from "../redux/actions/postsAction";
import axios from "axios";
import Blog from "./Blog";

const Bloglist = () => {
  const postList = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();

  const getData = async () => {
    const response = await axios.get("https://api.tawwr.com/posts");
    dispatch(getAllPosts(response.data.data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {postList.map((post) => (
        <Blog key={post.id} post={post} getData={getData} />
      ))}
      )
    </div>
  );
};

export default Bloglist;
