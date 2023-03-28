var romanToInt = function(s) {
   const  num= {"I": 1,"V": 5,"X": 10,"L": 50,"C": 100,"D": 500,"M": 1000,}
   
   let sum=0;
   
   for(let i =0; i< s.length ; i++) {
       if(i+1 < s.length && num[s[i]] < num[s[i+1]]){
                sum -=num[s[i]]         
          } else {
              sum +=num[s[i]]
          }
   }
 
    return sum;
};
const res= romanToInt("MCMXCIV")
console.log(res)

