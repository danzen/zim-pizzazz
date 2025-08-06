

import zim from "zimjs";
var pizzazz = {};


// ZIM - https://zimjs.com - Code Creativity!
// JavaScript Canvas Framework for General Interactive Media
// free to use - donations welcome of course! https://zimjs.com/donate

// ZIM PIZZAZZ - see https://zimjs.com/code#libraries for examples

// ~~~~~~~~~~~~~~~~~~~~~~~~
// DESCRIPTION - coded in 2016 (c) ZIM
// Pizzazz is a helper module for ZIM that adds a little design love!
// SEE also Pizzazz 2 for icons

// VERSION 1 - Shapes for Labels, Buttons and Panes
// See the ZIM Bit on Pizzazz for an example: https://zimjs.com/bits/view/pizzazz.html

// import this js file in the top of your code below where you import createjs
// you can get a custom zim.Shape (createjs.Shape with extra members)
// by using pizzazz.makeShape(type, color, width, height)
// and then pass this into the backing parameter in zim.Label, zim.Button or zim.Pane
// and rollBacking parameter in zim.Button
// pizzazz.listShapes() will list your shape options in the console

// DOCS
// Docs are provided at https://zimjs.com/docs.html
// See PIZZAZZ MODULE at bottom

pizzazz.shapes = { 
    menu:[[1.2,1.2],[0,3],"AAJD5InKBGIiBp9IIwCgIJViMIg7Jpg", new createjs.Rectangle(-58,-31.9,116,64)],
    bat:[[1.6,1.7],[-1,2],"ACGCYIiKBVIh9g3ImkBaQgej8D/keICLBzIA3AuIA3haIBCBAIAghAIBMBPIBPg5IBlhiQELEjAHD8g", new createjs.Rectangle(-55.3,-27.2,110.8,54.5)],
    lips:[[1.6,1.6],[1,1],"AjpC+QhYgnhwhtIhvgKQAohMBZhNQBghTBWgRQBQgPBEAZQA6AWAgArQBnhgB+AfQBiAYBUBCQBBA0BABRIhMAUQh+B8huAnQhKAbiYAFIgeABQh7AAhXgmg", new createjs.Rectangle(-54.5,-22.8,109,45.7)],
    magnet:[[1.2,1.2],[0,0],"AE2E9IprAAQhrAAgZhSIgBgFQh0gDAAh5IAAjKQAAh3BygGIAAgDIAAAAQAWhcBxAAIJrAAQBwAAAWBcIABADQByAGAAB3IAADKQAAB4hzAEIgCAFIAAABQgaBRhqAAIAAAAgAk1EfIJrAAQBPAAAXg4Is2AAQAWA4BPAAgAmejdIM8AAQgThBhVAAIprAAQhVAAgUBBg", new createjs.Rectangle(-56,-31.7,112,63.5)],
    stash:[[1.6,1.4],[-2,-3],"AlQkKIFPBBIEMhGIEnILIlZhaImOAAIl8Bug", new createjs.Rectangle(-56.2,-27.2,112.5,54.5)],
    bolt:[[1.5,1.5],[-10,-1],"ApCiYIFZiqIDQClICwiOIGsIlIAAABIl9iPIiwClIidhcIjhCOg", new createjs.Rectangle(-57.9,-32.3,115.9,64.7)],
    cloud:[[1.2,1.2],[0,2],"AjwEzQg7gdgXgkQgyAahBAAQhNAAg3glQg2gkAAg0QAAg0A2glQASgMAVgIQgPgiAAgmQAAhXBFg/QBDg9BggBQAuAAAoAPQAMgfAWgbQA1g+BJAAQBJAAAzA+QAUAYAMAbQAugmA+AAQBCAAAuAoQAuAoABA3QAqgZA1AAQBIAAAzAtQAzAugBBBQABA/gzAuQgRAPgTAJQADAOAAAOQAAA7g2AqQg2AqhNAAQgpAAgjgMQgUAQgcANQhiAxiJAAQiLAAhigxg", new createjs.Rectangle(-62.5,-35.6,125,71.3)],
    pow:[[1.2,1.2],[4,3],"AA4EOIjACuIh9i5IkZBAIB/j6Ikoi3IFygnIihj9IGWC8ICPjlICvELIFojnIhQFJIDSBgIjNB4IBBDpIkYhwIgoC5g", new createjs.Rectangle(-71.2,-44.4,142.5,88.9)],
    drip:[[1.3,1.3],[0,0],"AmhEFQhPgxgrg6Qg0hHAAhTQAAhSA0hGQArg6BPgxQCuhuDzABQD1gBCtBuQCuBsAACXQAACZiuBsQitBtj1gBQjzABiuhtgAl0joQibBhAACHQAACJCbBgQCcBhDYAAQDaAACchhQCbhgAAiJQAAiHibhhQichgjaAAQjYAAicBggAkqC7Qh7hNAAhuQAAhrB7hNQB8hOCuAAQCvAAB7BOQB9BNAABrQAABuh9BNQh7BNivAAQiuAAh8hNg", new createjs.Rectangle(-59.2,-37,118.4,74)],
    drop:[[1.5,1.5],[0,0],"AkdEeQh3h3AAinQAAimB3h2QB3h4CmAAQCnAAB3B4QB3B2AACmQAACnh3B3Qh3B3inAAQimAAh3h3gAj+j+QhqBrAACTQAACVBqBqQBrBrCTgBQCVABBqhrQBrhqgBiVQABiThrhrQhqhqiVAAQiTAAhrBqgAjMDMQhThUAAh4QAAh2BThUQBWhVB2AAQB3AABVBVQBVBUAAB2QAAB4hVBUQhVBVh3AAQh2AAhWhVg", new createjs.Rectangle(-40.5,-40.5,81,81)],
    circle:[[1.3,1.3],[0,0],"Aj3D2QhlhlgBiRQABiQBlhlQBnhoCQAAQCRAABlBoQBoBlAACQQAACRhoBlQhlBoiRAAQiQAAhnhog", new createjs.Rectangle(-35,-35,70,70)],
    folds:[[1,1.2],[-1,0],"AiiDuIj9BMIjshMIAApBIDyBNIEIhNIEoBnID0hnIEBBAIAAJAIklg/IjnBmg", new createjs.Rectangle(-65.2,-34,130.5,68.1)],
    oval:[[1.15,1.15],[0,0],"AmTDTQhBgigogoQg/g+AAhLQAAhLA/g+QAogoBBgjQCnhWDsAAQDsAACnBWQCpBZAAB7QAAB7ipBYQinBZjsgBQjsABinhZg", new createjs.Rectangle(-57.2,-30,114.5,60)],
    kidney:[[1.4,1.4],[-2,-1],"ADGDjQiRhfh+BaQiBBbiRhZQiQhYA0inQA0ipC6gzQC6gzCqBIQCrBJBUCJQBTCHhMBoQgnA2g6AAQg1AAhFgug", new createjs.Rectangle(-45.4,-27.3,90.8,54.7)],
    boom:[[1.5,1.5],[-3,7],"Ai1ETQhyg9hFhpQhFhqgfjOQgfjQD+CpQD8CpCzgKQCzgKBMAfQBMAfivCeQivCgh4AYQgiAHggAAQhVAAhRgrg", new createjs.Rectangle(-46.9,-31.9,93.8,63.8)],
    roadside:[[1.1,1.1],[1,-1],"AHCEuQlCgjoggDQhGgLgpgeQg8gsgJhaIgGhGIgMiYQADhOAzghQAcgTBAgJQBggOFAgKQFggLC3ANQCBgEADCAIgSCgIgXC0QgHBIggAhQgcAbgwAAIgJAAg",new createjs.Rectangle(-61.6,-30.3,123.2,60.6)]
}

