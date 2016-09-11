import { DataTable } from './components/table.component';
import { DataTableColumn } from './components/column.component';
import { DataTableRow } from './components/row.component';
import { DataTablePagination } from './components/pagination.component';
import { DataTableHeader } from './components/header.component';
export * from './components/types';
export * from './tools/data-table-resource';
export { DataTable, DataTableColumn, DataTableRow, DataTablePagination, DataTableHeader };
export declare const DATA_TABLE_DIRECTIVES: (typeof DataTable | typeof DataTableColumn)[];
export declare class DataTableModule {
}
