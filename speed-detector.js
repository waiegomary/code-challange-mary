// program that takes the speed of cars as input and calculates demerit points
function speedDetector(speed){
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    let demeritPoints = 0;

    if (speed <= speedLimit) {
        console.log("OK");
    }else{
        demeritPoints = ((speed - speedLimit)/kmPerDemeritPoint);
        console.log(`points: ${demeritPoints}`);
        
        if (demeritPoints >= 12){
            console.log("Licence suspender");
        }
    }
}