"use client"

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "JAN", navy: 5, coral: 3.8 },
  { name: "FEB", navy: 7.2, coral: 6.5 },
  { name: "MAR", navy: 7, coral: 11 },
  { name: "APR", navy: 4.5, coral: 5.5 },
  { name: "MAY", navy: 4, coral: 5.2 },
  { name: "JUN", navy: 5.8, coral: 4.8 },
  { name: "JUL", navy: 7.5, coral: 4.5 },
  { name: "AUG", navy: 7, coral: 4.2 },
  { name: "SEP", navy: 6, coral: 5.8 },
  { name: "OCT", navy: 2.5, coral: 3 },
  { name: "NOV", navy: 8.5, coral: 3.5 },
  { name: "DEC", navy: 8.2, coral: 3.8 },
]

const CustomTooltip = ({ active, payload, coordinate, viewBox }: any) => {
  if (active && payload && payload.length && coordinate && viewBox) {
    const value = payload[0].value
    const formattedValue = `$${(value * 100).toFixed(2)}`
    
    // Calculate position to keep tooltip within chart bounds
    const tooltipWidth = 80
    const tooltipHeight = 35
    const padding = 10
    
    let left = coordinate.x
    let top = coordinate.y - 45
    
    // Adjust horizontal position if tooltip would go outside chart area
    if (left - tooltipWidth / 2 < viewBox.x + padding) {
      left = viewBox.x + tooltipWidth / 2 + padding
    } else if (left + tooltipWidth / 2 > viewBox.x + viewBox.width - padding) {
      left = viewBox.x + viewBox.width - tooltipWidth / 2 - padding
    }
    
    // Adjust vertical position if tooltip would go outside chart area
    if (top < viewBox.y + padding) {
      top = coordinate.y + 15
    }

    return (
      <div
        style={{
          position: "absolute",
          top: top,
          left: left,
          transform: "translateX(-50%)",
          backgroundColor: "#1F2937",
          color: "white",
          padding: "6px 12px",
          borderRadius: "20px",
          fontSize: "13px",
          fontWeight: "500",
          boxShadow: "none",
          zIndex: 9999,
          pointerEvents: "none",
          minWidth: "70px",
          textAlign: "center",
          whiteSpace: "nowrap",
        }}
      >
        {formattedValue}
        <div
          style={{
            position: "absolute",
            bottom: top > coordinate.y ? "auto" : "-4px",
            top: top > coordinate.y ? "-4px" : "auto",
            left: "50%",
            transform: "translateX(-50%) rotate(45deg)",
            width: "8px",
            height: "8px",
            backgroundColor: "#1F2937",
          }}
        />
      </div>
    )
  }
  return null
}

export default function ChartStats() {
  return (
    <div className="w-full bg-white rounded-3xl p-6" style={{ height: "450px" }} dir="ltr">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center bg-gray-50 rounded-full px-4 py-2 cursor-pointer border border-gray-100">
          <span className="text-sm font-medium text-gray-600 mr-2">هذا الاسبــوع</span>
          <svg width="12" height="12" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.82857 5.66466C3.60076 5.89246 3.60076 6.26183 3.82857 6.48962L6.68235 9.3406C7.13805 9.79583 7.87643 9.79566 8.3319 9.34025L11.1846 6.48752C11.4124 6.25973 11.4124 5.89036 11.1846 5.66256C10.9568 5.43475 10.5874 5.43475 10.3596 5.66256L7.91802 8.10417C7.69023 8.33202 7.32087 8.33196 7.09307 8.10417L4.65353 5.66466C4.42572 5.43685 4.05638 5.43685 3.82857 5.66466Z"
              fill="#9CA3AF"
            />
          </svg>
        </div>
        <h2 className="text-lg font-bold text-gray-800">إحصـــائيات</h2>
      </div>

      {/* Chart Container */}
      <div style={{ height: "300px", width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 30,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <defs>
              {/* Coral/Salmon gradient */}
              <linearGradient id="coralAreaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF8A80" stopOpacity={0.6} />
                <stop offset="50%" stopColor="#FF8A80" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#FF8A80" stopOpacity={0.1} />
              </linearGradient>
              
              {/* Navy/Dark blue gradient */}
              <linearGradient id="navyAreaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1E293B" stopOpacity={0.4} />
                <stop offset="50%" stopColor="#1E293B" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#1E293B" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            
            {/* Grid lines */}
            <CartesianGrid 
              strokeDasharray="none" 
              stroke="#F1F5F9" 
              vertical={false} 
              horizontal={true}
            />
            
            {/* X Axis */}
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ 
                fontSize: 12, 
                fill: "#94A3B8",
                fontWeight: 400
              }} 
              dy={8}
            />
            
            {/* Y Axis */}
            <YAxis
              domain={[0, 12]}
              axisLine={false}
              tickLine={false}
              tick={{ 
                fontSize: 11, 
                fill: "#94A3B8",
                fontWeight: 400
              }}
              tickCount={7}
              dx={-5}
            />
            
            {/* Custom Tooltip */}
            <Tooltip 
              content={<CustomTooltip />} 
              cursor={false} 
              isAnimationActive={false}
              wrapperStyle={{ outline: 'none' }}
            />

            {/* Navy line only (rendered first - background) */}
            <Area
              type="monotone"
              dataKey="navy"
              stroke="#1E293B"
              strokeWidth={3}
              fill="none"
              fillOpacity={0}
              dot={false}
              activeDot={{
                r: 5,
                fill: "#1E293B",
                stroke: "#FFFFFF",
                strokeWidth: 2,
              }}
            />

            {/* Coral line only (rendered second - foreground) */}
            <Area
              type="monotone"
              dataKey="coral"
              stroke="#FF8A80"
              strokeWidth={3}
              fill="none"
              fillOpacity={0}
              dot={false}
              activeDot={{
                r: 5,
                fill: "#FF8A80",
                stroke: "#FFFFFF",
                strokeWidth: 2,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}