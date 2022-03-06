var likes = [0,0,0];

function addOne(element) {
    console.log(element);
    var id = element.id;
    console.log(id);
    if (!likes[id]) {
        likes[id] = 0;
    }
    var number = id.slice(1,id.length);
    likes[id]++;
    var likesCount = document.getElementById("like" + number);
    likesCount.innerText = likes[id];
}
