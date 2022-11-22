const DEFAULT_COLOUR = '#504E4E'
const DEFAULT_SIZE = 20

let currentColour = DEFAULT_COLOUR
let currentSize = DEFAULT_SIZE

const colourSelector = document.getElementById('colourSelector')
const clear = document.getElementById('clearBtn')
const sizeValue = document.getElementById('sizeValue')
const sizeSlider = document.getElementById('sizeSlider')
const grid = document.getElementById('grid')

colourSelector.oninput = (e) => setCurrentColour(e.target.value)
clear.onclick = () => reloadGrid()
sizeSlider.onmousemove = (e) => updateDisplaySize(e.target.value)
sizeSlider.onchange = (e) => updateGridSize(e.target.value)

function setCurrentColour(newColour) {
    currentColour = newColour
}

function setCurrentSize(newSize) {
    currentSize = newSize
}

function updateGridSize(newSize) {
    setCurrentSize(newSize)
    updateDisplaySize(newSize)
    reloadGrid()
}

function updateDisplaySize(newSize) {
    sizeValue.innerHTML = `${newSize} x ${newSize}`
}

function reloadGrid() {
    clearGrid()
    createGrid(currentSize)
}

function clearGrid() {
    grid.innerHTML = ''
}

function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i=0; i<size*size; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add("grid-element")
        gridElement.addEventListener('mouseover', changeColour)
        gridElement.addEventListener('mousedown', changeColour)
        grid.appendChild(gridElement)
    }
}

function changeColour(e) {
    if (e.type === 'mouseover' && 'mousedown') {
        e.target.style.backgroundColor = currentColour
    }
}

window.onload = () => {
    createGrid(DEFAULT_SIZE)
}
