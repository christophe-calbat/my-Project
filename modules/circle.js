const name = 'circle';

function degToRad(degrees) {
  return degrees * Math.PI / 180;
}

function draw(ctx, radius, x, y, color) {
  ctx.fillStyle = color;
  ctx.arc(x, y, radius, degToRad(0), degToRad(360), false);
  ctx.fill();

  return {
    x: x,
    y: y,
    color: color,
    radius: radius
  };
}

function reportArea(radius, listId) {
  let listItem = document.createElement('li');
  listItem.textContent = `${name} area is ${Math.PI * radius**2}px squared.`

  let list = document.getElementById(listId);
  list.appendChild(listItem);
}

function reportPerimeter(radius, listId) {
  let listItem = document.createElement('li');
  listItem.textContent = `${name} perimeter is ${2 * Math.PI * radius}px.`

  let list = document.getElementById(listId);
  list.appendChild(listItem);
}

export { name, draw, reportArea, reportPerimeter };
