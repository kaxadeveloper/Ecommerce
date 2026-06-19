import React from "react";
import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.webp";
import Image3 from "../../assets/category/macbook.jpg";
import Button from "../Shared/Button";

const Category = () => {
    return (
        <div className="py-8">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Earphone */}
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-black/90 to-black/70 text-white h-[320px] py-10 px-6 flex items-end">
                        <div className="relative z-20 max-w-[50%]">
                            <p className="text-gray-300 mb-1">Enjoy</p>
                            <p className="text-2xl font-semibold mb-1">With</p>
                            <p className="text-4xl xl:text-5xl font-bold text-white/50 mb-4">
                                Earphone
                            </p>

                            <Button
                                text="Browse"
                                bgColor="bg-primary"
                                textColor="text-white"
                            />
                        </div>

                        <img
                            src={Image1}
                            alt="Earphone"
                            className="absolute right-0 bottom-0 w-[220px] md:w-[260px] z-10"
                        />
                    </div>

                    {/* Watch */}
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-yellow to-brand-yellow/90 text-white h-[320px] py-10 px-6 flex items-end">
                        <div className="relative z-20 max-w-[50%]">
                            <p className="text-white/80 mb-1">Enjoy</p>
                            <p className="text-2xl font-semibold mb-1">With</p>
                            <p className="text-4xl xl:text-5xl font-bold text-white/60 mb-4">
                                Watch
                            </p>

                            <Button
                                text="Browse"
                                bgColor="bg-white"
                                textColor="text-brand-yellow"
                            />
                        </div>

                        <img
                            src={Image2}
                            alt="Watch"
                            className="absolute right-0 bottom-0 w-[220px] md:w-[250px] z-10"
                        />
                    </div>

                    {/* Macbook */}
                    <div className="relative overflow-hidden rounded-3xl col-span-1 sm:col-span-2 bg-gradient-to-br from-primary to-primary/90 text-white h-[320px] py-10 px-6 flex items-end">
                        <div className="relative z-20 max-w-[45%]">
                            <p className="text-white/80 mb-1">Enjoy</p>
                            <p className="text-2xl font-semibold mb-1">With</p>
                            <p className="text-4xl xl:text-5xl font-bold text-white/60 mb-4">
                                Macbook
                            </p>

                            <Button
                                text="Browse"
                                bgColor="bg-white"
                                textColor="text-primary"
                            />
                        </div>

                        <img
                            src={Image3}
                            alt="Macbook"
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-[220px] md:w-[280px] z-10"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Category;