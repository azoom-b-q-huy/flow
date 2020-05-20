class Flow {
  constructor(context) {
    this._self = context
    this.state = 'constructor'
  }

  next() {
    this.nextState()
    this.state && this._self[this.state]()
  }

  nextState() {
    switch (this.state) {
      case 'constructor':
        this.state = 'request'
        break
      case 'request':
        this.state = 'validate'
        break
      case 'validate':
        this.state = 'process'
        break
      case 'process':
        this.state = 'response'
        break
      case 'response':
        this.state = null
        this._self.res.status(200).json({
          data: this._self.data
        })
        break
      default:
        this.state = null
        break
    }
  }

  reject(error) {
    this.state = null
    this._self.res.status(400).json({
      message: error
    })
  }
}

module.exports = Flow
