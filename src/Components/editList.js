import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updatePosts } from "../features/posts/postsSlice";
import "./editList.css";

function EditList() {
  const { id } = useParams();
  const posts = useSelector((state) => state.posts);
  const existingPost = posts.filter((f) => f.id == id);
  const { Content } = existingPost[0];
  const [UContent, setUContent] = useState(Content);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    console.log("thius", event.value);
    event.preventDefault();
    dispatch(
      updatePosts({
        id: id,
        Content: UContent,
      })
    );
    navigate("/");
    console.log(updatePosts.Content);
  };

  return (
    <main className="editList">
      <div className="title">Update Post</div>

      <form onSubmit={handleUpdate} id="Update-Container">
        <input
          type="text"
          placeholder="Update"
          value={UContent}
          name="Content"
          className="Update"
          onChange={(e) => setUContent(e.target.value)}
        ></input>
        <button className="add">Add</button>
      </form>
    </main>
  );
}

export default EditList;
