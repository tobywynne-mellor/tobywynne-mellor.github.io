var param = window.location.search;

var heading = document.getElementById('heading');
var img = document.getElementById('img');
var description = document.getElementById('description');
var details = document.getElementById('details');
var link = document.getElementById('link');

var projects = [
    {
        "id": "?wavr",
        "heading": "Wavr Weather App",
        "img": "images/wavr.png",
        "description": "A weather app for surfers built using ReactJS and SVG visualisations.",
        "details": '<span class="tag">React <i class="fab fa-react"></i></span>&nbsp;&nbsp;<span class="tag">Node <i class="fab fa-node"></i></span>',
        "link": "https://github.com/tobywynne-mellor/weather-app"
    },
    {
        "id": "?makula",
        "heading": "Makula Photo Editor",
        "img": "images/makula.png",
        "description": "A desktop photo editor for lightweight editing.",
        "details": '<span class="tag">Desktop <i class="fas fa-desktop"></i></span>&nbsp;&nbsp;<span class="tag">Java <i class="fab fa-java"></i></span>',
        "link": "https://github.com/tobywynne-mellor/makula-photo-editor"
    },
    {
        "id": "?stock-trading-simulator",
        "heading": "Stock Trading Simulator",
        "img": "images/trading.png",
        "description": "An object-orientated desktop stock trading simulator in Java. I used JavaFX for the UI.",
        "details": '<span class="tag">Java <i class="fab fa-java"></i></span>&nbsp;&nbsp;<span class="tag">Desktop <i class="fas fa-desktop"></i></span>',
        "link": "https://github.com/tobywynne-mellor/trading-simulator"
    },
    {
        "id": "?qmbes",
        "heading": "Queen Mary Business and Enterprise Society Website",
        "img": "images/qmbes.png",
        "description": "I developed the QMBES website.",
        "details": '<span class="tag">MySQL <i class="fas fa-database"></i></span>&nbsp;&nbsp;<span class="tag">PHP <i class="fab fa-php"></i></span>',
        "link": "https://qmbes.com"
    },
    {
        "id": "?kanye-sentiment-analysis",
        "heading": "Kanye Sentiment Analysis",
        "img": "images/kanye.png",
        "description": "I used Node, the Twitter API and IBM Wason Tone Analyzer API to create a bot which analyses Kanye's tweets. I then hosted the bot on Heroku and waited to Kanye to tweet!",
        "details": '<span class="tag">Node <i class="fab fa-node"></i></span>&nbsp;&nbsp;<span class="tag">Cloud <i class="fas fa-cloud"></i></span>',
        "link": "https://github.com/tobywynne-mellor/kanye-sentiment-analysis"
    },
    {
        "id": "?startac-calc",
        "heading": "StarTAC Calculator",
        "img": "images/startac.png",
        "description": "A Javascript calculator with a lot of CSS. Design inspired by the Motorola StarTAC mobile phone.",
        "details": '<span class="tag">Javascript <i class="fab fa-js-square"></i></span>&nbsp;&nbsp;<span class="tag">CSS <i class="fab fa-css3-alt"></i></span>',
        "link": "https://codepen.io/jirugi/full/jLdGYq/"
    },
    {
        "id": "?weather-app",
        "heading": "Weather App",
        "img": "images/weather-app.png",
        "description": "A Javascript Weather App. Get data from Google Location API and pulling weather data from Dark Sky Weather API.",
        "details": '<span class="tag">Javascript <i class="fab fa-js-square"></i></span>&nbsp;&nbsp;<span class="tag">CSS <i class="fab fa-css3-alt"></i></span>',
        "link": "https://codepen.io/jirugi/full/XgXyeo"
    },
    {
        "id": "?wiki-viewer",
        "heading": "Wiki Viewer",
        "img": "images/wiki-viewer.png",
        "description": "A Javascript Wiki Search Interface. Get data from Wiki API.",
        "details": '<span class="tag">Javascript <i class="fab fa-js-square"></i></span>&nbsp;&nbsp;<span class="tag">CSS <i class="fab fa-css3-alt"></i></span>',
        "link": "https://codepen.io/jirugi/full/gRrXVm/"
    },
    {
        "id": "?random-quote-generator",
        "heading": "Random Quote Generator",
        "img": "images/random-quote-generator.png",
        "description": "A Javascript Random Quote Generator. Got quotes from forismatic.com API.",
        "details": '<span class="tag">Javascript <i class="fab fa-js-square"></i></span>&nbsp;&nbsp;<span class="tag">CSS <i class="fab fa-css3-alt"></i></span>',
        "link": "https://codepen.io/jirugi/full/owXzyP/"
    }
    
];

for (var i = 0; i < projects.length; i++) {
    if (projects[i].id == param) {
        heading.innerHTML = projects[i].heading;
        img.src = projects[i].img;
        description.innerHTML = projects[i].description;
        details.innerHTML = projects[i].details;
        link.href = projects[i].link;
    }
}