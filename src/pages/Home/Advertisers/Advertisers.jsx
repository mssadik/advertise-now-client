
import './Advertisers.css';

const Advertisers = () => {
    return (
        <div className="my-8 py-20 bg-slate-300">
            <div className="text-center p-5">
                <h3 className="font-bold text-orange-300">FOR ADVERTISERS</h3>
                <h1 className="font-extrabold text-4xl text-black">CHAMPIONING YOUR GOALS</h1>
            </div>
            <div className="flex gap-y-16 flex-col  md:flex-row items-center justify-center md:space-x-8 p-8">
                {/* Card 1 */}
                <div className="custom-card relative h-40 bg-gradient-to-r from-orange-300 to-pink-500 hover:from-orange-500 hover:to-purple-500">
                    <img className="mx-auto h-16 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2" src="https://i.ibb.co/VJw0dWF/iw.jpg" alt="Card 1" />
                    <p className="mt-4 text-white text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>



                {/* Card 2 */}
                <div className="custom-card relative h-40  bg-gradient-to-r from-orange-300 to-blue-600 hover:from-orange-500 hover:to-purple-500">
                    <img className="mx-auto h-16 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2" src="https://i.ibb.co/VJw0dWF/iw.jpg" alt="Card 1" />
                    <p className="mt-4 text-white text-sm md:text-base ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.</p>
                </div>

                {/* Card 3 */}
                <div className="custom-card relative h-40  bg-gradient-to-r from-red-300 to-pink-500 hover:from-green-500 hover:to-yellow-500 ">
                    <img className="mx-auto h-16 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2" src="https://i.ibb.co/VJw0dWF/iw.jpg" alt="Card 1" />
                    <p className="mt-4 text-white text-sm md:text-base text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className='text-center'>
                <button className="bg-gradient-to-r from-orange-300 to-pink-500 hover:from-orange-500 hover:to-tomato-500 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 transform hover:scale-105">
                    Start your business
                </button>

            </div>
        </div>
    );
};

export default Advertisers;
