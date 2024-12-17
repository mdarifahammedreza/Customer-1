const CBSGWebsite = () => {
    return (
        <div className=" sticky top-0 z-50">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>About us</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>About us</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
            {/* <header className="bg-sky-3 text-black p-4 ">
                <section className="container mx-10  pb-2">
                    <img src="https://i.ibb.co.com/pf3YyhR/logo.png" alt="CBSG logo" className="shadow-xl" />
                    <h2 className="font-extrabold text-2xl">Capacity Building Service Group-CBSG</h2>
                </section>
                <nav className="container mx-10  flex border justify-center items-center p-2 bg-sky-3">
                    <div className="flex space-x-4">
                        <a href="#home" className="hover:underline">Home</a>
                        <a href="#about-us" className="hover:underline">About us</a>
                        <a href="#services" className="hover:underline">Our services</a>
                        <a href="#practice-areas" className="hover:underline">Practice areas</a>
                        <a href="#team" className="hover:underline">Our team</a>
                        <a href="#work-reach" className="hover:underline">Our work and reach</a>
                        <a href="#contacts" className="hover:underline">Contacts</a>
                    </div>
                </nav>
            </header> */}

            
        </div>
    );
};

export default CBSGWebsite;