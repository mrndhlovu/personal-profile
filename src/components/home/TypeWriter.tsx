import React, { useEffect, useState } from "react"

interface Props {
  options: string[]
}

const TypeWriter = ({ options }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [subIndex, setSubIndex] = useState<number>(0)
  const [blink, setBlink] = useState<boolean>(true)
  const [reverse, setReverse] = useState<boolean>(false)

  const activeText = options[activeIndex]
  const hasShownAllOptions = activeIndex === options.length
  const hasFinishedTyping = subIndex === activeText.length
  const currentTypingPositionIndex = subIndex === activeText.length + 1

  useEffect(() => {
    if (hasShownAllOptions) return undefined

    if (currentTypingPositionIndex && !reverse) {
      setReverse(true)
      return
    }

    if (subIndex === 0 && reverse) {
      setReverse(false)
      setActiveIndex(prev => (prev === 0 ? 1 : 0))
      return
    }

    const timeoutLength = Math.max(
      reverse ? 75 : hasFinishedTyping ? 1000 : 150
    )

    const timeout = setTimeout(() => {
      setSubIndex(prev => prev + (reverse ? -1 : 1))
    }, timeoutLength)

    return () => clearTimeout(timeout)
  }, [
    subIndex,
    activeIndex,
    reverse,
    hasShownAllOptions,
    hasFinishedTyping,
    currentTypingPositionIndex,
  ])

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink(prev => !prev)
    }, 500)

    return () => clearTimeout(timeout2)
  }, [blink])

  return (
    <span className="experience">
      {activeText.substring(0, subIndex)}
      {blink && <span className="blinker">|</span>}
    </span>
  )
}

export default TypeWriter
