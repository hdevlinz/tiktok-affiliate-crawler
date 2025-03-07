module.exports = [
  // 🔥 Increase **major** when there is a breaking change
  { type: 'feat', scope: 'breaking', release: 'major' },

  // 🛠️ Increase **patch** for bug fixes, minor refactors, or chore updates
  { type: 'fix', release: 'patch' },
  { type: 'refactor', release: 'patch' },
  { type: 'chore', release: 'patch' },
  { type: 'docs', release: 'patch' },

  // 🛑 Do not trigger a release for commits that don't affect the codebase
  { type: 'test', release: false },
  { type: 'style', release: false },
  { type: 'ci', release: false },
  { type: 'build', release: false },
]
