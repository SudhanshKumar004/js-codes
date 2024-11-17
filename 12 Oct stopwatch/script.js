let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeref = document.querySelector('#time-display');
let int = null;

document.getElementById('startbutton').addEventListener('click', 
() => {
    if(int !== null){
        clearInterval(int);
    }
    int = setInterval(displaytimer, 10); 
 });

 document.getElementById('pausebutton').addEventListener('click', 
()=> {
    clearInterval(int);
});

document.getElementById('resetbutton').addEventListener('click', 
() => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeref.innerHTML = "00 : 00 : 00 : 000"; 
});

function displaytimer()
{
    milliseconds += 10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60)
        {
            seconds = 0;
            minutes++;
            if(minutes == 60)
            {
                minutes = 0;
                hours++;
            }
        }
    }

    let h  = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = 
        milliseconds < 10 
        ? "0" + milliseconds 
        : milliseconds < 100
        ? "0" + milliseconds
        : milliseconds;

        timeref.innerHTML = `${h} : ${m} : ${s} : ${ms}`;  
}