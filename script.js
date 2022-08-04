const sketchContainer = document.querySelector('.sketchContainer')
const sketchContainerDims = 600

let color = document.querySelector('#swatch').value
document.querySelector('#swatch').addEventListener('change', (e) =>{
    color = e.target.value
})

const colorMode = document.querySelector('.colorMode')
const rainbowMode = document.querySelector('.rainbowMode')

const slider = document.querySelector('.slider')
const sliderOutput = document.querySelector('.sliderValue')

let gridItem = document.querySelectorAll('.gridItem')

sliderOutput.textContent = 'gridsize : ' + slider.value


//color Mode
let drawMode = ''
colorMode.addEventListener('click', activateColor)
rainbowMode.addEventListener('click', activateColor)


function activateColor(e){
    drawMode = e.target.textContent
}





//Display Grid Size
slider.oninput = function() {
    sliderOutput.textContent = 'gridsize : ' + this.value
}

function createGrid(input) {
    sketchContainer.innerHTML = ''
    for (let row = 0; row < input; row++) {
        for (let col = 0; col < input; col++) {
            grid = `<div class='gridItem'></div>`
            sketchContainer.innerHTML += grid
        }
    }
    document.querySelectorAll('.gridItem').forEach(function (element) {
        element.style.width = sketchContainerDims / input + 'px'
        element.style.height = sketchContainerDims / input + 'px'
    })
    activateGrid()
}

//default Grid
createGrid(20)



//Create Grid based on slider value
slider.addEventListener('mouseup', () => {
    createGrid(slider.value)
    activateGrid()

})


//Enable drawing on grid
function activateGrid(){
    gridItem = document.querySelectorAll('.gridItem')
    gridItem.forEach((item) => {item.addEventListener('mouseover', sketch)
})
}





function sketch(e){

    // e.target.style.backgroundColor = 'black'
    if (drawMode === 'color'){
        e.target.style.backgroundColor = color
    }
    // if

    // if

    // background = 
}


function createRainbow(){
    // random between color pallet
}


