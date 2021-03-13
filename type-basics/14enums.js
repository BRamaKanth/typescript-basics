var days;
(function (days) {
    days[days["SUN"] = 10] = "SUN";
    days[days["MON"] = 11] = "MON";
    days[days["TUE"] = 12] = "TUE";
    days[days["WED"] = 13] = "WED";
    days[days["THU"] = 14] = "THU";
    days[days["FRI"] = 15] = "FRI";
    days[days["SAT"] = 16] = "SAT";
})(days || (days = {}));
var myday;
myday = days.SAT;
console.log(myday);
