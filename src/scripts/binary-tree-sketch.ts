import { GUI } from 'dat.gui';
import P5 from 'p5';
import RBinaryTree from 'src/libs/binary-tree';

const sketch = (p5: P5) => {
    const options = {
        mode: 'View'
    };

    const gui = new GUI({ autoPlace: false });
    gui.domElement.id = 'gui';
    gui.add(options, 'mode', ['view', 'draw'])
        .name('Mode')
        .onChange((val: string) => (options.mode = val));
    document.getElementById('gui')?.appendChild(gui.domElement);

    /** setup */
    p5.setup = () => {
        const canvas = p5.createCanvas(window.innerWidth, window.innerHeight);
        canvas.parent('app');
        p5.background('white');
        p5.pixelDensity(1);
        p5.colorMode(p5.HSB);
        window.addEventListener('resize', () => resizeDisplay(p5));

        init(p5);
    };

    /** draw */
    p5.draw = () => {
        p5.background(90, 30, 80);
    };

    p5.mousePressed = (event: MouseEvent) => {};

    p5.mouseDragged = (event: MouseEvent) => {};

    p5.mouseReleased = (event: MouseEvent) => {};

    /**--------------------------------- */
    // functions

    function resizeDisplay(canvas: P5) {
        canvas.resizeCanvas(window.innerWidth, window.innerHeight);
    }

    function init(p5: P5) {
        const tree = new RBinaryTree<number, string>();
        tree.addVertex(10);
        tree.addVertex(5);
        tree.addVertex(1);
        tree.addVertex(7);
        tree.addVertex(9);
        console.log(tree);
        console.log(tree.traverse());
    }
};

new P5(sketch);
