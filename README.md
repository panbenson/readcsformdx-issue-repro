# readcsformdx-issue-repro

run `yarn` then `yarn test` to repro the dynamic import issue


```
 FAIL  ./parseMdxFile.test.js
  test function containing readCsfOrMdx
    ✕ sample test (534 ms)

  ● test function containing readCsfOrMdx › sample test

    TypeError: _vm(...).SyntheticModule is not a constructor

      3 |
      4 | const parseMdxFile = async (mdxFilePath) => {
    > 5 |     return await readCsfOrMdx(mdxFilePath)
        |            ^
      6 | }
      7 |
      8 | module.exports = {

      at Runtime.loadCjsAsEsm (node_modules/jest-runtime/build/index.js:657:20)
      at readCsfOrMdx (node_modules/@storybook/csf-tools/index.cjs:12:11)
      at parseMdxFile (parseMdxFile.js:5:12)
      at Object.<anonymous> (parseMdxFile.test.js:5:24)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.07 s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
