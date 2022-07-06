import Groupable from '../src/Groupable';
import Drawing from './../src/Drawing';
import { renderSvg } from '../src/render/SvgRenderer';
import { renderCanvas } from '../src/render/CanvasRenderer';

interface ExampleInfo {
    code: string;
    element: Groupable
}

const examples: { [key: string]: Array<ExampleInfo> } = {
    "Line": [
        {
            code: 'addLine(50,50,100,100)',
            element: new Drawing(200, 200).addLine(50, 50, 100, 100).getParent()
        }
    ],
    "Circle": [
        {
            code: 'addCircle(100, 100, 50)',
            element: new Drawing(200, 200).addCircle(100, 100, 50).getParent()
        },
        {
            code: 'addCircle(100, 100, 50, 0, 90)',
            element: new Drawing(200, 200).addCircle(100, 100, 50, 0, 90).getParent()
        },
        {
            code: 'addCircle(100, 100, 50, 90, 180)',
            element: new Drawing(200, 200).addCircle(100, 100, 50, 90, 180).getParent()
        },
        {
            code: 'addCircle(100, 100, 50, 180, 270)',
            element: new Drawing(200, 200).addCircle(100, 100, 50, 180, 270).getParent()
        },
        {
            code: 'addCircle(100, 100, 50, 270, 360)',
            element: new Drawing(200, 200).addCircle(100, 100, 50, 270, 360).getParent()
        },
    ],
    "Rectangle": [
        {
            code: 'addRectange(50,50,150,150)',
            element: new Drawing(200, 200).addRectangle(50, 50, 150, 150).getParent()
        }
    ],
    "Triangle": [
        {
            code: 'addTriangle(100, 50, 50, 100, 150, 100)',
            element: new Drawing(200, 200).addTriangle(100, 50, 50, 100, 150, 100).getParent()
        }
    ],
    "Text": [
        {
            code: "addText(50, 50, 'Hello, World!')",
            element: new Drawing(200, 200).addText(50, 50, 'Hello, World!').getParent()
        },
        {
            code: "addText(50, 150, 'Hello, DraftBoard.')",
            element: new Drawing(200, 200).addText(50, 150, 'Hello, DraftBoard!').getParent()
        }
    ],
    "Marker": [
        {
            code: "addMarker(50, 50, 'Hello world')",
            element: new Drawing(200, 200).addMarker(50, 50, 'Hello world').getParent()
        }
    ],
    "Arc": [

    ],
    "Ellipse": [

    ],
    "Polygon": [
        {
            code: 'addPolygon(10, 10, 40, 40, 60, 40, 80, 20, 100, 100, 120, 10)',
            element: new Drawing(200, 200).addPolygon(10, 10, 40, 40, 60, 40, 80, 20, 100, 100, 120, 10).getParent()
        }
    ],
    "Polyline": [
        {
            code: 'addPolyline(20, 20, 40, 40, 60, 40, 80, 20, 100, 100, 120, 10)',
            element: new Drawing(200, 200).addPolyline(20, 20, 40, 40, 60, 40, 80, 20, 100, 100, 120, 10).getParent()
        }
    ]
};

renderExamples();

function renderExamples() {
    const root = document.getElementById('examples-root');
    if (!root) {
        return;
    }

    let id = 0;
    const keys = Object.keys(examples);
    keys.forEach(key => {
        const heading = document.createElement('h1');
        heading.innerText = key;

        root.appendChild(heading);

        const list = examples[key];
        list.forEach(example => {
            const div = document.createElement('div');
            div.id = 'example' + (++id);
            root.appendChild(div);
            addExample(div, example);
        });
    })
}

function addExample(element: HTMLElement, example: ExampleInfo): void {
    if (!element) {
        return;
    }

    const drawing = example.element;
    if (!drawing) {
        return;
    }

    if (!(drawing instanceof Drawing)) {
        return;
    }

    console.log('drawing: ', drawing);

    // create HTML structure
    const wrapper = document.createElement('div');
    wrapper.className = 'example-wrapper';

    const pre = document.createElement('pre');
    pre.innerText = example.code;

    const svg = document.createElement('div');
    svg.className = 'svg-container';
    svg.appendChild(document.createTextNode('SVG'));

    const canvas = document.createElement('div');
    canvas.className = 'canvas-container';
    canvas.appendChild(document.createTextNode('Canvas'));

    wrapper.appendChild(pre);
    wrapper.appendChild(svg);
    wrapper.appendChild(canvas);

    element.appendChild(wrapper);

    // render drawing
    canvas.appendChild(renderCanvas(drawing));
    svg.appendChild(renderSvg(drawing));
}
