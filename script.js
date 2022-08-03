const sketchContainer = document.querySelector('.sketchContainer')
const sketchContainerDims = 600


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