pizzazz.makeShape = function(type, color, width, height) {
    var sig = "type, color, width, height";
	var duo; if (duo = zob(pizzazz.makeShape, arguments, sig)) return duo;
    if (zot(type)) type = "cloud";		
    if (zot(color)) color = "black";
    type = zik(type);
    color = zik(color);
    type = type.toLowerCase();
    var data = pizzazz.shapes[type];
    if (zot(data)) data = pizzazz.shapes["cloud"];
    var sX = data[0][0]; // scale adjust
    var sY = data[0][1];
    var rX = data[1][0]; // registration point adjust
    var rY = data[1][1];
    var rect = data[3];
    var scaleX = 1;
    var scaleY = 1;
    if (zot(width) && zot(height)) {
        width = rect.width*sX;
        height = rect.height*sY;
    } else if (zot(width)) {
        width = height / rect.height * rect.width;
        // height is what is provided
    } else if (zot(height)) {
        height = width / rect.width * rect.height;
        // width is what is provided
    }
    scaleX = width / rect.width;
    scaleY = height / rect.height;

    var shape = new zim.Shape();
    shape.setBounds(rect.x, rect.y, rect.width, rect.height);
    shape.regX = rX;
    shape.regY = rY;
    var fill = shape.graphics.f(color).command;
    shape.graphics.p(data[2]);
    shape.scaleX = scaleX;
    shape.scaleY = scaleY;
    shape.type = type;

    shape.dye = function(color) {
        fill.style = color;
    }
    Object.defineProperty(shape, 'color', {
        get: function() {
            return color;
        },
        set: function(value) {
            color = value;
            shape.dye(value);
        }
    });

    return shape;
}

