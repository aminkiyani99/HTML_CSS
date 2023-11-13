const myBtn = document.getElementById('myBtn');

const txtDiv = document.getElementById('text');

function LoadText() {
    var xhr = new XMLHttpRequest();
    xhr.open("get", "text.txt", true);

    xhr.onload = function () {
        if (xhr.status == 200) {
            txtDiv.innerHTML = this.response;
        }
    }

    xhr.send();


}


myBtn.addEventListener("click", LoadText);