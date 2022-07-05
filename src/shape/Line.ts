import Position from "../Position";
import Shape from "./Shape";

export default class Line extends Shape {

    start: Position;
    end: Position;

    set(x1: number, y1: number, x2: number, y2: number): Line {
        this.start = new Position(x1, y1);
        this.end = new Position(x2, y2);

        return this;
    }

    to(x: number, y: number): Line {
        const line = new Line(this.parent);
        line.set(this.end.x, this.end.y, x, y);
        return line;
    }

}
