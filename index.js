// Code your solution in this file!
function distanceFromHqInBlocks(pickUpStreet) {
    if (pickUpStreet > 42){
        return pickUpStreet - 42
    } else if (pickUpStreet < 42) {
        return 42 - pickUpStreet
    } else {
        return 0
    }
}

function distanceFromHqInFeet(pickUpStreet) {
    return distanceFromHqInBlocks(pickUpStreet) * 264
}

 function distanceTravelledInFeet(startingBlock, destinationBlock) {
   if (destinationBlock > startingBlock) {
    return (destinationBlock - startingBlock) * 264
   } else if (startingBlock > destinationBlock) {
    return (startingBlock - destinationBlock) * 264
   }
 }

 function calculatesFarePrice(startingBlock, destinationBlock) {
    if (distanceTravelledInFeet(startingBlock, destinationBlock) < 400) {
        return 0
    } else if (distanceTravelledInFeet(startingBlock, destinationBlock) > 400 && (distanceTravelledInFeet(startingBlock, destinationBlock) < 2000)) {
        return (distanceTravelledInFeet(startingBlock, destinationBlock) - 400) * 0.02
    } else if ((distanceTravelledInFeet(startingBlock, destinationBlock) > 2000) && (distanceTravelledInFeet(startingBlock, destinationBlock) < 2500)) {
        return 25
    } else {
        return "cannot travel that far"
    }
 }