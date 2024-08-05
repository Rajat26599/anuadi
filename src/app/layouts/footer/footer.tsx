import React from "react"

const Footer: React.FC = () => {
    return (
        <div className='bg-[#2D2420] text-white p-10'>
            <div className="text-center">
                Copyright @ {(new Date()).getFullYear()} &nbsp; | &nbsp; All rights reserved
            </div>
        </div>
    )
}

export default Footer