basic.forever(function () {
    if (input.compassHeading() > 0 && input.compassHeading() < 90) {
        basic.showIcon(IconNames.ArrowNorthEast)
    } else if (input.compassHeading() > 90 && input.compassHeading() < 180) {
        basic.showIcon(IconNames.ArrowEast)
    } else if (input.compassHeading() > 180 && input.compassHeading() < 270) {
        basic.showIcon(IconNames.ArrowWest)
    } else if (input.compassHeading() > 270 && input.compassHeading() < 360) {
        basic.showIcon(IconNames.ArrowNorthWest)
    }
})
