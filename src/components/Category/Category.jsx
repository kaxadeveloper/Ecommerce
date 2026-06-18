import React from 'react';
import Image1 from "../../assets/category/earphone.jpg";
import Image2 from "../../assets/category/watch.webp";
import Image3 from "../../assets/category/macbook.jpg";

const Category = () => {
    return (
        <div className='py-8'>
            <div className='container'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <div>
                            <div>
                                <p>Enjoy</p>
                                <p>With</p>
                                <p>Earphone</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
