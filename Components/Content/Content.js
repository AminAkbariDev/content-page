import React, { useState } from "react";
import AppSelect from "../../Components/AppSelect";
import plus_white from "../../assets/icons/plus.png";
import plus_blue from "../../assets/icons/blue-plus.png";
import trash from "../../assets/icons/red-trash.png";
import AddContentList from "./AddContent/AddContentList";
import ContentStructor from "./ContentStructor/ContentStructor";

function Content() {
  const contents = [
    "فهرست اصلی",
    "فهرست موبایل",
    "دسترسی سریع",
    "سامانه های مرکز",
  ];
  const [perPages, setPerPages] = useState(contents[0]);
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div className="sliderlist-container">
      <div className="option-content-buttons">
        <button className="btn--delete-content ">
          حذف از فهرست
          <img
            src={trash.src}
            style={{ width: "23px", height: "24px", marginRight: "9px" }}
          />
        </button>
        <button className="btn--save-content">ذخیره فهرست</button>
      </div>
      <div className="sliderlist-header">
        <div className="flex align-center col-gap-9">
          {" "}
          <p className="font-size-16">انتخاب یک فهرست برای ویرایش: </p>
          <AppSelect
            width={255}
            opts={contents}
            value={perPages}
            setValue={setPerPages}
            zIndex={100}
          />
          <div
            className="btn--small btn_backtologin"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            افزودن اسلایدر جدید
            <img
              src={isHover ? plus_white.src : plus_blue.src}
              alt="plus"
              style={{ width: "20px" }}
            />
          </div>
        </div>
      </div>
      <div className="content-main mg-t-32">
        <div className="add-content-option">
          <h3>افزودن گزینه های فهرست</h3>
          <AddContentList />
        </div>
        <div className="content-structors mg-r-32">
          <div>
            <h3>افزودن گزینه های فهرست</h3>
            <div className="btn--delete-content">
              حذف فهرست
              <img
                src={trash.src}
                style={{ width: "23px", height: "24px", marginRight: "9px" }}
              />
            </div>
          </div>
          <ContentStructor />
        </div>
      </div>
    </div>
  );
}

export default Content;
