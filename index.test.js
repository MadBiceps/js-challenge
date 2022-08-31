import { isDeepEqual } from './index'

describe('Check number handling', () => {
    test('Should handle equal numbers', () => {
        expect(isDeepEqual(1, 1)).toEqual(true)
    });

    test('Should handle not equal numbers', () => {
        expect(isDeepEqual(1, 2)).toEqual(false)
    });

    test('Should handle number and object', () => {
        expect(isDeepEqual(1010, {
            test: 'twest'
        })).toEqual(false)
    });

    test('Should handle number and array', () => {
        expect(isDeepEqual(69, [96, 95])).toEqual(false)
    });

    test('Should handle number and undefined', () => {
        expect(isDeepEqual(123, undefined)).toEqual(false)
    });

    test('Should handle number and string', () => {
        expect(isDeepEqual(17543, 'test')).toEqual(false)
    });

    test('Should handle number and null', () => {
        expect(isDeepEqual(22134123, null)).toEqual(false)
    });
});

describe('Should handel strings', () => {
    test('Sould handle equal strings', () => {
        expect(isDeepEqual('Sould handle equal strings', 'Sould handle equal strings')).toEqual(true)
    });

    test('Sould handle not equal strings', () => {
        expect(isDeepEqual('Sould handle equal strings', 'Sould ha3ndle equal strings')).toEqual(false)
    });

    test('Sould handle string and array', () => {
        expect(isDeepEqual('Sould handle equal strings', ['Test', 'test'])).toEqual(false)
    });

    test('Sould handle string and object', () => {
        expect(isDeepEqual('Sould handle equal strings', {
            test: 'Test'
        })).toEqual(false)
    });

    test('Sould handle string and null', () => {
        expect(isDeepEqual('Sould handle equal strings', null)).toEqual(false)
    });

    test('Sould handle string and undefined', () => {
        expect(isDeepEqual('Sould handle equal strings', undefined)).toEqual(false)
    });

    test('Sould handle string and number', () => {
        expect(isDeepEqual('Sould handle equal strings', 736783)).toEqual(false)
    });
});

describe('Should handle boolean', () => {
    test('Should handle equal boolean', () => {
        expect(isDeepEqual(true, true)).toEqual(true)
    });

    test('Should handle not equal boolean', () => {
        expect(isDeepEqual(true, false)).toEqual(false)
    });

    test('Should handle boolean and null', () => {
        expect(isDeepEqual(false, null)).toEqual(false)
    });

    test('Should handle boolean and undefined', () => {
        expect(isDeepEqual(false, undefined)).toEqual(false)
    });

    test('Should handle boolean and string', () => {
        expect(isDeepEqual(false, 'false')).toEqual(false)
    });
});

describe('Should handle undefined', () => {
    test('Should handle equal undefined', () => {
        expect(isDeepEqual(undefined, undefined)).toEqual(true)
    });

    test('Should handle undefined and null', () => {
        expect(isDeepEqual(undefined, null)).toEqual(false)
    });

    test('Should handle undefined and string', () => {
        expect(isDeepEqual(undefined, 'undefined')).toEqual(false)
    });
});

describe('Should handle null', () => {
    test('Should handle equal null', () => {
        expect(isDeepEqual(null, null)).toEqual(true)
    });

    test('Should handle null and undefined', () => {
        expect(isDeepEqual(undefined, null)).toEqual(false)
    });

    test('Should handle null and string', () => {
        expect(isDeepEqual(null, 'undefined')).toEqual(false)
    });
});

describe('Should handle objects', () => {
    test('Should handle equal objects', () => {
        expect(isDeepEqual({
            array: [3, 6, 7, 8, 9, 10],
            number: 5,
            string: 'string',
            nestedArray: [
                {
                    test: [1, 2, 3, 4, 5]
                },
                {
                    test: [6, 7, 8, 9, 10]
                }
            ],
            null: null,
            undefined: undefined
        }, {
            array: [3, 6, 7, 8, 9, 10],
            number: 5,
            string: 'string',
            nestedArray: [
                {
                    test: [1, 2, 3, 4, 5]
                },
                {
                    test: [6, 7, 8, 9, 10]
                }
            ],
            null: null,
            undefined: undefined
        })).toEqual(true)
    });

    test('Should handle not equal objects', () => {
        expect(isDeepEqual({
            array: [3, 6, 7, 8, 9, 10],
            number: 5,
            string: 'string',
            nestedArray: [
                {
                    test: [1, 2, 3, 4, 5]
                },
                {
                    test: [6, 7, 8, 9, 10]
                }
            ],
            null: null,
            undefined: undefined
        }, {
            array: [3, 6, 7, 8, 9, 10],
            number: 5,
            string: 'string',
            nestedArray: [
                {
                    test: [1, 2, 3, 4, 5]
                },
                {
                    test: [6, 7, 8, 9, 11]
                }
            ],
            null: null,
            undefined: undefined
        })).toEqual(false)
    });
});

