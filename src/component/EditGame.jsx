import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EditGame = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [author, setAuthor] = useState("");
  const [publishDate, setPublishDate] = useState("");
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("editItem"));
    setList(items);
    setName(items?.name);
    setUrl(items?.url);
    setAuthor(items?.author);
    setPublishDate(items?.publishDate);
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("data"));
    const editItem = JSON.parse(localStorage.getItem("editItem"));

    const edit = data?.map((ele) => {
      if (
        ele.name === editItem.name &&
        ele.url === editItem.url &&
        ele.author === editItem.author &&
        ele.publishDate === editItem.publishDate
      ) {
        return { name, url, author, publishDate };
      } else {
        return ele;
      }
    });
    localStorage.setItem("data", JSON.stringify(edit));
    navigate("/read-game");
  };

  return (
    <div>
      <div
        className="position-relative py-2 px-4 bg-primary-subtle"
        style={{ margin: "50px 50px" }}
      >
        <h1>Update Game</h1>
        <form onSubmit={handleForm}>
          <input
            className="form-control "
            style={{
              marginTop: "10px",
            }}
            type="text"
            placeholder="Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="form-control"
            style={{
              marginTop: "10px",
            }}
            type="text"
            placeholder="URL..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <input
            className="form-control"
            style={{
              marginTop: "10px",
            }}
            type="text"
            placeholder="Author..."
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            className="form-control"
            style={{
              marginTop: "10px",
            }}
            type="date"
            placeholder="Publish Date..."
            value={publishDate}
            onChange={(e) => setPublishDate(e.target.value)}
          />
          <button
            className="text-light bg-dark p-1"
            style={{
              margin: "10px 0px",
              width: "200px",
            }}
            type="submit"
          >
            Update Game
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditGame;
