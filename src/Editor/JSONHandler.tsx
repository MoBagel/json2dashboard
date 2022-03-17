import React, { useState } from 'react';

import JSONEditorReact from './JSONEditor/JSONEditor';

const modes = ['tree', 'form', 'view', 'code', 'text'];

const JSONHandler: React.FC<{
  code: any;
  updateCode: (text) => void;
  mode: string;
  updateMode: (mode: string) => void;
  upadateError: (errorText: string) => void;
}> = ({ code, updateCode, mode, updateMode, upadateError }) => {
  const [text, setText] = useState(
    JSON.stringify(
      code,
      function (key, value) {
        return typeof value === 'function' ? value.toString() : value;
      },
      2,
    ),
  );

  const onModeChange = (selectMode: string) => {
    updateMode(selectMode);
  };

  const handleUpdateText = (inputValue) => {
    try {
      setText(inputValue);
      updateCode(inputValue);
    } catch (err) {
      console.log(err);
    }
  };

  const handleError = (err) => {
    console.log(err);
    if (err.length) {
      console.log(err[0]?.message);
      upadateError(err[0]?.message);
    } else {
      upadateError('');
    }
  };

  return (
    <div style={{ height: `calc(100Vh - 103px)` }}>
      <JSONEditorReact
        text={text}
        mode={mode}
        modes={modes}
        indentation={4}
        onChangeText={handleUpdateText}
        onModeChange={onModeChange}
        onValidationError={(err) => handleError(err)}
      />
    </div>
  );
};

export default JSONHandler;
