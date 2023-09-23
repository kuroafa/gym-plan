import MealsPage from '@/components/MealsPage'
import React from 'react'
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '260px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  borderRadius: '20px',
  border: 'none'
};

type Props = {}

const page = (props: Props) => {
  return (
    <>
        <div className="grid grid-cols-1 mb-5">
          <Carousel autoplay effect="fade">
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
      </div>
    <MealsPage/>
    </>
  )
}

export default page