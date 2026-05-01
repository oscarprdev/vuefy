/**
 * Pagination compound component — wraps v0 Pagination primitives with Tailwind styling.
 */
import Pagination from './pagination.vue'
import PaginationItem from './pagination-item.vue'
import PaginationPrev from './pagination-prev.vue'
import PaginationNext from './pagination-next.vue'

Pagination.Item = PaginationItem
Pagination.Prev = PaginationPrev
Pagination.Next = PaginationNext

export default Pagination
export { PaginationItem, PaginationPrev, PaginationNext }
