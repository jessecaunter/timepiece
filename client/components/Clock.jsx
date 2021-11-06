import React, { useState, useEffect } from 'react'

export default function Clock() {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000)
    })

    return (
        <h1>{date.toTimeString()}</h1>
    )
}