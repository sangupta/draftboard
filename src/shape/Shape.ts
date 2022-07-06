import Groupable from "../Groupable";

/**
 * A simple shape in the ecosystem, that is, the one that usually
 * forms the primitive shapes in cartesian coordinates. These are
 * generally available directly in any rendering engine.
 */
export default abstract class Shape {

    /**
     * The parent `Groupable` that contains this child.
     */
    parent: Groupable;

    /**
     * Stroke color
     */
    stroke: string;

    /**
     * Fill color
     */
    fill: string;

    /**
     * General color
     */
    color: string;

    /**
     * Tooltip associated with the shape
     */
    tooltip: string;
    
    /**
     * Shape ID
     */
    id: string;

    /**
     * Any CSS class associated with the shape
     */
    cssClass: string;

    constructor(parent: Groupable) {
        this.parent = parent;
    }

    getParent(): Groupable {
        return this.parent;
    }

    setStroke(s: string): Shape {
        this.stroke = s;
        return this;
    }

    setFill(f: string): Shape {
        this.fill = f;
        return this;
    }

    setColor(c: string): Shape {
        this.color = c;
        return this;
    }

    setTooltip(t: string): Shape {
        this.tooltip = t;
        return this;
    }

    setId(id: string): Shape {
        this.id = id;
        return this;
    }

    setCssClass(css: string): Shape {
        this.cssClass = css;
        return this;
    }
    
}
