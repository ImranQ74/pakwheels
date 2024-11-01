import Link from "next/link";
import Thanks from "../Thanks/page";

export default function Forms() {
    return (
      <div>
        <h1 className="text-6xl font-bold text-center my-9"> Fill the below form </h1>
        <form className="flex flex-col h-96 justify-center gap-2 items-center border border-solid my-2">
          <input
            type="email"
            className=" border border-solid border-black rounded-lg  w-2/5 p-2 py-2"
            placeholder="Enter Your Email "
          />
          <input
            type="password"
            className=" border border-solid border-black rounded-lg w-2/5 p-2 py-2"
            placeholder="Enter Your Password "
          />
          <input
            type="address"
            className=" border border-solid border-black rounded-lg w-2/5 p-2 py-2"
            placeholder="Enter Your Address "
          />
          <input
            type="cardNumber"
            className=" border border-solid border-black rounded-lg w-2/5 p-2 py-2"
            placeholder="Enter Your Card Number "
          />
          <input
            type="cardPin"
            className=" border border-solid border-black rounded-lg w-2/5 p-2 py-2"
            placeholder="Enter Your Card Pin"
          />
          <button className=" p-2 py-2 border border-solid rounded-lg bg-blue-400">
            <Link href="/Thanks">Place Your Order</Link>
            
          </button>
          
        </form>
      </div>
    );
  }
  