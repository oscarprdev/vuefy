/**
 * Breadcrumbs compound component — wraps v0 Breadcrumbs primitives with Tailwind styling.
 */
import Breadcrumbs from './breadcrumbs.vue'
import BreadcrumbsItem from './breadcrumbs-item.vue'
import BreadcrumbsLink from './breadcrumbs-link.vue'

Breadcrumbs.Item = BreadcrumbsItem
Breadcrumbs.Link = BreadcrumbsLink

export default Breadcrumbs
export { BreadcrumbsItem, BreadcrumbsLink }
