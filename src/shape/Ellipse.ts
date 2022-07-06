import Position from "../Position";
import Shape from "./Shape";

/**
 * The ellipse shape.
 */
export default class Ellipse extends Shape {

    /**
     * Center of the ellipse.
     */
    center: Position;
    
    /**
     * Radius of the ellipse specified both for X-axis and Y-axis.
     */
    radius: Position;
    
}
