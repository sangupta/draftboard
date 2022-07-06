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
 * The line shape.
 */
export default class Line extends Shape {

    /**
     * Starting position.
     */
    start: Position;

    /**
     * End position.
     */
    end: Position;

    constructor(p1: Position, p2: Position) {
        super();

        this.start = p1;
        this.end = p2;
    }

    // to(x: number, y: number): Line {
    //     const line = new Line(this.end.x, this.end.y, x, y);
    //     return line;
    // }

}
