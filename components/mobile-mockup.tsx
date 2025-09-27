import type React from "react"

interface MobileMockupProps {
  children: React.ReactNode
  className?: string
}

export function MobileMockup({ children, className = "" }: MobileMockupProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative mx-auto w-[280px] h-[560px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
        <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
          {/* Phone notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>

          {/* Screen content */}
          <div className="w-full h-full pt-8 pb-4">{children}</div>
        </div>
      </div>
    </div>
  )
}
