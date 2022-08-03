const sketchContainer = document.querySelector('.sketchContainer')


function createGrid(input){
    for (let row = 0; row < input; row++){
        for(let col = 0; col < input; col++){
            let grid = `<div class='gridItem'></div>`
            sketchContainer.innerHTML += grid

            console.log(grid);
            document.querySelectorAll('.gridItem').forEach(function(element){
                element.style.width = 500/input + 'px'
                element.style.height = 500/input + 'px'
            })
        }
    }


    
    // grid.style.height = `${500/input} + px`

}

createGrid(16)