// Disable No Input Fields

var inputs = document.querySelectorAll(".no-input");

for (var i = 0; i < inputs.length; i++) {
    inputs[i].disabled = true;
}

// Input Field Init.

    // Input One SENBAZURU

const inputField1 = document.getElementById('first-input')
const inputField2 = document.getElementById('second-input')
const inputField3 = document.getElementById('third-input')
const inputField4 = document.getElementById('fourth-input')
const inputField5 = document.getElementById('fifth-input')
const inputField6 = document.getElementById('sixth-input')
const inputField7 = document.getElementById('seventh-input')
const inputField8 = document.getElementById('eigth-input')
const inputField9 = document.getElementById('ninth-input')

const senbazuruArray = [inputField1, inputField2, inputField3, inputField4, inputField5, inputField6, inputField7, inputField8, inputField9];
const senbazuruArrayLetters = ['S', 'E', 'N', 'B', 'A', 'Z', 'U', 'R', 'U'];

senbazuruArray.forEach((item, index) => {
    item.addEventListener('input', function() {
        if (item.value.toUpperCase() === senbazuruArrayLetters[index]) {
            item.style.backgroundColor = '#2EEA76';
            item.style.color = 'white';
        }
    });
});

    // Input Two KUSUDAMA

const inputField10 = document.getElementById('second-first-input')
const inputField11 = document.getElementById('second-second-input')
const inputField12 = document.getElementById('second-third-input')
const inputField13 = document.getElementById('second-fourth-input')
const inputField14 = document.getElementById('second-fifth-input')
const inputField15 = document.getElementById('second-sixth-input')
const inputField16 = document.getElementById('second-seventh-input')
const inputField17 = document.getElementById('second-eigth-input')

const kusudamaArray = [inputField10, inputField11, inputField12, inputField13, inputField14, inputField15, inputField16, inputField17];
const kusudamaArrayLetters = ['K', 'U', 'S', 'U', 'D', 'A', 'M', 'A'];

const letterList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

kusudamaArray.forEach((item, index) => {
    item.addEventListener('input', function() {
        item.value.toUpperCase()
        const inputVal = item.value.toUpperCase();
        if (inputVal === kusudamaArrayLetters[index]) {
            item.style.backgroundColor = '#2EEA76'; 
            item.style.color = 'white';
        } else if (!letterList.includes(inputVal) || inputVal.length !== 1) {
            item.style.backgroundColor = 'white';
            item.style.color = '#2EEA76';
        } else {
            item.style.backgroundColor = '#FF362F'; 
            item.style.color = 'white';
        }
    });
});

    // Input Three TESSSELLATION

const inputField18 = document.getElementById('third-first-input')
const inputField19 = document.getElementById('third-second-input')
const inputField20 = document.getElementById('third-third-input')
const inputField21 = document.getElementById('third-fourth-input')
const inputField22 = document.getElementById('third-fifth-input')
const inputField23 = document.getElementById('third-sixth-input')
const inputField24 = document.getElementById('third-seventh-input')
const inputField25 = document.getElementById('third-eigth-input')
const inputField26 = document.getElementById('third-ninth-input')
const inputField27 = document.getElementById('third-tenth-input')
const inputField28 = document.getElementById('third-eleventh-input')
const inputField29 = document.getElementById('third-twelvth-input')
const inputField30 = document.getElementById('third-thirteenth-input')

const tesssellationArray = [inputField18, inputField19, inputField20, inputField21, inputField22, inputField23, inputField24, inputField25, inputField26, inputField27, inputField28, inputField29, inputField30];
const tesssellationArrayLetters = ['T', 'E', 'S', 'S', 'S', 'E', 'L', 'L', 'A', 'T', 'I','O', 'N'];

tesssellationArray.forEach((item, index) => {
    item.addEventListener('input', function() {
        item.value.toUpperCase()
        const inputVal = item.value.toUpperCase();
        if (inputVal === tesssellationArrayLetters[index]) {
            item.style.backgroundColor = '#2EEA76'; 
            item.style.color = 'white';
        } else if (!letterList.includes(inputVal) || inputVal.length !== 1) {
            item.style.backgroundColor = 'white';
            item.style.color = '#2EEA76';
        } else {
            item.style.backgroundColor = '#FF362F'; 
            item.style.color = 'white';
        }
    });
});

 // Input Four CHIYOGAMI

