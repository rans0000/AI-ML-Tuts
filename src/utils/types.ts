export type TVertex<T = unknown, K = undefined> = {
    id: number;
    label: T;
    edges: TVertex<T, K>[];
    data: K | undefined;
};

export type TBinaryTreeVertex<T = unknown, K = undefined> = Omit<TVertex<T, K>, 'edges'> & {
    edges: [TBinaryTreeVertex<T, K>?, TBinaryTreeVertex<T, K>?];
};
