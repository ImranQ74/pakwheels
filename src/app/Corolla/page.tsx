
import Link from "next/link";
// import Image from "next/image";

export default function Corolla (){
    return (
        <div className="flex flex-col justify-center items-center space-y-16 my-4 ">
            <div className=" w-full h-auto flex flex-row justify-center float-left"> <h1 className=" font-sans font-bold text-4xl text-gray-700 text-center"> Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs</h1> </div>
            <div className="w-90 h-auto float-left justify-center"> <img src="corolla.jpg" /></div>
            <div className="w-10/12 h-auto float-left justify-center items-center">
            <p className="font-extrabold text-sm text-gray-700 text-center"> Toyota Corolla Altis X Manual 1.6   </p>
            <p className="font-normal text-sm text-gray-700 text-center"> 1598 cc, Manual, Petrol   </p>
            <p className="font-normal text-sm text-gray-700 text-center"> 2 Airbags, Navigation, Steering Switches,   </p>
            <p className="font-normal text-sm text-gray-700 text-center"> Rear Camera, ABS, 9.0" Infotainment   </p>
            <p className="font-bold text-sm text-gray-700 justify-center text-center"> Delivery Time: 1 Month  </p>
            </div>
            <div className="flext flex-row justify-center items-center text-green-600 text-3xl font-semibold">PKR 59.7 - 75.5 lacs</div>
            <div className="flex flex-row justify-center items-center">
            <button className="border border-solid bg-blue-600 rounded-lg py-2 px-2 font-serif text-sm text-white ml-4 w-40 hover:font-bold hover:bg-blue-700">
                <Link href="/Payment"> Make Payment</Link>
              </button>
                
            </div>
        </div>
    )
}
