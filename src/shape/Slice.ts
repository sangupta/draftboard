import Position from "../Position";
import Shape from "./Shape";

export default class Slice extends Shape {

    center: Position;
    radius: number;
    startAngle: number;
    endAngle: number;
    text: string;

    label(text: string): Slice {
        this.text = text;
        return this;
    }

    decompose(): Array<Shape> {
        const elements: Array<Shape> = [];

        return elements;
    }
}
