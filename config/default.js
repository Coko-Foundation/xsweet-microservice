const components = require('./components')

const {
  DOCX_TO_HTML_AND_SPLIT_JOB,
  DOCX_TO_HTML_JOB,
} = require('../server/api/constants')

module.exports = {
  components,
  db: {},
  port: 3000,
  useGraphQLServer: false,

  onStartup: [
    {
      label: 'Create client runner through environment',
      execute: async () => {
        const {
          createServiceClientFromEnvironment,
          /* eslint-disable-next-line global-require */
        } = require('@coko/service-auth')

        await createServiceClientFromEnvironment()
      },
    },
  ],

  jobQueues: [
    {
      name: DOCX_TO_HTML_JOB,
      handler: async job => {
        /* eslint-disable-next-line global-require */
        const { DOCXToHTMLAsyncHandler } = require('../server/api/useCase')

        const { data } = job

        const {
          filePath,
          callbackURL,
          serviceCallbackTokenId,
          objectId,
          responseToken,
          useMath,
        } = data

        const responseParams = {
          callbackURL,
          serviceCallbackTokenId,
          objectId,
          responseToken,
        }

        await DOCXToHTMLAsyncHandler(filePath, responseParams, useMath)
        return true
      },
    },
    {
      name: DOCX_TO_HTML_AND_SPLIT_JOB,
      handler: async job => {
        const {
          DOCXToHTMLAndSplitAsyncHandler,
          /* eslint-disable-next-line global-require */
        } = require('../server/api/useCase')

        const { data } = job

        const {
          filePath,
          callbackURL,
          serviceCallbackTokenId,
          responseToken,
          useMath,
        } = data

        const responseParams = {
          callbackURL,
          serviceCallbackTokenId,
          responseToken,
        }

        await DOCXToHTMLAndSplitAsyncHandler(filePath, responseParams, useMath)
        return true
      },
    },
  ],
}
