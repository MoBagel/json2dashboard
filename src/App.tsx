import { useState } from 'react';
import SplitPane, { Pane } from 'react-split-pane';
import styled from 'styled-components';
import { Typography } from 'antd';

import { Button } from 'antd';
import data from './data';
import './App.less';
import './styles/global.less';

import ErrorBoundary from './ErrorBoundary';

import Dashboard from './Editor/Dashboard';
import JSONHandler from './Editor/JSONHandler';

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  padding-bottom: 8px;
  min-height: 102px;
  align-items: center;
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
  const [error, setError] = useState('');

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

  const downloadFile = async () => {
    const fileName = 'file';
    // const json = JSON.stringify(
    //   code,
    //   function (_, value) {
    //     return typeof value === 'function' ? value.toString() : value;
    //   },
    //   2,
    // );
    console.log(fileName, code);
    // const blob = new Blob([json], { type: 'text/plain;charset=utf-8;' });
    // const href = await URL.createObjectURL(blob);
    // const link = document.createElement('a');
    // link.href = href;
    // link.download = fileName + '.json';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };

  const handleSuccess = (...res) => {
    console.log(res);
  };

  const handleFail = (...res) => {
    console.log(res);
  };

  return (
    <SplitPane split="vertical" minSize={`50%`} defaultSize={`50%`}>
      <Pane>
        <div>
          <TitleWrapper>
            <Typography.Title>Data edit</Typography.Title>
            {error && (
              <div
                style={{ maxHeight: '70px', overflow: 'auto' }}
                dangerouslySetInnerHTML={{ __html: error }}
              />
            )}
            <div>
              <Button onClick={downloadFile}>Download</Button>
            </div>
          </TitleWrapper>
          <JSONHandler
            code={code}
            updateCode={handleSetEditUpdate}
            mode={mode}
            updateMode={setMode}
            upadateError={setError}
          />
        </div>
      </Pane>
      <Pane>
        <div className="App">
          <ErrorBoundary>
            <Dashboard data={code} onSuccess={handleSuccess} onFail={handleFail} />
          </ErrorBoundary>
        </div>
      </Pane>
    </SplitPane>
  );
};

export default App;
