import Group from "./Group";
import Parent from "./Parent";
import Shape from "./shape/Shape";

export type DrawingKid = Shape | Group;
export type TextAnchor = 'start' | 'end' | 'middle';

/**
 * SVG attributes: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d
 * 
 * 
 * @author sangupta
 */
export default class Drawing extends Parent {

    width: number;
    height: number;

    children: Array<DrawingKid> = [];

    constructor(width: number = 0, height: number = 0) {
        super();

        this.width = width;
        this.height = height;
    }

    addChild(shape: Shape): void {
        this.children.push(shape);
    }

    createGroup(): Group {
        const group = new Group(this);
        this.children.push(group);
        return group;
    }

}
