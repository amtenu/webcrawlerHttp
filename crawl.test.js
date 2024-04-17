const { normalizeUrl } = require("./crawl.js");
const { test, expect } = require('@jest/globals');

test("normalizeUrl with out protocols", () => {
  const input = "https://blogs.boot.dev/path";
  const actualOutput = normalizeUrl(input);
  const expected = "blogs.boot.dev/path";
  expect(actualOutput).toEqual(expected);
});
