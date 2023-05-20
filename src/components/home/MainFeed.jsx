import React from "react";
import Carousel from "../mainfeed/Carousal";

export default function MainFeed() {
  return (
    <div>
      <div className="nav my-4 d-flex" style={{ height: "30px" }}>
        <div className="dropdown mx-3">
          <button
            className="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-regular fa-compass mx-3"></i>
            Browse
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="my-3 mx-5">
          <input type="text" placeholder="Search" className="search" required />
        </div> */}
        <div
          className="p-1 bg-light rounded rounded-pill shadow-sm mb-4 w-50"
          style={{ marginLeft: "6vw" }}
        >
          <div className="input-group">
            <div className="input-group-prepend">
              <button
                id="button-addon2"
                type="submit"
                className="btn btn-link text-warning"
              >
                <i className="fa fa-search"></i>
              </button>
            </div>
            <input
              type="search"
              placeholder="What're you searching for?"
              aria-describedby="button-addon2"
              className="form-control border-0 bg-light"
            />
          </div>
        </div>
        <div className="bell">
          <i className="fa-regular fa-bell"></i>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg"
            height={45}
            width={45}
            className="mx-4 img"
            alt=""
          />
        </div>
      </div>
      <Carousel />
    </div>
  );
}
