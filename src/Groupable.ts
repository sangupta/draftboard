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

import Shape from "./shape/Shape";
import Line from "./shape/Line";
import Circle from "./shape/Circle";
import Rectangle from "./shape/Rectangle";
import Text from "./shape/Text";
import Arc from "./shape/Arc";
import { TextAnchor } from "./Drawing";
import PolyLine from "./shape/PolyLine";
import Polygon from "./shape/Polygon";
import Triangle from "./composite/Triangle";
import Slice from "./composite/Slice";
import Marker from "./composite/Marker";
import Position from "./Position";
import { PI_2 } from "./Utils";

/**
 * A simple element that acts as a group of elements.
 * 
 */
export default abstract class Groupable {

    stroke: string = '';
    fill: string = '';
    color: string = '';

    abstract addChild(shape: Shape): void;

    abstract getOrigin(): Position;

    abstract getBoardWidth(): number;

    abstract getBoardHeight(): number;

    setStroke(s: string): Groupable {
        this.stroke = s;
        return this;
    }

    setFill(f: string): Groupable {
        this.fill = f;
        return this;
    }

    setColor(c: string): Groupable {
        this.color = c;
        return this;
    }

    addShape(shape: Shape): void {
        shape.setParent(this);
        shape.stroke = this.stroke;
        shape.color = this.color;
        shape.fill = this.fill;

        this.addChild(shape);
    }

    adjustForOrigin(x: number, y: number): Position {
        const origin = this.getOrigin();
        const dx = origin.x - x;
        const dy = origin.y - y;

        return new Position(dx, dy);
    }

    // SIMPLE SHAPES

    addLine(x1: number, y1: number, x2: number, y2: number): Line {
        const p1 = this.adjustForOrigin(x1, y1);
        const p2 = this.adjustForOrigin(x2, y2);

        const line = new Line(p1, p2);
        this.addShape(line);
        return line;
    }

    addCircle(x: number, y: number, radius: number, startAngle: number = 0, endAngle: number = 360): Circle {
        const center = this.adjustForOrigin(x, y);
        const circle = new Circle(center, radius, startAngle, endAngle);
        this.addShape(circle);
        return circle;
    }

    addArc(x: number, y: number, radius: number, startAngle: number, endAngle: number): Arc {
        const center = this.adjustForOrigin(x, y);
        const arc = new Arc(center, radius, startAngle, endAngle);
        this.addShape(arc);
        return arc;
    }

    addRectangle(x1: number, y1: number, x2: number, y2: number): Rectangle {
        const p1 = this.adjustForOrigin(x1, y1);
        const p2 = this.adjustForOrigin(x2, y2);
        const rect = new Rectangle(p1, p2);
        this.addShape(rect);
        return rect;
    }

    addText(x: number, y: number, text: string, align: TextAnchor = 'start'): Text {
        const center = this.adjustForOrigin(x, y);
        const txt = new Text(center, text, align);
        this.addShape(txt);
        return txt;
    }

    addPolyline(...args: Array<number>): PolyLine {
        const polyline = new PolyLine(...args);
        this.addShape(polyline);
        return polyline;
    }

    addPolygon(...args: Array<number>): PolyLine {
        const polygon = new Polygon(...args);
        this.addShape(polygon);
        return polygon;
    }

    addCubicBezierCurve() {

    }

    addQuadraticBezierCurve() {

    }

    // COMPOSITE SHAPES

    addSlice(x: number, y: number, radius: number, startAngle: number, endAngle: number): Slice {
        const center = this.adjustForOrigin(x, y);
        const slice = new Slice(center, radius, startAngle, endAngle);
        this.addShape(slice);
        return slice;
    }

    addTriangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): Triangle {
        const p1 = this.adjustForOrigin(x1, y1);
        const p2 = this.adjustForOrigin(x2, y2);
        const p3 = this.adjustForOrigin(x3, y3);
        const triangle = new Triangle(p1, p2, p3);
        this.addShape(triangle);
        return triangle;
    }

    addMarker(x: number, y: number, text: string | undefined = undefined): Marker {
        if (text === undefined) {
            text = '(' + x + ', ' + y + ')';
        }

        const center = this.adjustForOrigin(x, y);
        const marker = new Marker(center, text);
        this.addShape(marker);
        return marker;
    }

}
