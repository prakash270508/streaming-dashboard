import React from "react";
import Sidebar from "../components/home/Sidebar";
import MainFeed from "../components/home/MainFeed";

export default function Home() {
  return (
    <div className="row">
      <div
        className="col-md-2"
        style={{ borderRight: " 1px solid #cfcbcb", height: "100vh" }}
      >
        <Sidebar />
      </div>
      <div className="col-md-10">
        <MainFeed />
      </div>
    </div>
  );
}
