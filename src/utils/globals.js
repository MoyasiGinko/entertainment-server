// globals.js
let globalAvIdCounter = 0;

module.exports = {
  getGlobalAvIdCounter: () => globalAvIdCounter,
  incrementGlobalAvIdCounter: () => ++globalAvIdCounter,
};
