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
    cornerRadius: Position = new Position(0, 0);

    setRadius(rx: number, ry: number): Rectangle {
        this.cornerRadius = new Position(rx, ry);
        return this;
    }
    
}
