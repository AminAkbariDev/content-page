import React, { useState, useRef, useEffect } from "react";

import chevron_blue from "../../../assets/icons/chevron-left-blue.png";
import chevron_white from "../../../assets/icons/chevron-left.png";

function AddContent(props) {
  const [showSubs, setShowSubs] = useState(false);

  const containerRef = useRef(null);
  const subFilesRef = useRef(null);

  useEffect(() => {
    const subFilesHeight = subFilesRef.current.getBoundingClientRect().height;
    if (showSubs) {
      containerRef.current.style.height = `${subFilesHeight}px`;
    } else {
      containerRef.current.style.height = `0px`;
    }
  }, [showSubs]);

  return (
    <div className="add-content">
      <div
        className="add-content__title"
        onClick={() => setShowSubs(!showSubs)}
      >
        <span>{props.title}</span>
        <img
          className={showSubs ? "rotate" : "normal-rotate"}
          src={showSubs ? chevron_blue.src : chevron_white.src}
          style={{ width: "25px" }}
        />
      </div>
      <div>
        <ul className="sub-files" ref={containerRef}>
          <li ref={subFilesRef}>{props.children}</li>
        </ul>
      </div>
    </div>
  );
}

export default AddContent;
