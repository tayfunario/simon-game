// selectors
const clips = document.querySelectorAll('audio')
const info = document.querySelector('.info')
const infoBtn = document.querySelector('.info-btn')
const startBtn = document.querySelector('#start-btn')
const powerCb = document.querySelector('#power')
const strictCb = document.querySelector('#strict')
const levelMonitor = document.querySelector('.counter')
const greenBtn = document.querySelector('.green')
const blueBtn = document.querySelector('.blue')
const redBtn = document.querySelector('.red')
const yellowBtn = document.querySelector('.yellow')

// variables
let level = 1
let playerOrder = []
let computerOrder = createComputerOrder(level)

// event listeners
loadEventListeners()
powerCb.addEventListener('click', function() {
    startBtn.toggleAttribute('disabled')
    levelMonitor.innerHTML = '-'
})
startBtn.addEventListener('click', function() {
    play()
})
infoBtn.addEventListener('click', function() {
        info.classList.add('hide-info')
    })
    // functions
function play() {
    levelMonitor.innerHTML = level
    playerOrder = []
    computerOrder = createComputerOrder(level)
    runButtons(computerOrder)
    flashAll()
    level += 1
}

function check() {
    const lengthVal = playerOrder.length - 1
    if (playerOrder[lengthVal] != computerOrder[lengthVal]) {
        flashAlert()
        if (!strictCb.checked) reset()
        if (strictCb.checked) strictReset()
    } else if (lengthVal == computerOrder.length - 1) {
        play()
    }
}

function reset() {
    playerOrder = []
    computerOrder = [9]
    startBtn.setAttribute('disabled', true)
    startBtn.removeAttribute('disabled')
    level -= 1
    levelMonitor.innerHTML = level
}

function strictReset() {
    level = 1
    playerOrder = []
    computerOrder = [9]
    startBtn.setAttribute('disabled', true)
    startBtn.removeAttribute('disabled')
    levelMonitor.innerHTML = level
}

function loadEventListeners() {
    greenBtn.addEventListener('click', function() {
        playerOrder.push(0)
        green()
        check()
    })
    blueBtn.addEventListener('click', function() {
        playerOrder.push(1)
        blue()
        check()
    })
    redBtn.addEventListener('click', function() {
        playerOrder.push(2)
        red()
        check()
    })
    yellowBtn.addEventListener('click', function() {
        playerOrder.push(3)
        yellow()
        check()
    })
}

function runButtons(order) {
    let num = 0
    let interval = setInterval(function() {
        converter(order[num])
        num += 1
    }, 620)
}

function createComputerOrder(givenLevel) {
    let order = []
    for (let i = 0; i < givenLevel; i++) {
        const num = Math.floor(Math.random() * 4)
        order.push(num)
    }
    return order
}

function green() {
    clips[0].play()
    greenBtn.classList.add('lighter-green')
    setTimeout(function() {
        greenBtn.classList.remove('lighter-green')
    }, 500)
}

function blue() {
    clips[1].play()
    blueBtn.classList.add('lighter-blue')
    setTimeout(function() {
        blueBtn.classList.remove('lighter-blue')
    }, 500)
}

function red() {
    clips[2].play()
    redBtn.classList.add('lighter-red')
    setTimeout(function() {
        redBtn.classList.remove('lighter-red')
    }, 500)
}

function yellow() {
    clips[3].play()
    yellowBtn.classList.add('lighter-yellow')
    setTimeout(function() {
        yellowBtn.classList.remove('lighter-yellow')
    }, 500)
}

function converter(number) {
    switch (number) {
        case 0:
            green()
            break;
        case 1:
            blue()
            break;
        case 2:
            red()
            break;
        case 3:
            yellow()
            break;
    }
}

function flashAll() {
    greenBtn.classList.add('lighter-green')
    setTimeout(function() {
        greenBtn.classList.remove('lighter-green')
    }, 500)

    blueBtn.classList.add('lighter-blue')
    setTimeout(function() {
        blueBtn.classList.remove('lighter-blue')
    }, 500)

    redBtn.classList.add('lighter-red')
    setTimeout(function() {
        redBtn.classList.remove('lighter-red')
    }, 500)

    yellowBtn.classList.add('lighter-yellow')
    setTimeout(function() {
        yellowBtn.classList.remove('lighter-yellow')
    }, 500)
}

function flashAlert() {
    for (let i of clips) {
        i.play()
    }
    greenBtn.classList.add('lighter-green')
    setTimeout(function() {
        greenBtn.classList.remove('lighter-green')
    }, 500)

    blueBtn.classList.add('lighter-blue')
    setTimeout(function() {
        blueBtn.classList.remove('lighter-blue')
    }, 500)

    redBtn.classList.add('lighter-red')
    setTimeout(function() {
        redBtn.classList.remove('lighter-red')
    }, 500)

    yellowBtn.classList.add('lighter-yellow')
    setTimeout(function() {
        yellowBtn.classList.remove('lighter-yellow')
    }, 500)

}