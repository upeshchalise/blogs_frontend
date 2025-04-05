import { Input } from "@/components/ui/input";

const Signup = () => {
    return (
        <section className="w-full h-screen p-0 m-0 flex items-center justify-center">

        <div className="w-4/5 min-h-fit mx-auto my-auto flex justify-between rounded-2xl shadow-lg bg-white ">
            {/* images */}
            <div className="hidden lg:block  w-[40%] rounded-l-2xl">
                <img src="/signup.jpg" alt="Signup" className="h-full object-cover rounded-l-xl" />
            </div>
            {/* forms */}
            <div className=" w-full lg:w-[60%] flex flex-col items-center rounded-r-xl py-5">
                <h3 className="font-semibold text-lg">Create an account</h3>
                <form className="flex flex-col gap-4 p-4 w-4/5">
                    <Input type="text" placeholder="First Name" className="border border-gray-300 rounded-md p-2 !text-lg h-fit" />
                    <Input type="text" placeholder="Last Name" className="border border-gray-300 rounded-md p-2 !text-lg h-fit" />
                    <Input type="email" placeholder="Email" className="border border-gray-300 rounded-md p-2 !text-lg h-fit" />
                    <Input type="password" placeholder="Password" className="border border-gray-300 rounded-md p-2 !text-lg h-fit" />
                    <button type="submit" className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition duration-200 !text-lg">
                        Sign Up
                    </button>
                    <p className="text-sm text-gray-500">
                        Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
                    </p>
                </form>
            </div>
        </div>
        </section>
    )
}

export default Signup;