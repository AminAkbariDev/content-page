import React, { useState, useRef, useEffect } from "react";

import chevron_left from "../../../../assets/icons/chevron-left.png";
import trash from "../../../../assets/icons/red-trash.png";
import arrow_left from "../../../../assets/icons/arrow-left.png";
import arrow_right from "../../../../assets/icons/arrow-right.png";

function MainContent({ name, url }) {
  const [urls, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [isFormFilled, setFormFilled] = useState(false);
  const [showApp, setShowApp] = useState(false);

  if (url && title) {
    setFormFilled(true);
  }
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const containerRef = useRef(null);
  const subContainerRef = useRef(null);

  useEffect(() => {
    if (showApp) {
      containerRef.current.style.height = `20rem`;
      containerRef.current.style.display = `block`;
    } else {
      containerRef.current.style.height = `0px`;
    }
  }, [showApp]);

  return (
    <div className="main-content">
      <input type="checkbox" />
      <div className="mg-r-32 ">
        <div className="main-content__main-box">
          <div onClick={() => setShowApp(!showApp)}>
            {" "}
            <p>صفحه اصلی</p>
            <img
              className={showApp ? "rotate" : "normal-rotate"}
              src={chevron_left.src}
              style={{ width: "5%" }}
            />
          </div>

          <div className="main-content__sub-box" ref={containerRef}>
            <div className="link-content" ref={subContainerRef}>
              <form>
                <div>
                  <label htmlFor="url">پیوند</label>
                  <input
                    name="url"
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                  <label>متن پیوند</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <div className="mg-t-16">
                    <label>آیکون</label>
                    <button className="btn-main mg-t-16">انتخاب تصویر</button>
                  </div>
                  <div className="move-option mg-t-32">
                    <div>
                      <label>جا به جایی:</label>
                      <button
                        className="btn--small  btn_backtologin"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <img
                          src={arrow_left.src}
                          alt="plus"
                          style={{ width: "20px" }}
                        />
                      </button>
                      <button
                        className="btn--small  btn_backtologin"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <img
                          src={arrow_left.src}
                          alt="plus"
                          style={{ width: "20px" }}
                        />
                      </button>
                      <button
                        className="btn--small  btn_backtologin"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <img
                          src={arrow_left.src}
                          alt="plus"
                          style={{ width: "20px" }}
                        />
                      </button>
                      <button
                        className="btn--small  btn_backtologin"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <img
                          src={arrow_left.src}
                          alt="plus"
                          style={{ width: "20px" }}
                        />
                      </button>
                    </div>
                    <button>
                      <img
                        src={trash.src}
                        style={{
                          width: "23px",
                          height: "24px",
                        }}
                      />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
