import React, { useState, useEffect } from "react";
import axios from "axios";
import MainContent from "./MainContent/MainContent";

function ContentStructor() {
  const [list, setList] = useState(null);

  useEffect(() => {
    axios
      .get("http://ecommerce.web97.ir/list_api/items/")
      .then((res) => setList(res.data.results));
  }, []);

  return (
    <div className="content-structor mg-t-16">
      <header>
        <p>نام فهرست : </p>
        <div className="content-structor__title mg-r-32">
          <p>فهرست اصلی</p>
        </div>
      </header>
      <main className="mg-t-32 mg-b-16">
        {!list ? (
          <p>درحال دریافت اطلاعات...</p>
        ) : (
          list.map((item) => <MainContent {...item} key={item.id} />)
        )}
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
