import { ComponentClass as ReactComponentClass, Component } from 'react';
import { MixableConstructor, Messenger } from 'type-r';
export interface ComponentClass<Proto> extends ReactComponentClass, MixableConstructor {
    prototype: Proto & ComponentProto;
    mixins: any;
}
export declare type ComponentProto = Component & Messenger;
