import React from 'react'

const Employee = () => {
    let salary = 1000;
   const increment = ()=>{
    salary= salary+100;
    console.log(salary)
   }
  return (
    <div>
        <h1>Current salary: {salary}</h1>
      <button onClick={increment}>Increase Salary </button>
    </div>
  )
}

export default Employee
