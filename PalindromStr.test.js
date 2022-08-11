const Substr = require('./PalindromStr')

describe("String set", () => {
    test('set of strings1',()=>{

        const letters = new Set(['asddsaaaaaaaskpoi',
            'qwerewqqwerrewq',
            'lkjyuuyopcvbn',
            'treelmnop',
            'qwertyuhgfdsa']);        
        expect(Substr(letters)).toBe("saaaaaaas");
    });

    test('set of strings2',()=>{

        const letters = new Set(['12543534',
            '3454353423324',
            'nlkjyuuyopcvb',
            't5555nop',
            'q6666666667666666666a',
        'asddsaaaaaaaskpoi']);        
        expect(Substr(letters)).toBe("6666666667666666666");
    });
})