// Code your solution in this file!

const fpb = 264;

function distanceFromHqInBlocks(dist) {
  const hq = 42;
  const dist2 = Math.abs(dist - hq);
  return dist2;
}

function distanceFromHqInFeet(distfeet) {
  distanceFromHqInBlocks(distfeet);
  
  return distanceFromHqInBlocks(distfeet) * fpb;
}

function distanceTravelledInFeet(init, dest) {
  const fpb = 264;
  const dist2 = Math.abs(dest - init);
  return dist2 * fpb;

}

function calculatesFarePrice(start, destination) {
  let dist3 = distanceTravelledInFeet(start, destination);
  let price = 0;
  const setPrice = 2500;
  if (dist3 <= 400) {
    price = 0;
    return price;
  } else if (dist3 <= 2000) {
    price = (dist3 -400)* 2 / 100;
    return price;
  } else if (dist3 <= 2500) {
    price = setPrice/100;
    return price;
  } else {
    return 'cannot travel that far';
  }
};
