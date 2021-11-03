import React, { useState } from 'react'

export default function Clock() {

    const [date, setDate] = useState(new Date())

    return (
        <h1>{date.toTimeString()}</h1>
    )
}