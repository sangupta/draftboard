import Drawing from "./Drawing";
import Parent from "./Parent";
import Shape from "./shape/Shape";

export default class Group extends Parent {

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
