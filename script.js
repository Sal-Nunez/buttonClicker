function log(element) {
    if(element.innerText == "Login") {
            element.innerText = "Logout";
        } else {
            element.innerText = "Login"
        }
    }


function addd(element) {
    element.remove();
}