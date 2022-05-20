"use strict";
const canvas = document.querySelector("#Canvas");
const ctx = canvas.getContext("2d", { alpha: false });
let pause = true;
let lastFrameTime = 0;
// noise.seed(0);

let width;
let height;
let lesser;
let bigger;
Screen.updateSize();

frame();

window.addEventListener(EVENT.resize, Screen.resizeHandler);
canvas.addEventListener(EVENT.pointerdown, Input.pointerdownHandler);
canvas.addEventListener(EVENT.pointermove, Input.pointermoveHandler);
window.addEventListener(EVENT.pointerup, Input.pointerupHandler);
window.addEventListener(EVENT.keydown, Input.keydownHandler);
window.addEventListener(EVENT.keyup, Input.keyupHandler);
