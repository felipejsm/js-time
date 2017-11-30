var business = require('moment-business');
var moment = require('moment');
console.log(moment().startOf());
console.log(business.isWeekDay(moment().startOf()));