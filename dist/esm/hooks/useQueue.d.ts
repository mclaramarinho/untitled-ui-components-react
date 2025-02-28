export type useQueueFunctionType = () => void;
export declare const useQueue: () => {
    enqueue: (hookFunction: useQueueFunctionType) => void;
    dequeue: () => void | null;
};
