import { TBinaryTree, TBinaryTreeVertex } from 'src/utils/types';

class RBinaryTreeVertex<T = unknown, K = undefined> implements TBinaryTreeVertex<T, K> {
    id: number;
    label: T;
    edges: [TBinaryTreeVertex<T, K>?, TBinaryTreeVertex<T, K>?];
    data: K | undefined;

    constructor(label: T, data?: K) {
        this.label = label;
        this.data = data;
        this.edges = [undefined, undefined];
    }

    addVertex(value: T): TBinaryTreeVertex<T, undefined>;
    addVertex(value: T, data: Exclude<K, undefined>): TBinaryTreeVertex<T, K>;
    addVertex(value: T, data?: K): TBinaryTreeVertex<T, K> {
        if (value < this.label) {
            if (this.edges[0] === undefined) {
                return (this.edges[0] = new RBinaryTreeVertex(value, data));
            } else {
                return this.edges[0].addVertex(value, data);
            }
        } else if (value > this.label) {
            if (this.edges[1] === undefined) {
                return (this.edges[1] = new RBinaryTreeVertex(value, data));
            } else {
                return this.edges[1].addVertex(value, data);
            }
        }
        return this;
    }

    visit(list: TBinaryTreeVertex<T, K>[], currDepth: number): { list: TBinaryTreeVertex<T, K>[]; maxDepth: number } {
        currDepth++;
        let maxDepthL = -1;
        let maxDepthR = -1;

        if (this.edges[0] !== undefined) {
            ({ list, maxDepth: maxDepthL } = this.edges[0].visit(list, currDepth));
        }
        list.push(this);
        if (this.edges[1] !== undefined) {
            ({ list, maxDepth: maxDepthR } = this.edges[1].visit(list, currDepth));
        }
        const maxDepth =
            maxDepthL > maxDepthR
                ? maxDepthL > currDepth
                    ? maxDepthL
                    : currDepth
                : maxDepthR > currDepth
                  ? maxDepthR
                  : currDepth;
        return { list, maxDepth };
    }
}
class RBinaryTree<T = unknown, K = undefined> implements TBinaryTree<T, K> {
    root?: TBinaryTreeVertex<T, K>;

    constructor() {
        this.root = undefined;
    }

    addVertex(value: T, data?: K): TBinaryTree<T, K> {
        if (!this.root) {
            this.root = new RBinaryTreeVertex(value, data);
        } else {
            this.root.addVertex(value, data);
        }
        return this;
    }

    traverse(): { list: TBinaryTreeVertex<T, K>[]; maxDepth: number } {
        let list: TBinaryTreeVertex<T, K>[] = [];
        return this.root ? this.root.visit(list, 0) : { list, maxDepth: 0 };
    }
}

export default RBinaryTree;
