import React, { ReactNode } from 'react'

function Card ({ data }: Readonly<{ data: ReactNode }>) {
    return (
        <div>
            {/* Display name of user, fallback to empty string if undefined  */}
            <h2>{data?.name ?? ''}</h2>
        </div>
    )
}

export default Card