const express = require('express')
const { handler } = require('../../client/.output/server/index.js')
const Logger = require('../Logger')

class ClientRouter {
  constructor(appRoot, routerBasePath = '') {
    this.appRoot = appRoot
    this.routerBasePath = routerBasePath

    this.router = express()
    this.router.disable('x-powered-by')
  }

  async start () {
    Logger.info('[Client] Starting')

    this.router.use('/', handler)
  }
}

module.exports = ClientRouter
