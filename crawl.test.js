const { normalizeUrl } = require("./crawl.js");
const { test, expect } = require("@jest/globals");


test("normalizeUrl without protocols", () => {
  const input = "https://blogs.boot.dev/path";
  const actualOutput = normalizeUrl(input);
  const expected = "blogs.boot.dev/path";
  expect(actualOutput).toEqual(expected);
});

test("normalizeUrl without trailing slashes", () => {
  const input = "https://blogs.boot.dev/path/";
  const actualOutput = normalizeUrl(input);
  const expected = "blogs.boot.dev/path";
  expect(actualOutput).toEqual(expected);
});
