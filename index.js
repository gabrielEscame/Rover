// Rover Object Goes Here
// ======================
const roverMars = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: [{ x: 0, y: 0 }]
};



// ======================
function turnLeft(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;
  }
  console.log(`turnLeft was called! Rover direction: ${rover.direction}`);

};

function turnRight(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  }
  console.log(`turnRight was called! Rover direction: ${rover.direction}`);

};


function moveForward(rover) {
  if (rover.direction == 'N') {
    rover.y--;
  } else if (rover.direction == 'W') {
    rover.x--;
  } else if (rover.direction == 'S') {
    rover.y++;
  } else if (rover.direction == 'E') {
    rover.x++;
  }
  console.log(`moveForward was called. Rover postion: x=${rover.x}, y=${rover.y}`);
  let newPosition = { x: rover.x, y: rover.y };
  rover.travelLog.push(newPosition);
}

function moveRover(rover, commands) {

  for (let i = 0; i < commands.length; i++) {
    let command = commands[i];
    switch (command) {
      case 'l':
        turnLeft(rover);
        break;
      case 'r':
        turnRight(rover);
        break;
      case 'f':
        moveForward(rover);
    }
  }

}




