var el = document.getElementById("main"),
    two = new Two({ 
        fullscreen: true
    }).appendTo(el);

var earthAngle = 0,
    moonAngle  = 0,
    distance   = 30,
    radius     = 50,
    padding    = 100,
    orbit      = 200,
    offset     = orbit + padding,
    orbits     = two.makeGroup();

var earthOrbit = two.makeCircle(offset, offset, orbit);
earthOrbit.noFill();
earthOrbit.linewidth = 4;
earthOrbit.stroke = "#ccc";
orbits.add(earthOrbit);

var pos = getPositions(earthAngle++, orbit),
    earth = two.makeCircle(pos.x + offset, pos.y + offset, radius);
earth.stroke = "#123456";
earth.linewidth = 4;
earth.fill = "#194878";

var moonOrbit = two.makeCircle(earth.translation.x, earth.translation.y, radius + distance);
moonOrbit.noFill();
moonOrbit.linewidth = 4;
moonOrbit.stroke = "#ccc";
orbits.add(moonOrbit);

var pos = getPositions(moonAngle, radius + distance), 
    moon = two.makeCircle(earth.translation.x + pos.x, earth.translation.y + pos.y, radius / 4);

moonAngle += 5;
moon.fill = "#474747";

two.bind("update", function (frameCount) {
        var pos = getPositions(earthAngle++, orbit);
        earth.translation.x = pos.x + offset;
        earth.translation.y = pos.y + offset;

        var moonPos = getPositions(moonAngle, radius + distance);
        moon.translation.x = earth.translation.x + moonPos.x;
        moon.translation.y = earth.translation.y + moonPos.y;
        moonAngle += 5;

        moonOrbit.translation.x = earth.translation.x;
        moonOrbit.translation.y = earth.translation.y;
});

orbits.visible = false;

two.play();

function getPositions(angle, orbit) {
    return {
        x: Math.cos(angle * Math.PI / 180) * orbit,
        y: Math.sin(angle * Math.PI / 180) * orbit
    };
}
