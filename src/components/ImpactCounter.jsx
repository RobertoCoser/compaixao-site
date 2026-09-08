import { useEffect, useRef, useState } from 'react'

export default function ImpactCounter({ value, suffix, label, isDynamic }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible || !isDynamic) return
    const numericValue = parseInt(value)
    if (isNaN(numericValue)) return
    let start = 0
    const duration = 2000
    const increment = numericValue / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= numericValue) {
        setCount(numericValue)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isVisible, value, isDynamic])

  const displayValue = isDynamic && isVisible ? count : value

  return (
    <div ref={ref} className="text-center p-6">
      <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
        {displayValue}{suffix}
      </div>
      <div className="text-sm text-earth-600 font-medium">{label}</div>
    </div>
  )
}