const inputField31 = document.getElementById('fourth-first-input')
const inputField32 = document.getElementById('fourth-second-input')
const inputField33 = document.getElementById('fourth-third-input')
const inputField34 = document.getElementById('fourth-fourth-input')
const inputField35 = document.getElementById('fourth-fifth-input')
const inputField36 = document.getElementById('fourth-sixth-input')
const inputField37 = document.getElementById('fourth-eigth-input')
const inputField38 = document.getElementById('fourth-ninth-input')

const chiyogamiArray = [inputField31, inputField32, inputField33, inputField34, inputField35, inputField36, inputField26, inputField37, inputField38]
const chiyogamiArrayLetters = ['C', 'H', 'I', 'Y', 'O', 'G', 'A', 'M', 'I']

chiyogamiArray.forEach((item, index) => {
    item.addEventListener('input', function() {
        item.value.toUpperCase()
        const inputVal = item.value.toUpperCase();
        if (inputVal === chiyogamiArrayLetters[index]) {
            item.style.backgroundColor = '#2EEA76'; 
            item.style.color = 'white';
        } else if (!letterList.includes(inputVal) || inputVal.length !== 1) {
            item.style.backgroundColor = 'white';
            item.style.color = '#2EEA76';
        } else {
            item.style.backgroundColor = '#FF362F'; 
            item.style.color = 'white';
        }
    });
});

    // Input Five CREASEPATTERN

const inputField39 = document.getElementById('fifth-first-input')
const inputField40 = document.getElementById('fifth-second-input')
const inputField41 = document.getElementById('fifth-third-input')
const inputField42 = document.getElementById('fifth-fourth-input')
const inputField43 = document.getElementById('fifth-fifth-input')
const inputField44 = document.getElementById('fifth-sixth-input')
const inputField45 = document.getElementById('fifth-seventh-input')
const inputField46 = document.getElementById('fifth-eigth-input')
const inputField47 = document.getElementById('fifth-ninth-input')
const inputField48 = document.getElementById('fifth-tenth-input')
const inputField49 = document.getElementById('fifth-eleventh-input')
const inputField50 = document.getElementById('fifth-twelvth-input')
const inputField51 = document.getElementById('fifth-thirteenth-input')

const creasepatternArray = [inputField39, inputField40, inputField41, inputField42, inputField43, inputField44, inputField45, inputField46, inputField47, inputField48, inputField49, inputField50, inputField51]
const creasepatternArrayLetters = ['C', 'R', 'E', 'A', 'S', 'E', 'P', 'A', 'T', 'T', 'E', 'R', 'N']


creasepatternArray.forEach((item, index) => {
    item.addEventListener('input', function() {
        item.value.toUpperCase()
        const inputVal = item.value.toUpperCase();
        if (inputVal === creasepatternArrayLetters[index]) {
            item.style.backgroundColor = '#2EEA76'; 
            item.style.color = 'white';
        } else if (!letterList.includes(inputVal) || inputVal.length !== 1) {
            item.style.backgroundColor = 'white';
            item.style.color = '#2EEA76';
        } else {
            item.style.backgroundColor = '#FF362F'; 
            item.style.color = 'white';
        }
    });
});

    // Input Six MODULAR

const inputField52 = document.getElementById('sixth-first-input')
const inputField53 = document.getElementById('sixth-second-input')
const inputField54 = document.getElementById('sixth-third-input')
const inputField55 = document.getElementById('sixth-fourth-input')
const inputField56 = document.getElementById('sixth-fifth-input')
const inputField57 = document.getElementById('sixth-sixth-input')
const inputField58 = document.getElementById('sixth-seventh-input')

const modularArray = [inputField52, inputField53, inputField54, inputField55, inputField56, inputField57, inputField58]
const modularArrayLetters = ['W', 'E', 'L', 'D', 'I', 'N', 'G'];

modularArray.forEach((item, index) => {
    item.addEventListener('input', function() {
        item.value.toUpperCase()
        const inputVal = item.value.toUpperCase();
        if (inputVal === modularArrayLetters[index]) {
            item.style.backgroundColor = '#2EEA76'; 
            item.style.color = 'white';
        } else if (!letterList.includes(inputVal) || inputVal.length !== 1) {
            item.style.backgroundColor = 'white';
            item.style.color = '#2EEA76';
        } else {
            item.style.backgroundColor = '#FF362F'; 
            item.style.color = 'white';
        }
    });
});

    // Input Seven ZAKKA

const inputField59 = document.getElementById('seventh-first-input')
const inputField60 = document.getElementById('seventh-second-input')
const inputField61 = document.getElementById('seventh-third-input')
const inputField62 = document.getElementById('seventh-fourth-input')
const inputField63 = document.getElementById('seventh-fifth-input')

