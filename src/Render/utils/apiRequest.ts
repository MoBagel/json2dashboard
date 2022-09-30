const generateBody = ({ apiConfigs, variable }) => {
  return (
    apiConfigs?.payload &&
    apiConfigs?.payload.reduce((obj, selectKey) => {
      if (variable && variable[selectKey]) {
        // eslint-disable-next-line no-param-reassign
        obj = { ...obj, [selectKey]: variable[selectKey] };
      }
      return obj;
    }, {})
  );
};

const generateQueryStr = ({ apiConfigs, variable }) => {
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

  const queryStr = Object.keys(querys).length ? `?${new URLSearchParams(querys).toString()}` : '';
  return queryStr;
};

const handleFetch = ({ apiConfigs, variable, onSuccess, onFail }) => {
  if (apiConfigs?.url) {
    const body = generateBody({ apiConfigs, variable });

    const queryStr = generateQueryStr({ apiConfigs, variable });

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

export default handleFetch;
