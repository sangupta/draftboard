import Position from "../Position";
import Shape from "./Shape";

/**
 * The polyline shape.
 */
export default class PolyLine extends Shape {

    /**
     * Array of points that make up the polyline.
     */
    points:Array<Position> = [];
    
}
