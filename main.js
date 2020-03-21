$(document).ready(function () {
    function clock() {
        const currentEvent = new Date();
        var hours = currentEvent.getHours();
        var minutes = currentEvent.getMinutes();
        var seconds = currentEvent.getSeconds();
        var currentTime = hours + ':' + minutes + ':' + seconds
        $('#countClock').html(currentTime)
    }
    setInterval(clock, 1000)

});


