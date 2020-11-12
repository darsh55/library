function bounceOff(Rect1,Rect2){
  
    if (Rect1.x - Rect2.x < Rect2.width/2 + Rect1.width/2
      && Rect2.x - Rect1.x < Rect2.width/2 + Rect1.width/2) {
    Rect1.velocityX = Rect1.velocityX * (-1);
    Rect2.velocityX = Rect2.velocityX * (-1);
  }
  if (Rect1.y - Rect2.y < Rect2.height/2 + Rect1.height/2
    && Rect2.y - Rect1.y < Rect2.height/2 + Rect1.height/2){
    Rect1.velocityY = Rect1.velocityY * (-1);
    Rect2.velocityY = Rect2.velocityY * (-1);
  }
  }
  function isTouching(obj1,obj2){
    if (obj2.x - obj1.x < obj1.width/2 + obj2.width/2
      && obj1.x - obj2.x < obj1.width/2 + obj2.width/2
      && obj2.y - obj1.y < obj1.height/2 + obj2.height/2
      && obj1.y - obj2.y < obj1.height/2 + obj2.height/2) {
        obj2.shapeColor = "red";
        obj1.shapeColor = "red";
    return true;
  }
  else {
    obj2.shapeColor = "green";
    obj1.shapeColor = "green";
    return false;
  }
  }