pizzazz.listShapes = function() {
    for (var p in pizzazz.shapes) {
        zog(p);
    }
}


// ZIM - https://zimjs.com - Code Creativity!
// JavaScript Canvas Framework for General Interactive Media
// free to use - donations welcome of course! https://zimjs.com/donate

// ZIM PIZZAZZ 2 - see https://zimjs.com/code#libraries for examples

// ~~~~~~~~~~~~~~~~~~~~~~~~
// DESCRIPTION - coded in 2016 (c) ZIM
// Pizzazz 2 is a helper module for ZIM that adds a little design love!
// SEE also Pizzazz for background shapes

// VERSION 2 - Icons for Labels, Buttons and Panes
// See the ZIM Bit on Pizzazz for an example: https://zimjs.com/bits/view/icons.html

// import this js file in the top of your code below where you import createjs
// you can get a custom zim.Container with icon and backing shape
// by using pizzazz.makeIcon(type, color, backingColor, backingShape, size)
// and then pass this into the backing parameter in zim.Label, zim.Button or zim.Pane
// and rollBacking parameter in zim.Button
// pizzazz.listIcons() will list your icon options in the console

// DOCS
// Docs are provided at https://zimjs.com/docs.html
// See PIZZAZZ MODULE at bottom

pizzazz.icons = {
    play:[[1,1],[-4,0],"AiJieIETCeIkTCfg", new createjs.Rectangle(-13.8,-16,27.7,32)],
    stop:[[1,1],[0,0],"AhuBvIAAjdIDdAAIAADdg", new createjs.Rectangle(-11.2,-11.2,22.4,22.4)],
    pause:[[1,1],[0,0],"AAhCLIAAkVIBXAAIAAEVgAh3CLIAAkVIBXAAIAAEVg", new createjs.Rectangle(-12,-13.9,24.1,27.9)],
    restart:[[1,1],[-1,0],"AiFCLIAAkVIBXAAIAAEVgAgiAAICoiHIAAEQg", new createjs.Rectangle(-13.4,-13.9,26.9,27.9)],
    rewind:[[1,1],[3,0],"AAGAAICqiIIAAERgAivAAICqiIIAAERg", new createjs.Rectangle(-17.6,-13.7,35.3,27.5)],
    fastforward:[[1,1],[-3,0],"AAGiIICqCIIiqCJgAiviIICqCIIiqCJg", new createjs.Rectangle(-17.6,-13.7,35.3,27.5)],
    sound:[[1,1],[1,0],"AgXBTIhnAAIAAijIBmAAICXhbIAAFXg", new createjs.Rectangle(-12.7,-17.3,25.5,34.6)],
    mute:[[1,1],[1,0],"AgXBTIhnAAIAAijIBmAAICXhbIAAFXgABXA+IAUgVIgtgqIAtgtIgUgVIgtAsIgrgsIgVAVIArAtIgsArIAWAUIArgtg", new createjs.Rectangle(-12.7,-17.3,25.5,34.6)],
    close:[[1,1],[0,0],"AAAA4Ih6B8Ig5g4IB8h8Ih7h6IA4g5IB6B8IB7h8IA5A5Ih8B6IB8B7Ig5A5g", new createjs.Rectangle(-18,-18,36.1,36)],
    settings:[[1,1],[0,0],"AgoDhIAAg2QgbgHgWgOIgnAmIg8g7IAngnQgOgXgGgZIg3AAIAAhSIA2AAQAGgaAPgXIgngnIA7g8IAnAnQAXgPAbgGIAAg2IBSAAIAAA2QAaAGAXAPIAmgnIA8A8IgmAnQAOAWAGAbIA2gBIAABTIg2AAQgHAagOAXIAmAmIg7A7IgmglQgXANgaAHIAAA2gAg8g7QgYAYAAAjQAAAjAYAZQAaAYAiAAQAiAAAZgYQAZgZAAgjQAAgjgZgYQgZgZgiAAQgiAAgaAZg", new createjs.Rectangle(-22.5,-22.5,45.2,45.1)],
    menu:[[1,1],[0,0],"AixClIAAhGIFjAAIAABGgAixAiIAAhEIFjAAIAABEgAixheIAAhGIFjAAIAABGg", new createjs.Rectangle(-17.8,-16.6,35.7,33.2)],
    maximize:[[1,1],[0,0],"AA3DGIAAgyIBeAAIAAhdIAyAAIAACPgAjGDGIAAiPIAyAAIAABdIBiAAIAAAygAhMBOIAAicICcAAIAACcgACVgyIAAhhIheAAIAAgyICQAAIAACTgAjGgyIAAiTICUAAIAAAyIhiAAIAABhg", new createjs.Rectangle(-19.9,-19.9,39.8,39.8)],
    arrow:[[1,1],[-3,0],"AhFBdIiWAAIAAi4ICWAAIAAh7IEhDWIkhDXg", new createjs.Rectangle(-22,-21.5,44.1,43)],
    arrowthin:[[1,1],[-1,0],"AgKAqIi9AAIAAhSIC9AAIAAh0IDSCcIjSCdg", new createjs.Rectangle(-20,-15.7,40.1,31.5)],
    arrowstick:[[1,1],[-1,0],"AhBCIIBZhbIjWAAIAAhVIDaAAIhdhfIA9g+IDDDFIAAAAIAAAAIjDDGg", new createjs.Rectangle(-19.2,-19.8,38.4,39.7)],
    arrowhollow:[[1,1],[-2,0],"Ag/BhIivAAIAAjBICvAAIAAiDIEuDjIkuDkgAjGA4ICvAAIAABdIDDiVIjDiTIAABcIivAAg", new createjs.Rectangle(-23.9,-22.9,47.9,45.8)],
    arrowline:[[1,1],[2,0],"AhQAqIiOAAIAAhSICOAAIAAh0IDSCcIjSCdgACICLIAAkVIBXAAIAAEVg",new createjs.Rectangle(-22.3,-15.7,44.8,31.5)],
    rotate:[[1,1],[0,2],"AhfC7Qg+gogRhJIAAAAQgQhJAog9QAkg3A9gSQAJgFAJgBQAMgDAMAAIACAjIAAhrICcB0IicB0IAAhaIgOACIAAAAIgIADQgmALgWAiQgYAkAJAtIAAgBQAKAtAnAZQAmAYAqgKIABAAQAsgJAYgnIABgBQAGgJAEgJIAAAAQAGgRABgRIBGADQgBAcgLAcQgGAQgKAPQgoBAhKAQQgUAEgSAAQgyAAgtgcg", new createjs.Rectangle(-18,-21.5,36.1,43.2)],
    heart:[[1,1],[0,-3],"AgCC2QgRgTgogmQgmgjgSgVQgcgfgPgZQgSgcgIglQgIgnALggQAJgdAagPQAfgVArAKQAmAIAhAdQAggdAmgJQAqgKAfAWQAhAXAJAhQAKAhgPAmQgNAigPAXQgPAZgZAcQgSAVgmAjQgpAlgPATIAAABIgBAAg", new createjs.Rectangle(-18.9,-18.3,37.8,36.7)],
    marker:[[1,1],[0,-1],"AAADtIAAAAIAAgBQhdiJgcgyQgthMAEhDQAEhDAxgnQAugkA/AAIAAAAQBAAAAuAkQAyAnADBDQAEBDgsBMQgdAyheCJIAAABIAAAAgAg6iUQgZAZAAAkQAAAkAZAZQAaAaAiAAQAkAAAYgaQAagZAAgkQAAgkgagZQgYgZgkAAQgiAAgaAZg", new createjs.Rectangle(-16.4,-23.7,32.8,47.6)],
    info:[[.7,.7],[0,1],"Ag/DRIAAjbIB/AAIAADbgAg0hQQgWgWABgfQgBgfAWgWQAXgWAdAAQAeAAAXAWQAWAWgBAfQABAfgWAWQgXAWgeAAQgdAAgXgWg", new createjs.Rectangle(-7.5,-20.9,15,42)],
    home:[[1,1],[0,1],"AAtDPIAAh4QgCgQgLgMQgNgNgTAAQgRAAgNANQgMAMgBAQIAAAAIAAB4Ih3AAIAAjPIg+AAIDgjOIDhDOIg/AAIAADPg", new createjs.Rectangle(-22.5,-20.7,45.2,41.6)],
    edit:[[1,1],[0,0],"AigA2IBqBqIiOAmgAiPAmICxiwIBoBoIiwCxgAAzibIApgqIBpBpIgqApg", new createjs.Rectangle(-19.7,-19.8,39.5,39.7)],
    magnify:[[1,1],[0,0],"AAnBcQgnAagxAAIgBAAQhDgBgvgwQgxgwgBhCIAAAAQAAhFAwgwQAxgwBEAAQBDgBAwAxQAwAwAABFQAAAtgVAiIB6B5Ig4A4gAh0hwQgcAbAAAoQAAAnAcAZIABAAQAcAcAmABIABAAQAnAAAZgcIABAAQAbgaAAgnQAAgogbgbIgBgBQgZgcgoABIAAAAQgoAAgbAcg", new createjs.Rectangle(-21.5,-21.1,43.1,42.3)],
    checkmark:[[1,1],[0,0],"AjPAZIA0hDIBxBXICzjKIBHA3IjxEFg", new createjs.Rectangle(-21.5,-18.1,43.1,38)],
    angle:[[1,1],[-2,0],"AiNC5IC4i5Ii4i5IAxgxIDqDqIjqDrg", new createjs.Rectangle(-15,-22,30,44)],
    garbage:[[1,1],[0,0],"ABFDjIAAlZIBhAAIgbFZgAgrDjIAAlZIBWAAIAAFZgAiKDjIgblZIBhAAIAAFZgAi2iNIAAg3IBeAAIAAgeICwAAIAAAeIBfAAIAAA3g", new createjs.Rectangle(-18,-22,36,44)],
    move:[[1,1],[0,0],"AhcCqIA4AAIABhmIBHAAIAABmIA5AAIhdBdgACqAkIhmAAIAAhHIBmgBIAAg4IBdBcIhdBdgAkGAAIBdhcIAAA4IBkABIAABHIhlAAIAAA4gAgjhFIAAhlIg4AAIBbhcIBdBcIg5AAIAABlg", new createjs.Rectangle(-26,-26,52,52)],
    scale:[[1,1],[0,0],"ABTDWIAngnIhShUIAzgzIBTBTIAognIAACCgAjVDWIAAiDIAnAoIBUhTIAzAzIhTBTIAnAogAAohaIBThTIgngoICCAAIAACDIgognIhTBSgAith6IgoAnIAAiCICDAAIgoAoIBTBTIgzAzg", new createjs.Rectangle(-22,-22,44,44)],
    rotate2:[[1,1],[0,0],"AgbDMQhEgJgygyQg8g9gBhUQAAhHAqg1IAxAeIgCAEQgfAnABAzQAAA9AqArQAiAhAsAIIAAhSIByBqIhyBrgACDBIQASghABgnQAAg9gsgsQgegegmgJIAABTIhxhrIBxhrIAABIQA9ALAvAuQA8A9AABVQABA2gaAuIgBACg", new createjs.Rectangle(-20,-26,40,52)],
    save:[[1,1],[0,0],"AinDZQgdAAgKgKQgLgLAAgcIAAlPQAAgcALgLQAKgKAdAAID0AAQANAABABAQA/A/AAAMIAAD1QABAcgLALQgLAKgcAAgAgwAPIhKACIB6CIIB7iIIhLgCIAAiVIhfAAg", new createjs.Rectangle(-20,-21,40,42)],
    mark:[[1,1],[0,0],"AACBNIiDB8IAAmRIEEAAIAAGRg", new createjs.Rectangle(-12,-19,24,38)],
    link:[[1,1],[0,0],"AhADkQhEAAgxgwQgwgxAAhEQAAhEAwgwQAlglAxgIQAJguAjgiQAxgxBDAAQBEAAAxAxQAwAwAABEQAABEgwAwQglAlgwAJQgKAtgjAjQgxAwhDAAIAAAAgAiRgRQgiAgAAAwQAAAvAiAiQAhAiAwAAQAwAAAggiQAUgTAIgYQg2gGgpgpQgqgrgFg5QgbAIgUAVgAAyAzQgEgogegcQgbgdglgEQADAoAeAdQAbAcAmAEIAAAAgAgPiPQgUATgIAYQA2AGApApQArArAEA5QAbgIAUgUQAighAAgwQAAgvgigiQghgigwAAQgwAAggAig", new createjs.Rectangle(-22,-22,44,44)],
    chart:[[1,1],[0,0],"AjbDcIAAm3IG3AAIAAG3gACigqIAADeIASAAIAAlnIlnAAIAAFnIAPAAIAAiVIBGAAIAACVIAPAAIAAj9IBGAAIAAD9IAOAAIAAi7IBGAAIAAC7IARAAIAAjeg", new createjs.Rectangle(-22,-22,44,44)],
    pic:[[1,1],[0,0],"AjbDcIAAm3IG3AAIAAG3gAizAoICqhzIBRBlIBshQIAAh9IlnAAg", new createjs.Rectangle(-22,-22,44,44)],

}

