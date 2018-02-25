import HSLColor from './../components/HSLColor';

export const BASE_COLORS: Array<HSLColor> = [
    new HSLColor(270, 90, 80),
    new HSLColor(318, 90, 80),
    new HSLColor(210, 90, 80),
    new HSLColor(100, 90, 80)
];

export const COLORS: Array<HSLColor> = [];
export const CIRCLE_MARGIN: number = 5;
export const MAX_ITERATIONS: number = 50000;
export const MAX_ITERATIONS_PER_SECTION: number = 2000;
export const MIN_RADIUS: number = 5;
export const MAX_RADIUS: number = 250;
export const IS_DEBUG: boolean = true;
