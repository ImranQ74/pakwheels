import Link from "next/link";
import Image from "next/image";

export default function Civic (){
    return (
        <div className="flex flex-col justify-center items-center space-y-16 my-4 ">
            <div className=" w-full h-auto flex flex-row justify-center float-left"> <h1 className=" font-semibold text-4xl text-gray-700 text-center"> Honda Civic 2024 Price in Pakistan, Images, Reviews & Specs</h1> </div>
            <div className="w-90 h-auto float-left justify-center items-center"> <img src="civic.jpg" alt="Toyota Corolla" /> </div>
            <div className="w-10/11 h-auto float-none justify-center items-center">
            <p className="font-bold text-base text-gray-800 text-center">Honda Civic Oriel </p>
            <p className="font-medium text-base text-gray-800 text-center">1498 cc, Automatic, Petrol </p>
            <p className="font-medium text-base text-gray-800 text-center">2 Airbags, Sun Roof, Rear Central Control, </p>
            <p className="font-medium text-base text-gray-800 text-center">Rear AC Vents, Navigation, Push Start, Driving Modes</p>
            <p className="font-bold text-sm text-gray-700 justify-center text-center"> Delivery Time: 1 Month  </p>
            </div>
            <div className="flext flex-row justify-center items-center text-green-500 text-3xl font-semibold">PKR 86.6 - 99.0 lacs</div>
            <div className="flex flex-row justify-center items-center">
            <button className="border border-solid bg-blue-600 rounded-lg py-2 px-2 font-serif text-sm text-white ml-4 w-40 hover:font-bold hover:bg-blue-700">
               <Link href="/Payment">Make Payment</Link> 
              </button>

            </div>
        </div>
    )
}