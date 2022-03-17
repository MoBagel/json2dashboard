import React from 'react';
import styled from 'styled-components';
import queryString from 'query-string';

import type { RenderProps } from '../Renderer';

const StyledLink = styled.a`
  ${(props) => props.styles};
`;

interface LinkProps extends RenderProps {
  injectStyles: HTMLStyleElement;
  style: HTMLStyleElement;
}

const Link: React.FC<LinkProps> = (props) => {
  const { apiConfigs, injectStyles, onSuccess, onFail, style, variable, children } = props;

  const handleFetch = () => {
    if (apiConfigs?.url) {
      const body =
        apiConfigs?.payload &&
        apiConfigs?.payload.reduce((obj, selectKey) => {
          if (variable && variable[selectKey]) {
            // eslint-disable-next-line no-param-reassign
            obj = { ...obj, [selectKey]: variable[selectKey] };
          }
          return obj;
        }, {});

      const querys =
        (apiConfigs?.query &&
          apiConfigs?.query.reduce((obj, selectKey) => {
            if (variable && variable[selectKey]) {
              // eslint-disable-next-line no-param-reassign
              obj = { ...obj, [selectKey]: variable[selectKey] };
            }
            return obj;
          }, {})) ||
        {};

      const queryStr = Object.keys(querys).length ? `?${queryString.stringify(querys)}` : '';

      const payload = JSON.stringify(body);
      return fetch(apiConfigs.url + queryStr, {
        method: apiConfigs?.method || 'GET',
        headers: new Headers({
          'content-type': 'application/json',
          ...apiConfigs?.headers,
        }),
        credentials: 'include',
        body: payload,
        ...apiConfigs?.options,
      })
        .then((res) => {
          if (apiConfigs.type === 'file') {
            return res;
          }
          return res.json();
        })
        .then((res) => onSuccess(res, { ...apiConfigs, variable }))
        .catch((err) => onFail(err, { ...apiConfigs, variable }));
    }
    return null;
  };
  return (
    <StyledLink
      {...props}
      styles={{ ...style, ...injectStyles }}
      onClick={apiConfigs?.type ? handleFetch : () => {}}
    >
      {children}
    </StyledLink>
  );
};

export default Link;
