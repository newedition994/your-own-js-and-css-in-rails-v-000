function hideWhenClicked() {
    // hides the element that was clicked 
    // bind hide_this

    const x = document.getElementById('hide_this')
    x.addEventListener("click", function (){
        x.style.display = "none";
    })
}

$(document).ready(function () {
    hideWhenClicked();
});