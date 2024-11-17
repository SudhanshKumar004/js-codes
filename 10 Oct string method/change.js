let str = " vel minus nihil modi officia ipsam dolore quam rerum laudantium ipsa ullam facere, dolorem harum aut voluptates cupiditate soluta dolor excepturi?";

let store = "";

for (let i = 0; i < str; i++ )
{
    if(!(str[i] === " ")){
        store = store + " ";
    }

}

console.log(store);

console.log(str.replaceAll(" ",","));