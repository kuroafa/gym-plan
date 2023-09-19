import { Plan } from '@prisma/client';
import React from 'react'

type Props = {
  planData: Plan[];
}

const AllPlans = ({planData}: Props) => {
  return (
    <div>
       {planData.map((plan)=>{
        return(
          <>
             
          </>
        )
       })}
    </div>
  )
}

export default AllPlans
