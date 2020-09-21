var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
    floatAge = parseFloat(prompt("Enter your age in years"));
    floatDays = parseFloat(floatAge * 365.25).toFixed(2);
    floatMonths = parseFloat(floatAge * 12).toFixed(2);
    intWeeks = parseInt(floatDays/7).toFixed(2);
    intFortnights = parseInt(floatDays/14).toFixed(2);
    alert("Your are " + floatAge + " years old, " + floatDays + " days old, " + floatMonths + " months old, " + intWeeks + " weeks old, and" + intFortnights + " fortnights old.");)