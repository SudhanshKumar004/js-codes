//Methods of string

let str = "       this is a js class";

console.log(str);

console.log(str[0]);

console.log(str.length);


//replace will replace whatever you type; 
console.log(str.replace(" ","  "));

console.log(str.replaceAll(" ","   "));

//include will check the index you have typed and return true or false
console.log(str.includes("avf"));

console.log(str.slice(3,6));

//slice is used for picking characters 
console.log(str.slice(11,str.length));

//trim is used for removing space from starting and ending of a sentence
console.log(str.trim());