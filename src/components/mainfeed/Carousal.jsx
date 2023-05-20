import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-indicators"></div>
          <div className="carousel-item active">
            <img
              src="https://trecobox.com.br/wp-content/uploads/2022/06/Call-of-Duty-Warzone-1278x720.jpg"
              className="d-block w-100"
              height={500}
              alt="..."
            />
            <div
              className="carousel-caption d-none d-md-block"
              style={{
                marginBottom: "7vw"
              }}
            >
              <div className="live">
                {" "}
                <i className="fa-solid fa-wifi" ></i> Live
              </div>
              <h2
                style={{ fontSize: "35px", fontWeight: "500" }}
                className="my-2"
              >
                Get All
              </h2>
              <h1 style={{ fontSize: "45px", fontWeight: "700" }}>
                ALL GOOD STUFF
              </h1>
              <button className="btn viewBtn">
                View More Products <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon visually-hidden"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon visually-hidden"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
