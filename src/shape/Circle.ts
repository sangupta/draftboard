import Position from "../Position";
import Shape from "./Shape";

/**
 * The circle shape, or a radial arc.
 */
export default class Circle extends Shape {

    /**
     * Center of the circle
     */
    center: Position;

    /**
     * Radius for the circle
     */
    radius: number;

    /**
     * Start angle in degrees
     */
    startAngle: number;

    /**
     * End angle in degrees
     */
    endAngle: number;
    
    constructor(x: number, y: number, radius: number, startAngle: number = 0, endAngle: number = 360) {
        super();

        this.radius = radius;
        this.center = new Position(x, y);
        this.startAngle = startAngle;
        this.endAngle = endAngle;
    }
    
}
