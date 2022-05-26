const { parseMdxFile } = require('./parseMdxFile');

describe('test function containing readCsfOrMdx', () => {
    it('sample test', async () => {
        const parsed = await parseMdxFile('./sample.mdx');
    })
})
