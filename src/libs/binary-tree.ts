import P5 from 'p5';
import { TBinaryTreeVertex } from 'src/utils/types';

const v1: TBinaryTreeVertex<number, number> = {
    id: 1,
    label: 1,
    edges: [undefined, undefined],
    data: 3
};

class RBinaryTree<T = unknown, K = undefined> {
    private p5: P5;
    private root?: TBinaryTreeVertex<T, K>;

    constructor(p5: P5) {
        this.p5 = p5;
        this.root = undefined;
    }

    addVertex(label: T, data?: K): RBinaryTree<T, K> {
        if (!this.root) {
            this.root = { id: 0, label, data, edges: [undefined, undefined] };
        }
        return this;
    }
}

export default RBinaryTree;
