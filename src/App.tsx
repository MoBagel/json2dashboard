import { useState } from 'react';
import SplitPane, { Pane } from 'react-split-pane';
import styled from 'styled-components';
import queryString from 'query-string';

import data from './data';
import './App.less';
import './Editor/styles/global.less';

import ErrorBoundary from './Render/ErrorBoundary';

import Dashboard from './Editor/Dashboard';
import JSONHandler from './Editor/JSONHandler';

const LayoutContainer = styled.div`
  flex: 1;
  text-align: center;
  > .ant-layout {
    padding: 24px;
    background: #f0f5fc;
  }
`;

const formatJson = (rawData: string) => {
  let format = {};
  try {
    format = JSON.parse(rawData, function (key, value) {
      if (typeof value != 'string') return value;
      return value.substring(0, 8) === 'function'
        ? // eslint-disable-next-line no-eval
          eval('(' + value + ')')
        : value;
    });
  } catch (error) {
    console.log(error);
  }
  return format;
};

const App = () => {
  const getFromLocalStorage = localStorage.getItem('storeCode') || JSON.stringify(data);
  const [mode, setMode] = useState<string>('code');
  const [code, setCode] = useState<any>(formatJson(getFromLocalStorage));
  const { preview } = queryString.parse(window.location.search);
  const isPreviewMode = preview === 'true';

  const handleSetEditUpdate = (codeText: string) => {
    const formatValue = JSON.parse(codeText, function (key, value) {
      if (typeof value != 'string') return value;
      return value.substring(0, 8) === 'function' || value.indexOf('=>') > -1
        ? // eslint-disable-next-line no-eval
          typeof eval('(' + value + ')') === 'function'
          ? // eslint-disable-next-line no-eval
            eval('(' + value + ')')
          : value
        : value;
    });
    localStorage.setItem('storeCode', codeText);
    setCode(formatValue);
  };

  const handleSuccess = (...res) => {
    console.log(res);
  };

  const handleFail = (...res) => {
    console.log(res);
  };

  if (isPreviewMode) {
    return (
      <div className="preview-container">
        <ErrorBoundary>
          <Dashboard data={code} onSuccess={handleSuccess} onFail={handleFail} />
        </ErrorBoundary>
      </div>
    );
  }

  return (
    <SplitPane split="vertical" minSize={`50%`} defaultSize={`50%`}>
      <Pane>
        <JSONHandler
          code={code}
          updateCode={handleSetEditUpdate}
          mode={mode}
          updateMode={setMode}
        />
      </Pane>
      <Pane>
        <LayoutContainer>
          <ErrorBoundary key={code}>
            <Dashboard data={code} onSuccess={handleSuccess} onFail={handleFail} />
          </ErrorBoundary>
        </LayoutContainer>
      </Pane>
    </SplitPane>
  );
};

export default App;
