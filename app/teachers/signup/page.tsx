export default function TeacherSignup () {
    return (
        <div className="bg-black h-screen w-screen text-sky-700">
            <form>
                <h1 className="font-bold text-2xl ">sign up </h1>
                <label>reg.no</label><br/>
                <input 
                placeholder="enter your reg.no"
                className="bg-black border-sky-700 border-2 rounded"
                
                />
            </form>
        </div>
    )
}