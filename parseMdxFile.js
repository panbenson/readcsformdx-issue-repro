
const { readCsfOrMdx } = require('@storybook/csf-tools');

const parseMdxFile = async (mdxFilePath) => {
    return await readCsfOrMdx(mdxFilePath)
}

module.exports = {
    parseMdxFile,
}
