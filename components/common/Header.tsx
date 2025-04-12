import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Menu } from "lucide-react"

export const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-white text-black">
            {/* image */}
            <h1>Blogs</h1>
            {/* links */}
            <nav className="hidden md:block">
                <ul className="flex space-x-4">
                    <li><Link href="/" className="hover:underline">Home</Link></li>
                    {/* <li><a href="/about" className="hover:underline">About</a></li> */}
                    <li><Link href="/login" className="hover:underline">Login</Link></li>
                    <li><Link href="/" className="hover:underline">About us</Link></li>
                    <li><Link href="/" className="hover:underline">FAQ</Link></li>
                </ul>
            </nav>
            <div className="md:hidden block ">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild><Menu/></DropdownMenuTrigger>
                    <DropdownMenuContent className="py-2 px-4 border-2 border-gray-300 rounded-md !top-10 !-left-10 md:hidden">
                    <ul className="text-lg">
                    <li><Link href="/" className="hover:underline"><DropdownMenuItem className="text-base">Home</DropdownMenuItem></Link></li>
                    {/* <li><a href="/about" className="hover:underline"><DropdownMenuItem className="text-base">About</DropdownMenuItem></a></li> */}
                    <li><Link href="/login" className="hover:underline"><DropdownMenuItem className="text-base">Login</DropdownMenuItem></Link></li>
                    <li><Link href="/" className="hover:underline"><DropdownMenuItem className="text-base">About us</DropdownMenuItem></Link></li>
                    <li><Link href="/" className="hover:underline"><DropdownMenuItem className="text-base">FAQ</DropdownMenuItem></Link></li>
                </ul>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            
        </header>
    )
}