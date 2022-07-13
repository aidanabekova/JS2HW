

let position = 0;
const block = document.querySelector(".block");
const click = document.querySelector('.click');
const recFun = function() {
click.addEventListener('click', () => {
    if(position <= 400){
        position += 30;
        block.style.left =`${position}px`
    }else if(position >= 400){
        position = 0;
        recFun();
    }
})}
recFun();