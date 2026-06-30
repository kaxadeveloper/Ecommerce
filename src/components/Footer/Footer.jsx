import React from 'react'

const Footer = () => {
    return (
        <div className='dark:bg-gray-950'>
            <div className="container">
                <div className="grid md:grid-cols-3 pb-20 pt-5">
                    <div className='py-8 px-4'>
                        <a
                            href="#"
                            className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>
                            Shophub
                        </a>
                        <p className='text-gray-600 lg:pr-24 pt-3'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </p>
                        <p className='text-gray-500 mt-4'>
                            Made with ❤️ by The CodingMaster
                        </p>
                    </div>
                    <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                        <div className='py-8 px-4'>
                            <h1>Important Links</h1>
                            <ul>
                                {
                                    FooterLinks.map((data, index) => (
                                        <li>
                                            
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
