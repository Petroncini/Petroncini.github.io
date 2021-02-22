
tool.fixedDistance = 30
function onMouseMove (event) {
 
  var path = new Path.Circle({
  center: event.middlePoint,
  radius:Math.sin(0.2*event.count) *50
  })
  path.fillColor = {
  hue:event.count*3,
  saturation:  1,
  brightness:1
}

}