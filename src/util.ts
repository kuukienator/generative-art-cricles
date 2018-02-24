import HSLColor from './HSLColor';

/**
 *
 *
 * @export
 * @class Util
 */
export class Util {
    /**
     *
     *
     * @static
     * @param {number} min
     * @param {number} max
     * @returns {number}
     * @memberof Util
     */
    static getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

export const COLORS: Array<HSLColor> = [
    new HSLColor(270, 90, 90),
    new HSLColor(270, 90, 80),
    new HSLColor(270, 90, 70)
];

export const CIRCLE_MARGIN: number = 10;
