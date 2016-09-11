import { DataTableRow } from './row.component';
import { DataTableColumn } from './column.component';
export declare type RowCallback = (item: any, row: DataTableRow, index: number) => string;
export declare type CellCallback = (item: any, row: DataTableRow, column: DataTableColumn, index: number) => string;
export interface DataTableTranslations {
    indexColumn: string;
    selectColumn: string;
    expandColumn: string;
    paginationLimit: string;
    paginationRange: string;
}
export declare var defaultTranslations: DataTableTranslations;
export interface DataTableParams {
    offset?: number;
    limit?: number;
    sortBy?: string;
    sortAsc?: boolean;
}
