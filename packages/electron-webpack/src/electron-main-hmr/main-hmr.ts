require("source-map-support/source-map-support.js").install()

const socketPath = process.env.ELECTRON_HMR_SOCKET_PATH!
if (socketPath == null) {
  throw new Error(`[HMR] Env ELECTRON_HMR_SOCKET_PATH is not set`)
}

// module, but not relative path must be used (because this file is used as entry)
// const HmrClient = require("electron-webpack/out/electron-main-hmr/HmrClient").HmrClient
const HmrClient = require("git@github.com:Menersar/electron-webpack/packages/electron-webpack/out/electron-main-hmr/HmrClient.git").HmrClient
// tslint:disable:no-unused-expression
new HmrClient(socketPath, (module as any).hot, () => {
  return __webpack_hash__
})
