const changed = document.querySelectorAll('.replaced')
window.addEventListener('load', placeholer)

function placeholer(){
    for(let change of changed ){
        change.classList.add("animated")
        setTimeout(() => {
            change.classList.remove('animated')
        }, 3000);
    }
}
