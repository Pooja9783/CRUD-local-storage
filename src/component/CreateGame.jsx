import React, { useState } from "react";
import { useNavigate } from "react-router";

const CreateGame = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [author, setAuthor] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const navigate = useNavigate();
  //   console.log(data);
  const handleForm = (e) => {
    e.preventDefault();
    // const name = e.target.elements.name.value;
    // const url = e.target.elements.url.value;
    // const author = e.target.elements.author.value;
    // const publish_data = e.target.elements.date.value;

    const newData = {
      id: Math.random(),
      name,
      url,
      author,
      publishDate,
    };
    // setData([...data, newData]);
    const games =
      localStorage.getItem("data") && localStorage.getItem("data").length > 0
        ? JSON.parse(localStorage.getItem("data"))
        : [];

    localStorage.setItem("data", JSON.stringify([...games, newData]));
    navigate("/read-game");
    setName("");
    setUrl("");
    setAuthor("");
    setPublishDate("");
  };

  return (
    <div
      className="position-relative py-2 px-4 bg-primary-subtle"
      style={{ margin: "50px 50px" }}
    >
      <h1>Create Game</h1>
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
          Create Game
        </button>
      </form>
    </div>
  );
};

export default CreateGame;
