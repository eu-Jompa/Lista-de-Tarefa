const directionButton1 = document.querySelector("#direction");
const mainElement = document.querySelector('main');

directionButton1.addEventListener("click",direction)
let scrollright = true;


document.addEventListener('wheel', function(e) {
    // Previne o scroll vertical padrão
    e.preventDefault();

    const mainElement = document.querySelector('main')
    if(scrollright===true){
        mainElement.scrollLeft += e.deltaY
        mainElement.style.overflowY = "hidden";
        mainElement.style.overflowX = "auto";
        
    }
    else{
        document.querySelector('main').scrollTop += e.deltaY
        mainElement.style.overflowY = "auto";
        mainElement.style.overflowX = "hidden";
    }
    // Move o scroll horizontalmente de acordo com o movimento do mouse

    
});
function direction(e){
    
    scrollright = !scrollright;
    // Move o scroll horizontalmente de acordo com o movimento do mouse
    

}