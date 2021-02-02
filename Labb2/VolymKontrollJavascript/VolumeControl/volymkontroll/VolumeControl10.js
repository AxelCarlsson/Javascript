
import { htmlToElement } from './DomBuddy.js'
import { isWholeNumber, stringIsWholeNumber } from './MathBuddy.js'

export function VolumeControl(min, max, startValue, step) {

    if (startValue === undefined) startValue = min
    if (step === undefined) step = 1

    if (!isWholeNumber(min)) throw "'min' must be a whole number"
    if (!isWholeNumber(max)) throw "'max' must be a whole number"
    if (!isWholeNumber(startValue)) throw "'startValue' must be a whole number"

    if (min > max) throw "'min' should not be higher than 'max'"
    if (startValue < min) throw "Too low start value"
    if (startValue > max) throw "Too high start value"

    let value = startValue

    let inputBox = {}

    let ref = {}

    let switchDiv = {}

    let minBox
    let maxBox

    function render() {
        const ratio = (value - min) / (max - min)
        const degrees = -120 + Math.round(240 * ratio)
        switchDiv.style.transform = `rotate(${degrees}deg)`
        
        if(value === min){
            minBox.style.color = "green"
        } else{
            minBox.style.color = "black"
        }

        if(value === max){
            maxBox.style.color = "green"
        } else{
            maxBox.style.color = "black"
        }

        if (allowedValue(inputBox.value)) {
            inputBox.style.backgroundColor = ""
            inputBox.value = value
            for (let b of ref.querySelectorAll("button")) {
                b.disabled = false
            }
        } else {
            inputBox.style.backgroundColor = "#ffa8a8"
            for (let b of ref.querySelectorAll("button")) {
                b.disabled = true
            }
        }
    }

    function up() {
        value += step

        if (value > max) {
            console.log("App app app!")
            value = max
        }
        render()
    }

    function down() {
        value -= step
        if (value < min) {
            console.log("App app app!")
            value = min
        }
        render()
    }

    function setMin() {
        value = min
        render()
    }

    function setMax() {
        value = max
        render()
    }

    function doubleStepDown() {
        value = value - (step * 2)
        if (value < min) {
            console.log("App app app!")
            value = min
        }
        render()
    }

    function doubleStepUp() {
        value = value + (step * 2)
        if (value > max) {
            console.log("App app app!")
            value = max
        }
        render()
    }

    function allowedValue(v) {
        v = v.trim()
        if (!stringIsWholeNumber(v))
            return false
        v = parseInt(v)
        return v >= min && v <= max
    }

    function insertInHtml() {

        ref = htmlToElement(`
        <div class="wrap">
            <div></div>
            <div class="rotaryswitchPlugin light">
                <div class="switch" style="transform: rotate(30deg);"></div>
            </div>
            <div></div>
        
            <div>
                <button>&lt;&lt;</button>
                <button>&lt;</button>
            </div>
            <input />
            <div>
                <button>&gt;</button>
                <button>&gt;&gt;</button>
            </div>
        
            <div class="dim"></div>
            <input readonly />
            <div class="dim"></div>

            <button>&lt;</button>
            <div></div>
            <button>&gt;</button>

        </div>
        `)

        switchDiv = ref.querySelector(".switch")

        inputBox = ref.querySelectorAll("input")[0]
        const stepBox = ref.querySelectorAll("input")[1]

        minBox = ref.querySelectorAll("div.dim")[0]
        maxBox = ref.querySelectorAll("div.dim")[1]

        ref.querySelectorAll("button")[0].onclick = setMin
        ref.querySelectorAll("button")[1].onclick = down
        ref.querySelectorAll("button")[2].onclick = up
        ref.querySelectorAll("button")[3].onclick = setMax
        ref.querySelectorAll("button")[4].onclick = doubleStepDown
        ref.querySelectorAll("button")[5].onclick = doubleStepUp


        inputBox.value = value
        stepBox.value = step

        minBox.innerText = min
        maxBox.innerText = max


        inputBox.onchange = function (event) {
            let newValue = event.target.value
            if (allowedValue(newValue)) {
                value = parseInt(newValue)
            }
            render()
        }

        document.body.appendChild(ref)

        render()

    }
    return {
        insertInHtml: insertInHtml
    }
}