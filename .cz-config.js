const { commitizen } = require('@coko/lint')

const modified = {
  ...commitizen,
  skipQuestions: ['body', 'footer'], // do NOT skip 'breaking'
  scopes: ['service', '*'],
  askForBreakingChangeFirst: true,
}

module.exports = modified
