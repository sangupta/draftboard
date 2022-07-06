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

import Position from "../Position";
import Shape from "./Shape";

/**
 * The rectangle shape.
 */
export default class Rectangle extends Shape {

    /**
     * Starting position.
     */
    start: Position;

    /**
     * Ending position.
     */
    end: Position;

    /**
     * Corner radius, if any. Default value is zero.
     */
    // cornerRadius: Position = new Position(0, 0);

    constructor(p1: Position, p2: Position) {
        super();

        this.start = p1;
        this.end = p2;
    }

    // setRadius(rx: number, ry: number): Rectangle {
    //     this.cornerRadius = new Position(rx, ry);
    //     return this;
    // }

}
