import Position from "../Position";
import Shape from "./Shape";

/**
 * The rectangle shape.
 */
export default class Rectangle extends Shape {

    /**
     * Starting position.
     */
    start: Position;

    /**
     * Ending position.
     */
    end: Position;

    /**
     * Corner radius, if any. Default value is zero.
     */
    // cornerRadius: Position = new Position(0, 0);

    constructor(x1: number, y1: number, x2: number, y2: number) {
        super();

        this.start = new Position(x1, y1);
        this.end = new Position(x2, y2);        
    }

    // setRadius(rx: number, ry: number): Rectangle {
    //     this.cornerRadius = new Position(rx, ry);
    //     return this;
    // }
    
}
