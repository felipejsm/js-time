(function() {
    var WEEKEND_DAYS = [0, 6];
    var date ="2017/12/01"
    var day = new Date(date);
    const isBusinnessDay = isWeekDay(day);
    console.log(isBusinnessDay);

  
    function isWeekDay(date) {
        var day = date.getDay();
        return day !=0 && day !=6;
    }
    
    document.getElementById("data").innerHTML = day;
    document.getElementById("working").innerHTML = isBusinnessDay;

})();