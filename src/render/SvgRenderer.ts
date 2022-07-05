import { computeXYWidthHeight } from "../Utils";
import Drawing, { DrawingKid } from "../Drawing";
import Group from "../Group";
import Arc from "../shape/Arc";
import Circle from "../shape/Circle";
import Ellipse from "../shape/Ellipse";
import Line from "../shape/Line";
import Polygon from "../shape/Polygon";
import PolyLine from "../shape/PolyLine";
import Rectangle from "../shape/Rectangle";
import Shape from "../shape/Shape";

const SVG_NS = "http://www.w3.org/2000/svg";

/**
 * Converts a complete `Drawing` into an SVG element.
 * 
 * @param drawing 
 * @returns 
 */
export function renderSvg(drawing: Drawing): SVGSVGElement {
    const svg = document.createElementNS(SVG_NS, "svg");

    if (drawing) {
        // set width and height
        svg.setAttribute('width', drawing.width === 0 ? '100%' : '' + drawing.width);
        svg.setAttribute('height', drawing.height === 0 ? '100%' : '' + drawing.height);
        svg.setAttribute('transform', 'scale(1, -1)');

        // start adding children
        renderChildren(svg, drawing.children);
    }

    return svg;
}

function renderChildren(svgElement: SVGElement, children: Array<DrawingKid>): void {
    if (!children || children.length === 0) {
        return;
    }

    children.forEach(child => {
        if (child instanceof Line) {
            svgElement.appendChild(renderLine(child as Line));
            return;
        }

        if (child instanceof Circle) {
            svgElement.appendChild(renderCircle(child as Circle));
            return;
        }

        if (child instanceof Rectangle) {
            svgElement.appendChild(renderRectange(child as Rectangle));
            return;
        }

        if (child instanceof Ellipse) {
            svgElement.appendChild(renderEllipse(child as Ellipse));
            return;
        }

        if (child instanceof Polygon) {
            svgElement.appendChild(renderPolygon(child as Polygon))
            return;
        }

        if (child instanceof PolyLine) {
            svgElement.appendChild(renderPolyLine(child as PolyLine))
            return;
        }

        if (child instanceof Arc) {
            svgElement.appendChild(renderArc(child as Arc))
            return;
        }

        if (child instanceof Group) {
            svgElement.appendChild(renderGroup(child as Group));
            return;
        }
    });
}

function renderGroup(group: Group): SVGGElement {
    const element: SVGGElement = document.createElementNS(SVG_NS, 'g');
    renderChildren(element, group.children);

    return element;
}

function renderArc(arc: Arc): SVGPathElement {
    const element: SVGPathElement = document.createElementNS(SVG_NS, 'path');

    let d = 'M ' + arc.center.x + ' ' + arc.center.y + ' ';
    d += 'A ' + arc.radius + ' ' + arc.radius + ' 0 1 0 0 0';
    setAttribute(element, 'd', d);

    addDefaultShapeAttributes(element, arc);
    return element;
}

function renderPolyLine(polyline: PolyLine): SVGPolylineElement {
    const coords: Array<number> = [];
    polyline.points.forEach(point => {
        coords.push(point.x);
        coords.push(point.y);
    });

    const element: SVGPolylineElement = document.createElementNS(SVG_NS, 'polyline');
    setAttribute(element, 'points', coords.join(','));

    addDefaultShapeAttributes(element, polyline);
    return element;
}

function renderPolygon(polygon: Polygon): SVGPolygonElement {
    const coords: Array<number> = [];
    polygon.points.forEach(point => {
        coords.push(point.x);
        coords.push(point.y);
    });

    const element: SVGPolygonElement = document.createElementNS(SVG_NS, 'polygon');
    setAttribute(element, 'points', coords.join(','));

    addDefaultShapeAttributes(element, polygon);
    return element;
}

function renderEllipse(ellipse: Ellipse): SVGEllipseElement {
    const element: SVGEllipseElement = document.createElementNS(SVG_NS, 'ellipse');
    setAttribute(element, 'cx', ellipse.center.x);
    setAttribute(element, 'cy', ellipse.center.y);
    setAttribute(element, 'rx', ellipse.radius.x);
    setAttribute(element, 'ry', ellipse.radius.y);

    addDefaultShapeAttributes(element, ellipse);
    return element;
}

function renderRectange(rect: Rectangle): SVGRectElement {
    const computed = computeXYWidthHeight(rect.start, rect.end);

    const element: SVGRectElement = document.createElementNS(SVG_NS, 'rect');
    setAttribute(element, 'x', computed.x);
    setAttribute(element, 'y', computed.y)
    setAttribute(element, 'width', computed.width);
    setAttribute(element, 'height', computed.height);
    setAttribute(element, 'rx', rect.cornerRadius?.x);
    setAttribute(element, 'ry', rect.cornerRadius?.y);

    addDefaultShapeAttributes(element, rect);
    return element;
}

function renderCircle(circle: Circle): SVGCircleElement {
    const element: SVGCircleElement = document.createElementNS(SVG_NS, 'circle');
    setAttribute(element, 'cx', circle.center.x);
    setAttribute(element, 'cy', circle.center.y);
    setAttribute(element, 'r', circle.radius);

    addDefaultShapeAttributes(element, circle);
    return element;
}

function renderLine(line: Line): SVGLineElement {
    const element: SVGLineElement = document.createElementNS(SVG_NS, 'line');
    setAttribute(element, 'x1', line.start.x);
    setAttribute(element, 'y1', line.start.y);
    setAttribute(element, 'x2', line.end.x);
    setAttribute(element, 'y2', line.end.y);

    addDefaultShapeAttributes(element, line);
    return element;
}

function addDefaultShapeAttributes(element: SVGElement, shape: Shape): void {
    setAttribute(element, 'stroke', shape.stroke);
    setAttribute(element, 'fill', shape.fill || 'white');
    setAttribute(element, 'color', shape.color);
    setAttribute(element, 'id', shape.id);
    setAttribute(element, 'class', shape.cssClass);

    if (shape.tooltip) {
        const title = document.createElementNS(SVG_NS, 'title');
        title.innerHTML = shape.tooltip;
        element.appendChild(title);
    }
}

function setAttribute(element: SVGElement, name: string, value: any): void {
    if (value !== undefined && value !== null && typeof value !== 'string') {
        value = '' + value;
    }

    if (value) {
        element.setAttribute(name, '' + value);
    }
}
