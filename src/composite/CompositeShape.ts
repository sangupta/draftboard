/**
 * DraftBoard
 *
 * MIT License.
 * Copyright (c) 2022, Sandeep Gupta.
 * https://github.com/sangupta/draftboard
 *
 * Use of this source code is governed by a MIT style license
 * that can be found in LICENSE file in the code repository:
 */

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
