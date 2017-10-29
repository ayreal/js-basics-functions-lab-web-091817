// Code your solution in this file!

const hq = 42;

function distanceFromHqInBlocks(block) {
  return Math.abs(block - hq);
};

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
};

function distanceTravelledInFeet(start, end) {
  return Math.abs(end - start) * 264
};

function calculatesFarePrice(start, end) {
  const dist = distanceTravelledInFeet(start, end)
  // dist is in feet
  if (dist < 400) {
    return 0;
  } else if (dist >= 400  && dist < 2000) {
    return dist * .02;
  } else if (dist >= 2000 && dist < 2500) {
    return 25;
  } else {
    return 'cannot travel that far'
  }
};
