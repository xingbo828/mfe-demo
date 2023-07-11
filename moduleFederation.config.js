
module.exports = {
  name: 'host',
  remotes: {
    shared_utils: `shared_utils@http://localhost:4321/remoteEntry.js`
  },
  shared: {
    react: {
      singleton: true
    },
    'react-dom': {
      singleton: true
    }
  }
};