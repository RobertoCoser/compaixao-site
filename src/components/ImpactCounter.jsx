import { useEffect, useRef, useState } from 'react'

export default function ImpactCounter({
  value,
  suffix,
  label,
  isDynamic,
}) {
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
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible || !isDynamic) return

    const numericValue = parseInt(value, 10)

    if (Number.isNaN(numericValue)) return

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

  const isLongValue =
    typeof displayValue === 'string' && displayValue.length > 10

  return (
    <div
      ref={ref}
      className="flex min-h-[160px] flex-col items-center justify-center p-5 text-center sm:min-h-[180px] sm:p-6"
    >
      <div
        className={`mb-3 font-bold leading-tight text-primary-400 ${
          isLongValue
            ? 'max-w-[220px] text-2xl sm:text-3xl lg:text-4xl'
            : 'text-4xl sm:text-5xl'
        }`}
      >
        {displayValue}
        {suffix}
      </div>

      <div className="max-w-[220px] text-sm font-medium leading-5 text-primary-200">
        {label}
      </div>
    </div>
  )
}