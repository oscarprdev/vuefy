/**
 * Table — a layout component that displays data in rows and columns.
 */
import Table from './table.vue'
import TableHead from './table-head.vue'
import TableBody from './table-body.vue'
import TableRow from './table-row.vue'
import TableCell from './table-cell.vue'
import TableFooter from './table-footer.vue'

Table.Head = TableHead
Table.Body = TableBody
Table.Row = TableRow
Table.Cell = TableCell
Table.Footer = TableFooter

export default Table
export { TableHead, TableBody, TableRow, TableCell, TableFooter }
