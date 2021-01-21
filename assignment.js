// https://github.com/ninjaMamun/Problem-Solving-Assignment

// Kilometer To Meter Conversion Problem Start

function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        // console.warn Outputs a warning message to the Web Console.
        console.warn("Distance Can't be negative");
    } else if (kilometer == 0) {
        // 0 kilometers convert to 0 meter
        return 0;
    } else {
        //  returning result directly without variable. saves resource 
        //1km = 1000m
        return kilometer * 1000;
    }
}

// Kilometer To Meter Conversion Problem End

// Budget Calculator Problem Start 
// clock - 50 | phone - 100 | laptop - 500

function budgetCalculator(numbersOfClock, numbersOfPhone, numbersOfLaptop) {
    if (numbersOfClock <= 0 && numbersOfLaptop <= 0 && numbersOfLaptop <= 0) {
        //if all the input are zero 
        console.warn("Please Give Valid Input");
    } else {
        var budget = 0;
        if (numbersOfClock < 0 || numbersOfPhone < 0 || numbersOfLaptop < 0) {
            //if any of the item number is negative amount
            console.warn("Numbers of items can't be negative value");

        } else {
            budget = (numbersOfClock * 50) + (numbersOfPhone * 100) + (numbersOfLaptop * 500);
            return budget;
        }
    }
}

// Budget Calculator Problem End 


//Hotel Cost Problem Start 
//1-10 = 100; 11-20 = 80; 21-any = 50

function hotelCost(numbersOfDay) {
    if (numbersOfDay < 0) {
        //if negative value as input
        console.warn("Please Give Valid Input");
    } else if (numbersOfDay == 0) {
        //if  zero as input
        console.warn("Please Stay Minimum One Day");

    } else {
        var totalBill = 0;

        if (numbersOfDay <= 10) {
            //for first Ten Days
            totalBill = numbersOfDay * 100;
        } else if (numbersOfDay <= 20) {
            //for twenty days
            var firstTenDays = 10 * 100;
            var remainingDays = numbersOfDay - 10;
            var secondTenDays = remainingDays * 80;
            totalBill = firstTenDays + secondTenDays;
        } else {
            //for beyond twenty days
            var firstTenDays = 10 * 100;
            var secondTenDays = 10 * 80;
            var remainingDays = numbersOfDay - 20;
            var otherDays = remainingDays * 50;
            totalBill = firstTenDays + secondTenDays + otherDays;
        }
        return totalBill;
    }
}

//Hotel Cost Problem end


//Mega Friends Problem Start

function megaFriend(friendsArray) {
    if (friendsArray.length <= 0) {
        //if the array is empty
        console.warn("Input Array Can't be empty")
    } else {
        var megaFriend = "";
        for (var i = 0; i < friendsArray.length; i++) {
            if (friendsArray[i].length > megaFriend.length) {
                megaFriend = friendsArray[i];
            }
        }
        return megaFriend;
    }

}

//Mega Friends Problem End

// THANK YOU :D 