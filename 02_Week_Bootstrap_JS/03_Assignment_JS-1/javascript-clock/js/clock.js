let getName = prompt("What is your name?")
let myName = document.querySelector('#myName')
let myClock = document.querySelector('#myClock')

// if name lenght is less than 2, keep going asking for name
while(getName.length < 2) {
    if(getName.length >= 2) {
        myName.innerHTML = getName
    } else {
        getName = prompt("Please enter a valid name.")
        myName.innerHTML = getName
    }
}

// set the clock to the current time
function showTime() {
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let session = "AM";

    if(h == 0){
        h = 12;
    }
    // if hours is greater than 12, reduce hour by 12 and set session to PM
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let dayNames = new Array ("Sunday", "Monday", "Tuesday", "Wednesday", 
							"Thursday", "Friday", "Saturday");

    // get current day of week
    let time = `${h} : ${m} : ${s} ${session} - ${dayNames[date.getDay()]}`

    myClock.innerHTML = time

    // call the function again every second
    setTimeout(showTime, 1000)
}

showTime();





