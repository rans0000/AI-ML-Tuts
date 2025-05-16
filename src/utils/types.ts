export type TVertex<T = unknown, K = undefined> = {
    id: number;
    label: T;
    edges: TVertex<T, K>[];
    data: K | undefined;

    addVertex(value: T, data?: K): TVertex<T, K>;
};

export type TBinaryTreeVertex<T = unknown, K = undefined> = Omit<TVertex<T, K>, 'edges' | 'addVertex'> & {
    edges: [left?: TBinaryTreeVertex<T, K>, right?: TBinaryTreeVertex<T, K>];
    addVertex(value: T, data?: K): TBinaryTreeVertex<T, K>;
    visit(list: TBinaryTreeVertex<T, K>[], currDepth: number): { list: TBinaryTreeVertex<T, K>[]; maxDepth: number };
    search(value: T): TBinaryTreeVertex<T, K> | null;
};

export type TBinaryTree<T = unknown, K = undefined> = {
    root?: TBinaryTreeVertex<T, K>;

    addVertex(value: T, data?: K): TBinaryTree<T, K>;
    traverse(): { list: TBinaryTreeVertex<T, K>[]; maxDepth: number };
    search(value: T): TBinaryTreeVertex<T, K> | null;
};
