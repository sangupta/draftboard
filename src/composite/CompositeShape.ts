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

}
