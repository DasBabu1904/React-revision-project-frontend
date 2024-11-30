import React from 'react'

export default function CreateTask() {
    return (
        <div>
            <div className="p-5 bg-gray-900 mt-7 rounded text-left">
                <form action="" className="flex flex-wrap w-full items-start justify-between">
                    <div className='w-1/2'>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                            <input type="text" placeholder='Make UI design' className="text-sm py-1 px-2 w-4/5 rounded bg-transparent border-[1px]" />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'> Date</h3>
                            <input type="date" className="text-sm py-1 px-2 w-4/5 rounded bg-transparent border-[1px]" />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Assigned to</h3>
                            <input type="text" className="text-sm py-1 px-2 w-4/5 rounded bg-transparent border-[1px]" placeholder='employee name' />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                            <input type="text" className="text-sm py-1 px-2 w-4/5 rounded bg-transparent border-[1px]" placeholder='design, dev, etc' />
                        </div>
                    </div>

                    <div className='w-2/5 flex-col items-start'>
                        <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
                        <textarea name="" id="" className="w-full h-40 text-sm py-2 rounded outline-none bg-transparent border-[1px] border-gray-200"></textarea>
                        <button className='bg-emerald-500 py-3 hover:bg-emerald-700 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                    </div>



                </form>
            </div>

        </div>
    )
}
