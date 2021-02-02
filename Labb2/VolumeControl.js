import React, { useState } from 'react'

import './knob/rotaryswitch.css'

function isWholeNumber(s) {
    return /^-?\d+$/.test(s.trim())
}

export default function VolumeControl({ min, max, startVolume, step }) {

    let [volume, setVolume] = useState(startVolume)

    function tryChangeVolumeTo(v) {

        if (v > max) {
            v = max
        }

        if (v < min) {
            v = min
        }

        setVolume(v)

    }

    function setMin() {
        tryChangeVolumeTo(min)
    }

    function setMax() {
        tryChangeVolumeTo(max)
    }

    function down() {
        tryChangeVolumeTo(volume - step)
    }

    function up() {
        tryChangeVolumeTo(volume + step)
    }

    function doubleStepUp() {
        tryChangeVolumeTo(volume + (step * 2))
    }

    function doubleStepDown() {
        tryChangeVolumeTo(volume - (step * 2))
    }

    function volumeChanged(event) {
        let inputedText = event.target.value

        if (!isWholeNumber(inputedText)) {
            inputedText = min.toString()
        }

        tryChangeVolumeTo(parseInt(inputedText))

        console.log("volumeChanged", inputedText)
    }

    function switchStyle() {

        const ratio = (volume - min) / (max - min)
        const degrees = -120 + Math.round(240 * ratio)

        return {
            transform: `rotate(${degrees}deg)`
        }
    }

    function colorMax(){
        if(volume === max){
            return{
                color: "green"
            }
        }
    }

    function colorMin(){
        if(volume === min){
            return{
                color: "green"
            }
        }
    }

    return (


        <div class="wrap">

            <div></div>
            <div className="rotaryswitchPlugin light">
                <div className="switch" style={switchStyle()}></div>
            </div>
            <div></div>

            <div>
                <button onClick={setMin}>&lt;&lt;</button>
                <button onClick={down}>&lt;</button>
            </div>
            <input onChange={volumeChanged} value={volume} />
            <div>
                <button onClick={up}>&gt;</button>
                <button onClick={setMax}>&gt;&gt;</button>
            </div>

            <div className="dim" style={colorMin()}>{min}</div>
            <input readOnly value={step} />
            <div className="dim" style={colorMax()}>{max}</div>

            <button onClick={doubleStepDown} >&lt;</button>
            <div>{volume}</div>
            <button onClick={doubleStepUp}>&gt;</button>

        </div>
    )

}