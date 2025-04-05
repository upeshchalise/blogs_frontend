"use client"
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
const LoginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string(),
});

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })
    const onSubmit = (data: z.infer<typeof LoginSchema>) => {
        console.log(data);
    }

    return (
        <section className="w-full h-screen p-0 m-0 flex items-center justify-center">

        <div className="w-4/5 min-h-fit mx-auto my-auto flex justify-between rounded-2xl shadow-lg bg-white ">
            <div className="hidden lg:block  w-[40%] rounded-l-2xl">
                <img src="/signup.jpg" alt="Signup" className="h-full object-cover rounded-l-xl" />
            </div>
            <div className=" w-full lg:w-[60%] flex flex-col items-center rounded-r-xl py-5">
                <h3 className="font-semibold text-lg">Welcome back</h3>
                <form className="flex flex-col gap-4 p-4 w-4/5" onSubmit={handleSubmit(onSubmit)}>
                    <Input type="email" placeholder="Email" className="border border-gray-300 rounded-md p-2 !text-lg h-fit" {...register("email")} />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                    <Input type="password" placeholder="Password" className="border border-gray-300 rounded-md p-2 !text-lg h-fit" {...register("password")}/>
                    {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                    <button type="submit" className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition duration-200 !text-lg">
                        Login
                    </button>
                    <p className="text-sm text-gray-500">
                        Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
        </section>
    )
}

export default Login;