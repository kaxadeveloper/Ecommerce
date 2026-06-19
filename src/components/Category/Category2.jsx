import React from "react";
import Image1 from "../../assets/category/gaming.webp";
import Image2 from "../../assets/category/VR.webp";
import Image3 from "../../assets/category/speaker.webp";
import Button from "../Shared/Button";

const Category = () => {
    return (
        <section className="py-8">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Speaker */}
                    <div className="lg:col-span-2 relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-400/90 to-gray-100 h-[320px] p-6 flex items-end">
                        <div className="relative z-20 w-1/2 text-white">
                            <p className="text-white/80">Enjoy</p>
                            <p className="text-2xl font-semibold">With</p>

                            <h2 className="text-4xl xl:text-5xl font-bold text-white/70 mb-5">
                                Speaker
                            </h2>

                            <Button
                                text="Browse"
                                bgColor="bg-primary"
                                textColor="text-white"
                            />
                        </div>

                        <img
                            src={Image3}
                            alt="Speaker"
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-[220px] lg:w-[280px]"
                        />
                    </div>

                    {/* Gaming */}
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-green to-brand-green/90 h-[320px] p-6 flex items-end">
                        <div className="relative z-20 w-1/2 text-white">
                            <p className="text-white/80">Enjoy</p>
                            <p className="text-2xl font-semibold">With</p>

                            <h2 className="text-4xl font-bold text-white/70 mb-5">
                                Gaming
                            </h2>

                            <Button
                                text="Browse"
                                bgColor="bg-white"
                                textColor="text-brand-green"
                            />
                        </div>

                        <img
                            src={Image1}
                            alt="Gaming"
                            className="absolute right-3 top-3 w-[170px] lg:w-[200px]"
                        />
                    </div>

                    {/* VR */}
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-blue to-brand-blue/90 h-[320px] p-6 flex items-end">
                        <div className="relative z-20 w-1/2 text-white">
                            <p className="text-white/80">Enjoy</p>
                            <p className="text-2xl font-semibold">With</p>

                            <h2 className="text-4xl font-bold text-white/70 mb-5">
                                VR
                            </h2>

                            <Button
                                text="Browse"
                                bgColor="bg-white"
                                textColor="text-brand-blue"
                            />
                        </div>

                        <img
                            src={Image2}
                            alt="VR"
                            className="absolute right-3 top-3 w-[150px] lg:w-[160px]"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Category;