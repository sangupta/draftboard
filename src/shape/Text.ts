import Position from "../Position";
import Shape from "./Shape";

export default class Text extends Shape {

    position: Position;
    text: string;
    align:TextAnchor;
    
}