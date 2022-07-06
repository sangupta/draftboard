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
 * The polyline shape.
 */
export default class PolyLine extends Shape {

    /**
     * Array of points that make up the polyline.
     */
    points: Array<Position> = [];

    constructor(...args: Array<number>) {
        super();

        for (let index = 0; index < args.length; index += 2) {
            this.points.push(new Position(args[index], args[index + 1]));
        }
    }
}
