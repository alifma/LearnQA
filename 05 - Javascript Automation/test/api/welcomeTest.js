const assert = require('chai').assert
const app = require('../../welcome')
// Asserting
// Cara menggunakan Assert
describe('Welcome Test', function() {
  it('app should return welcome message', function() {
    assert.equal(app(), "Selamat Datang")    
  })
})