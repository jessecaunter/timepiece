import React, { useState, useEffect } from 'react'

export default function Clock() {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className='container'>
            <h1>{date.toLocaleTimeString()}</h1>
            <div className='clock'>
                <div className='second hand'></div>
                <div className='minute hand'></div>
                <div className='hour hand'></div>
            </div>
        </div>
    )
}