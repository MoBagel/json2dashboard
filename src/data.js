const data = {
  type: 'MediaLayout',
  id: 'JqxRosMePg',
  props: {
    media: {
      xxl: '720px',
      md: '1200px',
    },
    style: {
      background: '#f0f5fc',
    },
  },
  children: [
    {
      type: 'Row',
      id: 'ik8HV0Re3',
      props: {
        gutter: 16,
        justify: 'space-between',
        style: {
          paddingBottom: '24px',
        },
      },
      children: [
        {
          type: 'Col',
          props: {
            span: 6,
            style: {
              display: 'flex',
            },
          },
          id: '-xBW5bxX7p',
          children: [
            {
              type: 'Card',
              id: 'JedwtrTGjd',
              props: {
                style: {
                  textAlign: 'left',
                  flex: '1',
                },
                bordered: 'false',
              },
              children: [
                {
                  type: 'Space',
                  id: 'Pje2wpmbGs',
                  props: {
                    direction: 'vertical',
                  },
                  children: [
                    {
                      type: 'Typography.Text',
                      id: 'WtXcPGt9CX',
                      content: '% Repeat Buyers',
                    },
                    {
                      type: 'Typography.Title',
                      id: 'RclUrYLPJU',
                      props: {
                        variable: {
                          percentage: '1',
                          _comment: 'percent repeat buyers',
                        },
                      },
                      content:
                        'function (_ref) { let { percentage } = _ref; return `${percentage} %`; }',
                    },
                    {
                      type: 'Typography.Text',
                      id: '-4I1aDQD69',
                      content: '% of buyers who purchased from your store more than once',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'Col',
          props: {
            span: 6,
            style: {
              display: 'flex',
            },
          },
          id: 'eWezdGuws0',
          children: [
            {
              type: 'Card',
              id: 'wnVWSVsk9',
              props: {
                style: {
                  textAlign: 'left',
                  flex: '1',
                },
                bordered: 'false',
              },
              children: [
                {
                  type: 'Space',
                  id: '4iEQOnTBwG',
                  props: {
                    direction: 'vertical',
                  },
                  children: [
                    {
                      type: 'Typography.Text',
                      id: 'NnBoNbIxZ',
                      content: 'Average Repurchase Interval',
                    },
                    {
                      type: 'Typography.Title',
                      id: '6U7DiWipm5',
                      props: {
                        variable: {
                          days: '12',
                          _comment: 'average repurchase interval',
                        },
                      },
                      content: 'function (_ref) { let { days } = _ref; return `${days} days`; }',
                    },
                    {
                      type: 'Typography.Text',
                      id: 'o49xTqu7kM',
                      content: 'This indicates how often customers purcahse from your store again',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'Col',
          props: {
            span: 6,
            style: {
              display: 'flex',
            },
          },
          id: 'HtSUo5xfTl',
          children: [
            {
              type: 'Card',
              id: 'hag_rJs8kG',
              props: {
                style: {
                  textAlign: 'left',
                  flex: '1',
                },
                bordered: 'false',
              },
              children: [
                {
                  type: 'Space',
                  id: 'ARwBHE7yT0',
                  props: {
                    direction: 'vertical',
                  },
                  children: [
                    {
                      type: 'Typography.Text',
                      id: 'I531LjFH0',
                      content: 'Average Order Value (AOV)',
                    },
                    {
                      type: 'Typography.Title',
                      id: 'KM0uodkMeb',
                      props: {
                        variable: {
                          average: '12',
                          _comment: 'AOV(total)',
                        },
                      },
                      content:
                        'function (_ref) { let { average } = _ref; return `$ ${(Number(average)||"-").toLocaleString()}`; }',
                    },
                    {
                      type: 'Typography.Text',
                      id: 'FzVbU_Kuw2',
                      content: 'AOV is calculated by diving total order value by total customers',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'Col',
          props: {
            span: 6,
            style: {
              display: 'flex',
            },
          },
          id: 'wevdxr4Q-D',
          children: [
            {
              type: 'Card',
              id: 'KSYWuAxOms',
              props: {
                style: {
                  textAlign: 'left',
                  flex: '1',
                },
                bordered: 'false',
              },
              children: [
                {
                  type: 'Space',
                  id: 'bwSm_H1Yz',
                  props: {
                    direction: 'vertical',
                  },
                  children: [
                    {
                      type: 'Typography.Text',
                      id: 'ZZcwAMWX5',
                      content: 'Average Life Time Value (LTV)',
                    },
                    {
                      type: 'Typography.Title',
                      id: 'QbJJrY8XOm',
                      props: {
                        variable: {
                          ltv: '12',
                          _comment: 'average LTV',
                        },
                      },
                      content:
                        'function (_ref) { let { ltv } = _ref; return `$ ${(Number(ltv)|| "-").toLocaleString()}`; }',
                    },
                    {
                      type: 'Typography.Text',
                      id: '7GrDA3xyLC',
                      content:
                        'Average amount of revenue generated over entire customer-seller relationship',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'Row',
      id: '1Ayz5HXqpm',
      props: {
        style: {
          paddingBottom: '24px',
        },
      },
      children: [
        {
          type: 'Typography.Title',
          id: 'pUfqZgpH93',
          content: 'Customer Analysis',
        },
        {
          type: 'Link',
          id: 'pUfqZgpH92',
          content: '(view tips)',
          props: {
            href: 'https://www.8ndpoint.com/segment-tips',
            target: '_blank',
          },
        },
      ],
    },
    {
      type: 'Row',
      id: 'Uw6JLzxGWR',
      props: {
        style: {
          paddingBottom: '24px',
        },
      },
      children: [
        {
          type: 'Col',
          props: {
            span: 24,
          },
          id: 'jJuTLOfKZS',
          children: [
            {
              type: 'DownloadCard',
              id: 'oalqS69ia2',
              props: {
                variable: {
                  job_id: '222',
                  dag_run_id: '333',
                  file_name: 'customer_segment_list.csv',
                },
                title: 'Customer Segment',
                style: {
                  textAlign: 'left',
                },
                label: 'Download',
                bordered: 'false',
                apiConfigs: {
                  type: 'customer_segment',
                  url: '/job/download',
                  query: ['job_id', 'dag_run_id', 'file_name'],
                },
              },
              children: [
                { type: 'Typography.Title', id: 'pUfqZgpH93', content: 'Customer Analysis' },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'Row',
      id: 'rQC47n88A-',
      props: {
        gutter: 16,
        style: {
          paddingBottom: '24px',
        },
      },
      children: [
        {
          type: 'Col',
          props: {
            span: 12,
          },
          id: '-9rf30Jsd',
          children: [
            {
              type: 'Card',
              id: 'ZRL9wt7Xy',
              props: {
                title: 'Customer Segments by Percentage',
                style: {
                  textAlign: 'left',
                  height: '100%',
                },
                bordered: 'false',
              },
              children: [
                {
                  type: 'Pie',
                  id: '5LN8Phgd5w',
                  props: {
                    appendPadding: 10,
                    data: [{ name: 1, count: 1, value: 1 }],
                    angleField: 'value',
                    colorField: 'type',
                    color: ['#99e9cc', '#9ce4fb', '#a68ada', '#fabbba', '#d8d8d8'],
                    radius: 0.8,
                    innerRadius: 0.64,
                    tooltip: {
                      fields: ['count'],
                      showTitle: 'true',
                      title: 'type',
                    },
                    label: {
                      type: 'outer',
                      offset: '50%',
                      content:
                        'function (_ref3) {\n        let {\n          percent\n        } = _ref3;\n        return `${(percent * 100).toFixed(0)}%`;\n      }',
                      style: {
                        fill: '#000',
                        fontSize: 14,
                        textAlign: 'center',
                      },
                    },
                    statistic: {
                      title: false,
                      content: {
                        style: {
                          whiteSpace: 'pre-wrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        },
                        customHtml:
                          "function (container, view, datum, data) {\n  var text = datum ? `${datum.value}` : `${data.reduce((r, d) => r + d.count, 0)}`;\n    return `<div><span style='font-weight: 100; font-size: 16px;'>Total Customers</span>\n${parseInt(text).toLocaleString()}</div>`;\n\n  }",
                      },
                    },
                  },
                },
              ],
            },
          ],
        },
        {
          type: 'Col',
          props: {
            span: 12,
          },
          id: 'UGNKMG5Ma0',
          children: [
            {
              type: 'Card',
              id: 'lqUuiDMKaa',
              props: {
                title: 'AI Forecasts',
                style: {
                  textAlign: 'left',
                  height: '100%',
                },
                bordered: 'false',
              },
              children: [
                {
                  type: 'Space',
                  id: 'ty5Hp-zSGh',
                  props: {
                    direction: 'vertical',
                  },
                  children: [
                    {
                      type: 'Typography.Text',
                      id: '7FWU0LVIp',
                      content: '🔮 In the next 30 days, we predict…',
                    },
                    {
                      type: 'Typography.Text',
                      id: 'DNzF6rI5qR',
                      content: 'Loyalty Gain',
                      props: {
                        style: {
                          fontWeight: '700',
                        },
                      },
                    },
                    {
                      type: 'div',
                      id: 'CeeDRBmUSj',
                      children: [
                        {
                          type: 'Typography.Text',
                          id: '8DHjnFnbeX',
                          props: {
                            variable: {
                              _comment: 'Loyal prediction',
                              client: 'model@Loyal@increase@value',
                              revenue: 'model@Loyal@estimated_revenue@value',
                            },
                          },
                          content:
                            'function (_ref4) {\n    let {\n      client,\n      revenue\n    } = _ref4;\n    return `An increase in ${(Number(client)||"-").toLocaleString()} clients becoming Loyal customers, with an estimated revenue gain of $${(Number(revenue)||"-").toLocaleString()} (`;\n  }',
                        },
                        {
                          type: 'Typography.Text',
                          id: 'kpl-2id74J',
                          children: [
                            {
                              type: 'Link',
                              props: {
                                apiConfigs: {
                                  type: 'loyalty_gain',
                                  url: '/job/download',
                                  query: ['job_id', 'dag_run_id', 'file_name'],
                                },
                                variable: {
                                  job_id: 'dag_params@job_id@value',
                                  dag_run_id: 'dag_params@dag_run_id@value',
                                  file_name: 'Loyal_list.csv',
                                },
                              },
                              content: '🔒 download list',
                            },
                          ],
                        },
                        {
                          type: 'Typography.Text',
                          id: 'jTwfvtYAI8',
                          content:
                            ' to run targetted marketing campaigns to increase revenue gain!)',
                        },
                      ],
                    },
                    {
                      type: 'Typography.Text',
                      id: 'T_oEknq9I1',
                      content: 'Sleeper (Churn) Alert',
                      props: {
                        style: {
                          fontWeight: '700',
                        },
                      },
                    },
                    {
                      type: 'div',
                      id: 'yQq74P11LD',
                      children: [
                        {
                          type: 'Typography.Text',
                          id: 'tnGM9VYGCd',
                          props: {
                            variable: {
                              _comment: 'Sleeper (churn) alert',
                              client: 'model@Sleepers@increase@value',
                              revenue: 'model@Sleepers@estimated_revenue@value',
                            },
                          },
                          content:
                            'function (_ref5) {\n    let {\n      client,\n      revenue\n    } = _ref5;\n    return `An increase in ${(Number(client)||"-").toLocaleString()} clients becoming Sleepers, with an estimated revenue loss of $${(Number(revenue)||"-").toLocaleString()} (`;\n  }',
                        },
                        {
                          type: 'Typography.Text',
                          id: 'l3AOhu1fHB',
                          children: [
                            {
                              type: 'Link',
                              props: {
                                apiConfigs: {
                                  type: 'sleeper_alert',
                                  url: '/job/download',
                                  query: ['job_id', 'dag_run_id', 'file_name'],
                                },
                                variable: {
                                  job_id: 'dag_params@job_id@value',
                                  dag_run_id: 'dag_params@dag_run_id@value',
                                  file_name: 'Sleepers_list.csv',
                                },
                              },
                              content: '🔒 download list',
                            },
                          ],
                        },
                        {
                          type: 'Typography.Text',
                          id: '6nq2MwWvB2',
                          content: ' to prevent further losses!)',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'Row',
      id: 'r8tTK1fys',
      props: {
        style: {
          paddingBottom: '24px',
        },
      },
      children: [
        {
          type: 'Typography.Title',
          id: 'OXh_aoY7FW',
          content: 'Product Analysis',
        },
      ],
    },
    {
      type: 'Row',
      id: '5bE0w9jvHc',
      props: {
        gutter: 16,
        style: {
          paddingBottom: '24px',
        },
      },
      children: [
        {
          type: 'Col',
          props: {
            span: 12,
          },
          id: '7XpFZvW0p1',
          children: [
            {
              type: 'Card',
              id: 'kStNkpGrNu',
              props: {
                title: 'Top 30 Product Ranking (monthly)',
                style: {
                  textAlign: 'left',
                  height: '100%',
                },
                bordered: 'false',
              },
              children: [
                {
                  type: 'Table',
                  id: 'Mq8xZz_8Qd',
                  props: {
                    pagination: true,
                    columns: [
                      {
                        title: 'Rank',
                        dataIndex: 'rank',
                        key: 'rank',
                      },
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
                      {
                        title: 'Percent Revenue(%)',
                        dataIndex: 'percent revenue',
                        key: 'percent revenue',
                      },
                      {
                        title: 'Rank Change',
                        dataIndex: 'rank change',
                        key: 'rank change',
                      },
                    ],
                    dataSource: [
                      {
                        rank: 1,
                        'product name': 'test',
                        'rank change': 1,
                        'percent revenue': '10',
                        revenue: 10000,
                      },
                    ],
                    _comment: 'product ranking',
                  },
                },
              ],
            },
          ],
        },
        {
          type: 'Col',
          props: {
            span: 12,
          },
          id: 'hrxXUBdANq',
          children: [
            {
              type: 'Card',
              id: 'mjvg6na0Nw',
              props: {
                title: 'Product Insights Chart Description',
                style: {
                  height: '100%',
                  textAlign: 'left',
                },
                bordered: 'false',
              },
              children: [
                {
                  type: 'Space',
                  id: 'AhZQ5eaTa',
                  props: {
                    direction: 'vertical',
                  },
                  children: [
                    {
                      type: 'Typography.Text',
                      id: '4Ioe4Tb4GA',
                      content: 'Quadrant A (top left)',
                      props: {
                        style: {
                          fontWeight: '700',
                        },
                      },
                    },
                    {
                      type: 'Typography.Text',
                      id: '4Ioe4Tb4GA',
                      content:
                        'These products have high prices but lower % of repeat buyers. We suggest running discount campaigns to boost sales.',
                    },
                    {
                      type: 'Typography.Text',
                      id: '4Ioe4Tb4GA',
                      content: 'Quadrant B (top right)',
                      props: {
                        style: {
                          fontWeight: '700',
                        },
                      },
                    },
                    {
                      type: 'Typography.Text',
                      id: 'dVGw0AClpp',
                      content:
                        'These products are your top performers! With high unit prices and high % of repeat buyers. Run campaigns to highlight these all stars.',
                    },
                    {
                      type: 'Typography.Text',
                      id: '4Ioe4Tb4GA',
                      content: 'Quadrant C (bottom right)',
                      props: {
                        style: {
                          fontWeight: '700',
                        },
                      },
                    },
                    {
                      type: 'Typography.Text',
                      id: 'OOIcn27SSZ',
                      content:
                        'These products have high % of repeat buyers but lower unit prices. Consider pairing these products with poorer performers as a bundle to help improve overall performance.',
                    },
                    {
                      type: 'Typography.Text',
                      id: '4Ioe4Tb4GA',
                      content: 'Quadrant D (bottom left)',
                      props: {
                        style: {
                          fontWeight: '700',
                          display: 'inline',
                        },
                      },
                    },
                    {
                      type: 'Typography.Text',
                      id: 'OOIcn27fSZ',
                      content:
                        'These products might be new or need a little boost. Evaluate your marketing strategy to increase exposure.',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'Row',
      id: 'Uw6JLzxGAS',
      props: {
        style: {
          paddingBottom: '24px',
        },
      },
      children: [
        {
          type: 'Col',
          props: {
            span: 24,
          },
          id: 'jJuTLOfSZS',
          children: [
            {
              type: 'Card',
              id: 'oalqS69iv2',
              props: {
                title: 'Top 30 Product Insight Chart (past year)',
                style: {
                  textAlign: 'left',
                },
                bordered: 'false',
              },
              children: [
                {
                  type: 'Scatter',
                  id: 'ajnkjADF',
                  props: {
                    appendPadding: 30,
                    autoFit: true,
                    data: [
                      {
                        name: 'a',
                        value: 1,
                      },
                    ],
                    xField: '% Returning Customers',
                    yField: 'AOV',
                    sizeField: 'Total Customers',
                    colorField: 'Quadrant',
                    color: ['#ffd500', '#82cab2', '#193442', '#d18768'],
                    size: [4, 30],
                    shape: 'circle',
                    pointStyle: {
                      fillOpacity: 0.8,
                      stroke: '#bbb',
                    },
                    xAxis: {
                      min: 0,
                      max: 100,
                      grid: {
                        line: {
                          style: {
                            stroke: '#eee',
                          },
                        },
                      },
                      line: {
                        style: {
                          stroke: '#aaa',
                        },
                      },
                    },
                    yAxis: {
                      line: {
                        style: {
                          stroke: '#aaa',
                        },
                      },
                    },
                    quadrant: {
                      xBaseline: 'name',
                      yBaseline: 'value',
                      labels: [
                        {
                          content: 'Quadrant B',
                        },
                        {
                          content: 'Quadrant A',
                        },
                        {
                          content: 'Quadrant C',
                        },
                        {
                          content: 'Quadrant D',
                        },
                      ],
                    },
                  },
                },
                {
                  type: 'Typography.Text',
                  id: '4Ioe4Tb4BB',
                  props: {
                    style: {
                      display: 'block',
                      textAlign: 'center',
                      transform: 'rotate(-90deg) translate(-50%, -50%)',
                      position: 'absolute',
                      top: '50%',
                    },
                  },
                  content: 'AOV ($)',
                },
                {
                  type: 'Typography.Text',
                  id: '4Ioe4Tb4AA',
                  props: {
                    style: {
                      display: 'block',
                      textAlign: 'center',
                      transform: 'translate(-50%, -50%)',
                      position: 'absolute',
                      left: '50%',
                    },
                  },
                  content: '% of Returning Customers',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default data;
