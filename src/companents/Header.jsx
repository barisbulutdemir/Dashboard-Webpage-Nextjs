export default function Header() {
    return (
        <>
            
            <div>
            <div className=" flex justify-between px-5 items-center my-5">
                <div>
                    <h3 className="text-2xl">Welcome back, Baris</h3>
                    <p className="text-xs ml-3">You have <span className="text-orange-500">9 Task</span> to complete</p>
                </div>
                <div className="w-[40%] border rounded-2xl my-2 bg-gray-50">
                    <input placeholder="Search" className="p-1 px-2 outline-none m-1 bg-gray-50"/>
                </div>
            </div>
            <div className="h-0.5 bg-gray-300 w-[90%] mx-auto"></div>

            </div>

        </>
    )
}