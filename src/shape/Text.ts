import { TextAnchor } from "../Drawing";
import Position from "../Position";
import Shape from "./Shape";

export default class Text extends Shape {

    position: Position;
    text: string;
    align:TextAnchor;
    
    constructor(x: number, y: number, text: string, align: TextAnchor = 'start') {
        super();
        
        this.position = new Position(x, y);
        this.text = text;
        this.align = align;
    }
}