// const validator = require('validator')

const chalk = require('chalk')
const getNotes = require('./notes.js')

const msg = getNotes()

console.log(msg)

const greenMsg = chalk.green.inverse.bold('Sucess!')
console.log(greenMsg)

// console.log(chalk.red('Danger'))
// console.log(chalk.yellow('Warning'))
// console.log(validator.isEmail('amit@gmail.com'))

// const firstName = require('./utils.js')
// const add = require('./utils.js')
// const sum = add(2, 4)
// console.log(firstName)
// console.log(sum)