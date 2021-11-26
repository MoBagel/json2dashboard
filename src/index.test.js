import hello from './index';

test('test equal hello', () => {
  console.log(hello());
  expect(hello()).toBe('hello');
});