// dekalarasi Variabel untuk Count Down timer
let timeHtml = document.querySelector('time');
let durationHours,durationMinutes, durationSeconds; 
let hours,minutes,duration,h,m,s;
let interval;
duration=0;

function checkNum(obj){
    if (obj.id=="hours"){
        // console.log(obj.value);
        if(obj.value<0){
            alert("nilai Minimum adalah 0")
            obj.value=0;
        }
    }
    else{
        if ((obj.value>59)){
            alert('nilai maksimum adalah 59');
            obj.value=0;
        } else if (obj.value<0){
            alert('nilai minimum adalah 0');
            obj.value=0;
        }
    }
}

function showInput(){
    durationHours = parseInt(document.getElementById('hours').value);
    durationMinutes = parseInt(document.getElementById('minutes').value);
    durationSeconds = parseInt(document.getElementById('seconds').value);
    if (!durationHours){
        durationHours=0;
    } 
    if(!durationMinutes){
        durationMinutes=0;
    } 
    if(!durationSeconds){
        durationSeconds=0
    }
    h = checkTime(durationHours);
    m = checkTime(durationMinutes);
    s = checkTime(durationSeconds);
    // console.log(durationSeconds);
    // durationHours = 0;
    // durationMinutes = 0;
    // durationSeconds = 5;
    hours = durationHours*3600;
    minutes = durationMinutes*60;
    duration= hours+minutes+durationSeconds+1; 
    // console.log(duration);
    timeHtml.innerHTML=`${h} : ${m} : ${s}`;   
}


function startCountDown(){
    // let durationHours = document.getElementById('hours').value;
    // let durationMinutes = document.getElementById('minutes').value;
    // let durationSeconds = document.getElementById('seconds').value;
    clearInterval(interval);
    timeHtml.classList.remove('text-secondary');
    timeHtml.classList.remove('text-danger');
    interval = setInterval(countDown,1000);
}
// Fungsi untuk menjalankan Count Down timer
function countDown(){
    if (duration<=0){
            clearInterval(interval);
            alert('Setting Waktunya');
            let timer=document.getElementById('editTimer');
            timer.click();
    }else{
        duration-=1;
        hours = String(Math.floor(duration/3600)); 
        minutes = String(Math.floor((duration%3600)/60));
        seconds = String(Math.floor((duration%3600)%60)); 
        h = checkTime(hours);
        m = checkTime(minutes);
        s = checkTime(seconds);
        timeHtml.innerHTML=`${h} : ${m} : ${s}`;
        if(duration==0){
            // startCountDown();
            setTimeout(()=>{
                clearInterval(interval);
                timeExpired();
            },500);
            
        }
    //    console.log(duration);
    }
}
// let y=0;
function pauseCount(){
    clearInterval(interval);
    interval = setInterval(flipFlop,500,'secondary');
}

function flipFlop(color){
    timeHtml.classList.toggle(`text-${color}`);
}

function refresh(){
    clearInterval(interval);
    timeHtml.classList.remove('text-secondary');
    timeHtml.classList.remove('text-danger');
    h = '00';
    m = '00';
    s = '00';
    duration= 0; 
    // console.log(duration);
    timeHtml.innerHTML=`${h} : ${m} : ${s}`;
}

// Fungsi ketika waktu timer sudah habis
function timeExpired(){
    // let alarm = document.getElementById('alarm');
    interval = setInterval(flipFlop,500,'danger');
    // alarm.play();
    setTimeout(()=>{
        alert('Waktu Habis');
    },4200)
    setTimeout(clearInterval,4000,interval);
    // setTimeout(()=>{
    //     alarm.pause()
    //     alarm.currentTime=0;
    //     alarm.src=alarm.src;
    // },5000);
}

// Fungsi untuk mengecek nilai waktu lebih dari 10 atau tidak 
function checkTime(i){
        if (i<10){
            i="0"+ i
        };
        return i;
    }