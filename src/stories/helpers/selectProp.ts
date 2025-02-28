export function getSelectPropArgType<T extends Record<string, string>>(propName: string, enumObj: T){
    return {
        [propName]: {
            options: Object.values(enumObj),
            mapping: Object.values(enumObj),
            control: {
            type: 'select',
            labels: Object.keys(enumObj),
            },
        }
    }
}
