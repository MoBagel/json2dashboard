import React, { useState } from "react";

import JSONEditorReact from "./JSONEditor/JSONEditor";
import _ from "lodash";

const schema = {
  title: "Example Schema",
  type: "object",
  properties: {
    array: {
      type: "array",
      items: {
        type: "number",
      },
    },
    boolean: {
      type: "boolean",
    },
    number: {
      type: "number",
    },
  },
  required: ["array", "string", "boolean"],
};

const modes = ["tree", "form", "view", "code", "text"];

function JSONHandler({ code, updateCode, mode, updateMode }) {
  const [text, setText] = useState(
    JSON.stringify(
      code,
      function (key, value) {
        return typeof value === "function" ? value.toString() : value;
      },
      2
    )
  );

  const onModeChange = (mode) => {
    updateMode(mode);
  };

  const handleUpdateText = (inputValue) => {
    setText(inputValue);

    _.debounce(updateCode(inputValue), 1000);
  };

  return (
    <div style={{ height: `calc(100Vh - 103px)` }}>
      <JSONEditorReact
        schema={schema}
        text={text}
        mode={mode}
        modes={modes}
        indentation={4}
        onChangeText={handleUpdateText}
        onModeChange={onModeChange}
      />
    </div>
  );
}

export default React.memo(JSONHandler);
