import React, { useState } from 'react'

import lion from '../assets/img/lion.svg'
import Employee from '../components/reusable/employee-filter/Employee'
import Filter from '../components/reusable/employee-filter/Filter'

const FilterStaff = () => {
  const [employee, setEmployee] = useState([
    {
      img: lion,
      name: 'Name Surname',
      position: 'Employee-position',
      date: new Date(),
      state: 'ill'
    }
  ])
  return(
    <div className='filter-staff'>
      <div className='filters'>
        <Filter 
          type='Name'
          count='6'
          line='green'/>
        <Filter />
        <Filter />
        <Filter />
      </div>
      <div className='filters-content'>
        <Employee />
      </div>
    </div>
  )
}

export default FilterStaff