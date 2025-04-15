"use client"
import { Input } from "@/components/ui/input";
import { login } from "@/lib/api/blogs/api";
import { loginUser } from "@/lib/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { useUserStore } from "@/lib/stores/user-store";
import Image from "next/image";
const LoginSchema = z.object({
    email: z.string().nonempty("Email is required").email("Invalid email address"),
    password: z.string().nonempty("Password is required").min(8, "Password must be at least 8 characters long"),
});

const Login = () => {


    const { setUser} = useUserStore(); 
    // console.log("user:", user);
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })


    const userLoginMutation = useMutation({
        mutationFn: login,
        onSuccess: (data:loginUser) => {
        
            setUser({token: {
                access_token: data.token.access_token,
                refresh_token: data.token.refresh_token},
            user: {
                id: data.user.id,
                first_name: data.user.first_name,
                last_name: data.user.last_name,
                email: data.user.email,
                image: data.user.image
            }
        })
            console.log("User logged in successfully:", data);
            toast.success("User logged in successfully");
            router.push("/");
        },
        onError: (error) => {
            console.error("Error logging in:", error);
            toast.error("Error logging in");
        }
    })

    const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
        await userLoginMutation.mutateAsync(data)
    }

    return (
        <section className="w-full h-screen p-0 m-0 flex items-center justify-center">

        <div className="w-4/5 min-h-fit mx-auto my-auto flex justify-between rounded-2xl shadow-lg bg-white ">
            <div className="hidden lg:block  w-[40%] rounded-l-2xl">
                <Image src="/signup.jpg" alt="Signup" className="h-full object-cover rounded-l-xl" />
            </div>
            <div className=" w-full lg:w-[60%] flex flex-col items-center rounded-r-xl py-5">
                <h3 className="font-semibold text-lg">Welcome back</h3>
                <form className="flex flex-col gap-4 p-4 w-4/5" onSubmit={handleSubmit(onSubmit)}>
                    <Input type="email" placeholder="Email" className={`focus-visible:border focus-visible:border-blue-400 focus-visible:ring-0 border border-gray-300 rounded-md p-2 !text-lg h-fit ${errors.email && "border border-red-500"}`} {...register("email")} />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                    <Input type="password" placeholder="Password" className={`focus-visible:border focus-visible:border-blue-400 focus-visible:ring-0 border border-gray-300 rounded-md p-2 !text-lg h-fit ${errors.password && "border border-red-500"}`} {...register("password")}/>
                    {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                    <button type="submit" className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition duration-200 !text-lg">
                        Login
                    </button>
                    <p className="text-sm text-gray-500">
                        Don&apos;t have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
        </section>
    )
}

export default Login;