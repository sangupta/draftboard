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

export default class Arc extends Shape {

    center: Position;
    radius: number;
    startAngle: number;
    endAngle: number;

    constructor(x: number, y: number, radius: number, startAngle: number, endAngle: number) {
        super();

        this.center = new Position(x, y);
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
    }
}
