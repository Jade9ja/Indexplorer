function setFiletype(fileType, buttonName) {
    var defaultplaceholder = "Search anything";
    if (fileType==-1) {
        fileType="";
    }
    switch(buttonName) {
        case 'TV/Movies':
            $("#inputone").prop('placeholder',defaultplaceholder+' eg. Lost s01');
            break;
        case 'Music':
            $("#inputone").prop('placeholder',defaultplaceholder+' eg. Eminem discography');
            break;
        case 'Books':
            $("#inputone").prop('placeholder',defaultplaceholder+' eg. Alice in Wonderland');
            break;
        case 'Images':
               $("#inputone").prop('placeholder',defaultplaceholder+' eg. Megan Fox');
               break;
        case 'Software/Games':
            $("#inputone").prop('placeholder',defaultplaceholder+' eg. Counter Strike');
            break;
        case 'Other':
            $("#inputone").prop('placeholder',defaultplaceholder);
            break;
    }
    $("#ddbtn").html(buttonName);
    $("#inputone").focus();
    $("#holder").prop('value',fileType);

}

function searchquery() {
    var query = document.getElementById('inputone').value;
    console.log(query)
    var fileType = document.getElementById('holder').value;
    console.log(fileType)
        if (fileType=="") {
            var finalQuery = query+" -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|wallywashis)";
        } else {
            var finalQuery = query+" +("+fileType+") -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|wallywashis)";
        }
    var url = "https://www.google.com/search?q="+encodeURIComponent(finalQuery);
    console.log(url);
    window.open(url, '_blank');
}

function darkmodetoggle() {

    var element = document.body;
    var second = document.getElementById("jumbotron");
    element.classList.toggle("dark-mode");
    second.classList.toggle("jumbodark");
}