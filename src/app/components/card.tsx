import React from 'react'

function Card ({ title }: Readonly<{ title: string }>) {
    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}

export default Card