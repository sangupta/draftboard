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

    constructor(p1: Position, p2: Position, p3: Position) {
        super();

        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }

    decompose(): Array<Shape> {
        return [
            this.copyProps(new Line(this.p1, this.p2)),
            this.copyProps(new Line(this.p2, this.p3)),
            this.copyProps(new Line(this.p3, this.p1))
        ];
    }

}
