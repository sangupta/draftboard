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
import CompositeShape from "../composite/CompositeShape";
import Text from "../shape/Text";

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
            canvas.style.width = drawing.width + 'px';
        }
        if (drawing.height > 0) {
            canvas.height = drawing.height;
            canvas.style.height = drawing.height + 'px';
        }

        // flip horizontally
        const context = canvas.getContext('2d');
        context?.translate(0, drawing.height);
        context?.scale(1, -1);

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

    children.forEach((child: DrawingKid) => {
        renderChild(context, child);
    });
}

function renderChild(context: CanvasRenderingContext2D, child: DrawingKid): void {
    if (!child) {
        return;
    }

    if (child instanceof CompositeShape) {
        renderChildren(context, (child as CompositeShape).decompose());
        return;
    }

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

    if (child instanceof Text) {
        renderText(context, child as Text);
        return;
    }

    if (child instanceof Group) {
        renderGroup(context, child as Group);
        return;
    }
}

function renderText(context: CanvasRenderingContext2D, text: Text): void {
    context.fillText(text.text, text.position.x, text.position.y);
}

function renderGroup(context: CanvasRenderingContext2D, group: Group): void {
    renderChildren(context, group.children);
}

function renderArc(context: CanvasRenderingContext2D, arc: Arc): void {
    context.arc(arc.center.x, arc.center.y, arc.radius, toRadians(arc.startAngle), toRadians(arc.endAngle));
    context.stroke();
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
    context.stroke();
}

function renderCircle(context: CanvasRenderingContext2D, circle: Circle): void {
    if (circle.startAngle === 0 && circle.endAngle === 360) {
        context.ellipse(circle.center.x, circle.center.y, circle.radius, circle.radius, 0, 0, PI_2, false);
    } else {
        context.ellipse(circle.center.x, circle.center.y, circle.radius, circle.radius, 0, toRadians(circle.startAngle), toRadians(circle.endAngle), false);
    }
    context.stroke();
}

function renderLine(context: CanvasRenderingContext2D, line: Line): void {
    context.moveTo(line.start.x, line.start.y);
    context.lineTo(line.end.x, line.end.y);
    context.stroke();
}
