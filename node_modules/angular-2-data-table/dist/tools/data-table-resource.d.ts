import { DataTableParams } from '../components/types';
export declare class DataTableResource<T> {
    private items;
    constructor(items: T[]);
    query(params: DataTableParams, filter?: (item: T, index: number, items: T[]) => boolean): Promise<T[]>;
    count(): Promise<number>;
}
