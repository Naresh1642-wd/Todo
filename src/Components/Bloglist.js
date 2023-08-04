import React from "react";
import "./Bloglist.css";
// import { Blogdata } from "./Blogdata";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePosts } from "../features/posts/postsSlice";

export const Bloglist = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deletePosts({ id: id }));
  };

  const renderedPosts = posts.map((posts) => (
    <div className="Blog-Container">
      <p className="icon">{posts.id}</p>
      <p className="word">{posts.Content}</p>
      <Link to={`/editList/${posts.id}`} className="icon">
        +
      </Link>
      <button onClick={() => handleDelete(posts.id)} className="icon">
        -
      </button>
    </div>
  ));

  return (
    <>
      <Header />
      <div className="Bloglist">
        <div className="blog-Container">{renderedPosts}</div>
      </div>
    </>
  );
};
