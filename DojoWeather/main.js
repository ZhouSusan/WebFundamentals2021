function showCookie() {
    document.getElementById('footer').style.display = "block";
    alert("Loading weather report...");
};

function acceptCookies() {
    document.getElementById('footer').style.display = "none";
} 

function temperatureChange(val) {
    var list = document.getElementsByClassName("temperature");
    for (var i = 0; i < list.length; i++) {
        if (val == "°F") {
            list[i].innerText = Math.round(parseInt(list[i].innerText)*1.8 + 32);
        } else {
            list[i].innerText = Math.round((parseInt(list[i].innerText)-32)*5/9);
        }
    }
}