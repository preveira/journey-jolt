let user = prompt('Whats your name?');
function sayHello () {
    document.write("<p>Hello " + user +"! </p>");
}

let favCountry = prompt('What is your favorite country?');
function loveCountry () {
document.write("<p>" + user + " favorite county: " + favCountry + "</p>");
}

let y_or_n = prompt("Looking for great travel prices?");
if(y_or_n === "yes")
function travelSites() {
    document.write("<p>Alright, check out <a href=https://www.trivago.com/>these</a> great deals</p>");
}else {
    document.write("Okay well maybe next time! Have a great day...");
}


function review();
    let rating;
    let count = 0;
    while(!rating || rating > 5){
        rating = parseInt(prompt("rate us! 1 - 5"));
    }

do {
    document.write('<img src="https://t3.ftcdn.net/jpg/00/94/22/12/360_F_94221253_fAgv0Jym53ysz7nwoqXRmkb6GAKwNsfs.jpg">');
    count ++;
} while (count < rating);