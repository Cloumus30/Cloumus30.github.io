let time = document.querySelector('time');
let timeUnderSecond = document.getElementById('under-second');
let duration = 0;
let hours=minutes=seconds=underseconds=0;
let h,m,s,us;
let interval;
let numLap=0;
h='00';
m='00';
s='00';
us='00';

function start(){
    interval = setInterval(count,10);
}

function count(){
    hours = String(Math.floor(duration/360000)); 
    minutes = String(Math.floor((duration%360000)/6000));
    seconds = String(Math.floor((duration%6000)/100)); 
    underseconds = String(Math.floor(duration%100));
    h = checkTime(hours);
    m = checkTime(minutes);
    s = checkTime(seconds);
    us = checkTime(underseconds);
    time.innerHTML=`${h}:${m}:${s}`;
    timeUnderSecond.innerHTML=`:${us}`;
    duration++;
}

function lap(){
    numLap++;
    let tbody = document.querySelector('tbody');
    let tr = document.querySelectorAll('tr');
    let trNew = document.createElement('tr');
    let tdNum = document.createElement('td');
    let tdTime = document.createElement('td');
    let tdunderSecLap = document.createElement('span');

    let tdNumText = document.createTextNode(numLap);
    let tdTimeText = document.createTextNode(`${h}:${m}:${s}`);
    let tdunderSecLapText = document.createTextNode(`:${us}`);
    tdunderSecLap.appendChild(tdunderSecLapText);
    tdunderSecLap.setAttribute('class','underSec-lap');
    tdNum.appendChild(tdNumText);
    tdTime.appendChild(tdTimeText);
    tdTime.appendChild(tdunderSecLap);

    trNew.appendChild(tdNum);
    trNew.appendChild(tdTime);
    trNew.style.fontSize='x-large';
    tbody.insertBefore(trNew,tr[1]);
}

function reset(){
    pause();
    time.innerHTML=`00:00:00`;
    timeUnderSecond.innerHTML=`:00`;
    numLap=0;
    let tbody = document.querySelector('tbody');
    tbody.innerHTML='';
    duration=0;
}

function pause(){
    clearInterval(interval);
}

function checkTime(i){
    if (i<10){
        i="0"+ i
    };
    return i;
}