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

import { TextAnchor } from "../Drawing";
import Position from "../Position";
import Shape from "./Shape";

export default class Text extends Shape {

    position: Position;
    text: string;
    align: TextAnchor;

    constructor(x: number, y: number, text: string, align: TextAnchor = 'start') {
        super();

        this.position = new Position(x, y);
        this.text = text;
        this.align = align;
    }
}