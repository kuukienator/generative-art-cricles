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

    /**
     *
     *
     * @static
     * @template T
     * @param {Array<T>} list
     * @returns {T}
     * @memberof Util
     */
    static getRandomEntry<T>(list: Array<T>): T {
        return list[this.getRandomInt(0, list.length)];
    }
}
