
class Fraction{

    constructor(a,b){
 
        this.a = a;
        this.b = b;        
    }

    sum(){
        if(Number.isInteger(this.a)==false | Number.isInteger(this.b)==false){

            return "numerator or denominator must be integer";
          }
        return this.a+ this.b;  //sum of 2 numbers 
    }

    subtract(){
        if(Number.isInteger(this.a)==false | Number.isInteger(this.b)==false){

            return "numerator or denominator must be integer";
          }
        return this.a- this.b; // subtraction of 2 numbers
    }

    Multiply(){
        if(Number.isInteger(this.a)==false | Number.isInteger(this.b)==false){

            return "numerator or denominator must be integer";
          }
        return this.a* this.b;  //multiplecation of 2 numbers
    }

    divide(){
        if(Number.isInteger(this.a)==false | Number.isInteger(this.b)==false){

            return "numerator or denominator must be integer";
          }
        if(this.b == 0){
            return "You can't divided by zero";
        }

        if(this.a == 0){
            return 0;
        }

        return this.a / this.b; //divison of 2 numbers
    }

    frac(num){
        let temp;
        let i=2;
        temp=num;
        let fract=[];
            while(i<=temp){
                if(temp==1){
                    break;
                }
                if(temp%i==0){
                    temp=temp/i;
                    fract.push(i);
            
                }
                else{
                    i+=1
                }
            }    
        return fract;        //fractonal unit of small numbers

    }


    simplify(){
        let n,d,nf,df;        
        let flag=false;
        n=this.a;
        d=this.b;
        if(Number.isInteger(n)==false | Number.isInteger(d)==false){

              return "numerator or denominator must be integer";
            }            
            if(d==0){
                return "You can't divided by zero";
            }
            if(n==0){
                return '0';
            }
    
         nf =this.frac(n);
         df=this.frac(d);
         
        let Flslength= Math.max(nf.length,df.length);
        let maxLengthArr = nf.length >= df.length ? 'nf' : 'df'
        let nflen,dflen;
        nflen=nf.length;
        dflen=df.length;
        const nfCopy = [...nf,1]
        const dfCopy = [...df,1]
        for(var i=0;i<Flslength;i++){      
            if(maxLengthArr === 'nf'){
                if(dfCopy.includes(nf[i]) && nf[i] !=1){
                    var index = dfCopy.indexOf(nf[i]);
                    if (index !== -1) {
                    dfCopy.splice(index, 1);
                    }
                    var index = nfCopy.indexOf(nf[i]);
                    if (index !== -1) {
                    nfCopy.splice(index, 1);
                    }
                }
            }else{
                if(nfCopy.includes(df[i]) && df[i] !=1){
                    var index = dfCopy.indexOf(df[i]);
                    if (index !== -1) {
                    dfCopy.splice(index, 1);
                    }
                    var index = nfCopy.indexOf(df[i]);
                    if (index !== -1) {
                    nfCopy.splice(index, 1);
                    }
                }
            }
        }
        const finalNumerator = nfCopy.reduce((acc,val)=> {
            return acc * val
        }, 1)
        const finalDenomenator = dfCopy.reduce((acc,val)=> {
            return acc * val
        }, 1)
        return `${finalNumerator}/${finalDenomenator}`
    }
}

module.exports = Fraction