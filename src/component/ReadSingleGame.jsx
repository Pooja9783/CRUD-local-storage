import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

const ReadSingleGame = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [list, setList] = useState();
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("data"));
    setList(items);
  }, []);

  //delete function
  const handleDelete = (id) => {
    const _data = list?.filter((e) => {
      if (id !== e.id) {
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
    <div className="text-bg-light">
      <h5 className="card-title" style={{ textAlign: "center" }}>
        Single Game data
      </h5>
      <div
        className="text-bg-success p-3"
        style={{ width: "500px", margin: "10px auto" }}
      ></div>
      {list
        ?.filter((e) => e.id === `${id}`)
        .map((items) => {
          return (
            <div
              className="text-bg-info p-3"
              style={{ width: "500px", margin: "10px auto" }}
              key={items.id}
            >
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    <b>Name :</b> {items.name}
                  </p>
                  <p className="card-text">
                    <b>URL :</b> {items.url}
                  </p>
                  <p className="card-text">
                    <b>Author :</b> {items.author}
                  </p>
                  <p className="card-text">
                    <b>Publish Date :</b> {items.publish_data}
                  </p>

                  <div>
                    <button
                      onClick={() => handleEdit(items)}
                      className="badge text-bg-success p-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(items.id)}
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

export default ReadSingleGame;
