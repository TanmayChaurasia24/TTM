import React from 'react'
import { BackgroundGradientDemo } from '../components/BlogPost'

const Allpost = () => {
  return (
    <div className='bg-neutral-900 h-[100vh] overflow-auto p-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center'>
            <BackgroundGradientDemo/>
            <BackgroundGradientDemo/>
            <BackgroundGradientDemo/>
            <BackgroundGradientDemo/>
            <BackgroundGradientDemo/>
            <BackgroundGradientDemo/>
            <BackgroundGradientDemo/>
        </div>
    </div>
  )
}

export default Allpost
