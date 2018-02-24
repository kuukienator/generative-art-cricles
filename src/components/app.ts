import Canvas from './canvas';
import CircleCanvas from './circle-canvas';
import Circle from './circle';
import Point from './point';
import { COLORS, BASE_COLORS } from '../config/index';
import { Util } from '../lib/util';
import HSLColor from './HSLColor';

export default class App {
    constructor() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        const containerElement = document.getElementById('container');
        const canvas = new CircleCanvas(containerElement, width, height);
        //const canvas = new Canvas(containerElement, width, height);

        const baseColor = Util.getRandomEntry<HSLColor>(BASE_COLORS);

        for (let i = 0; i < 3; i++) {
            COLORS.push(
                new HSLColor(
                    baseColor.hue,
                    baseColor.saturation,
                    baseColor.lightness - i * 20
                )
            );
        }

        canvas.generateRandomCircles(350);
        canvas.draw();
    }
}
