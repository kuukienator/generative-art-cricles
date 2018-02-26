import Canvas from './canvas';
import CircleCanvas from './circle-canvas';
import Circle from './circle';
import Point from './point';
import { BASE_COLORS } from '../config/index';
import { Util } from '../lib/util';
import HSLColor from './HSLColor';

export default class App {
    /**
     * Creates an instance of App.
     * @memberof App
     */
    constructor() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        const containerElement = document.getElementById('container');
        const canvas = new CircleCanvas(containerElement, width, height);
        //const canvas = new Canvas(containerElement, width, height);

        const colors = [
            //new HSLColor(360, 100, 100),
            new HSLColor(270, 90, 65),
            new HSLColor(318, 90, 65),
            new HSLColor(210, 90, 65)
            //new HSLColor(100, 90, 50)
        ];
        // canvas.setColors(this.createRandomizedColors(BASE_COLORS));
        canvas.setColors(colors);
        canvas.generateRandomCirclesRecursive(2000);
        canvas.draw();
    }

    /**
     *
     *
     * @param {Array<HSLColor>} baseColors
     * @returns {Array<HSLColor>}
     * @memberof App
     */
    createRandomizedColors(baseColors: Array<HSLColor>) {
        const colors: Array<HSLColor> = [];
        const baseColor = Util.getRandomEntry<HSLColor>(baseColors);

        for (let i = 0; i < 3; i++) {
            colors.push(
                new HSLColor(
                    baseColor.hue,
                    baseColor.saturation,
                    baseColor.lightness - i * 20
                )
            );
        }

        return colors;
    }
}
