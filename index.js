// Code your solution in this file!
const distanceFromHqInBlocks = (blocks) => {
    if (blocks > 42) return blocks - 42
    else return 42 - blocks
}
const distanceFromHqInFeet = (blocks) => {
    return distanceFromHqInBlocks(blocks) * 264
}

const distanceTravelledInFeet = (startBlock, endBlock) => {
    return Math.abs(startBlock - endBlock) * 264
}

const calculatesFarePrice = (start, destination) => {
    const distance = distanceTravelledInFeet(start, destination)
    if (distance > 2500) return 'cannot travel that far'
    else if (distance <= 2500 && distance > 2000) return 25
    else if (distance <= 2000 && distance >= 400) return (distance - 400) * 0.02
    else return 0
}