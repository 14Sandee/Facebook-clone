import Image from "next/image";
import { signIn } from "next-auth/client";
function Login() {
    return (
        <div className="grid place-items-center">
            <Image 
                className=""
                src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
                height={200}
                width={200}
                object-fit="contain"
            />
            <h1 
            onClick={signIn} 
            className="mt-20 py-5 px-10 bg-blue-500 rounded-full text-white text-center cursor-pointer">
                Login with Facebook
            </h1>
        </div>
    )
}

export default Login
