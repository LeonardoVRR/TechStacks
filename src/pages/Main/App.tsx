//import { useEffect } from 'react'
import { useState } from 'react'
import { MenuLink } from '../../components/MenuLink/MenuLink'
import { TechStack } from '../../components/TechStack/TechStack'
import './App.css'

const props = {
  employeeList: [
    {
      name: 'Emma Thompson',
      job: 'UX Researcher',
    },
    {
      name: 'William Davis',
      job: 'UI Designer',
    },
    {
      name: 'Ava Wilson',
      job: 'Interaction Designer',
    },
    {
      name: 'Noah Martin',
      job: 'Design System Lead',
    },
    {
      name: 'Alex Johnson',
      job: 'Senior React Developer',
    },
    {
      name: 'Mia Chen',
      job: 'UI Developer',
    },
    {
      name: 'David Park',
      job: 'JavaScript Specialist',
    },
    {
      name: 'Sarah Miller',
      job: 'Frontend Lead',
    },
  ],
  menuLinks: [
    {
      href: '#all',
      label: 'All',
    },
    {
      href: '#frontend',
      label: 'Frontend',
    },
    {
      href: '#backend',
      label: 'Backend',
    },
    {
      href: '#fullstack',
      label: 'Fullstack',
    },
    {
      href: '#ui_ux',
      label: 'UI/UX',
    },
  ],
}

function App() {
  const { employeeList, menuLinks } = props

  const [sectionTitle, setSectionTitle] = useState('All')

  const [filteredListEmployees, setFilteredListEmployees] =
    useState(employeeList)

  return (
    <main className="w-[100dvw] h-[100dvh] grid grid-cols-[20%_1fr] grid-rows-1">
      <aside className="sideMenuContainer grid grid-rows-[10%_1fr]">
        <div className="border-b-2 border-[#F3F4F6] flex items-center">
          <h2 className="font-[500] text-[#1F2937]">Tech Stacks</h2>
        </div>
        <nav className="overflow-y-auto">
          <MenuLink
            links={menuLinks}
            employeesList={employeeList}
            setFilteredListEmployees={setFilteredListEmployees}
            setSectionTitle={setSectionTitle}
          />
        </nav>
      </aside>
      <section className="employeeListContainer bg-[#F9FAFB] h-full flex flex-col gap-2 overflow-y-auto">
        <h1 className="font-[300]">{sectionTitle} Team</h1>
        <TechStack employeeList={filteredListEmployees} />
      </section>
    </main>
  )
}

export default App
