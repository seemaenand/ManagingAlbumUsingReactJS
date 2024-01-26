
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const AddAlbum = (props) => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");

  const getAlbumFormData = async () => {
    try {
      await props.addAlbumToList(Number(userId), title);
      setUserId("");
      setTitle("");
      alert("New Album added successfully to the bottom");
    } catch (error) {
      console.error("Error adding album:", error);
      alert("Error adding album. Please try again later.");
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar path="/" page="Home" />

      <div className="addalbum-container">
        <div className="addalbum-form">
          <h4>Enter New Album Details</h4>
          <div className="inp-container">
            Enter User Id :
            <input
              id="aaform-userid-inp"
              type="number"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div className="inp-container">
            Enter Album Title :
            <input
              id="aaform-title-inp"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Use the Link component to navigate back to the home page ("/") when the "Add To List" button is clicked. */}
          <Link to="/">
            <button onClick={getAlbumFormData}>Add To List</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AddAlbum;
