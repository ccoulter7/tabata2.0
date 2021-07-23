import React, {useRef, useState} from 'react';


const Stopwatch = () => {
    const [timer, setTimer] = useState(0)
    const [isActive, setIsActive] = useState(false)
    // const [isPaused,setIsPaused] = useState(false)
    const countRef = useRef(null)


    // Handles beginning of stopwatch
    const handleStart = () => {
        if (!isActive) {
            setIsActive(true)
            countRef.current = setInterval(() => {
                setTimer((timer) => timer + 1)
            }, 1000)
        }
    }
    // handles pausing stopwatch
    const handlePause = () => {
        clearInterval(countRef.current)
        setIsActive(false)


    }
    // resumes stopwatch
    const handleResume = () => {
        if (!isActive) {
            countRef.current = setInterval(() => {
                setTimer((timer) => timer + 1)
            }, 1000)
            setIsActive(true)
        }


    }
    // resets stopwatch
    const handleReset = () => {
        clearInterval(countRef.current)
        setIsActive(false)
        setTimer(0)

    }

    const formatTime = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const getMinutes = `${(Math.floor(timer / 60))}`
        const getHours = `${(Math.floor(timer / 3600))}`

        return (
            `${getHours} : ${getMinutes} : ${getSeconds}`
        )
    }

    return (
        <div className='buttonDiv'>
            <h1> Stopwatch</h1>
            <p> {formatTime()}</p>

            <button className='btn' onClick={handleStart}> Start</button>
            <button className='btn' onClick={handlePause}> Pause</button>
            <button className='btn' onClick={handleResume}> Resume</button>
            <button className='btn' onClick={handleReset}> Reset</button>

        </div>
    )
}

export default Stopwatch