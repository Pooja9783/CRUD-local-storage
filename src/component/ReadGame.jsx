import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const ReadGame = () => {
  const navigate = useNavigate();

  const [list, setList] = useState();
  // console.log(list);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("data"));
    setList(items);
  }, []);

  //delete function
  const handleDelete = (id) => {
    const _data = list?.filter((e) => {
      if (id !== e?.id) {
        return id;
      }
    });
    setList(_data);
    localStorage.setItem("data", JSON.stringify(_data));
  };

  //edit function
  const handleEdit = (editItem) => {
    localStorage.setItem("editItem", JSON.stringify(editItem));

    navigate("/edit-game");
  };

  return (
    <div
      style={{
        background: "rgb(185, 208, 160)",
      }}
    >
      <h5 className="card-title" style={{ textAlign: "center" }}>
        Created Game
      </h5>
      <div
        className="text-bg-success p-3"
        style={{ width: "500px", margin: "10px auto" }}
      >
        <button className="text-bg-dark p-1" onClick={() => navigate("/home")}>
          Add Game
        </button>
      </div>
      {list?.map((items) => {
        return (
          <div
            className="text-bg-info p-3"
            style={{ width: "500px", margin: "10px auto" }}
            key={items?.id}
          >
            <div className="card">
              <div className="card-body">
                <Link
                  to={`/read-single-game/${items?.id}`}
                  style={{ textDecoration: "none", color: "gray" }}
                >
                  <p className="card-text">
                    <b>Name :</b> {items?.name}
                  </p>
                  <p className="card-text">
                    <b>URL :</b> {items?.url}
                  </p>
                  <p className="card-text">
                    <b>Author :</b> {items?.author}
                  </p>
                  <p className="card-text">
                    <b>Publish Date :</b> {items?.publishDate}
                  </p>
                </Link>

                <div>
                  <button
                    onClick={() => handleEdit(items)}
                    className="badge text-bg-success p-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(items?.id)}
                    className="badge text-bg-danger m-1 p-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReadGame;
