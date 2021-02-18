//Insert level 9 code below
while (notDone()) {
        if (isPathForward()) {
          moveForward();
        } else {
          if (isPathLeft()) {
            turnLeft();
          }
          moveForward();
        }
      }
    
    
      while (notDone()) {
        moveForward();
        if (isPathForward()) {
          if (isPathRight()) {
            turnRight();
          } else {
            if (isPathLeft()) {
              turnLeft();
            }
          }
        } else {
          if (isPathLeft()) {
            turnLeft();
          } else {
            turnRight();
          }
        