/**
 *
 *
 * @export
 * @class HSLColor
 */
export default class HSLColor {
    hue: number;
    saturation: number;
    lightness: number;
    alpha: number;

    /**
     * Creates an instance of HSLColor.
     * @param {number} h
     * @param {number} s
     * @param {number} l
     * @param {number} [a=1]
     * @memberof HSLColor
     */
    constructor(h: number, s: number, l: number, a = 1) {
        this.hue = h;
        this.saturation = s;
        this.lightness = l;
        this.alpha = a;
    }

    /**
     *
     *
     * @returns {string}
     * @memberof HSLColor
     */
    toString(): string {
        return `hsla(${this.hue},${this.saturation}%,${this.lightness}%,${
            this.alpha
        })`;
    }
}
