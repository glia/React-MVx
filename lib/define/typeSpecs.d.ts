import { ComponentProto } from './common';
export interface TypeSpecs {
    [name: string]: object | Function;
}
export declare function compileSpecs(props: TypeSpecs): {
    propTypes: {};
    defaults: any;
    watchers: {
        [name: string]: PropWatcher;
    };
    changeHandlers: {
        [name: string]: any[];
    };
};
declare type PropWatcher = (this: ComponentProto, propValue: any, propName: string) => void;
export declare class Node {
}
export declare class Element {
}
declare global {
    interface NumberConstructor {
        integer: Function;
    }
}
export {};
