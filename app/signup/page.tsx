"use client"

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {z} from "zod";

const SignupSchema = z.object({
    firstName: z.string().nonempty("first name is required").min(3, "First name is required"),
    lastName: z.string().nonempty("last name is required").min(3, "Last name is required"),
    email: z.string().nonempty("email is required").email("Invalid email address"),
    password: z.string().nonempty("password is required").min(8, "Password must be at least 8 characters long"),
});

const Signup = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<z.infer<typeof SignupSchema>>({
        resolver: zodResolver(SignupSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        }
    })

    const onSubmit = (data: z.infer<typeof SignupSchema>) => {
        console.log(data);
    }

    return (
        <section className="w-full h-screen p-0 m-0 flex items-center justify-center">

        <div className="w-4/5 min-h-fit mx-auto my-auto flex justify-between rounded-2xl shadow-lg bg-white ">
            <div className="hidden lg:block  w-[40%] rounded-l-2xl">
                <img src="/signup.jpg" alt="Signup" className="h-full object-cover rounded-l-xl" />
            </div>
            <div className=" w-full lg:w-[60%] flex flex-col items-center rounded-r-xl py-5">
                <h3 className="font-semibold text-lg">Create an account</h3>
                <form className="flex flex-col gap-4 p-4 w-4/5" onSubmit={handleSubmit(onSubmit)}>
                    <Input type="text" placeholder="First Name" className="border border-gray-300 rounded-md p-2 !text-lg h-fit" {...register("firstName")}  />
                          {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
                    <Input type="text" placeholder="Last Name" className="border border-gray-300 rounded-md p-2 !text-lg h-fit" {...register("lastName")}/>
                          {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
                    <Input type="email" placeholder="Email" className="border border-gray-300 rounded-md p-2 !text-lg h-fit" {...register("email")}/>
                          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                    <Input type="password" placeholder="Password" className="border border-gray-300 rounded-md p-2 !text-lg h-fit" {...register("password")}/>
                          {errors.password && <span className="text-red-500">{errors.password.message}</span>}
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
