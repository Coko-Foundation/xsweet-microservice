module.exports = {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [
          {
            type: 'build',
            release: 'patch',
          },
          {
            type: 'revert',
            release: 'patch',
          },
          {
            type: 'refactor',
            release: 'minor',
          },
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/git',
    [
      '@semantic-release/gitlab',
      {
        assets: [
          {
            label: 'Dockerhub release',
            url: 'https://hub.docker.com/r/cokoapps/xsweet/tags',
          },
        ],
      },
    ],
    [
      '@semantic-release/exec',
      {
        prepareCmd:
          'docker build --tag cokoapps/xsweet:${nextRelease.version} .',
        publishCmd: 'docker push cokoapps/xsweet:${nextRelease.version}',
      },
    ],
  ],
}
