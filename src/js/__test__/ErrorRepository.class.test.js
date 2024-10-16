/* eslint-disable no-undef */

import ErrorRepository from '../ErrorRepository.class.js';

test.each([
    [400, { "code": 400, "error": "Ошибка от Ошибки" }],
    [777, { "code": 777, "error": "Unknown error" }]
])('testing ErrorRepository.translate(response) with response = %d and expected = "%s"', (response, expected) => {
    const err = new ErrorRepository();
    const result = err.translate(response);
    expect(result).toEqual(expected);
})

