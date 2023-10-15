const weekday = document.getElementById("dayname");
const month = document.getElementById("month");
const day = document.getElementById("day");
const yearsElement = document.getElementById("year");

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May.",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sept.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];

function getTime() {

    const date = new Date();

   
    let dayname = date.getDay();
    let daynow = date.getDate();
    let monthnow = date.getMonth();
    let yearnow = date.getFullYear();

    let hours = formatDigits(date.getHours());
    let minutes = formatDigits(date.getMinutes());
    let seconds = formatDigits(date.getSeconds());

    function formatDigits(number) {
        return number < 10 ? `0${number}` : number;
    }

    let daytime = "AM"
    if ( hours > 12) {
        daytime = "PM";
        hours = hours - 12;
    }

    if ( hours === 0) {
        hours = 12;
    }
   
    let timenow = `${hours}:${minutes}:${seconds} ${daytime}`;
    time.textContent = timenow;

    

      

      const daynameElement = document.getElementById("dayname");
    daynameElement.textContent = weekdays[dayname] + " -";

    const monthElement = document.getElementById("month");
    monthElement.textContent = months[monthnow];

    const daynumberElement = document.querySelector(".daynumber");
    daynumberElement.textContent = `${daynow}`;

    const yearElement = document.getElementById("year");
    yearElement.textContent = `${yearnow}`;
    }
    getTime();
    
    setInterval(getTime, 1000);