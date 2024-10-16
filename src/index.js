
import ErrorRepository from './js/ErrorRepository.class.js'
// const { ErrorRepository } = require('./js/ErrorRepository.class.js');

const err = new ErrorRepository()

console.log(err.translate(400));