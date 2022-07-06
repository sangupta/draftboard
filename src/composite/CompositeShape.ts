import Shape from "../shape/Shape";

/**
 * A composite shape that can be decomposed into basic
 * shapes.
 */
export default abstract class CompositeShape extends Shape {

    /**
     * Decompose into basic shapes.
     */
    abstract decompose(): Array<Shape>

    copyProps(shape: Shape): Shape {
        shape.stroke = this.stroke;
        shape.fill = this.fill;
        shape.color = this.color;

        return shape;
    }

}