pizzazz.makeIcon = function(type, color, scale, multi, multiAlpha, multiScale, multiX, multiY, skewX, skewY, backing) {
    var sig = "type, color, scale, multi, multiAlpha, multiScale, multiX, multiY, skewX, skewY, backing";
	var duo; if (duo = zob(pizzazz.makeIcon, arguments, sig)) return duo;
    if (zot(type)) type = "play";		
    if (zot(color)) color = "black";
    if (zot(scale)) scale = 1;
    if (zot(multi)) multi = 1; // one icon
    if (zot(multiAlpha)) multiAlpha = .5; // for second icon
    if (zot(multiScale)) multiScale = .3; // for each subsequent icons
    if (zot(multiX)) multiX = 0; // for each subsequent icons
    if (zot(multiY)) multiY = 0; // for each subsequent icons
    if (zot(skewX)) skewX = 0;
    if (zot(skewY)) skewY = 0;
    var data = pizzazz.icons[type];
    if (zot(data)) data = pizzazz.icons["play"];
    var sX = data[0][0]; // scale adjust - not used for icons
    var sY = data[0][1];
    var rX = data[1][0]; // registration point adjust
    var rY = data[1][1];
    var rect = data[3];

    type = zik(type);
    color = zik(color);
    scale = zik(scale);
    type = type.toLowerCase();

    var shape = new zim.Shape();
    shape.setBounds(rect.x, rect.y, rect.width, rect.height);
    shape.regX = rX;
    shape.regY = rY;
    shape.skewX = skewX;
    shape.skewY = skewY;
    var fill = shape.graphics.f(color).command;
    shape.graphics.p(data[2]);
    shape.scaleX = scale;
    shape.scaleY = scale;

    var container = new zim.Container();
    container.type = type;
    container.shape = shape; // original icon shape
    container.addChild(shape);
    if (multi > 1) {
        var copy;
        for (var i=1; i<multi; i++) {
            copy = shape.clone();
            copy.scaleX = copy.scaleY = scale*(1+i*multiScale);
            copy.alpha = multiAlpha / i;
            copy.x = multiX * i;
            copy.y = multiY * i;
            container.addChild(copy);
        }
    }
    if (!zot(backing)) {
        backing.centerReg();
        container.addChildAt(backing);
    }
    container.dye = function(color) {
        fill.style = color;
    }
    Object.defineProperty(container, 'color', {
        get: function() {
            return color;
        },
        set: function(value) {
            color = value;
            container.dye(value);
        }
    });
    container.mouseChildren = false;
    return container;
}

