const body = document.body

const button1 = document.getElementById('yes-button')
const button2 = document.getElementById('no-button')

// Combinations: d3d3d3 800020    fffdd0 008080     fff0f5 228b22

function createRandNumber(){
    const randomNumber = Math.floor(Math.random() * 10)
    console.log(randomNumber)
    if (randomNumber == 1){
        body.style.backgroundColor = '#f5f5dc'
        button1.style.boxShadow = '#f5f5dc 0px 0px 50px'
        button2.style.boxShadow = '#f5f5dc 0px 0px 50px'
        button1.style.backgroundColor = '#003f5c'
        button2.style.backgroundColor = '#003f5c'
    } 
    else if (randomNumber == 2) {
        button1.style.boxShadow = '#ffe4e1 0px 0px 50px'
        button2.style.boxShadow = '#ffe4e1 0px 0px 50px'
        body.style.backgroundColor = '#ffe4e1'
        button1.style.backgroundColor = '#6b8e23'
        button2.style.backgroundColor = '#6b8e23'
    }
    else if (randomNumber == 3) {
        button1.style.boxShadow = '#d3d3d3 0px 0px 50px'
        button2.style.boxShadow = '#d3d3d3 0px 0px 50px'
        body.style.backgroundColor = '#d3d3d3'
        button1.style.backgroundColor = '#800020'
        button2.style.backgroundColor = '#800020'
    }
    else if (randomNumber == 4) {
        button1.style.boxShadow = '#fffdd0 0px 0px 50px'
        button2.style.boxShadow = '#fffdd0 0px 0px 50px'
        body.style.backgroundColor = '#fffdd0'
        button1.style.backgroundColor = '#008080'
        button2.style.backgroundColor = '#008080'
    }
    else if (randomNumber == 5) {
        button1.style.boxShadow = '#fff0f5 0px 0px 50px'
        button2.style.boxShadow = '#fff0f5 0px 0px 50px'
        body.style.backgroundColor = '#fff0f5'
        button1.style.backgroundColor = '#228b22'
        button2.style.backgroundColor = '#228b22'
    }
    else if (randomNumber == 6) {
        button1.style.boxShadow = '#ffe4e1 0px 0px 50px'
        button2.style.boxShadow = '#ffe4e1 0px 0px 50px'
        body.style.backgroundColor = '#ffe4e1'
        button1.style.backgroundColor = '#4b0082'
        button2.style.backgroundColor = '#4b0082'
    }
    else if (randomNumber == 7) {
        button1.style.boxShadow = '#f0ead6 0px 0px 50px'
        button2.style.boxShadow = '#f0ead6 0px 0px 50px'
        body.style.backgroundColor = '#f0ead6'
        button1.style.backgroundColor = '#b7410e'
        button2.style.backgroundColor = '#b7410e'
    }
    else if (randomNumber == 8) {
        button1.style.boxShadow = '#87ceeb 0px 0px 50px'
        button2.style.boxShadow = '#87ceeb 0px 0px 50px'
        body.style.backgroundColor = '#87ceeb'
        button1.style.backgroundColor = '#36454f'
        button2.style.backgroundColor = '#36454f'
    }
    else if (randomNumber == 9) {
        button1.style.boxShadow = '#98fb98 0px 0px 50px'
        button2.style.boxShadow = '#98fb98 0px 0px 50px'
        body.style.backgroundColor = '#98fb98'
        button1.style.backgroundColor = '#483d8b'
        button2.style.backgroundColor = '#483d8b'
    } else {
        button1.style.boxShadow = '#ffdab9 0px 0px 50px'
        button2.style.boxShadow = '#ffdab9 0px 0px 50px'
        body.style.backgroundColor = '#ffdab9'
        button1.style.backgroundColor = '#800080'
        button2.style.backgroundColor = '#800080'
    }
}

document.addEventListener('DOMContentLoaded', function() {
    createRandNumber()
})

const colorChanger = document.getElementById('color-wrapper')

colorChanger.addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * 10)
    if (randomNumber == 1){
        body.style.backgroundColor = '#f5f5dc'
        button1.style.boxShadow = '#f5f5dc 0px 0px 50px'
        button2.style.boxShadow = '#f5f5dc 0px 0px 50px'
        button1.style.backgroundColor = '#003f5c'
        button2.style.backgroundColor = '#003f5c'
    } 
    else if (randomNumber == 2) {
        button1.style.boxShadow = '#ffe4e1 0px 0px 50px'
        button2.style.boxShadow = '#ffe4e1 0px 0px 50px'
        body.style.backgroundColor = '#ffe4e1'
        button1.style.backgroundColor = '#6b8e23'
        button2.style.backgroundColor = '#6b8e23'
    }
    else if (randomNumber == 3) {
        button1.style.boxShadow = '#d3d3d3 0px 0px 50px'
        button2.style.boxShadow = '#d3d3d3 0px 0px 50px'
        body.style.backgroundColor = '#d3d3d3'
        button1.style.backgroundColor = '#800020'
        button2.style.backgroundColor = '#800020'
    }
    else if (randomNumber == 4) {
        button1.style.boxShadow = '#fffdd0 0px 0px 50px'
        button2.style.boxShadow = '#fffdd0 0px 0px 50px'
        body.style.backgroundColor = '#fffdd0'
        button1.style.backgroundColor = '#008080'
        button2.style.backgroundColor = '#008080'
    }
    else if (randomNumber == 5) {
        button1.style.boxShadow = '#fff0f5 0px 0px 50px'
        button2.style.boxShadow = '#fff0f5 0px 0px 50px'
        body.style.backgroundColor = '#fff0f5'
        button1.style.backgroundColor = '#228b22'
        button2.style.backgroundColor = '#228b22'
    }
    else if (randomNumber == 6) {
        button1.style.boxShadow = '#ffe4e1 0px 0px 50px'
        button2.style.boxShadow = '#ffe4e1 0px 0px 50px'
        body.style.backgroundColor = '#ffe4e1'
        button1.style.backgroundColor = '#4b0082'
        button2.style.backgroundColor = '#4b0082'
    }
    else if (randomNumber == 7) {
        button1.style.boxShadow = '#f0ead6 0px 0px 50px'
        button2.style.boxShadow = '#f0ead6 0px 0px 50px'
        body.style.backgroundColor = '#f0ead6'
        button1.style.backgroundColor = '#b7410e'
        button2.style.backgroundColor = '#b7410e'
    }
    else if (randomNumber == 8) {
        button1.style.boxShadow = '#87ceeb 0px 0px 50px'
        button2.style.boxShadow = '#87ceeb 0px 0px 50px'
        body.style.backgroundColor = '#87ceeb'
        button1.style.backgroundColor = '#36454f'
        button2.style.backgroundColor = '#36454f'
    }
    else if (randomNumber == 9) {
        button1.style.boxShadow = '#98fb98 0px 0px 50px'
        button2.style.boxShadow = '#98fb98 0px 0px 50px'
        body.style.backgroundColor = '#98fb98'
        button1.style.backgroundColor = '#483d8b'
        button2.style.backgroundColor = '#483d8b'
    } else {
        button1.style.boxShadow = '#ffdab9 0px 0px 50px'
        button2.style.boxShadow = '#ffdab9 0px 0px 50px'
        body.style.backgroundColor = '#ffdab9'
        button1.style.backgroundColor = '#800080'
        button2.style.backgroundColor = '#800080'
    }
})