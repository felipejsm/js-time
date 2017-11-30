(function() {
        var day = new Date()+2;
        var dayWrapper = moment(day);
       // var mom = moment().startOf();
        console.log(dayWrapper.isBusinessDay());
})();