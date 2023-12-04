var shapeName = prompt("enter the name of the shape");

switch (shapeName) {
  case "circle":
    var reduis = prompt("Enter Reduis Of Circle");
    area = circleArea(reduis).toFixed(3);
    alert(`Circle Area: ${area}`);
    break;

  case "triangle":
    var base = prompt("Enter Base Of Triangle");
    var height = prompt("Enter height Of Triangle");
    area = triangleArea(base, height).toFixed(3);
    alert(`Triangle Area: ${area}`);
    break;

  case "square":
    var length = prompt("Enter length Of square");
    area = squareArea(length);
    alert(`Square Area: ${area}`);
    break;

  case "rectangle":
    var length = prompt("Enter length Of rectangle");
    var width = prompt("Enter width Of rectangle");
    area = rectangleArea(length, width);
    alert(`Rectangle Area: ${area}`);
    break;

  case "parallelogram":
    var base = prompt("Enter base of parallelogram");
    var height = prompt("Enter Height of parallelogram");
    area = parallelogramArea(base, height);
    alert(`Parallelogram Area: ${area}`);
    break;

  case "trapezium":
    var a = prompt("Enter first length of parallel sides");
    var b = prompt("Enter second length of parallel sides");
    var h = prompt("Enter height");
    area = trapeziumArea(a, b, h);
    alert(`Trapezium Area: ${area}`);
    break;

  case "ellipse":
    var a = prompt("1/2 minor axis");
    var b = prompt("1/2 major axis");
    area = ellipseArea(a, b).toFixed(3);
    alert(`Ellipse Area: ${area}`);
    break;

  default:
    alert("Area of this shape not available");
}

function circleArea(raduis) {
  return Math.PI * Math.pow(raduis, 2);
}

function triangleArea(base, height) {
  return (1 / 2) * base * height;
}

function squareArea(length) {
  return Math.pow(length, 2);
}

function rectangleArea(length, width) {
  return length * width;
}

function parallelogramArea(base, height) {
  return base * height;
}

function trapeziumArea(a, b, h) {
  return (1 / 2) * (a + b) * h;
}

function ellipseArea(a, b) {
  return Math.PI * a * b;
}
