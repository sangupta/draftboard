import Position from "../Position";
import Shape from "./Shape";

export default class Slice extends Shape {

    center: Position;
    radius: number;
    startAngle: number;
    endAngle: number;
    text: string;

    constructor(x: number, y: number, radius: number, startAngle: number, endAngle: number) {
        super();

        this.center = new Position(x, y);
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
    }

    label(text: string): Slice {
        this.text = text;
        return this;
    }

    decompose(): Array<Shape> {
        const elements: Array<Shape> = [];

        return elements;
    }
}
