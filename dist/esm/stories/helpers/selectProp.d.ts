export declare function getSelectPropArgType<T extends Record<string, string>>(propName: string, enumObj: T): {
    [x: string]: {
        options: string[];
        mapping: string[];
        control: {
            type: string;
            labels: string[];
        };
    };
};
