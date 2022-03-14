import { useState } from 'react';
import SplitPane, { Pane } from 'react-split-pane';
import styled from 'styled-components';
import { Typography } from 'antd';

import { Button, Switch } from 'antd';
import data from './data';
import './App.less';

import ErrorBoundary from './ErrorBoundary';

import Dashboard from './Editor/Dashboard';
import JSONHandler from './Editor/JSONHandler';

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  padding-bottom: 8px;
`;

const App = () => {
  const [lockSelected, setLockSelected] = useState<boolean>(false);
  const [mode, setMode] = useState<string>('code');
  const [code, setCode] = useState<never>(
    JSON.parse(JSON.stringify(data), function (key, value) {
      if (typeof value != 'string') return value;
      return value.substring(0, 8) === 'function'
        ? // eslint-disable-next-line no-eval
          eval('(' + value + ')')
        : value;
    }),
  );

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
    setCode(formatValue);
  };

  const downloadFile = async () => {
    const fileName = 'file';
    const json = JSON.stringify(
      code,
      function (_, value) {
        return typeof value === 'function' ? value.toString() : value;
      },
      2,
    );
    const blob = new Blob([json], { type: 'text/plain;charset=utf-8;' });
    const href = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName + '.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <SplitPane split="vertical" minSize={`50%`} defaultSize={`50%`}>
      <Pane>
        <div>
          <TitleWrapper>
            <Typography.Title>Data edit</Typography.Title>
            <div>
              <Typography.Text>Lock Select: </Typography.Text>
              <Switch checked={lockSelected} onChange={setLockSelected} />{' '}
              <Button onClick={downloadFile}>Download</Button>
            </div>
          </TitleWrapper>
          <JSONHandler
            code={code}
            updateCode={handleSetEditUpdate}
            mode={mode}
            updateMode={setMode}
          />
        </div>
      </Pane>
      <Pane>
        <div className="App">
          <ErrorBoundary>
            <Dashboard data={code} />
          </ErrorBoundary>
        </div>
      </Pane>
    </SplitPane>
  );
};

export default App;
