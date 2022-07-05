import Position from "../Position";
import Shape from "./Shape";

export default class Rectangle extends Shape {

    start: Position;
    end: Position;
    cornerRadius: Position;

    setRadius(rx: number, ry: number): Rectangle {
        this.cornerRadius = new Position(rx, ry);
        return this;
    }
    
}
