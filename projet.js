let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
console.log(canvas);
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();

let prompt = require("prompt");
// import { start, get } from "prompt";
let pilote = "";
prompt.start();
prompt.get("deplacement", (err, result)=>{
    pilote = result.deplacement
    console.log( "prompt.get result.deplacement >>>", pilote)


let grid = [
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];

let rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: [],
}

turnLeft = ((rover) => {
    switch(rover.direction) {
    case "N":
        rover.direction = "W";
        console.log(rover);
        break;
    case "W":
        rover.direction = "S";
        console.log(rover);
        break;
    case "S":
        rover.direction = "E";
        console.log(rover);
        // rfrflflfrfrffrflflfrflfrflfrflflfrfrflflfrf
        break;
    case "E":
        rover.direction = "N";
        console.log(rover);
        break;
    }
})
// turnLeft(rover)

turnRight = ((rover) => {
switch(rover.direction) {
    case "N":
        rover.direction = "E";
        console.log(rover);
        break;
    case "E":
        rover.direction = "S";
        console.log(rover);
        break;
    case "S":
        rover.direction = "W";
        console.log(rover);
        break;
    case "W":
        rover.direction = "N";
        console.log(rover);
        break;
    }
})
// turnRight(rover);

moveForward = ((rover) => {
    let log = {
        x: rover.x,
        y: rover.y,
    }
    rover.travelLog.push(log)
    // console.log("rover Y",rover.travelLog[0].y );
    // console.log("rover X",rover.travelLog[0].x );
    // console.log("rover X",rover.travelLog[0][0]);

    // if (rover.y > grid.length) {
    //     console.log("error");
    // }

    switch(rover.direction) {
        
        case "N":
            rover.y = rover.y -1;
            break;
        case "E":
            rover.x = rover.x +1;
            break;
        case "S":
            rover.y = rover.y +1;
            break;
        case "W":
            rover.x = rover.x -1;
            break;
    }
    if (rover.y === -1 ) {
        console.log("error")
        rover.y = rover.y +1;
    } else if (rover.x === +10) {
        console.error("error");
        rover.x = rover.x -1
    } else if (rover.y === +10) {
        console.error("error");
        rover.y = rover.y -1;
    } else    if (rover.x === -1) {
        console.log("error")
        rover.x = rover.x +1;
    }
    
    
    // if(rover.direction == "N") {
    //     rover.x = rover.x +1;
    // } else if (rover.direction == "E") {
    //     rover.x = rover.x +1;
    // } else if (rover.direction == "S") {
    //     rover.x = rover.x +1;
    // } else if (rover.direction == "W") {
    //     rover.x = rover.x +1;
    // } else {
    //     return null
    // }
})
// moveForward(rover)

moveBackward = ((rover) => {

    let log = {
        x: rover.x,
        y: rover.y,
    }
    rover.travelLog.push(log)
    
    switch(rover.direction) {
        case "N":
            rover.y = rover.y +1;
            break;
        case "E":
            rover.x = rover.x -1;
            break;
        case "S":
            rover.y = rover.y -1;
            break;
        case "W":
            rover.x = rover.x +1;
            break;
    }

    // if (rover.x === -1) {
    //     console.log("error")
    //     rover.x = rover.x +1;
    // }
})

// moveBackward(rover)

piloteRover = ((pilote) => {
    for(let i = 0; i < pilote.length; i++) {
        if (pilote[i] == "r") {
            turnRight(rover);
            console.log(rover)
        } else if (pilote[i] == "l") {
            turnLeft(rover);
            console.log(rover)
        } else if (pilote[i] == "f") {
            moveForward(rover);
            console.log(rover)
        } else if (pilote[i] == "b") {
            moveBackward(rover)
            console.log(rover);
        } else if (pilote !== "r" || "l" || "f" || "b") {
            console.log("error")
        }
    }
    // console.table(grid)
    grid[rover.y][rover.x] = rover.direction;
    console.table(grid);
})
piloteRover(pilote)

})







