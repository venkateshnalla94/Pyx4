// import "react" from React;
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import {
  Link
} from "react-router-dom";
function Dashboard() {
  const [fontSiz, setfontSiz] = useState("2.5rem")

  function knowCount() {
    console.log(fontSiz)
    setfontSiz("6rem")
  }
  useEffect(() => console.log("fontSiz"), [fontSiz]);
  return (
    < div >
      <div className="row background">
        <div className="col-sm-6 m-auto">
          <Link onMouseEnter={() => setfontSiz("4rem")} onMouseLeave={() => setfontSiz("3.5rem")} style={{ textDecoration: "none" }} to="/intro">
            <h6 className="intro" style={{ fontSize: fontSiz }} >Welcome to the Demo</h6>
          </Link>
          <div style={{ textAlign: "center", paddingTop: "2rem" }}>
            <FontAwesomeIcon onClick={knowCount} icon={faAngleDown} size="3x" inverse swapOpacity transform="shrink-6 left-4" spin />
          </div>
        </div>
      </div>
    </div >
  );
}

export default Dashboard;
