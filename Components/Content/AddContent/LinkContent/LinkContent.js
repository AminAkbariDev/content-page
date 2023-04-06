import React, { useState } from "react";

function LinkContent() {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [isFormFilled, setFormFilled] = useState(false);
  if (url && title) {
    setFormFilled(true);
  }
  const handleSubmit = () => {
    console.log("Done!");
  };
  return (
    <div className="link-content">
      <form onSubmit={handleSubmit}>
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
        </div>

        <div>
          <button
            className={isFormFilled ? "active " : "disabled"}
            disabled={isFormFilled ? false : true}
            type="submit"
          >
            افزودن به فهرست
          </button>
        </div>
      </form>
    </div>
  );
}

export default LinkContent;
