import Shape from "./shape/Shape";
import Line from "./shape/Line";
import Circle from "./shape/Circle";
import Position from "./Position";
import Slice from "./shape/Slice";
import Rectangle from "./shape/Rectangle";
import Text from "./shape/Text";
import Arc from "./shape/Arc";
import { TextAnchor } from "./Drawing";

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

    addLine(x1: number, y1: number, x2: number, y2: number): Line {
        const line = new Line(this);
        line.set(x1, y1, x2, y2);
        
        line.stroke = this.stroke;
        line.color = this.color;
        line.fill = this.fill;

        this.addChild(line);
        return line;
    }

    addCircle(x: number, y: number, radius: number): Circle {
        const circle = new Circle(this);
        
        circle.radius = radius;
        circle.center = new Position(x, y);
        circle.stroke = this.stroke;
        circle.color = this.color;
        circle.fill = this.fill;

        this.addChild(circle);
        return circle;
    }

    addArc(x: number, y: number, radius: number, startAngle: number, endAngle: number): Arc {
        const arc = new Arc(this);
        
        arc.center = new Position(x, y);
        arc.radius = radius;
        arc.startAngle = startAngle;
        arc.endAngle = endAngle;
        arc.stroke = this.stroke;
        arc.color = this.color;
        arc.fill = this.fill;

        this.addChild(arc);
        return arc;
    }

    addSlice(x: number, y: number, radius: number, startAngle: number, endAngle: number): Slice {
        const slice = new Slice(this);
        
        slice.center = new Position(x, y);
        slice.radius = radius;
        slice.startAngle = startAngle;
        slice.endAngle = endAngle;
        slice.stroke = this.stroke;
        slice.color = this.color;
        slice.fill = this.fill;

        this.addChild(slice);
        return slice;
    }

    addRectangle(x1: number, y1: number, x2: number, y2: number): Rectangle {
        const rect = new Rectangle(this);
        
        rect.start = new Position(x1, y1);
        rect.end = new Position(x2, y2);
        rect.stroke = this.stroke;
        rect.color = this.color;
        rect.fill = this.fill;

        this.addChild(rect);
        return rect;
    }

    addText(x: number, y: number, text: string, align: TextAnchor = 'start'): Text {
        const txt = new Text(this);
        
        txt.position = new Position(x, y);
        txt.text = text;
        txt.align = align;
        txt.stroke = this.stroke;
        txt.color = this.color;
        txt.fill = this.fill;

        this.addChild(txt);
        return txt;
    }

    addCubicBezierCurve() {

    }

    addQuadraticBezierCurve() {

    }

}
