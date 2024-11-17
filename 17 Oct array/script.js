function run(){
  let arr = [
    'https://www.howardsgroup.co.uk/assets/media/lotusevijaexteriorsideview._1.jpg',

    'https://di-uploads-pod16.dealerinspire.com/continentalferrari/uploads/2020/06/Ferrari-LaFerrari-Comparison.jpg',

    'https://media.licdn.com/dms/image/D5612AQEB45U2RlSACA/article-cover_image-shrink_600_2000/0/1696413832248?e=2147483647&v=beta&t=Ar49D6wQtPSXilySMuGdczbDoFDaQ0q1ciZ1C_olAjo' ,

    'https://cdn.motor1.com/images/mgl/9xkvm/s3/mclaren-p1-5th-anniversary.jpg'
  ];

  let output = document.querySelector('#output');
  output.innerHTML = arr.map((imgurl)=>`
  <img style="width:600px;height:390px" src="${imgurl}" alt="not found">`).join(" ");
}

// let arr = [244,523,52,45,54,54,3];

// let newarr = arr.map((items) => {return items * 2});
// console.log(newarr);

// let ansarr = arr.map((i)=> {return i + 10});
// console.log(ansarr);
