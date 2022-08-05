const sketchContainer = document.querySelector('.sketchContainer')
const sketchContainerDims = 600

const colorMode = document.querySelector('.colorMode')
const rainbowMode = document.querySelector('.rainbowMode')
const eraser = document.querySelector('.eraser')

const slider = document.querySelector('.slider')
const sliderOutput = document.querySelector('.sliderValue')

let gridItem = document.querySelectorAll('.gridItem')

const reset = document.querySelector('.reset')


let color = document.querySelector('#swatch').value
document.querySelector('#swatch').addEventListener('change', (e) => {
    color = e.target.value
})

let mouseDown = false
document.body.onmousedown = () => mouseDown = true
document.body.onmouseup = () => mouseDown = false

//reset functionality
reset.addEventListener('click', resetGrid)

//display grid size text
sliderOutput.textContent = 'gridsize : ' + slider.value

//color Mode
let drawMode = ''
colorMode.addEventListener('click', activateColor)
rainbowMode.addEventListener('click', activateColor)
eraser.addEventListener('click', activateColor)

function resetGrid() {
    gridItem.forEach((item) => { item.style.backgroundColor = 'var(--big-dark)' })
}


function activateColor(e) { drawMode = e.target.textContent }


//Display Grid Size
slider.oninput = function () {
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
function activateGrid() {
    gridItem = document.querySelectorAll('.gridItem')
    gridItem.forEach((item) => {
        item.addEventListener('mouseover', sketch)
    })
}





function sketch(e) {

    if (e.type === 'mouseover' && !mouseDown === true) return

    // e.target.style.backgroundColor = 'black'
    if (drawMode === 'color') {
        e.target.style.backgroundColor = color
    } else if (drawMode === 'eraser') {
        e.target.style.backgroundColor = 'var(--big-dark)'
    }else if (drawMode === 'rainbow'){
        e.target.style.backgroundColor = createRainbow()
    } else{
        e.target.style.backgroundColor = color

    }


}


function createRainbow() {
    let option = Math.floor(Math.random() * 4)
    if (option === 0){ return 'var(--primary-blue)'}
    if (option === 1){ return 'var(--primary-green)'}
    if (option === 2){ return 'var(--primary-yellow)'}
    if (option === 3){ return 'var(--primary-orange)'}
    if (option === 4){ return 'var(--secondary-orange)'}
  
}