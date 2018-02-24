export default class HSLColor {
  hue: number;
  saturation: number;
  lightness: number;
  alpha: number;

  constructor(h: number, s: number, l: number, a = 1) {
    this.hue = h;
    this.saturation = s;
    this.lightness = l;
    this.alpha = a;
  }

  toString(): string {
    return `hsla(${this.hue},${this.saturation}%,${this.lightness}%,${
      this.alpha
    })`;
  }
}
