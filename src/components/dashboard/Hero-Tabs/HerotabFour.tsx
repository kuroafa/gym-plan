import TrainingAppointmentForm from '@/components/TrainingAppointmentForm'
import React from 'react'

type Props = {}

const HerotabFour = (props: Props) => {
  return (
    <div className='grid md:grid-cols-2'>
            <div className="p-3">
      <h2 className="text-3xl font-semibold  my-2">Workout Session Form</h2>
        <TrainingAppointmentForm/>
      </div>
    </div>
  )
}

export default HerotabFour