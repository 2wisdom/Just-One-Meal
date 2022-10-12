import React from "react";
import "./Recipe.css";

function Recipe({ title, imageUrl, body }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="Food image" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <p>{body}</p>
        </div>
      </div>
      <div className="btn">
        <button>
          <a>View Recipe</a>
        </button>
      </div>
    </div>
  );
}

export default Recipe;