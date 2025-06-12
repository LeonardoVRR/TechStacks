import type { ComponentProps } from 'react'
import type { employee } from '../../types/employee'
import { EmployeeCard } from '../EmployeeCard/EmployeeCard'
import { EmptySection } from '../EmptySection/EmptySection'
import './TechStack.css'

interface TechStackProps extends ComponentProps<'section'> {
  employeeList: employee[]
}

export function TechStack({ employeeList }: TechStackProps) {
  const hasEmployees: boolean = employeeList.length > 0

  return (
    <section className={`${hasEmployees ? '' : 'h-full'}`}>
      {hasEmployees ? (
        <EmployeeCard employeeList={employeeList} />
      ) : (
        <EmptySection />
      )}
    </section>
  )
}
