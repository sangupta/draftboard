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

/**
 * A simple element that acts as a group of elements.
 * 
 */
export default abstract class Groupable {

    stroke: string;
    fill: string;
    color: string;

    abstract addChild(shape: Shape): void;

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

    // SIMPLE SHAPES

    addLine(x1: number, y1: number, x2: number, y2: number): Line {
        const line = new Line(x1, y1, x2, y2);
        this.addShape(line);
        return line;
    }

    addCircle(x: number, y: number, radius: number, startAngle: number = 0, endAngle: number = 360): Circle {
        const circle = new Circle(x, y, radius, startAngle, endAngle);
        this.addShape(circle);
        return circle;
    }

    addArc(x: number, y: number, radius: number, startAngle: number, endAngle: number): Arc {
        const arc = new Arc(x, y, radius, startAngle, endAngle);
        this.addShape(arc);
        return arc;
    }

    addRectangle(x1: number, y1: number, x2: number, y2: number): Rectangle {
        const rect = new Rectangle(x1, y1, x2, y2);
        this.addShape(rect);
        return rect;
    }

    addText(x: number, y: number, text: string, align: TextAnchor = 'start'): Text {
        const txt = new Text(x, y, text, align);
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
        const slice = new Slice(x, y, radius, startAngle, endAngle);
        this.addShape(slice);
        return slice;
    }

    addTriangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): Triangle {
        const triangle = new Triangle(x1, y1, x2, y2, x3, y3);
        this.addShape(triangle);
        return triangle;
    }

    addMarker(x:number, y:number, text:string = ''):Marker {
        const marker = new Marker(x, y, text);
        this.addShape(marker);
        return marker;
    }

}
