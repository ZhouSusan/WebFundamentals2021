var like = 3;
var countElement = document.querySelector(".num-likes");
console.log(countElement);

function clickOne(element) {
    like++;
    countElement.innerText = `${like} like(s)`;
    console.log(like);
}