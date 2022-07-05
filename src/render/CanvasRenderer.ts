import { computeXYWidthHeight, PI_2, toRadians } from "../Utils";
import Drawing, { DrawingKid } from "../Drawing";
import Group from "../Group";
import Arc from "../shape/Arc";
import Circle from "../shape/Circle";
import Ellipse from "../shape/Ellipse";
import Line from "../shape/Line";
import Polygon from "../shape/Polygon";
import PolyLine from "../shape/PolyLine";
import Rectangle from "../shape/Rectangle";

/**
 * Converts a complete `Drawing` into a CANVAS element.
 * 
 * @param drawing 
 * @returns 
 */
export function renderCanvas(drawing: Drawing): HTMLCanvasElement {
    const canvas = document.createElement('canvas');

    if (drawing) {
        // set width and height
        if (drawing.width > 0) {
            canvas.width = drawing.width;
        }
        if (drawing.height > 0) {
            canvas.height = drawing.height;
        }

        // flip horizontally
        const context = canvas.getContext('2d');
        // context?.scale(1, -1);

        // start adding children
        if (context) {
            renderChildren(context, drawing.children);
        }
    }

    return canvas;
}

function renderChildren(context: CanvasRenderingContext2D, children: Array<DrawingKid>): void {
    if (!children || children.length === 0) {
        return;
    }

    children.forEach(child => {
        if (child instanceof Line) {
            renderLine(context, child as Line);
            return;
        }

        if (child instanceof Circle) {
            renderCircle(context, child as Circle);
            return;
        }

        if (child instanceof Rectangle) {
            renderRectange(context, child as Rectangle);
            return;
        }

        if (child instanceof Ellipse) {
            renderEllipse(context, child as Ellipse);
            return;
        }

        if (child instanceof Polygon) {
            renderPolygon(context, child as Polygon);
            return;
        }

        if (child instanceof PolyLine) {
            renderPolyLine(context, child as PolyLine);
            return;
        }

        if (child instanceof Arc) {
            renderArc(context, child as Arc);
            return;
        }

        if (child instanceof Group) {
            renderGroup(context, child as Group);
            return;
        }
    });
}

function renderGroup(context: CanvasRenderingContext2D, group: Group): void {
    renderChildren(context, group.children);
}

function renderArc(context: CanvasRenderingContext2D, arc: Arc): void {
    context.arc(arc.center.x, arc.center.y, arc.radius, toRadians(arc.startAngle), toRadians(arc.endAngle));
}

function renderPolyLine(context: CanvasRenderingContext2D, polyline: PolyLine): void {
    context.beginPath();
    polyline.points.forEach(point => {
        context.lineTo(point.x, point.y);
    });
    context.stroke();
}

function renderPolygon(context: CanvasRenderingContext2D, polygon: Polygon): void {
    context.beginPath();
    polygon.points.forEach(point => {
        context.lineTo(point.x, point.y);
    });
    context.closePath();
    context.stroke();
}

function renderEllipse(context: CanvasRenderingContext2D, ellipse: Ellipse): void {
    context.ellipse(ellipse.center.x, ellipse.center.y, ellipse.radius.x, ellipse.radius.y, 0, PI_2, 0);
}

function renderRectange(context: CanvasRenderingContext2D, rect: Rectangle): void {
    const computed = computeXYWidthHeight(rect.start, rect.end);

    if (rect.fill) {
        context.fillRect(computed.x, computed.y, computed.width, computed.height);
    } else {
        context.rect(computed.x, computed.y, computed.width, computed.height);
    }
}

function renderCircle(context: CanvasRenderingContext2D, circle: Circle): void {
    context.ellipse(circle.center.x, circle.center.y, circle.radius, circle.radius, 0, PI_2, 0);
}

function renderLine(context: CanvasRenderingContext2D, line: Line): void {
    context.moveTo(line.start.x, line.start.y);
    context.lineTo(line.end.x, line.end.y);
    context.stroke();
}