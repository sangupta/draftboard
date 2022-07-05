import Parent from './../src/Parent';
import Drawing from './../src/Drawing';
import { renderSvg } from '../src/render/SvgRenderer';
import { renderCanvas } from '../src/render/CanvasRenderer';

interface ExampleInfo {
    code: string;
    element: Parent
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
        }
    ],
    "Rectangle": [
        {
            code: 'addRectange(50,50,150,150)',
            element: new Drawing(200, 200).addRectangle(50, 50, 150, 150).getParent()
        }
    ],
    "Arc": [
        {
            code: 'addArc(100, 100, 50, 0, 90)',
            element: new Drawing(200, 200).addArc(100, 100, 50, 0, 90).getParent()
        },
        {
            code: 'addArc(100, 100, 50, 90, 180)',
            element: new Drawing(200, 200).addArc(100, 100, 50, 90, 180).getParent()
        },
        {
            code: 'addArc(100, 100, 50, 180, 270)',
            element: new Drawing(200, 200).addArc(100, 100, 50, 180, 270).getParent()
        },
        {
            code: 'addArc(100, 100, 50, 270, 360)',
            element: new Drawing(200, 200).addArc(100, 100, 50, 270, 360).getParent()
        },
    ],
    "Ellipse": [

    ],
    "Polygon": [

    ],
    "Polyline": [

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
    const canvas = document.createElement('div');

    wrapper.appendChild(pre);
    wrapper.appendChild(svg);
    wrapper.appendChild(canvas);

    element.appendChild(wrapper);

    // render drawing
    canvas.appendChild(renderCanvas(drawing));
    svg.appendChild(renderSvg(drawing));
}
