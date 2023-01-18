import React from 'react';
import Renderer from '../Renderer';
import type { RenderProps } from '../Renderer';

import { render, cleanup, fireEvent, screen } from '@testing-library/react';

function parseJson(props) {
  return JSON.parse(JSON.stringify(props), function (key, value) {
    if (typeof value != 'string') return value;
    return value.substring(0, 8) === 'function'
      ? // eslint-disable-next-line no-eval
        eval('(' + value + ')')
      : value;
  });
}

const commontActionProps = {
  onSuccess: (): void => {},
  onFail: (): void => {},
};

describe('Renderer general component', () => {
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
    props: {
      variable: {
        percentage: '0.525',
      },
    },
    content: 'function ({ percentage }) { return `${percentage} %`}',
    ...commontActionProps,
  };

  test('render function with typogragphy', () => {
    const { getByText } = render(<Renderer {...parseJson(renderFuncProps)} />);

    expect(getByText('0.525 %').textContent).toBe('0.525 %');
  });

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
    ...commontActionProps,
  };

  test('nest data render', () => {
    const { getByText } = render(<Renderer {...parseJson(nestData)} />);

    expect(getByText('Product Analysis').textContent).toBe('Product Analysis');
  });
});

describe('Render component with variable ', () => {
  const tableData = {
    type: 'Table',
    id: 'xxx',
    props: {
      columns: [
        {
          title: 'Product Name',
          dataIndex: 'product name',
          key: 'product name',
        },
        {
          title: 'Revenue($)',
          dataIndex: 'revenue',
          key: 'revenue',
          render: {
            type: 'Typography.Text',
            content:
              "function ({ revenue }) { return `$ ` + (Number(revenue)||'-').toLocaleString()}",
          },
        },
      ],
      dataSource: [
        {
          'product name': 'productName',
          revenue: 100000,
        },
      ],
    },
    ...commontActionProps,
  };
  test('Table render with variable', () => {
    const { getByText } = render(<Renderer {...parseJson(tableData)} />);
    expect(getByText('$ 100,000').textContent).toBe('$ 100,000');
    expect(getByText('productName').textContent).toBe('productName');
  });

  const textData = {
    type: 'Typography.Text',
    id: 'xxx',
    props: {
      variable: {
        text: 'hello world',
      },
    },
    content: 'function ({text})  {return text; }',
    ...commontActionProps,
  };

  test('Text render with variable', () => {
    const { getByText } = render(<Renderer {...parseJson(textData)} />);
    expect(getByText('hello world').textContent).toBe('hello world');
  });
});
