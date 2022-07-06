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
import Circle from "../shape/Circle";
import Shape from "../shape/Shape";
import Text from "../shape/Text";
import CompositeShape from "./CompositeShape";

/**
 * A marker shows a point and text related to it.
 */
export default class Marker extends CompositeShape {

    center: Position;

    text: string;

    constructor(x: number, y: number, text: string = '') {
        super();

        this.center = new Position(x, y);
        this.text = text;
    }

    decompose(): Array<Shape> {
        return [
            new Circle(this.center.x, this.center.y, 3).setStroke('red').setFill('red'),
            new Text(this.center.x, this.center.y + 20, this.text)
        ];
    }
}
