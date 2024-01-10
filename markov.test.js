const { MarkovMachine } = require('./markov.js');

describe('markov machine', function () {
    let mm;
    let text;
    beforeEach(function () {
        mm = new MarkovMachine('Hello how are you how come?');
        text = mm.makeText();
    })

    test('makes chains', function () {

        mm.makeChains();

        expect(mm.chains).toEqual({
            'Hello': ['how'],
            'how': ['are', 'come?'],
            'are': ['you'],
            'you': ['how'],
            'come?': [undefined]
        })
    })

    'Hello how are you how come?'
    'Hello how come?'

    test('makes text', function () {
        expect(['Hello how are you how come?', 'Hello how come?']).toContain(text)
    })

    test('ends with right words', function () {
        expect(text.endsWith('come?')).toBe(true)
    })
})
