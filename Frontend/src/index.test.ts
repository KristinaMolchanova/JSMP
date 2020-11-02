function add(a: number, b: number) {
  return a + b;
}

test('add numbers', () => {
  expect(add(2, 3)).toBe(5);
});
