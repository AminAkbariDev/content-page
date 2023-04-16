import React from "react";
import MainContent from "./MainContent/MainContent";

function ContentStructor() {
  return (
    <div className="content-structor mg-t-16">
      <header>
        <p>نام فهرست : </p>
        <div className="content-structor__title mg-r-32">
          <p>فهرست اصلی</p>
        </div>
      </header>
      <main className="mg-t-32 mg-b-16">
        <MainContent />
      </main>
      <footer>
        <p>مکان نمایش : </p>
        <ul className="show-place-list">
          <li className="flex">
            <input type="checkbox" />
            <span>صفحه اصلی</span>
            <p className="order-info">( تنظیم کنونی: منوی {1 + 1} )</p>
          </li>
          <li>
            <input type="checkbox" />
            <span>منوی موبایل</span>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default ContentStructor;
