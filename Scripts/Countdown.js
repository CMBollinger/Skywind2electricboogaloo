
// Set the date to countdown to
var countDownDate = new Date("June 21, 2026 12:00:00").getTime();

//Update the count every second
var x = setInterval(function(){
    
    //Get today's date and time
    var now = new Date().getTime();

    //Find the time between now and the countdown date
    var distance = countDownDate - now;

    //Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000*60*60*24));
    var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //Display result in element with class=countdown
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    //If the count down is finished, write "Skywind!"
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Skywind!";
    }
}, 1000);