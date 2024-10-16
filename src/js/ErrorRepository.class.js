export default class ErrorRepository {
    constructor(code, error) {
        this.code = code;
        this.error = error
    }

    translate(code) {
        if (ErrorRepository.errors.get(code)) {
            return new ErrorRepository(code, ErrorRepository.errors.get(code));
        } else {
            return new ErrorRepository(code, 'Unknown error');
        }
    }
}

ErrorRepository.errors = new Map([
    [100, 'Ошибка на Ошибке'],
    [200, 'Ошибка в Ошибке'],
    [300, 'Ошибка за Ошибкой'],
    [400, 'Ошибка от Ошибки'],
    [500, 'Ошибка вместо Ошибки'],
])

// module.exports = {
//     ErrorRepository,
// }
