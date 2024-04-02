import React from 'react'

const Loader = () => {
    return (
        <div className=" w-full h-full flex items-center justify-center bg-gray-300 bg-opacity-50">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-black"></div>
        </div>

    )
}

export default Loader