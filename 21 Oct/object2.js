let obj = [
    {
        "id" : 1,
        "name" : "Sudhansh",
        "img" : "https://images.unsplash.com/photo-1729167318434-5cefa05fa3ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
        "course" : "Mern",
        "mobno" : 3435634232, 
    },

    {
        "id" : 2,
        "name" : "Dhruv",
         "img" : "https://images.unsplash.com/photo-1729167318434-5cefa05fa3ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
        "course" : "Python",
        "mobno" : 3435454354,
    },

    {
        "id" : 3,
        "name" : "Harsh",
         "img" : "https://images.unsplash.com/photo-1729167318434-5cefa05fa3ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
        "course" : "Java",
        "mobno" : 3435434454,
    }
];

// console.log(obj[0].name);
// console.log(obj[1].name);

let selecttable = document.querySelector('#output');
selecttable.innerHTML = obj.map((e)=>`
    <tr>
        <td>${e.id}</td>
        <td>${e.name}</td>
        <td><img width = "100" src="${e.img}"></td>
        <td>${e.course}</td>
        <td>${e.mobno}</td>
    </tr>
`).join(" ");