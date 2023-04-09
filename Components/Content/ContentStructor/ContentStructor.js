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
      <main>
        <MainContent />
      </main>
      <footer></footer>
    </div>
  );
}

export default ContentStructor;
