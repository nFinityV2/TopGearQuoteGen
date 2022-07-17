// Quote Array

var quotes = [
    "This is brilliant, but I like this. - Jeremy Clarkson",
    "Top Gear. Ambitous, but rubbish. - Jeremy Clarkson",
    "Speed and power solves many things. - Jeremy Clarkson",
    "France is a country, you have to drive through to get to Italy. That all it's for. - James May",
    "(The French) are a bunch of treacherous, land burning, work-shy peasants. - James May",
    "Speed has never killed anyone. Suddenly becoming stationary, that's what gets you. - Jeremy Clarkson",
    "Oh crickey! It's the rozzers. - James May",
    "Well, how hard can it be? - Jeremy Clarkson",
    "Sometimes my genius....... is almost frightening. - Jeremy Clarkson",
    "Let's not get bogged down with...... - Jeremy Clarkson",
    "POWEEEEEEEEEEEEEERRRRRRRRRRR - Jeremy Clarkson",
    "HAMMOND, YOU IDIOT. YOU REVERSED INTO THE SPORTS LORRY - Jeremy Clarkson",
    "He's saying, take the Third Reich. - James May",
];

// Randomiser and DOM Manipulation & Button Event Listener and function
function newQuote() {
    var arrRandom = Math.floor(Math.random() * quotes.length);
    var selectedQuote = quotes[arrRandom];
    document.querySelector("h2").innerText = selectedQuote;
}