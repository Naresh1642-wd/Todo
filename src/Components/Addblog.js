import React, { useState } from "react";
import "./AddBlog.css";
import { useDispatch, useSelector } from "react-redux";
import { addPosts } from "../features/posts/postsSlice";
import { useNavigate } from "react-router-dom";

const Addblog = () => {
  const [Content, setContent] = useState("");

  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addPosts({ id: posts[posts.length - 1].id + 1, Content }));
    navigate("/");
  };
  return (
    <main className="Addblog">
      <div className="title">Todo app</div>

      <form className="Container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="AddTodo"
          onChange={(e) => setContent(e.target.value)}
        ></input>
        <button className="add">Add</button>
      </form>
    </main>
  );
};

export default Addblog;
