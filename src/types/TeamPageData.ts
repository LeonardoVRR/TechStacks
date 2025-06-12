import type { employee } from './employee'
import type { menuItem } from './menuItem'

export type PageData = {
  employeeList: employee[]
  menuLinks: menuItem[]
}
