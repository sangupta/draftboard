import Position from "../Position";
import Shape from "./Shape";

export default class Arc extends Shape {

    center: Position;
    radius: number;
    startAngle: number;
    endAngle: number;

    constructor(x: number, y: number, radius: number, startAngle: number, endAngle: number) {
        super();

        this.center = new Position(x, y);
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
    }
}
