import React from 'react'
import Heading from '../Shared/Heading'

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Boat Headphone",
        price: "120",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Rocky Mountain",
        price: "420",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Goggles",
        price: "320",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Printed",
        price: "220",
        aosDelay: "600",
    },
]

const Products = () => {
    return (
        <div>
            <div className="container">
                <Heading title="Our Products" subtitle={"Explore Our Products"}/>
                <ProductCard data={ProductsData} />
            </div>
        </div>
    )
}

export default Products
