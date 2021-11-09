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
        <h1>{date.toTimeString()}</h1>
    )
}