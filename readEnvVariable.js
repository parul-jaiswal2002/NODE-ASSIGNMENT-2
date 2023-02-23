const input = process.env.NAME;
console.log("Hello" ,input)




// let s = 'beabeefeab'
// let set = new Set()
// for(let i = 0 ; i<s.length ; i++ ){
//     if(set.has(s[i])){
//         continue
//     }
//     else{
//         set.add(s[i])
//     }
// }
// // console.log(set)
// // console.log([...set][0])
// let str = ""
// let max = 0
// for(let i = 0 ; i < set.size ;i++){//{ 'b', 'e', 'a', 'f' }//0
//     for(let j = i+1 ; j < set.size ;j++){//1
//         str = ""
//         for(let k = 0 ; k < s.length ;k++){//'beabeefeab'//0
//             if([...set][i] === s[k]){str += s[k]}//
//             if([...set][j] === s[k])(str += s[k])
//         }
//         let flag = true
//         for(let k = 0 ; k < str.length-1 ;k++){
//             if(str[k] == str[k+1]){
//                 flag = false
//                 break
//             }
//         }
//         if(flag == true){
//             if(str.length > max){max = str.length}
//         }
//     }
// }
// // return max
// console.log(max)
