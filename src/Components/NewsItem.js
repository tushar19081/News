import React from "react";

const NewsItem =(props)=> {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="container my-3 d-flex justify-content-center">
        <div className="card" style={{ width: "18rem" }}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style = {{zIndex : "22", left: "85%",padding: "10px",
        fontSize: "15px"}}>
                {source}
                <span className="visually-hidden">unread messages</span>
              </span>
          <img
            src={
              !imageUrl
                ? "https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}              
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
