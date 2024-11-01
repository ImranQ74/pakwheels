// import Link from "next/link";


export default function Navbar() {
  return (
    <div>
      <header>
        <nav className=" flex flex-col border border-solid border-black w-full h-24 bg-black space-y-2">
          <div className="flex flex-row border border-l-0 border-r-0 border-t-0 border-gray-700 w-4/5 h-7 mx-32">
            <div>
              <h1 className=" flex flex-row text-white justify-start ml-1 font-serif text-sm float-left align-middle my-1">
                <a href="#!"> Download App via Playstation</a>{" "}
              </h1>
            </div>
            <div className="flex flex-row gap-x-4 justify-end border border-l-0 border-b-0 border-r-0 border-t-0 float-left w-2/3 ml-60 my-1">
              <h1 className="font-mono text-sm hover:font-bold text-orange-500 float-left border border-l-0 border-b-0 border-t-0 pr-3  border-gray-700">
                <a href="#!">اردو </a>
              </h1>
              <div className="float-left gap-1 font-serif text-sm text-white border border-l-0 border-b-0 border-t-0 pr-3 border-gray-700">
                <h1 className="hover:font-bold">
                  <a href="#!">Sign Up</a>
                </h1>
              </div>
              <div className="float-left font-serif text-sm text-white mr-2 border border-l-0 border-b-0 border-t-0 border-r-0 ">
                <h1 className="hover:font-bold">
                  <a href="#!">Sign In</a>
                </h1>
              </div>
            </div>
          </div>
          <div className=" flex flex-row mx-32 h-10 w-4/5  float-left justify-around gap-4 py-1">
            <div className="w-40 ">
              <img
                src="pakwheel.jpg"
                alt="logo"
                className="flex flex-row w-40 h-8"
                />
            </div>
            <div className="flex flex-row space-x-3 items-center mx-2">
              <ul className="flex flex-row font-serif text-sm text-white space-x-4 items-center justify-around mx-10 gap-9">
                <li className="hover:font-bold">
                  {" "}
                  <a href="#!">Used Cars</a>
                </li>
                <li className="hover:font-bold">
                  <a href="#!">New Cars</a>
                </li>
                <li className="hover:font-bold">
                  <a href="#!">Bikes</a>
                </li>
                <li className="hover:font-bold">
                  <a href="#!">Auto Store</a>
                </li>
                <li className="hover:font-bold">
                  <a href="#!">Videos</a>
                </li>
                <li className="hover:font-bold">
                  {" "}
                  <a href="#!">Forums</a>
                </li>
                <li className="hover:font-bold">
                  <a href="#!">Blogs</a>
                </li>
                <li className="hover:font-bold">
                  <a href="#!">More </a>
                </li>
              </ul>
              <button className="border border-solid bg-red-600 rounded-lg py-2 px-2 font-serif text-sm text-white ml-4 w-40 hover:font-bold hover:bg-red-700">
                Post an Ad
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}