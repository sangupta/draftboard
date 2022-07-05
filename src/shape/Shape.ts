import Groupable from "../Groupable";

export default abstract class Shape {

    parent: Groupable;
    stroke: string;
    fill: string;
    color: string;
    tooltip: string;
    id: string;
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
