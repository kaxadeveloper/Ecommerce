import React from 'react'
import Heading from '../Shared/Heading'

const BlogData = [
    {
        title: "How to choose perfect smartwatch",
        subtitle:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique optio repudiandae quo nostrum harum nihil?",
        published: "Jan 27, 2026 by Dilshad",
        image: Img1,
    },
    {
        title: "How to choose perfect gadget",
        subtitle:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique optio repudiandae quo nostrum harum nihil?",
        published: "Jan 27, 2026 by Satya",
        image: Img2,
    },
    {
        title: "How to choose perfect VR headset",
        subtitle:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique optio repudiandae quo nostrum harum nihil?",
        published: "Jan 27, 2026 by Sabir",
        image: Img3,
    },
]

const Blogs = () => {
    return (
        <div>
            <div className="container">
                <Heading title="Recent News" subtitle={"Explore Our Blogs"} />
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
                    {
                        BlogData.map((data) => (
                            <div></div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Blogs
