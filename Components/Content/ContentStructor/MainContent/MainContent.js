import React, { useState, useRef, useEffect } from "react";

import trash from "../../../../assets/icons/red-trash.png";
import arrow_left from "../../../../assets/icons/arrow-left.png";
import arrow_right from "../../../../assets/icons/arrow-right.png";

function MainContent() {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [isFormFilled, setFormFilled] = useState(false);
  const [showApp, setShowApp] = useState(false);

  if (url && title) {
    setFormFilled(true);
  }

  const containerRef = useRef(null);
  const subContainerRef = useRef(null);

  useEffect(() => {
    const subFilesHeight =
      subContainerRef.current.getBoundingClientRect().height;
    if (showApp) {
      containerRef.current.style.height = `${subFilesHeight}px`;
    } else {
      containerRef.current.style.height = `0px`;
    }
  }, [showApp]);

  return (
    <div className="main-content flex">
      <input type="checkbox" />
      <div className="mg-r-32 ">
        <div className="main-content__main-box">
          <p onClick={() => setShowApp(!showApp)}>صفحه اصلی</p>
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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <div className="mg-t-16">
                    <label>آیکون</label>
                    <button className="btn-main mg-t-16">انتخاب تصویر</button>
                  </div>
                  <div className="move-option mg-t-32">
                    <div>
                      <label>جا به جایی:</label>
                      <button className="btn-main ">
                        <img
                          src={arrow_left.src}
                          style={{
                            width: "20px",
                          }}
                        />
                      </button>
                      <button className="btn-main ">
                        {" "}
                        <img
                          src={arrow_left.src}
                          style={{
                            width: "20px",
                          }}
                        />
                      </button>
                      <button className="btn-main ">
                        {" "}
                        <img
                          src={arrow_left.src}
                          style={{
                            width: "20px",
                          }}
                        />
                      </button>
                      <button className="btn-main ">
                        {" "}
                        <img
                          src={arrow_left.src}
                          style={{
                            width: "20px",
                          }}
                        />
                      </button>
                    </div>
                    <button className="btn--delete-content">
                      <img
                        src={trash.src}
                        style={{
                          width: "23px",
                          height: "24px",
                          marginRight: "9px",
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
