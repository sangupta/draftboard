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
import Shape from "../shape/Shape";
import CompositeShape from "./CompositeShape";

export default class Slice extends CompositeShape {

    center: Position;
    radius: number;
    startAngle: number;
    endAngle: number;
    text: string = '';

    constructor(center: Position, radius: number, startAngle: number, endAngle: number) {
        super();

        this.center = center;
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
    }

    label(text: string): Slice {
        this.text = text;
        return this;
    }

    decompose(): Array<Shape> {
        const elements: Array<Shape> = [];
        return elements;
    }

}
