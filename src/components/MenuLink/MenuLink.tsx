import { useState } from 'react'
import type { employee } from '../../types/employee'
import type { menuItem } from '../../types/menuItem'

type data = {
  links: menuItem[]
  employeesList: employee[]
  setFilteredListEmployees: React.Dispatch<React.SetStateAction<employee[]>>
  setSectionTitle: React.Dispatch<React.SetStateAction<string>>
}

const keywordsFilter: { [key: string]: string[] } = {
  frontend: ['react', 'developer', 'frontend', 'javascript'],
  backend: [''],
  fullstack: [''],
  ui_ux: ['ux', 'interaction', 'designer', 'design'],
}

export function MenuLink({
  links,
  employeesList,
  setFilteredListEmployees,
  setSectionTitle,
}: data) {
  const [isActivated, setIsActivated] = useState(window.location.hash)

  function filterEmployeeList(href: string) {
    for (const link of links) {
      if (link.href === href) setSectionTitle(link.label)
    }

    if (href.slice(1) === 'all') setFilteredListEmployees(employeesList)
    else {
      const filteredList = employeesList.filter(employee => {
        const keywords = employee.job.split(' ')

        return keywords.some(word =>
          keywordsFilter[href.slice(1).toLowerCase()].includes(
            word.toLowerCase()
          )
        )
      })

      setFilteredListEmployees(filteredList)
    }

    setIsActivated(href)
  }

  return (
    <ul>
      {links.map(({ href, label }, index) => (
        <li
          key={index}
          className={`
                ${href === isActivated ? 'bg-[#F3F4F6]' : 'bg-white'}
              `}
        >
          <a href={href} onClick={() => filterEmployeeList(href)}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  )
}
