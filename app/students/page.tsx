import Link from "next/link";
export default function StudentWelcome() {
    return (
        <div className="h-screen w-screen bg-black flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-white font-bold text-3xl">
                    Welcome to the next Gen CMS
                </h1>
                <p className="text-white font-semibold text-xl mt-2">
                    An efficient and user-friendly CMS
                </p>
                <div className="mt-4">
                    <Link href="/students/signup">
                        <button className="bg-sky-700 text-sky-950 p-2 mx-2 font-bold text-lg rounded-md">
                            Signup
                        </button>
                    </Link>
                    <Link href="/students/login">
                        <button className="bg-sky-700 text-sky-950 p-2 mx-2 font-bold text-lg rounded-md">
                            Login
                        </button>
                    </Link>
                    <Link href="/teachers">
                        <p className="text-sky-600 mt-4">I am a teacher!</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
