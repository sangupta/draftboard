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
import Line from "../shape/Line";
import Shape from "../shape/Shape";
import CompositeShape from "./CompositeShape";

export default class Triangle extends CompositeShape {

    p1: Position;

    p2: Position;

    p3: Position;

    constructor(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
        super();

        this.p1 = new Position(x1, y1);
        this.p2 = new Position(x2, y2);
        this.p3 = new Position(x3, y3);
    }

    decompose(): Array<Shape> {
        return [
            this.copyProps(Line.getLine(this.p1, this.p2)),
            this.copyProps(Line.getLine(this.p2, this.p3)),
            this.copyProps(Line.getLine(this.p3, this.p1))
        ];
    }

}
