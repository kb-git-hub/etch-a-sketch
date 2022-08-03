const sketchContainer = document.querySelector('.sketchContainer')
const sketchContainerDims = 600

const slider = document.querySelector('.slider')
const sliderOutput = document.querySelector('.sliderValue')

sliderOutput.textContent = 'gridsize : ' + slider.value

slider.oninput = function() {
    sliderOutput.textContent = 'gridsize : ' + this.value
}

function createGrid(input) {
    for (let row = 0; row < input; row++) {
        for (let col = 0; col < input; col++) {
            let grid = `<div class='gridItem'></div>`
            sketchContainer.innerHTML += grid
        }
    }
    document.querySelectorAll('.gridItem').forEach(function (element) {
        element.style.width = sketchContainerDims / input + 'px'
        element.style.height = sketchContainerDims / input + 'px'
    })
}

// 50 max
createGrid(25)



