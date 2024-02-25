
import {zimVee, Shape, Container} from "zimjs"

declare namespace zim {

    export var shapes:[string]
    export function makeShape(config_or_type?:string|zimVee, color?:string|zimVee, width?:number, height?:number): Shape
    function makeShape(config:{type?:string|zimVee, color?:string|zimVee, width?:number, height?:number }): Shape
    export function listShapes(): void;   

    export var icons:[string]
    export function makeIcon(config_or_type?:string|zimVee, color?:string|zimVee, scale?:number|zimVee, multi?:number, multiX?:number, multiY?:number, skewX?:number, skewY?:number, backing?:Container): Container
    function makeIcon(config: {type?:string|zimVee, color?:string|zimVee, scale?:number|zimVee, multi?:number, multiX?:number, multiY?:number, skewX?:number, skewY?:number, backing?:Container}): Container
    export function listIcons(): void;

    export function makePattern(config_or_type?:string|zimVee, colors?:string|zimVee, cols?:number, rows?:number, spacingH?:number, spacingV?:number, interval?:number, startPaused?:boolean, backgroundColor?:string, gradient?:boolean, cache?:boolean): Container
    function makePattern(config: {type?:string|zimVee, colors?:string|zimVee, cols?:number, rows?:number, spacingH?:number, spacingV?:number, interval?:number, startPaused?:boolean, backgroundColor?:string, gradient?:boolean, cache?:boolean}): Container
    export function listPatterns(): void;

}

export = zim


