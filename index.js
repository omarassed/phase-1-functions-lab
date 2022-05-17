// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    if (block > 42) {
        return block - 42;
    } else if (block < 42) {
        return 42-block;
    }
}
function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264;
}
function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return Math.abs(start-destination) * 264;
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
   if (distanceTravelledInFeet(start, destination) < 400) {
        return 0;
   } else if (distanceTravelledInFeet(start, destination) >= 400 && distanceTravelledInFeet(start, destination) < 2000) {
       return (distanceTravelledInFeet(start,destination) - 400) * 0.02;
   } else if (distanceTravelledInFeet(start, destination) >= 2000 && distanceTravelledInFeet(start, destination) < 2500) {
       return 25;
   } else if (distanceTravelledInFeet(start, destination) >= 2500) {
       return "cannot travel that far";
   }
  } 
