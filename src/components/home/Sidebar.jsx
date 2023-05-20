import React, { useState } from "react";
import {
  FaGamepad,
  FaChartLine,
  FaVideo,
  FaUser,
  FaList,
} from "react-icons/fa";

export default function Sidebar() {
  const [selected, setSelected] = useState("newFeed");

  return (
    <div className="container my-4">
      <div className="my-5">
        <h2 className="text-muted">
          <b>Game Club</b>
        </h2>
      </div>

      <div className="my-2">
        <h6 className="text-muted">
          <b>New Feeds</b>
        </h6>
      </div>
      <div className="my-4" onClick={() => setSelected("newFeed")}>
        <h6
          className={`${
            selected == "newFeed" ? "selected" : "notSelected"
          } p-3 mx-2`}
        >
          <FaGamepad />
          <b className="mx-2"> New Feed</b>
        </h6>
      </div>
      <div className="my-4" onClick={() => setSelected("tranding")}>
        <h6
          className={`${
            selected == "tranding" ? "selected" : "notSelected"
          } p-3 mx-2`}
        >
          <FaChartLine />
          <b className="mx-2">Tranding</b>
        </h6>
      </div>
      <div className="my-4" onClick={() => setSelected("following")}>
        <h6
          className={`${
            selected == "following" ? "selected" : "notSelected"
          } p-3 mx-2`}
        >
          <FaUser />
          <b className="mx-2">Following</b>
        </h6>
      </div>
      <div className="my-4" onClick={() => setSelected("videos")}>
        <h6
          className={`${
            selected == "videos" ? "selected" : "notSelected"
          } p-3 mx-2`}
        >
          <FaVideo />

          <b className="mx-2">Your Videos</b>
        </h6>
      </div>
      <div className="my-4" onClick={() => setSelected("playlist")}>
        <h6
          className={`${
            selected == "playlist" ? "selected" : "notSelected"
          } p-3 mx-2`}
        >
          <FaList />
          <b className="mx-2">Playlist</b>
        </h6>
      </div>
    </div>
  );
}
