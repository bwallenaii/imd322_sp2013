var main = document.getElementById("main");
var two = new Two({
    fullscreen: true
});

two.appendTo(main);

var orbitStroke = "#666"
centerX = 500,
centerY = 300,
diameter = 200,
earthAngle = 0,
moonAngle = 0,
mDiameter = 75,
earthSpeed = 0.5,
moonSpeed = 6;

function getPositions(angle, orbit, offx, offy) {
    return {
        x: (Math.cos(angle * Math.PI / 180) * orbit) + offx,
        y: (Math.sin(angle * Math.PI / 180) * orbit) + offy
    };
}   

var planets = two.makeGroup();
var sun = two.makeCircle(centerX,centerY,75);
sun.fill = "#eeee00";
sun.stroke = "#aa0000";
sun.linewidth = 6;

var earth = two.makeCircle(0,0, 50);
earth.fill = "#000099";
earth.stroke = "#00c";
earth.linewidth = 3;

var moonStart = getPositions(moonAngle, mDiameter, 0,0);
var planetStart = getPositions(earthAngle, diameter, centerX,centerY);
var moon = two.makeCircle(moonStart.x, moonStart.y, 10);
moon.fill = "#999";
moon.stroke = "#555";
moon.linewidth = 2;

planets.add(earth);
planets.add(moon);
planets.translation.x = planetStart.x;
planets.translation.y = planetStart.y;

two.bind("update", function(){
    earthAngle += earthSpeed;
    moonAngle += moonSpeed;
    var planetPos = getPositions(earthAngle, diameter, centerX, centerY);
    var moonPos = getPositions(moonAngle, mDiameter, 0,0);
    planets.translation.x = planetPos.x;
    planets.translation.y = planetPos.y;
    moon.translation.x = moonPos.x;
    moon.translation.y = moonPos.y;
});

two.play();