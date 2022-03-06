var switchPerson = document.querySelector("h1");

function switchName()  {
    switchPerson.innerText = "Adam Jones";
}

var elementTotal = document.querySelector("#you_connections_btn");
var requestTotal = document.querySelector("#connect-req-btn");
var requests = 2;
var connectionCount = 418;

function addTodd() {
    document.querySelector(".check-mark-top").remove();
    document.querySelector(".x-btn-top").remove();
    document.querySelector("#todd").remove();
    connectionCount++;
    requests -=1;
    requestTotal.innerText = `${requests}`;
    elementTotal.innerText = `${connectionCount}`;
}

function removeTodd() {
    document.querySelector(".check-mark-top").remove();
    document.querySelector(".x-btn-top").remove();
    document.querySelector("#todd").remove();
    requests -=1;
    requestTotal.innerText = `${requests}`;
}

function addPhil() {
    document.querySelector(".check-mark").remove();
    document.querySelector(".x-btn").remove();
    document.querySelector("#phil").remove();
    requests -=1;
    requestTotal.innerText = `${requests}`;
    connectionCount++;
    elementTotal.innerText = `${connectionCount}`;
}

function removePhil() {
    document.querySelector(".check-mark").remove();
    document.querySelector(".x-btn").remove();
    document.querySelector("#phil").remove();
    requests -=1;
    requestTotal.innerText = `${requests}`;
}