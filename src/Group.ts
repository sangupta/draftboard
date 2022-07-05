import Drawing from "./Drawing";
import Groupable from "./Groupable";
import Shape from "./shape/Shape";

export default class Group extends Groupable {

    drawing: Drawing;

    children: Array<Shape> = [];

    constructor(drawing: Drawing) {
        super();        
        this.drawing = drawing;
    }

    addChild(shape: Shape): void {
        this.children.push(shape);
    }

}
