import Link from "next/link";
// import Image from "next/image";

export default function City (){
    return (
        <div className="flex flex-col justify-center items-center space-y-16 my-4 ">
            <div className=" w-full h-auto flex flex-row justify-center float-left"> <h1 className=" font-bold text-4xl text-gray-700 text-center"> Honda City 2024 Price in Pakistan, Images, Reviews & Specs</h1> </div>
            <div className="w-90 h-auto float-left justify-self-center items-center"> <img src="city.jpg" /> </div>
            <div className="w-10/12 h-auto float-left justify-center items-center">
            <p className="font-bold text-sm text-red-600 -700 text-center"> Honda City 1.2L M/T, 1199 cc, Manual, Petrol </p>
            <p className="font-serif text-sm text-gray-700 text-center">2 Airbags, Pedestrian Injury Mitigation Technology,  </p>
            <p className="font-serif text-sm text-gray-700 text-center">ECU Immobilizer, Outside Temperature Display, </p>
            <p className="font-serif text-sm text-gray-700 text-center">Accessory Socket Front and Rear, EBD, DRLs, Steering Switches, </p>
            <p className="font-serif text-sm text-gray-700 text-center"> ABS, 7.0" Display, Power Windows </p>
            <p className="font-bold text-sm text-gray-700 justify-center text-center"> Delivery Time: 1 Month  </p>
            </div>
            <div className="flext flex-row justify-center items-center font-serif text-green-500 text-2xl font-semibold">PKR 46.5 - 58.5 lacs (*Ex-Factory Price)</div>
            <div className="flex flex-row justify-center items-center">
            <button className="border border-solid bg-blue-600 rounded-lg py-2 px-2 font-serif text-sm text-white ml-4 w-40 hover:font-bold hover:bg-blue-700">
               <Link href="/Payment">Make Payment</Link> 
              </button>

            </div>
        </div>
    )
}