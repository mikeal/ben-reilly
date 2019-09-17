'use strict'
const v8 = require('v8')

module.exports = obj => v8.deserialize(v8.serialize(obj))
