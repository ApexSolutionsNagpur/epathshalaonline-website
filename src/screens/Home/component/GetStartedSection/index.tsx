import Image from "next/image";

export default function JourneySection() {
    return (
        <section className="relative w-full h-[420px] flex items-end my-14">

            <Image
                src="/images/getstart.jpg"
                alt="Journey Background"
                fill
                priority
                className="object-cover"
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 max-w-7xl mx-auto  w-full pb-10">
                <div className="grid md:grid-cols-2  items-end justify-between">

                    <div className="text-white">
                        <p className="uppercase tracking-widest text-sm mb-4">
                            Get Started
                        </p>

                        <h2 className="text-4xl md:text-[48px]  font-extrabold leading-tight">
                            Start Your Journey to <br />
                            Greatness Together
                        </h2>
                    </div>
                    <div className="text-white ">
                        <p className="mb-6 text-gray-200 leading-relaxed max-w-lg ml-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>

                        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-sm font-medium transition duration-300 ml-26">
                            Get Started
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
