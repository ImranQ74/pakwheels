import Link from "next/link";
// import Image from "next/image";

export default function Alto (){
    return (
        <div className="flex flex-col justify-center items-center space-y-16 my-4 ">
            <div className=" w-full h-auto flex flex-row justify-center float-left"> <h1 className=" font-black text-4xl text-gray-700 text-center"> Suzuki Alto 2024 Price in Pakistan, Images, & Specs</h1> </div>
            <div className="w-90 h-auto float-left justify-center items-center"> <img src="alto.jpg" > </img> </div>
            <div className="w-10/15 h-auto float-left justify-center items-center">
            <p className="font-bold text-sm text-gray-700 justify-center text-center"> Suzuki Alto VX - 658 cc, Manual, Petrol  </p>
            <p className="font-serif text-sm text-gray-700 justify-center text-center"> Power Door Locks, Keyless Entry, Immobilizer,   </p>
            <p className="font-serif text-sm text-gray-700 justify-center text-center"> Cup Holders, Front Speakers, USB and Auxiliary Cable  </p>
            <p className="font-serif text-sm text-gray-700 justify-center text-center"> Delivery Time: 1 Month  </p>
            </div>
            <div className="flext flex-row justify-center items-center font-mono text-green-700 text-2xl font-semibold">PKR 23.3 - 30.5 lacs</div>
            <div className="flex flex-row justify-center items-center">
            <button className="border border-solid bg-blue-600 rounded-lg py-2 px-2 font-medium text-sm text-white ml-4 w-40 hover:font-extrabold hover:bg-blue-700">
               <Link href="/Payment">Make Payment</Link> 
              </button>
                      
            </div>
            <button className=" p-2 py-2 border border-solid rounded-lg bg-blue-400">
                     <Link href="src/page">Back to main Page</Link>
                      </button>
            
        </div>
    )
}