describe('Sould handle arrays', () => {
    test('Should handle equal arrays', () => {
        expect(isDeepEqual([
            {
                array: [3, 6, 7, 8, 9, 10],
                number: 5,
                string: 'string',
                nestedArray: [
                    {
                        test: [1, 2, 3, 4, 5]
                    },
                    {
                        test: [6, 7, 8, 9, 11]
                    }
                ],
                null: null,
                undefined: undefined
            },
            {
                array: [3, 6, 7, 8, 9, 10],
                number: 5,
                string: 'string',
                nestedArray: [
                    {
                        test: [1, 2, 3, 4, 5]
                    },
                    {
                        test: [6, 7, 8, 9, 10]
                    }
                ],
                null: null,
                undefined: undefined
            }
        ], [
            {
                array: [3, 6, 7, 8, 9, 10],
                number: 5,
                string: 'string',
                nestedArray: [
                    {
                        test: [1, 2, 3, 4, 5]
                    },
                    {
                        test: [6, 7, 8, 9, 11]
                    }
                ],
                null: null,
                undefined: undefined
            },
            {
                array: [3, 6, 7, 8, 9, 10],
                number: 5,
                string: 'string',
                nestedArray: [
                    {
                        test: [1, 2, 3, 4, 5]
                    },
                    {
                        test: [6, 7, 8, 9, 10]
                    }
                ],
                null: null,
                undefined: undefined
            }
        ])).toEqual(true)
    });

    test('Should handle not equal arrays', () => {
        expect(isDeepEqual([
            {
                array: [3, 6, 7, 8, 9, 10],
                number: 5,
                string: 'string',
                nestedArray: [
                    {
                        test: [1, 2, 3, 4, 5]
                    },
                    {
                        test: [6, 7, 8, 9, 11]
                    }
                ],
                null: null,
                undefined: undefined
            },
            {
                array: [3, 6, 7, 8, 9, 10],
                number: 5,
                string: 'string',
                nestedArray: [
                    {
                        test: [1, 2, 3, 4, 5]
                    },
                    {
                        test: [6, 7, 8, 9, 10]
                    }
                ],
                null: null,
                undefined: undefined
            }
        ], [
            {
                array: [3, 6, 7, 8, 9, 10],
                number: 5,
                string: 'string',
                nestedArray: [
                    {
                        test: [1, 2, 3, 4, 5]
                    },
                    {
                        test: [6, 7, 8, 9, 11]
                    }
                ],
                null: null,
                undefined: undefined
            },
            {
                array: [3, 6, 7, 8, 9, 10],
                number: 5,
                string: 'string',
                nestedArray: [
                    {
                        test: [1, 2, 3, 4, 5]
                    },
                    {
                        test: [6, 7, 8, 9, 10]
                    }
                ],
                null: null,
                undefined: undefined
            },
            {
                array: [3, 6, 7, 8, 9, 10],
                number: 5,
                string: 'string',
                nestedArray: [
                    {
                        test: [1, 2, 3, 4, 5]
                    },
                    {
                        test: [6, 7, 8, 9, 11]
                    }
                ],
                null: null,
                undefined: undefined
            }
        ])).toEqual(false)
    });

    test('Should handle empty arrays', () => {
        expect(isDeepEqual([], [])).toEqual(true);
        expect(isDeepEqual([], null)).toEqual(false);
        expect(isDeepEqual([], undefined)).toEqual(false);
    });
});


describe('Should handle NaN', () => {
    test('Should handle equal NaN', () => {
        expect(isDeepEqual(NaN, NaN)).toEqual(true);
    });

    test('Should handle not equal NaN', () => {
        expect(isDeepEqual(NaN, 'NaN')).toEqual(false);
    });

    test('Should handle not equal NaN', () => {
        expect(isDeepEqual(NaN, 10)).toEqual(false);
    });
});