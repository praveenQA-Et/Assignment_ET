let findLongestPalindromicString=(mystr)=>{
    
    let N = mystr.length;
        if (N == 0)
            return;
        N = 2 * N + 1; 
        let L = new Array(N + 1); 
        L[0] = 0;
        L[1] = 1;
        let C = 1; 
        let R = 2; 
        let i = 0; 
        let iMirror;
        let maxLPSLength = 0;
        let maxLPSCenterPosition = 0;
        let start = -1;
        let end = -1;
        let diff = -1;

        for (i = 2; i < N; i++)
        {

            iMirror = 2 * C - i;
            L[i] = 0;
            diff = R - i;
   
            if (diff > 0)
                L[i] = Math.min(L[iMirror], diff);
   

            while (((i + L[i]) + 1 < N && (i - L[i]) > 0) &&
                               (((i + L[i] + 1) % 2 == 0) ||
                         (mystr[Math.floor((i + L[i] + 1) / 2)] ==
                          mystr[Math.floor((i - L[i] - 1) / 2)])))
            {
                L[i]++;
            }
   
            if (L[i] > maxLPSLength) 
            {
                maxLPSLength = L[i];
                maxLPSCenterPosition = i;
            }
   
        
            if (i + L[i] > R)
            {
                C = i;
                R = i + L[i];
            }
   
        }
   
        start = (maxLPSCenterPosition - maxLPSLength) / 2;
        end = start + maxLPSLength - 1;
   
      let LongestPalindromicSubString="";
        for (let i = start; i <= end; i++){
            LongestPalindromicSubString+=mystr[i];             
         }
     
         return LongestPalindromicSubString;
}

let StrItrartor=(strSet)=>{

    let Substr=[];
    let maxLength=0;
    let maxIndex=0;
    let i=0;

    if(strSet.length>100){

        return `set of string size must be 100`;
    }
    if(strSet.length==0){

        return `set of string must not be null`;
    }

    strSet.forEach(element => {
        
        let temp=findLongestPalindromicString(element);
        Substr.push(temp);        
        if(maxLength<temp.length){
            maxLength=temp.length
            maxIndex=i;
        }
         i+=1;
        
    });
    
    return Substr[maxIndex];
    
}


module.exports=StrItrartor;