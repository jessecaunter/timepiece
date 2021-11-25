import React, { useState, useEffect } from 'react'

export default function Clock() {
    // Local state
    const [date, setDate] = useState(new Date())
    // Other variables
    const seconds = [...Array(24).keys()]
    const minutes = [...Array(60).keys()]
    const hours = minutes
    const listSeconds = seconds.map(second =>
        <li key={second.toString()}>
            {second}
        </li>
    )
    const listMinutes = minutes.map(minute =>
        <li key={minute.toString()}>
            {minute}
        </li>
    )
    const listHours = hours.map(hour =>
        <li key={hour.toString()}>
            {hour}
        </li>
    )

    // Effects
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
            <div className='digital-clock'>
                <div className='second section'>
                    <ul>{listSeconds}</ul>
                </div>
                <div className='minute section'>
                    <ul>{listMinutes}</ul>
                </div>
                <div className='hour section'>
                    <ul>{listHours}</ul>
                </div>
            </div>
        </div>
    )
}