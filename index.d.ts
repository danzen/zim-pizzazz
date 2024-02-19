
declare namespace zim {

    export readonly var shapes:[string]
    export function makeShape(type?:string|zimVee, color?:string|zimVee, width?:number, height?:number): zim.Shape;
    export function listShapes(): void;

    export readonly var icons:[string]
    export function makeIcon(type?:string|zimVee, color?:string|zimVee, scale?:number|zimVee, multi?:number, multiX?:number, multiY?:number, skewX?:number, skewY?:number, backing?:zim.Container): zim.Container;
    export function listIcons(): void;

    export function makePattern(type?:string|zimVee, colors?:string|zimVee, cols?:number, rows?:number, spacingH?:number, spacingV?:number, interval?:number, startPaused?:boolean, backgroundColor?:string, gradient?:boolean, cache?:boolean): zim.Container;
    export function listPatterns(): void;

    export const shapes = pizzazz.shapes;
    export const makeShape = pizzazz.makeShape;
    export const listShapes = pizzazz.listShapes;

    export const makeIcon = pizzazz.makeIcon;
    export const listIcons = pizzazz.listIcons;

    export const makePattern = pizzazz.makePattern;
    export const listPatterns = pizzazz.listPatterns;

}

export = zim


