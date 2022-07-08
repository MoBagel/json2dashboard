import React from 'react';
import Renderer from '../Renderer';
import type { RenderProps } from '../Renderer';

import { render, cleanup } from '@testing-library/react';

function parseJson(props) {
  return JSON.parse(JSON.stringify(props), function (key, value) {
    if (typeof value != 'string') return value;
    return value.substring(0, 8) === 'function'
      ? // eslint-disable-next-line no-eval
        eval('(' + value + ')')
      : value;
  });
}

describe('Test Renderer render component', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });
  afterEach(cleanup);

  const renderFuncProps: RenderProps = {
    type: 'Typography.Title',
    id: 'RclUrYLPJU',
    variable: {
      percentage: '0.525',
    },
    props: {},
    content: 'function (_ref) { let { percentage } = _ref; return `${percentage} %`; }',
    onSuccess: (): void => {},
    onFail: (): void => {},
  };

  const nestData = {
    type: 'Layout',
    id: 'JqxRosMePg',
    props: {},
    children: [
      {
        type: 'Row',
        id: 'r8tTK1fys',
        props: {},
        children: [
          {
            type: 'Typography.Title',
            id: 'OXh_aoY7FW',
            content: 'Product Analysis',
          },
        ],
      },
    ],
    onSuccess: (): void => {},
    onFail: (): void => {},
  };

  test('render function with typogragphy', () => {
    const { getByText } = render(<Renderer {...parseJson(renderFuncProps)} />);

    expect(getByText('0.525 %').textContent).toBe('0.525 %');
  });

  test('nest data render', () => {
    const { getByText } = render(<Renderer {...parseJson(nestData)} />);

    expect(getByText('Product Analysis').textContent).toBe('Product Analysis');
  });
});
