/**
 * @param {string[]} strs
 * @return {string}
 */

var compare = (str1,str2)=>{
    let res = '';

    for(let i=0;i<str1.length;i++){
        if(str1[i]===str2[i]){
            res+=str1[i];
        }
        else break;
    }
    return res;
}

 var longestCommonPrefix = function(strs) {
   
   let s1 = strs[0].toString();
    let res = s1;
    var ros = '';
   for(let i=1;i<strs.length;i++){
 res = compare(res,strs[i]);

    }
//    console.log(res)
   return res;
};

let  strs = ["ahmed","ahme"]

// console.log(strs.slice(1,3))
longestCommonPrefix(strs)