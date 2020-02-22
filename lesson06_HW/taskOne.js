let plane = [
    [2,2], // A
    [2,8], // B
    [5,5], // C
    [6,3], // D
    [6,7], // E
    [7,4], // F
    [7,8]  // G
];
function getClosestPoint(plane) {
    const planeLength = plane.length;
    let currentDistance = null;
    let firstPoint, secondPoint;
    let minDistance = Infinity;
    for(let i = 0; i < planeLength; i++){
        for(let j = i + 1; j < planeLength; j++){
            currentDistance = Math.sqrt(Math.pow((plane[i][0] - plane[j][0]),2) + Math.pow((plane[i][1] - plane[j][1]),2));
            if(currentDistance < minDistance){
                minDistance = currentDistance;
                firstPoint = plane[i];
                secondPoint = plane[j];
            }
        }
    };
    return [firstPoint, secondPoint];
}
console.log(getClosestPoint(plane));