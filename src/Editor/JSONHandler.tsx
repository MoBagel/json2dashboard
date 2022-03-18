import React, { useState } from 'react';
import { Button, Typography } from 'antd';
import styled from 'styled-components';

import queryString from 'query-string';

import JSONEditorReact from './JSONEditor/JSONEditor';

const modes = ['tree', 'form', 'view', 'code', 'text'];

const StyledButton = styled(Button)`
  margin-left: 8px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  padding-bottom: 8px;
  min-height: 102px;
  align-items: center;
`;

const JsonContainer = styled.div`
  height: calc(100vh - 103px);
`;

const JSONHandler: React.FC<{
  code: any;
  updateCode: (text) => void;
  mode: string;
  updateMode: (mode: string) => void;
}> = ({ code, updateCode, mode, updateMode }) => {
  const [error, setError] = useState('');
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
    if (err.length) {
      console.log(err[0]?.message);
      setError(err[0]?.message);
    } else {
      setError('');
    }
  };

  const downloadFile = async () => {
    const fileName = 'file';
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8;' });
    const href = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName + '.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = () => {
    const str = queryString.stringify({ preview: true });
    const url = `${window.location.origin}${window.location.pathname}${str ? `?${str}` : ''}`;
    window.location.href = url;
  };

  return (
    <>
      <TitleWrapper>
        <Typography.Title>Data edit</Typography.Title>
        {error && (
          <div
            style={{ maxHeight: '70px', overflow: 'auto' }}
            dangerouslySetInnerHTML={{ __html: error }}
          />
        )}
        <div>
          <StyledButton onClick={handlePreview}>Preview</StyledButton>
          <StyledButton onClick={downloadFile}>Download</StyledButton>
        </div>
      </TitleWrapper>
      <JsonContainer>
        <JSONEditorReact
          text={text}
          mode={mode}
          modes={modes}
          indentation={4}
          onChangeText={handleUpdateText}
          onModeChange={onModeChange}
          onValidationError={(err) => handleError(err)}
        />
      </JsonContainer>
    </>
  );
};

export default JSONHandler;
