import React from "react";
import AddContent from "./AddContent";
import LinkContent from "./LinkContent/LinkContent";
import OptionContent from "./OptionContent/OptionContent";

function AddContentList() {
  return (
    <div className="add-content-list mg-t-32">
      <AddContent title="برگه ها">
        <OptionContent />
      </AddContent>
      <AddContent title="نوشته ها">
        <OptionContent />
      </AddContent>
      <AddContent title="اخبار و اطلاعیه ها">
        <OptionContent />
      </AddContent>{" "}
      <AddContent title="دسته بندی ها">
        <OptionContent />
      </AddContent>{" "}
      <AddContent title="پیوند های دلخواه">
        <LinkContent />
      </AddContent>
    </div>
  );
}

export default AddContentList;
