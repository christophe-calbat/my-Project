import { create, createReportList } from './modules/canvas.js';
import { name, draw, reportArea, reportPerimeter } from './modules/square.js';
import { name as circleName, draw as circleDraw, reportArea as circleReportArea, reportPerimeter as circleReportPerimeter} from './modules/circle.js'
import randomSquare from './modules/square.js';

let myCanvas = create('myCanvas', document.body, 480, 320);
let reportList = createReportList(myCanvas.id);

let square1 = draw(myCanvas.ctx, 50, 50, 100, 'blue');

let circle1 = circleDraw(myCanvas.ctx, 20, 50, 50, 'red',);



reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
circleReportArea(circle1.radius, reportList);
circleReportPerimeter(circle1.radius, reportList);

// Use the default
let square2 = randomSquare(myCanvas.ctx);
