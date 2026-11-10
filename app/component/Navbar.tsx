export function Navbar() {
    return ( 
        <nav className="bg-blue-950 text-white p-4">
            <ul className="flex space-x-4">
                <li>
                    <a href="/" className="hover:text-gray-700"> 
                    Home 
                    </a>
                </li>
                <li>
                    <a href="/my_first_page" className="hover:text-gray-700">
                    Experiance
                    </a>
                </li>
            </ul>
        </nav>
    )
}