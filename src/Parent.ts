import Shape from "./shape/Shape";
import Line from "./shape/Line";
import Circle from "./shape/Circle";
import Position from "./Position";
import Slice from "./shape/Slice";
import Rectangle from "./shape/Rectangle";
import Text from "./shape/Text";
import Arc from "./shape/Arc";
import { TextAnchor } from "./Drawing";

export default abstract class Parent {

    abstract addChild(shape: Shape): void;

    addLine(x1: number, y1: number, x2: number, y2: number): Line {
        const line = new Line(this);
        line.set(x1, y1, x2, y2);

        this.addChild(line);
        return line;
    }

    addCircle(x: number, y: number, radius: number): Circle {
        const circle = new Circle(this);
        circle.radius = radius;
        circle.center = new Position(x, y);

        this.addChild(circle);
        return circle;
    }

    addArc(x: number, y: number, radius: number, startAngle: number, endAngle: number): Arc {
        const arc = new Arc(this);
        arc.center = new Position(x, y);
        arc.radius = radius;
        arc.startAngle = startAngle;
        arc.endAngle = endAngle;

        this.addChild(arc);
        return arc;
    }

    addSlice(x: number, y: number, radius: number, startAngle: number, endAngle: number): Slice {
        const slice = new Slice(this);
        slice.center = new Position(x, y);
        slice.radius = radius;
        slice.startAngle = startAngle;
        slice.endAngle = endAngle;

        this.addChild(slice);
        return slice;
    }

    addRectangle(x1: number, y1: number, x2: number, y2: number): Rectangle {
        const rect = new Rectangle(this);
        rect.start = new Position(x1, y1);
        rect.end = new Position(x2, y2);

        this.addChild(rect);
        return rect;
    }

    addText(x: number, y: number, text: string, align: TextAnchor = 'start'): Text {
        const txt = new Text(this);
        txt.position = new Position(x, y);
        txt.text = text;
        txt.align = align;

        this.addChild(txt);
        return txt;
    }

    addCubicBezierCurve() {

    }

    addQuadraticBezierCurve() {

    }

}
