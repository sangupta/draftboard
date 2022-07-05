import Group from "./Group";
import Parent from "./Parent";
import Position from "./Position";
import Shape from "./shape/Shape";

export type DrawingKid = Shape | Group;
export type TextAnchor = 'start' | 'end' | 'middle';

/**
 * Creates a drawing board that works in cartesian coordinates. The default
 * origin is the bottom left corner of the board. However, you may move
 * the origin to a different position in the board using the `setOrigin`
 * method. It is recommended to set the origin when creating the drawing
 * board, than changing mid-way as any previous shape added to the board
 * will not be translated automatically.
 * 
 * @author sangupta
 */
export default class Drawing extends Parent {

    width: number;
    height: number;

    origin: Position = new Position(0, 0);

    children: Array<DrawingKid> = [];

    constructor(width: number = 100, height: number = 100, originX: number = 0, originY: number = 0) {
        super();

        this.width = width;
        this.height = height;
        this.origin = new Position(originX, originY);

        this.stroke = 'black';
        this.fill = 'white';
    }

    addChild(shape: Shape): void {
        this.children.push(shape);
    }

    createGroup(): Group {
        const group = new Group(this);
        this.children.push(group);
        return group;
    }

    setOrigin(x: number, y: number) {
        this.origin.x = x;
        this.origin.y = y;
    }

}
