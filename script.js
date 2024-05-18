const inputElment = document.querySelector(".input")
const BodyElement = document.querySelector("body")


inputElment.checked = JSON.parse(localStorage.getItem("mode"));

UpdateBody()

console.log(inputElment.Checked);


function UpdateBody() {
    if (inputElment.checked) {
        BodyElement.style.backgroundColor = "black"
    }
    else{
        BodyElement.style.backgroundColor = "white"
    }
}

function UpdateocaStorage() {
    localStorage.setItem("mode",JSON.stringify(inputElment.checked))
}


inputElment.addEventListener("input" , () =>{
    UpdateBody()
})