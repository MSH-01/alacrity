import React, { ReactNode } from 'react'

function Card ({ title, value }: Readonly<{ title: string, value: string}>) {
    return (
        <div className='cursor-pointer bg-gradient-to-t from-[#1c1c1c] to-[#363636] rounded-md flex text-white justify-center items-center transition-colors '>
            <div className='p-5'>
                <h2 className='font-medium text-xl'>{title}</h2>
                <h2 className='text-sm opacity-75'>{value}</h2>
            </div>
        </div>
    )
}

export default Card