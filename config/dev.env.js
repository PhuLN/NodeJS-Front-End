'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"http://localhost:3000"',
  // API_URL: '"https://nodejs-vue-js-todo.herokuapp.com"',
})

