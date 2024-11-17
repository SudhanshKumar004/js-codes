function data(){
let obj = {
    name: document.querySelector('#name').value,
    age: document.querySelector('#age').value,
    contact: document.querySelector('#contact').value
}

console.log(obj)

}

localStorage.setItem("name",JSON.stringify(obj));