const Fraction = require("./Fraction_cls")

describe("sum", () => {
    test('check for non integer value',()=>{
         
        let mr= new Fraction(1.5,'fg');
       expect(mr.sum()).toBe("numerator or denominator must be integer");
       })

    test('10+20=30',()=>{

        let mr = new Fraction(10,20);
        expect(mr.sum()).toBe(30);
    })

    test('-10+20=10',()=>{

        let mr = new Fraction(-10,20);
        expect(mr.sum()).toBe(10);
    })
    test('-10 + -20=-30',()=>{

        let mr = new Fraction(-10,-20);
        expect(mr.sum()).toBe(-30);
    })

})

describe("subtraction", () => {

    test('check for non integer value',()=>{
         
        let mr= new Fraction(1.5,'fg');
       expect(mr.subtract()).toBe("numerator or denominator must be integer");
       })

    test('20-60=-40',()=>{

        let mr = new Fraction(20,60);
        expect(mr.subtract()).toBe(-40);
    })

    test('60-20=40',()=>{

        let mr = new Fraction(60,20);
        expect(mr.subtract()).toBe(40);
    })

    test('-60-20=-80',()=>{

        let mr = new Fraction(-60,20);
        expect(mr.subtract()).toBe(-80);
    })

})
    
describe("multiplication", () => {
    test('check for non integer value',()=>{
         
        let mr= new Fraction(1.5,'fg');
       expect(mr.Multiply()).toBe("numerator or denominator must be integer");
    
    })

    test('-2*-4= 8',()=>{

        let mr = new Fraction(-2,-4);
        expect(mr.Multiply()).toBe(8);
    })
    
    test('2*4= 8',()=>{

        let mr = new Fraction(2,4);
        expect(mr.Multiply()).toBe(8);
    })

})

describe("division", () => {

    test('check for non integer value',()=>{
         
        let mr= new Fraction(1.5,'fg');
       expect(mr.divide()).toBe("numerator or denominator must be integer");
    
    })
    
    test('divide by zero error',()=>{
        let mr= new Fraction(1,0);

        expect(mr.divide()).toBe("You can't divided by zero")

        })

        test('should return 1 when numerator or denominator are same',()=>{
            let mr= new Fraction(5,5);
            expect(mr.divide()).toBe(1)
            })
    
})


describe("simplyfy", () => {
    
    test('check for non integer value',()=>{
         
        let mr= new Fraction(1.5,'fg');
       expect(mr.simplify()).toBe("numerator or denominator must be integer");
       })

    test('divide by zero error',()=>{
        let mr= new Fraction(1,0);
        expect(mr.simplify()).toBe("You can't divided by zero")
        })
    
    test('should return 1/1 when numerator or denominator are same',()=>{
        let mr= new Fraction(5,5);
        expect(mr.simplify()).toBe("1/1")
        })

    test('check the results when denometer is 1',()=>{
        let mr= new Fraction(10,1);
        expect(mr.simplify()).toBe("10/1")
        })

    test('check when numerator is 0',()=>{
        let mr= new Fraction(0,10);
        expect(mr.simplify()).toBe("0")
        })

    test('simplyfy 6/18',()=>{
            let mr= new Fraction(6,18);
            expect(mr.simplify()).toBe("1/3")
        })

    test('simplyfy 6/18',()=>{
            let mr= new Fraction(6,18);
            expect(mr.simplify()).toBe("1/3")
        })

  });