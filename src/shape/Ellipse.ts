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

import Position from "../Position";
import Shape from "./Shape";

/**
 * The ellipse shape.
 */
export default class Ellipse extends Shape {

    /**
     * Center of the ellipse.
     */
    center: Position;

    /**
     * Radius of the ellipse specified both for X-axis and Y-axis.
     */
    radius: Position;

}
