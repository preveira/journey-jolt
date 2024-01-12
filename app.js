let user = prompt('Whats your name?');
function sayHello () {
    document.write("<p>Hello " + user +"! </p>");
}

let favCountry;
do {
    favCountry = prompt('What is your favorite country?');
} while (!favCountry);

function loveCountry() {
    document.write("<p>" + user + " favorite country: " + favCountry + "</p>");
}

let userRating;
do {
    userRating = prompt("What star rating would you give, 1-5?");
} while (userRating === null || isNaN(userRating) || userRating < 1 || userRating > 5);

function showRating() {
    alert("Thank you for rating us with " + userRating + " stars!");
}

function starRating() {
for (let i = 0; i < userRating; i++) {
    document.write("<img src='https://m.media-amazon.com/images/I/51Y4UIq7iML._AC_SY695_.jpg' alt='Gold star' />");
    document.write("<p>Thank you for rating us!</p>")
}
}

let lookingForTravelPrices = prompt("Looking for great travel prices?");
if (lookingForTravelPrices.toLowerCase() === "yes") {
    function travelSites() {
        document.write("<p>Alright, check out <a href='https://www.trivago.com/'>these</a> great deals</p>");
    }
} else {
    document.write("Okay, well maybe next time! Have a great day...");
}
