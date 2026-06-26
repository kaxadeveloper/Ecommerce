import React from 'react'
import Heading from '../Shared/Heading'

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
