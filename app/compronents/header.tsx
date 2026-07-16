export default function Header() {
    return (
        <header className="bg-gradient-to-r from-sky-500 to-blue-600 shadow-md fixed w-full top-0 left-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
            <a href="#" className="text-2xl font-bold text-white">Uma Programming</a>

            <div className="hidden md:flex items-center gap-6 text-gray-600">
            <a href="/week02" className="text-white hover:text-blue-300">First Page</a>
            <a href="/contact" className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-blue-100">Contact</a>
        </div>
        </nav>
        </header>
    );
}