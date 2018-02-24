import Canvas from './canvas';
import CircleCanvas from './circle-canvas';
import Circle from './circle';
import Point from './point';

export default class App {
    constructor() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        const containerElement = document.getElementById('container');
        const canvas = new CircleCanvas(containerElement, width, height);
        //const canvas = new Canvas(containerElement, width, height);

        canvas.generateRandomCircles(200);
        canvas.draw();
    }
}
