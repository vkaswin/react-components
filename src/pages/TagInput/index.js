import React, { useState } from "react";
import { TagInput } from "components";

const TagInputPage = () => {
  const [tags, setTags] = useState(["hello", "world"]);

  const handleChange = (e) => {
    setTags(e);
  };

  return (
    <div style={{ maxWidth: "350px" }}>
      <TagInput onChange={handleChange} tagList={tags} />
    </div>
  );
};

export default TagInputPage;
