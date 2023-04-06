import React, { useState } from "react";
import search from "../../../../assets/icons/search.png";

function OptionContent() {
  const [searchBox, setSearchBox] = useState("");
  const isFormFilled = false;
  return (
    <div className="option-content">
      <div className="option-content__searchbar-box">
        {" "}
        <form className="option-content__searchbar">
          <input
            value={searchBox}
            onChange={(e) => setSearchBox(e.target.value)}
            type="text"
            placeholder="جستجو"
          />
          <button type="submit">
            <img src={search.src} />
          </button>
        </form>
      </div>

      <div className="option-content__top">
        <ul>
          <li>
            <input name="option" type="checkbox" />
            <label htmlFor="option">صفحه اصلی</label>
          </li>
          <li>
            <input name="option" type="checkbox" />
            <label htmlFor="option">صفحه اصلی</label>
          </li>
          <li>
            <input name="option" type="checkbox" />
            <label htmlFor="option">صفحه اصلی</label>
          </li>
          <li>
            <input name="option" type="checkbox" />
            <label htmlFor="option">صفحه اصلی</label>
          </li>
          <li>
            <input name="option" type="checkbox" />
            <label htmlFor="option">صفحه اصلی</label>
          </li>
          <li>
            <input name="option" type="checkbox" />
            <label htmlFor="option">صفحه اصلی</label>
          </li>
          <li>
            <input name="option" type="checkbox" />
            <label htmlFor="option">صفحه اصلی</label>
          </li>
          <li>
            <input name="option" type="checkbox" />
            <label htmlFor="option">صفحه اصلی</label>
          </li>
          <li>
            <input name="option" type="checkbox" />
            <label htmlFor="option">صفحه اصلی</label>
          </li>
          <li>
            <input name="option" type="checkbox" />
            <label htmlFor="option">صفحه اصلی</label>
          </li>
          <li>
            <input name="option" type="checkbox" />
            <label htmlFor="option">صفحه اصلی</label>
          </li>
        </ul>
      </div>
      <div className="add-content-footer">
        <form>
          <input name="option" type="checkbox" />
          <label htmlFor="option">انتخاب همه</label>
        </form>
        <button
          className={isFormFilled ? "active " : "disabled"}
          disabled={isFormFilled ? false : true}
          type="submit"
        >
          افزودن به فهرست
        </button>
      </div>
    </div>
  );
}

export default OptionContent;
