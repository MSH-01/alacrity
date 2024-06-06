import React from 'react'

function Card ({ title, value, extra, user }: Readonly<{ title: string, value: string, extra?: number, user?: boolean}>) {
    return (
        <div className='cursor-pointer bg-gradient-to-t from-[#1c1c1c] to-[#363636] rounded-md flex text-white justify-center items-center transition-colors p-5 '>
            <div className='p-5 flex flex-col justify-center items-center'>
                {user && (
                <div className='w-20 h-20 bg-gradient-to-t from-[#393939] to-[#5B5B5B] rounded-full mb-4 drop-shadow-md flex justify-center items-center'>
                    <p className='opacity-90 font-bold text-2xl'>{title[0]}</p>
                </div>
                )}
                <h2 className='font-medium text-xl'>{title}{extra && (<span className='opacity-50 pl-2 text-base'>{extra}</span>)}</h2>
                <h2 className='text-sm opacity-75'>{value}</h2>
            </div>
        </div>
    )
}

export default Card