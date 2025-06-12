import type { employee } from '../../types/employee'

type data = {
  employeeList: employee[]
}

export function EmployeeCard({ employeeList }: data) {
  return (
    <ul
      className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none`}
    >
      {employeeList.map((employee, index) => (
        <li
          key={index}
          className="employeeCard flex items-center gap-2 bg-white rounded-[8px] min-h-[100px] overflow-hidden shadow-[5px_5px_10px_rgba(0,0,0,0.35)]"
        >
          <div className="bg-[#E5E7EB] aspect-square min-w-[50px] min-h-[50px] rounded-[100%] flex justify-center items-center text-[#6B7280] font-[400]">
            {employee.name.charAt(0)}
          </div>
          <div>
            <p className="font-[500] text-[#111827]">{employee.name}</p>
            <p className="font-[400] text-[#6B7280]">{employee.job}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
