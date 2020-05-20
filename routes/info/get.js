const Flow = require('../../core/flow')

class GetInfo {
  constructor(req, res) {
    this.req = req
    this.res = res
    this.data = null
    this.flow = new Flow(this)
    this.flow.next()
  }

  request() {
    console.log('request')
    this.flow.next()
  }

  validate() {
    console.log('validate')
    // this.flow.reject('Invalid Params')
    this.flow.next()
  }

  process() {
    console.log('process')
    this.data = { time: Date.now() }
    this.flow.next()
  }

  response() {
    console.log('response')
    this.flow.next()
  }
}

module.exports = GetInfo