pizzazz.listIcons = function() {
    for (var i in pizzazz.icons) {
        zog(i);
    }
}


// ZIM - https://zimjs.com - Code Creativity!
// JavaScript Canvas Framework for General Interactive Media
// free to use - donations welcome of course! https://zimjs.com/donate

// ZIM PIZZAZZ 3 - see https://zimjs.com/code#libraries for examples

// ~~~~~~~~~~~~~~~~~~~~~~~~
// DESCRIPTION - coded in 2018 (c) ZIM
// Pizzazz 3 is a helper module for ZIM that adds patterns!
// SEE also Pizzazz for background shapes and Pizzazz 2 for icons

// VERSION 3 - Patterns for ProgressBar, Buttons, Panes, etc.
// See the ZIM Explore on Pizzazz 3 for an example: https://zimjs.com/explore/patterns.html

// import this js file in the top of your code below where you import createjs and zim
// you can get a custom pattern with pizzazz.makePattern() - this returns a Container with type "Pattern"
// Use this on its own or pass it into the backing parameter in zim.ProgressBar, zim.Button, zim.Pane, etc.
// pizzazz.listPatterns() will list your pattern options in the console

// DOCS
// Docs are provided at https://zimjs.com/docs.html
// See PIZZAZZ MODULE at bottom


