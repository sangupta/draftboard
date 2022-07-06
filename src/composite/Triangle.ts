import Position from "../Position";
import Line from "../shape/Line";
import Shape from "../shape/Shape";
import CompositeShape from "./CompositeShape";

export default class Triangle extends CompositeShape {

    p1: Position;

    p2: Position;

    p3: Position;

    constructor(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
        super();

        this.p1 = new Position(x1, y1);
        this.p2 = new Position(x2, y2);
        this.p3 = new Position(x3, y3);
    }

    decompose(): Array<Shape> {
        return [
            
        ];
    }

}
