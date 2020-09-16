import React, { useState, useEffect } from 'react'

import Employee from '../components/reusable/employee-filter/Employee'
import Filter from '../components/reusable/employee-filter/Filter'

import employees from './employees'

import right from '../assets/img/chevron-right.svg'
import left from '../assets/img/chevron-left.svg'

const FilterStaff = () => {
  const [defaultFilter, setDefaultFilter] = useState('all')
  const [allEmployee, setAllEmployee] = useState([])

  const [filters, setFilters] = useState([])

  useEffect(() => {
    setAllEmployee(employees)
    setFilters([
      {
        type: 'all',
        title: 'Все',
        count: 12,
        line: 'green-line'
      },
      {
        type: 'vacation',
        title: 'В отпуске',
        count: 10,
        line: 'blue-line'
      },
      {
        type: 'dayOff',
        title: 'Отгул',
        count: 6,
        line: 'yellow-line'
      },
      {
        type: 'ill',
        title: 'Больничный',
        count: 9,
        line: 'red-line'
      }
    ])

  }, [])

  const changeFilter = (filter) => {
    setDefaultFilter(filter)
  }

  return(
    <div className='filter-staff'>
      <div className='filters'>
        {
          filters.map(filter => (
            <Filter 
              key={filter.type}
              type={filter.type}
              change={changeFilter}
              title={filter.title}
              count={filter.count}
              line={filter.line}
            />
          ))
        }
      </div>
      <div className='filters-content'>
        <img src={left} alt='left' />
        <div className='employees'>
          {
            allEmployee.map(item => (
              <Employee
                img={item.img}
                position={item.position}
                date={item.date}
                state={item.state}
                name={item.name}/>
            ))
          }
        </div>
        <img src={right} alt='right' />
      </div>
    </div>
  )
}

export default FilterStaff