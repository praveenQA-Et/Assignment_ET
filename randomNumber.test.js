const randomN75 = require('./randomNumber')

expect.extend({
    toBeWithinRange(received, floor, ceiling) {
      const pass = received >= floor && received <= ceiling;
      if (pass) {
        return {
          message: () =>
            `expected ${received} not to be within range ${floor} - ${ceiling}`,
          pass: true,
        };
      } else {
        return {
          message: () =>
            `expected ${received} to be within range ${floor} - ${ceiling}`,
          pass: false,
        };
      }
    },
  });

  
describe("randoom probability test ", () => {

    test('random probability for 1000000 itration',()=>{
        var c1=0,c2 =0;
        for(var i=0;i<1000000;i++){
            if(randomN75()!=true){
                c1+=1;
            }else{
                c2+=1;
            }
        }
        expect(+c1/10000).toBeWithinRange(74,75.5)
        expect(+c2/10000).toBeWithinRange(24,25.5)
    });

    test('random probability for 100000 itration',()=>{
        var c1=0,c2 =0;
        for(var i=0;i<100000;i++){
            if(randomN75()!=true){
                c1+=1;
            }else{
                c2+=1;
            }
        }
        expect(+c1/1000).toBeWithinRange(74.5,75.5)
        expect(+c2/1000).toBeWithinRange(24.5,25.5)
    });
    test('random probability for 10000 itration',()=>{
        var c1=0,c2 =0;
        for(var i=0;i<10000;i++){
            if(randomN75()!=true){
                c1+=1;
            }else{
                c2+=1;
            }
        }
        expect(+c1/100).toBeWithinRange(74,76)
        expect(+c2/100).toBeWithinRange(24,26)
    });
    
  });
