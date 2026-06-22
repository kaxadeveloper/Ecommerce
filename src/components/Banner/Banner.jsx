import React from 'react'

const Banner = ({ data }) => {
    return (
        <div className='min-h-[550px] flex justify-center items-center py-12'>
            <div style={{ backgroundColor: data.bgColor }} className='container'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl'>
                    <div>
                        <p>{data.discount}</p>
                        <h1> {data.title}</h1>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