const zakkaArray = [inputField59, inputField60, inputField61, inputField62, inputField63]
const zakkaArrayLetters = ['Z', 'A', 'K', 'K', 'A']


zakkaArray.forEach((item, index) => {
    item.addEventListener('input', function() {
        item.value.toUpperCase()
        const inputVal = item.value.toUpperCase();
        if (inputVal === zakkaArrayLetters[index]) {
            item.style.backgroundColor = '#2EEA76'; 
            item.style.color = 'white';
        } else if (!letterList.includes(inputVal) || inputVal.length !== 1) {
            item.style.backgroundColor = 'white';
            item.style.color = '#2EEA76';
        } else {
            item.style.backgroundColor = '#FF362F'; 
            item.style.color = 'white';
        }
    });
});

// Win Conditions

const win = document.getElementById('win')

win.style.display = 'none'

const allInputFields = [inputField1, inputField2, inputField3, inputField4, inputField5, inputField6, inputField7, inputField8, inputField9, inputField10, inputField11, inputField12, inputField13, inputField14, inputField15, inputField16, inputField17, inputField18, inputField19, inputField20, inputField21, inputField22, inputField23, inputField24, inputField25, inputField26, inputField27, inputField28, inputField29, inputField30, inputField31, inputField32, inputField33, inputField34, inputField35, inputField36, inputField37, inputField38, inputField39, inputField40, inputField41, inputField42, inputField43, inputField44, inputField45, inputField46, inputField47, inputField48, inputField49, inputField50, inputField51, inputField52, inputField53, inputField54, inputField55, inputField56, inputField57, inputField58,inputField59, inputField60, inputField61, inputField62, inputField63]

function checkWinCondition() {
    let allInputsColored = true;
    for (let item of allInputFields) {
        if (item.style.backgroundColor !== 'rgb(46, 234, 118)') {
            allInputsColored = false;
            break;
        }
    }

    if(allInputsColored) {
        console.log('Win condition met');
        win.style.display = 'flex';
    } else {
        win.style.display = 'none';
    }
}

allInputFields.forEach(item => {
    item.addEventListener('input', checkWinCondition);
});


const button = document.getElementById('next-button')
const inputField = document.getElementById('solution-collector')
const replay = document.getElementById('replay-button')

button.classList.add('button-grayed')
button.classList.remove('button-initial')

inputField.addEventListener('input', function() {
    if (inputField.value.toUpperCase() === 'WELDING') {
        button.classList.add('button-green')
        button.classList.remove('button-grayed')
    }
})

// Highlighter

const clueOne = document.getElementById('first-clue')
const clueTwo = document.getElementById('second-clue')
const clueThree = document.getElementById('third-clue')
const clueFour = document.getElementById('fourth-clue')
const clueFive = document.getElementById('fifth-clue')
const clueSix = document.getElementById('sixth-clue')
const clueSeven = document.getElementById('seventh-clue')

clueOne.addEventListener('click', function() {
    kusudamaArray.forEach(item => {
        item.style.backgroundColor = '#ffcc9c'
        setTimeout(() => {
            item.style.backgroundColor = 'white';
        }, 3000);
    })
})

clueTwo.addEventListener('click', function() {
    senbazuruArray.forEach(item => {
        item.style.backgroundColor = '#ffcc9c'
        setTimeout(() => {
            item.style.backgroundColor = 'white';
        }, 3000);
    })
})

clueThree.addEventListener('click', function() {
    tesssellationArray.forEach(item => {
        item.style.backgroundColor = '#ffcc9c'
        setTimeout(() => {
            item.style.backgroundColor = 'white';
        }, 3000);
    })
})

clueFour.addEventListener('click', function() {
    zakkaArray.forEach(item => {
        item.style.backgroundColor = '#ffcc9c'
        setTimeout(() => {
            item.style.backgroundColor = 'white';
        }, 3000);
    })
})

clueFive.addEventListener('click', function() {
    creasepatternArray.forEach(item => {
        item.style.backgroundColor = '#ffcc9c'
        setTimeout(() => {
            item.style.backgroundColor = 'white';
        }, 3000);
    })
})

clueSix.addEventListener('click', function() {
    modularArray.forEach(item => {
        item.style.backgroundColor = '#ffcc9c'
        setTimeout(() => {
            item.style.backgroundColor = 'white';
        }, 3000);
    })
})

clueSeven.addEventListener('click', function() {
    chiyogamiArray.forEach(item => {
        item.style.backgroundColor = '#ffcc9c'
        setTimeout(() => {
            item.style.backgroundColor = 'white';
        }, 3000);
    })
})