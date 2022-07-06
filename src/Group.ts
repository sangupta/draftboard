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

import Drawing from "./Drawing";
import Groupable from "./Groupable";
import Shape from "./shape/Shape";

export default class Group extends Groupable {

    drawing: Drawing;

    children: Array<Shape> = [];

    constructor(drawing: Drawing) {
        super();
        this.drawing = drawing;
    }

    addChild(shape: Shape): void {
        this.children.push(shape);
    }

}
