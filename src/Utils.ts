/**
 * DraftBoard
 *
 * MIT License.
 * Copyright (c) 2022, Sandeep Gupta.
 * https://github.com/sangupta/draftboard
 *
 * Use of this source code is governed by a MIT style license
 * that can be found in LICENSE file in the code repository:
 */

import Position from "./Position";

export const RADIAN_PER_DEGREE = Math.PI / 180;
export const DEGREE_PER_RADIAN = 180 / Math.PI;
export const PI_2 = 2 * Math.PI;

interface XYWidthHeight {
    x: number;
    y: number;
    width: number;
    height: number;
}

export function toRadians(degree: number): number {
    return degree * RADIAN_PER_DEGREE;
}

export function toDegrees(radians: number): number {
    return radians * DEGREE_PER_RADIAN;
}

export function computeXYWidthHeight(start: Position, end: Position): XYWidthHeight {
    let x: number, y: number, width: number, height: number;

    // x-axis
    if (start.x < end.x) {
        x = start.x;
        width = end.x - start.x;
    } else {
        x = end.x;
        width = start.x - end.x;
    }

    // y-axis
    if (start.y < end.y) {
        y = start.y;
        height = end.y - start.y;
    } else {
        y = end.y;
        height = start.y - end.y;
    }

    return { x, y, width, height };
}
