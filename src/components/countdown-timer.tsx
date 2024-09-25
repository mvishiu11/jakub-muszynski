"use client"

import React, { useEffect, useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface CountdownTimerProps {
  targetDate: string
  eventName?: string
}

export default function CountdownTimer({ targetDate, eventName = "the event" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const eventDate = new Date(targetDate).getTime()

    const updateTimeLeft = () => {
      const now = new Date().getTime()
      const timeLeft = eventDate - now

      if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateTimeLeft()
    const interval = setInterval(updateTimeLeft, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  const formatTime = (value: number) => value.toString().padStart(2, '0')

  return (
    <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-primary to-primary-foreground text-primary-foreground">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Countdown to {eventName}</h2>
        <div className="grid grid-cols-4 gap-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center">
              <div className="text-4xl font-bold mb-2">{formatTime(value)}</div>
              <div className="text-sm uppercase">{unit}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}