import Position from "../Position";
import Shape from "./Shape";

/**
 * The line shape.
 */
export default class Line extends Shape {

    /**
     * Starting position.
     */
    start: Position;

    /**
     * End position.
     */
    end: Position;

    constructor(x1: number, y1: number, x2: number, y2: number) {
        super();

        this.start = new Position(x1, y1);
        this.end = new Position(x2, y2);
    }

    static getLine(p1: Position, p2: Position): Line {
        return new Line(p1.x, p1.y, p2.x, p2.y);
    }

    // to(x: number, y: number): Line {
    //     const line = new Line(this.end.x, this.end.y, x, y);
    //     return line;
    // }

}
