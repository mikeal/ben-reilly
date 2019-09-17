'use strict'
const assert = require('assert')
const tsame = require('tsame')
const { it } = require('mocha')
const main = require('../')

const test = it

const same = (x, y) => assert.ok(tsame(x, y))

test('basic clone', done => {
  const sub = { hello: 'world' }
  const root = { parent: sub }
  const copy = main(root)
  same(root, copy)
  copy.parent.hello = 'nope'
  same(root.parent.hello, 'world')
  done()
})
