import { generateBody, generateQueryStr } from '../apiRequest';

describe('generateBody', () => {
  test('returns an object with the keys and values from variable that match the keys in apiConfigs.payload', () => {
    const apiConfigs = { payload: ['key1', 'key2'] };
    const variable = { key1: 'value1', key2: 'value2', key3: 'value3' };
    expect(generateBody({ apiConfigs, variable })).toEqual({
      key1: 'value1',
      key2: 'value2',
    });
  });

  test('returns an empty object if apiConfigs.payload is not defined', () => {
    const apiConfigs = {};
    const variable = { key1: 'value1', key2: 'value2', key3: 'value3' };
    expect(generateBody({ apiConfigs, variable })).toEqual(undefined);
  });

  test('returns an empty object if variable is not defined', () => {
    const apiConfigs = { payload: ['key1', 'key2'] };
    const variable = null;
    expect(generateBody({ apiConfigs, variable })).toEqual({});
  });
});

describe('generateQueryStr', () => {
  test('returns a query string with the keys and values from variable that match the keys in apiConfigs.query', () => {
    const apiConfigs = { query: ['key1', 'key2'] };
    const variable = { key1: 'value1', key2: 'value2', key3: 'value3' };
    expect(generateQueryStr({ apiConfigs, variable })).toEqual('?key1=value1&key2=value2');
  });

  test('returns an empty string if apiConfigs.query is not defined', () => {
    const apiConfigs = {};
    const variable = { key1: 'value1', key2: 'value2', key3: 'value3' };
    expect(generateQueryStr({ apiConfigs, variable })).toEqual('');
  });

  test('returns a query string with the keys and values from variable that match the keys in apiConfigs.query, even if variable is null', () => {
    const apiConfigs = { query: ['key1', 'key2'] };
    const variable = { key1: null, key2: 'value2', key3: 'value3' };
    expect(generateQueryStr({ apiConfigs, variable })).toEqual('?key2=value2');
  });
});
