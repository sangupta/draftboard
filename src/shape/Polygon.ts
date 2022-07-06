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
 * The polygon shape. A polygon is different from polyline
 * in the way that the last point of a polygon always connects
 * back to the first point.ƒ
 */
export default class Polygon extends Shape {

    /**
     * Array of points that make up the polygon.
     */
    points: Array<Position> = [];

    constructor(...args: Array<number>) {
        super();

        for (let index = 0; index < args.length; index += 2) {
            this.points.push(new Position(args[index], args[index + 1]));
        }
    }
}
