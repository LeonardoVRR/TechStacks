//import { useEffect } from 'react'
import { useState } from 'react'
import { MenuLink } from '../../components/MenuLink/MenuLink'
import { TechStack } from '../../components/TechStack/TechStack'
import { data } from '../../data/data'
import './App.css'

function App() {
  const { employeeList, menuLinks } = data

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
            setSectionTitle={setSectionTitle}
            setFilteredListEmployees={setFilteredListEmployees}
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
