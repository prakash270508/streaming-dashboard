import React from "react";

export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
        <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
          </div>
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
                marginBottom: "1vw",
              }}
            >
              <div className="live">
                {" "}
                <i className="fa-solid fa-wifi"></i> Live
              </div>
              <div className="my-2 details">
                <div
                  className="my-2"
                  style={{
                    fontFamily: "monospace",
                    fontSize: "25px",
                    float: "left",
                  }}
                >
                  Call Of Duty
                </div>
                <h2 className="">
                  <b>Warzone 2.0</b>
                </h2>
                <div className="userDetails my-1" style={{ float: "left" }}>
                  <img
                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg"
                    height={25}
                    width={25}
                    style={{ borderRadius: "35px" }}
                    className="mx-2"
                    alt=""
                  />
                  <span>Us . English</span>
                </div>
                <button
                  className="btn viewBtn"
                  onClick={() => console.log("Clicked")}
                >
                  Watch
                </button>
              </div>
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
