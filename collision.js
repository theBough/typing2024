function collision(thingOne, thingTwo) {
  
    //check if we hit the left of any wall
    if (
      thingOne.y <= thingTwo.y + thingTwo.h &&
      thingOne.y + thingOne.h >= thingTwo.y &&
      thingOne.x <= thingTwo.x + thingTwo.w &&
      thingOne.x >= thingTwo.x
    ) {
      return true;
    }

    //check if we hit the right of any wall
    if (
      thingOne.y <= thingTwo.y + thingTwo.h &&
      thingOne.y + thingOne.h >= thingTwo.y &&
      thingOne.x + thingOne.w >= thingTwo.x &&
      thingOne.x <= thingTwo.x + thingTwo.w
    ) {
      return true;
    }

    if (
      thingOne.x <= thingTwo.x + thingTwo.w &&
      thingOne.x + thingOne.w >= thingTwo.x &&
      thingOne.y <= thingTwo.y + thingTwo.h &&
      thingOne.y >= thingTwo.y
    ) {
      return true;
    }

    //check if we hit the tothingOne of any wall
    if (
      thingOne.x <= thingTwo.x + thingTwo.w &&
      thingOne.x + thingOne.w >= thingTwo.x &&
      thingOne.y + thingOne.h >= thingTwo.y &&
      thingOne.y <= thingTwo.y + thingTwo.h
    ) {
      return true;
    }
    return false;
  
}
