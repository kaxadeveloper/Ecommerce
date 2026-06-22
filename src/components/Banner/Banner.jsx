import React from 'react'

const Banner = ({ data }) => {
    return (
        <div className='min-h-[550px] flex justify-center items-center py-12'>
            <div style={{ backgroundColor: data.bgColor }} className='container'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl'>
                    <div className='p-6 sm:p-8'>
                        <p className='text-sm'>{data.discount}</p>
                        <h1 className='uppercase text-4xl lg:text-7xl font-bold'>{" "}{data.title}</h1>
                        <p className='text-sm'>{data.date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
