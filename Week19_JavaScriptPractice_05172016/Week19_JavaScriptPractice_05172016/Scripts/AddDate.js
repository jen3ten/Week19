var today = new Date();
var bday = new Date(1969, 02, 10, 00, 00, 00);
var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var dateString = today.toDateString();

function howOldAmI() {
var msPerYear = 31556900000;
var years = (today.getTime() - bday.getTime())/msPerYear;
}

function whatIsToday(today) {
    var day = dayNames[today.getDay()];
    return day;
}

function whatIsTomorrow(today) {
    var dayNum = today.getDay();
    var tomorrowNum;
    if (dayNum == 6){
        tomorrowNum = 0;
    }
    else {
        tomorrowNum = dayNum + 1;
    }
    var tomorrow = dayNames[tomorrowNum];
    return tomorrow;
    //return tomorrowNum;
    //return dayNum;
}


var eltomorrow = document.getElementById('thisIsTomorrow');
//el.innerhtml = datestring;
//el.innerhtml = ((today.gettime() - bday.gettime())/msperyear).tofixed(2);
//el.innerhtml = whatistoday(today);
eltomorrow.innerHTML = whatIsTomorrow(today);
//el.innerhtml = day;

var elToday = document.getElementById('thisIsToday');
elToday.innerHTML = whatIsToday(today);

//var elTomorrow = document.getElementById('thisIsTomorrow');
//elTomorrow.innerHTML = 'Test 1';

//var elToday = document.getElementById('thisIsToday');
//elToday.innerHTML = 'Test 2';

