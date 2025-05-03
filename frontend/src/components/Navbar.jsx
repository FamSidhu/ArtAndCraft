import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed-nav-bar w-full shadow-md">
      <nav className="navbar-container bg-black text-white w-full flex justify-between items-center px-10 py-4">
        {/* Brand */}
        <div className="nav-logo text-2xl font-serif font-bold">
          Art <span className="font-sans">&</span> Crafts
        </div>

        {/* Navigation Links */}
        <ul className="nav-links flex space-x-6 text-lg font-light ml-30">
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/categories">Categories</Link>
          </li>
          <li className="link">
            <Link to="/artists">Artists</Link>
          </li>
          <li className="link">
            <Link to="/crafters">Crafters</Link>
          </li>
          <li className="link">
            <Link to="/crafts">Crafts</Link>
          </li>
          <li className="link">
            <Link to="/about">About</Link>
          </li>
          <li className="link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="nav-icons flex space-x-4 text-xl relative">
          <Link to="/search" className="hover:text-primary">
            <i className="ri-search-line"></i>
          </Link>
          <button className="hover:text-primary relative">
            <i className="ri-shopping-bag-line"></i>
            <sup className="cart-count">0</sup>
          </button>
          <Link to="/login" className="hover:text-primary">
            <i className="ri-user-line"></i>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <header className="fixed-nav-bar w-full">
//       <nav className="bg-black text-white shadow-md w-full">
//         <div className="w-full px-4 flex items-center">
//           {/* <!-- Brand Name --> */}
//           <div className="text-2xl font-serif font-bold">
//             Art <span className="font-sans">&</span> Crafts
//           </div>

//           {/* <-- Navigation Links --> */}
//           <ul className="flex space-x-6 font-light text-lg ml-20">
//             <li class="hover:text-primary cursor-pointer" className="link">
//               <Link to="/"></Link>Home
//             </li>
//             <li class="hover:text-primary cursor-pointer" className="link">
//               <Link to="/categories"></Link>Categories
//             </li>
//             <li class="hover:text-primary cursor-pointer" className="link">
//               <Link to="/artists"></Link>Artists
//             </li>
//             <li class="hover:text-primary cursor-pointer" className="link">
//               <Link to="/crafters"></Link>Crafters
//             </li>
//             <li class="hover:text-primary cursor-pointer" className="link">
//               <Link to="/crafts"></Link>Crafts
//             </li>
//             <li class="hover:text-primary cursor-pointer" className="link">
//               <Link to="/about"></Link>About
//             </li>
//             <li class="hover:text-primary cursor-pointer" className="link">
//               <Link to="/contact"></Link>Contact
//             </li>
//           </ul>
//         </div>

//         <div className="nav__icons relative">
//           <span>
//             <Link to="/search">
//               <i className="ri-search-line text-white hover:text-primary"></i>
//             </Link>
//           </span>

//           <span>
//             <button className="hover:text-primary relative">
//               <i className="ri-shopping-bag-line"></i>
//               <sup className="text-sm inline-block px-1.5 text-white rounded-full bg-primary text-center absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
//                 0
//               </sup>
//             </button>
//           </span>

//           <span>
//             <Link to="/login">
//               <i className="ri-user-line text-white hover:text-primary"></i>
//             </Link>
//           </span>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
