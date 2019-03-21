import example from './example'
import './style.scss'
import image from './background-640x320.jpg'

const background = new Image()
background.src = image

document.body.appendChild(background)

example()
