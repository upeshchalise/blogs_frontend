import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Menu } from "lucide-react"
import { Input } from "@/components/ui/input";


export const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-white text-black">
            {/* image */}
            <div className="flex items-center gap-3">

            <Link href={"/"}>Blogs</Link>
            <Input placeholder="Search blogzz" className="w-1/2 mx-auto" />
            </div>

            {/* links */}
            <nav className="hidden md:block">
                <ul className="flex space-x-4">
                    {/* <li><Link href="/" className="hover:underline">Home</Link></li> */}
                    {/* <li><a href="/about" className="hover:underline">About</a></li> */}
                    <li><Link href="/login" className="hover:underline">Login</Link></li>
                    <li><Link href="/" className="hover:underline">About us</Link></li>
                    <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
                </ul>
            </nav>
            <div className="md:hidden block">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild><Menu/></DropdownMenuTrigger>
                    <DropdownMenuContent className="py-2 px-4 border-2 border-gray-300 rounded-md !top-10 !-left-10 md:hidden gap-y-2 w-svw" side="bottom" sideOffset={10}>
                    <ul className="text-lg">
                    {/* <li><Link href="/" className="hover:underline"><DropdownMenuItem className="text-base">Home</DropdownMenuItem></Link></li> */}
                    {/* <li><a href="/about" className="hover:underline"><DropdownMenuItem className="text-base">About</DropdownMenuItem></a></li> */}
                    <li><Link href="/" className="hover:underline"><DropdownMenuItem className="text-base">About us</DropdownMenuItem></Link></li>
                    <li><Link href="/faq" className="hover:underline"><DropdownMenuItem className="text-base">FAQ</DropdownMenuItem></Link></li>
                    <li><Link href="/login" className="hover:underline"><DropdownMenuItem className="text-base">Login</DropdownMenuItem></Link></li>
                </ul>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            
        </header>
    )
}