// pixels, noise, dots, stripes, slants, hatch, plaid, bling
pizzazz.makePattern = function(type, colors, size, cols, rows, spacingH, spacingV, interval, startPaused, backgroundColor, gradient, cache) {
    var sig = "type, colors, size, cols, rows, spacingH, spacingV, interval, startPaused, backgroundColor, gradient, cache";
	var duo; if (duo = zob(pizzazz.makePattern, arguments, sig)) return duo;
    if (zot(type)) type = "pixels";
    type = type.toLowerCase();
    if (zot(colors)) colors = "black";
    if (zot(size)) size = 10;
    if (zot(cols)) cols = 30;
    if (zot(rows)) rows = 10;
    if (zot(spacingH)) spacingH = 0;
    if (zot(spacingV)) spacingV = 0;
    if (zot(interval)) interval = 0;
    if (zot(startPaused)) startPaused = false;
    if (zot(cache)) cache = type=="dots"?false:true;
    if (zot(gradient)) gradient = 0;

    type = zik(type);

    var stage = (typeof zimDefaultFrame != "undefined" && zimDefaultFrame)?zimDefaultFrame.stage:null;

    if (Array.isArray(colors)) {
        var patternLength = colors.length;
    } else if (colors.array) {
        var patternLength = colors.array.length;
    } else {
        var patternLength = 2;
    }

    // animations need extra tiling so keep the original bounds for masking
    var bounds = {x:0, y:0, width:size*cols, height:size*rows}

    obj = function() { // "pixels"
        return new zim.Rectangle({width:size,height:size,color:zik(colors),style:false}).alp(zim.rand());
    };
    if (type == "noise") {
        var obj = function() {
            return new zim.Rectangle({width:size,height:size,color:zik(colors),style:false});
        }
    } else if (type == "dots") {
        var obj = function() {
            return new Circle({radius:size,color:zik(colors),style:false});
        }
    } else if (type == "stripes") {
        obj = function() {
            var count = 0;
            return function() {
                var s = zik(size);
                if (typeof colors == "string") {
                    count++;
                    if (count%2==1) {
                        return new zim.Rectangle({width:s,height:s*rows,color:zik(colors),style:false});
                    } else {
                        return new zim.Rectangle({width:s,height:s*rows,color:"rgba(0,0,0,.01)",style:false});
                    }
                } else {
                    return new zim.Rectangle({width:s,height:s*rows,color:zik(colors),style:false});
                }

            }
        }();
    } else if (type == "slants") {
        var extraCols = Math.ceil(Math.sqrt(rows*rows+cols*cols)); // not quite but good enough
        obj = function() {
            var count = 0;
            return function() {
                var s = zik(size);
                if (typeof colors == "string") {
                    count++;
                    if (count%2==1) {
                        return new zim.Rectangle({width:s,height:s*extraCols,color:zik(colors),style:false});
                    } else {
                        return new zim.Rectangle({width:s,height:s*extraCols,color:"rgba(0,0,0,.01)",style:false});
                    }
                } else {
                    return new zim.Rectangle({width:s,height:s*extraCols,color:zik(colors),style:false});
                }
            }
        }();
    } else if (type == "hatch" || type == "plaid") {
        var extraCols = Math.ceil(Math.sqrt(rows*rows+cols*cols)); // not quite but good enough
        obj = function() {
            var count = 0;
            return function() {
                var s = zik(size);
                if (typeof colors == "string") {
                    count++;
                    if (count%2==1) {
                        return new zim.Rectangle({width:s,height:s*extraCols,color:zik(colors),style:false});
                    } else {
                        return new zim.Rectangle({width:s,height:s*extraCols,color:"rgba(0,0,0,.01)",style:false});
                    }
                } else {
                    return new zim.Rectangle({width:s,height:s*extraCols,color:zik(colors),style:false});
                }

            }
        }();
    } else if (type == "bling") {
        var obj = function() {
            var s = new zim.Shape(-size/2, -size/2, size, size, null, false);
            s.graphics.f(zik(colors)).dp(0,0,size/2,8,.5,360/8/2);
            return s;
        }
    }

    var special = (type=="stripes"||type=="slants"||type=="hatch"||type=="plaid");
    var colsStart = cols;
    if (type=="plaid") cols = Math.max(cols, rows);
    if (interval > 0 && special) {
        if (type=="slants"||type=="hatch") {
            extraCols += patternLength*2; // extra for animating
        } else {
            cols += patternLength; // extra for animating
        }
    }

    var container = new zim.Tile(obj, (type=="slants" || type=="hatch")?extraCols:cols, special?1:rows, spacingH, spacingV);
    if (!zot(backgroundColor)) var background = container.background = new Rectangle({width:container.width,height:container.height,color:backgroundColor,style:false}).center(container, 0);

    if (type == "slants" || type == "hatch" || type == "plaid") {
        var outer = new zim.Container(size*(interval>0&&extraCols?extraCols:cols), size*rows, null, null, false);
        var inner = new zim.Container(size*(interval>0&&extraCols?extraCols:cols), size*rows, null, null, false).centerReg(outer);
        var mask = new zim.Rectangle({width:size*(interval>0&&extraCols?extraCols:cols),height:size*rows,color:"rgba(0,0,0,0)",style:false}).addTo(outer);
        container.centerReg(inner);
        if (type == "plaid" || type == "hatch") {
            var copy = container.clone().centerReg(inner).rot(90);
            copy.blendMode = "overlay";
        }
        if (type != "plaid") inner.rotation = 45;
        inner.setMask(mask);
        container = outer;
        if (interval > 0 && (type=="slants" || type=="hatch")) {
            inner.x -= (container.width - bounds.width)/2;
        }
    }
    setGradient();
    if (cache || type=="hatch" || type=="plaid") container.cache();

    if (special && interval > 0) {
        var mask = new zim.Rectangle({width:bounds.width, height:bounds.height, color:"rgba(0,0,0,0)", style:false});
        container.addTo(mask);
        mask.pattern = container;
        container = mask;
        mask.pattern.setMask(mask.shape);
        var num = (type=="stripes" || type=="plaid")?size*patternLength:Math.ceil(size/5)*patternLength*7;
        container.added(function() {
            zog()
            container.pattern.animate({
                props:{x:"-"+String(num)},
                time:interval,
                loop:true,
                ease:"linear"
            });
            if (startPaused) {
                container.pattern.pauseAnimate();
                container.intervalPaused = true;
            } else {
                container.intervalPaused = false;
            }
        });
    } else if (interval > 0) {
        var outer = new zim.Container({style:false});
        container.addTo(outer);
        container = outer;
        container.zimInterval = zim.interval(interval, function() {
            container.removeAllChildren();
            var newTile = new zim.Tile(obj, (type=="slants" || type=="hatch")?extraCols:cols, special?1:rows, spacingH, spacingV).addTo(container);
            setGradient()
            if (!zot(backgroundColor)) var background = container.background = new Rectangle(container.width, container.height, backgroundColor).center(container, 0);
            if (cache) container.cache();
            if (container.stage) container.stage.update();
        });
        if (startPaused) {
            container.zimInterval.pause();
            container.intervalPaused = true;
        } else {
            container.intervalPaused = false;
        }
    }

    container.mouseChildren = false;
    container.type = "Pattern";
    container.patternType = type;
    container.patternInterval = interval;

    setGradient();
    if (gradient > 0 && container.cacheCanvas) container.updateCache();

    container.pauseInterval = function(type) {
        if (zot(type)) type = true;
        container.intervalPaused = type;
        if (container.patternInterval > 0) {
            if (container.zimInterval) {
                container.zimInterval.pause(type);
            } else if (container.pattern && container.pattern.pauseAnimate) {
                container.pattern.pauseAnimate(type);
            }
        }
    }
    container.clearInterval = function() {
        if (container.patternInterval > 0) {
            if (container.zimInterval) {
                container.zimInterval.clear();
            } else if (container.pattern && container.pattern.pauseAnimate) {
                container.pattern.stopAnimate();
            }
        }
        container.intervalPaused = null;
    }

    function setGradient() {
        if (gradient > 0) { // add an overlay
            var gr = new createjs.Shape();
            gr.graphics.lf(["rgba(255,255,255,"+gradient+")","rgba(0,0,0,"+gradient+")"], [0, 1], 0, 0, 0, container.height);
            gr.graphics.dr(0, 0, container.width, container.height);
            container.addChild(gr);
        }
    }
    container.centerReg(null,null,false);
    return container;
}

pizzazz.listPatterns = function() {
    zog("pixels", "noise", "dots", "stripes", "slants", "hatch", "plaid", "bling");
}



export default pizzazz;

export const shapes = pizzazz.shapes;
export const makeShape = pizzazz.makeShape;
export const listShapes = pizzazz.listShapes;

export const icons = pizzazz.icons;
export const makeIcon = pizzazz.makeIcon;
export const listIcons = pizzazz.listIcons;

export const makePattern = pizzazz.makePattern;
export const listPatterns = pizzazz.listPatterns;