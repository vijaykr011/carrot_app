const line = document.querySelector('#line')
const targetRaised = document.querySelector('#targetRaised')
const canvas = document.querySelector('#canvas')

const percent = line.parentElement.dataset.percent
line.style.width = percent + '%'
targetRaised.textContent = percent + '% Target Raised '

let tz = new Date().toString().split(' ')[5]
let d = new Date()

const cfg = {
    end: Date.parse(new Date(canvas.dataset.enddate + ' ' + tz)) / 1000,
    labels: ["Days", "Hours", "Minutes", "Seconds"],
    background: ["transparent", "transparent", "transparent", "transparent"],
    opacity: 1,
    outerBackground: "rgba(0,0,0,0)",
    fontColor: ["#fff", "#fff", "#fff", "#fff"],
    strokes: {
        background: "transparent",
        fill: ["#1f72cd", "#1f72cd", "#1f72cd", "#1f72cd"],
        glow: 30,
        width: 12,
        margin: 12
    }
}

let max = [
    365,
    24, 60, 60]

function addZero(n) {
    if (n < 10) { n = "0" + n }
    return n
}
let time = [0, 0, 0, 0]

let offset = cfg.strokes.width * 2
const context = canvas.getContext("2d")
let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
window.requestAnimationFrame = requestAnimationFrame
cfg.radius = (canvas.parentElement.offsetWidth - offset * 5) / 5
canvas.width = cfg.radius * 4 + offset * 5
canvas.height = cfg.radius + offset * 2

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < 4; i++) {

        // LINES
        context.beginPath()
        context.moveTo(offset + cfg.radius / 2 + offset * i + cfg.radius * i - cfg.radius / 2 - 5, cfg.radius / 2 + offset)
        context.lineTo(offset + cfg.radius / 2 + offset * i + cfg.radius * i + cfg.radius / 2 + 5, cfg.radius / 2 + offset)
        context.lineWidth = 1
        context.strokeStyle = '#5a565f'
        context.stroke()
        context.closePath()

        context.beginPath()
        context.moveTo(offset + cfg.radius / 2 + offset * i + cfg.radius * i, cfg.radius / 2 + offset - cfg.radius / 2 - 5)
        context.lineTo(offset + cfg.radius / 2 + offset * i + cfg.radius * i, cfg.radius / 2 + offset + cfg.radius / 2 + 5)
        context.lineWidth = 2
        context.strokeStyle = '#5a565f'
        context.stroke()
        context.closePath()

        //COLORED CIRCLES
        let quart = Math.PI / 2
        context.beginPath()
        const gradient = context.createRadialGradient(
            offset + cfg.radius / 2 + offset * i + cfg.radius * i, cfg.radius / 2 + offset,
            0,
            offset + cfg.radius / 2 + offset * i + cfg.radius * i, cfg.radius / 2 + offset,
            cfg.radius)
        gradient.addColorStop(0, '#e09469')
        gradient.addColorStop(.9, 'transparent')
        context.moveTo(offset + cfg.radius / 2 + offset * i + cfg.radius * i, cfg.radius / 2 + offset)
        context.lineWidth = cfg.strokes.width
        context.arc(offset + cfg.radius / 2 + offset * i + cfg.radius * i, cfg.radius / 2 + offset, cfg.radius / 2, -((max[i] - time[i]) / max[i]) * (2 * Math.PI) - quart, -quart, true)
        context.lineTo(offset + cfg.radius / 2 + offset * i + cfg.radius * i, cfg.radius / 2 + offset)
        context.fillStyle = gradient
        context.fill()
        context.closePath()

        // OUTER CIRCLES
        context.beginPath();
        context.arc(offset + cfg.radius / 2 + offset * i + cfg.radius * i, cfg.radius / 2 + offset, cfg.radius / 2 - 10, 0, 2 * Math.PI)
        context.lineWidth = 2
        context.strokeStyle = '#fff'
        context.stroke()
        context.closePath()

        context.beginPath();
        context.arc(offset + cfg.radius / 2 + offset * i + cfg.radius * i, cfg.radius / 2 + offset, cfg.radius / 2 - 5, 0, 2 * Math.PI)
        context.lineWidth = 2
        context.strokeStyle = '#fff'
        context.stroke()
        context.closePath()

        //COUNTDOWN TEXTS
        let d = cfg.end - Date.now() / 1000
        if (d < 0) { d = 0 }
        time[0] = Math.round(d % (86400 * 365) / 86400)
        time[1] = Math.floor((d % 86400) / 3600)
        time[2] = Math.floor((d % 3600) / 60)
        time[3] = d % 60
        context.font = "bold " + cfg.radius / 2.25 + "px AvenirNextBold, Helvetica Neue, Helvetica, sans-serif"
        context.textAlign = "center"
        context.fillStyle = cfg.fontColor[0]
        context.fillText(addZero(Math.floor(time[i])), offset + cfg.radius / 2 + offset * i + (cfg.radius) * i, cfg.radius / 2 + offset + (cfg.radius / 8))

        // COUNTDOWN LABELS
        context.font = cfg.radius / 8 + "px AvenirNext, Helvetica Neue, Helvetica, sans-serif"
        context.textAlign = "center"
        context.fillStyle = cfg.fontColor[1]
        context.fillText(cfg.labels[i], offset + cfg.radius / 2 + offset * i + (cfg.radius) * i, cfg.radius / 2.25 + offset + (cfg.radius / 3))

    }
    requestAnimationFrame(function () {
        if (d > 0) {
            animate()
        }
    })
}
animate()

window.addEventListener("resize", () => {
    cfg.radius = (canvas.parentElement.offsetWidth - offset * 5) / 4
    canvas.width = cfg.radius * 4 + offset * 5
})
cfg.strokes.width = 12 / (620 / canvas.width)
offset = cfg.strokes.width * 2
canvas.height = cfg.radius + offset * 2
