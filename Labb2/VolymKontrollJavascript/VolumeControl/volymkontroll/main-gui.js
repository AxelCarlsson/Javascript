/*
Init all start values 
(No buttons can be pressed)
*/
import { VolumeControl } from './VolumeControl10.js'

let a = new VolumeControl(0, 100, 50, 1)
let b = new VolumeControl(300, 400, 350, 5)
let c = new VolumeControl(147, 789, 200, 1)


a.insertInHtml()
b.insertInHtml()
c.insertInHtml()