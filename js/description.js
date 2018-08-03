var param = window.location.search;

var heading = document.getElementById('heading');
var img = document.getElementById('img');
var description = document.getElementById('description');
var details = document.getElementById('details');
var link = document.getElementById('link');

var projects = [
    {
        "id": "?stock-trading-simulator",
        "heading": "Stock Trading Simulator",
        "img": "images/trading.png",
        "description": "An object-orientated desktop stock trading simulator in Java + JavaFX. I used JavaFX for the UI.",
        "details": '<span class="tag">Java <i class="fab fa-java"></i></span>&nbsp;&nbsp;<span class="tag">Desktop <i class="fas fa-desktop"></i></span>',
        "link": "https://github.com/tobywynne-mellor/trading-simulator"
    },
    {
        "id": "?kanye-sentiment-analysis",
        "heading": "Kanye Sentiment Analysis",
        "img": "images/kanye.png",
        "description": "I used Node, the Twitter API and IBM Wason Tone Analyzer API to create a bot which analyses Kanye's tweets. I then hosted the bot on Heroku and waited to Kanye to tweet!",
        "details": '<span class="tag">Node <i class="fab fa-node"></i></span>&nbsp;&nbsp;<span class="tag">Cloud <i class="fas fa-cloud"></i></span>',
        "link": "https://github.com/tobywynne-mellor/kanye-sentiment-analysis"
    }
];
console.log("project: " + param);
for (var i = 0; i < projects.length; i++) {
    if (projects[i].id == param) {
        console.log("project[i].id: " + projects[i].id);
        heading.innerHTML = projects[i].heading;
        img.src = projects[i].img;
        description.innerHTML = projects[i].description;
        details.innerHTML = projects[i].details;
        link.href = projects[i].link;
    }
}

console.log("project: " + param);
console.log("project[i].id: " + project[i].id);