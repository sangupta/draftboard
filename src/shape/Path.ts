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

import Line from "./Line";
import Position from "../Position";
import Shape from "./Shape";

export default class Path extends Shape {

    current: Position = new Position();

    closeAtEnd: boolean = false;

    children: Array<Shape> = [];

    moveTo(x: number, y: number): Path {
        this.current.set(x, y);
        return this;
    }

    line(x: number, y: number): Path {
        const line = new Line(this.drawing, this.group).set(this.current.x, this.current.y, x, y);
        this.children.push(line);
        this.current.set(x, y);
        return this;
    }

    closePath(): void {
        this.closeAtEnd = true;
    }
}
