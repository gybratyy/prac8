const choice = document.getElementById("months");
const longmonths = [1, 3, 5, 7, 8, 10, 12];
const year = new Date().getFullYear();
const isleap = leap(year);

function leap(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

function getCount() {
    var count;
    const month = parseInt(choice.value);

    if (isleap) {
        if (month === 2) {
            count = 29;
        } else {
            if (longmonths.includes(month)) {
                count = 31;
            } else {
                count = 30;
            }
        }
    } else {
        if (month === 2) {
            count = 28;
        } else {
            if (longmonths.includes(month)) {
                count = 31;
            } else {
                count = 30;
            }
        }
    }ount;
}
    document.getElementById("daycount").innerHTML = c
