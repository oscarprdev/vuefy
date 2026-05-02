/**
 * DropdownMenu — displays a menu to the user (e.g. menus, sheets) as an overlay.
 */
import DropdownMenu from './dropdown-menu.vue'
import DropdownMenuItem from './dropdown-menu-item.vue'
import DropdownMenuSeparator from './dropdown-menu-separator.vue'
import DropdownMenuLabel from './dropdown-menu-label.vue'
import DropdownMenuShortcut from './dropdown-menu-shortcut.vue'
import DropdownMenuGroup from './dropdown-menu-group.vue'
import DropdownMenuCheckboxItem from './dropdown-menu-checkbox-item.vue'
import DropdownMenuRadioItem from './dropdown-menu-radio-item.vue'
import DropdownMenuSub from './dropdown-menu-sub.vue'

DropdownMenu.Item = DropdownMenuItem
DropdownMenu.Separator = DropdownMenuSeparator
DropdownMenu.Label = DropdownMenuLabel
DropdownMenu.Shortcut = DropdownMenuShortcut
DropdownMenu.Group = DropdownMenuGroup
DropdownMenu.CheckboxItem = DropdownMenuCheckboxItem
DropdownMenu.RadioItem = DropdownMenuRadioItem
DropdownMenu.Sub = DropdownMenuSub

export default DropdownMenu
export {
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuSub,
}
