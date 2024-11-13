const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4 fixed w-full">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">Pandhu Arya M</div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/" className="text-white hover:text-gray-300">Home</a>
                    </li>
                    <li>
                        <a href="/counter" className="text-white hover:text-gray-300">Counter</a>
                    </li>
                    <li>
                        <a href="/calculator" className="text-white hover:text-gray-300">Calculator</a>
                    </li>
                    <li>
                        <a href="/greeting" className="text-white hover:text-gray-300">Greeting</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;