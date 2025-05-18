"use client"

import type React from "react"

import { useState } from "react"
import { BarChart2, ShoppingBag, Eye, DollarSign, ChevronDown, ChevronUp } from "lucide-react"
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from "recharts"
import   { StatCardPrice } from "./StatCardPrice"
import StatCard from "./StatCard"
import MoreButtom from "./MoreButtom"
import Link from "next/link"
import ChartStats from "./chart"
 
const chartData = [
  { name: "JAN", value1: 4, value2: 3 },
  { name: "FEB", value1: 6, value2: 5 },
  { name: "MAR", value1: 8, value2: 10 },
  { name: "APR", value1: 7, value2: 12 },
  { name: "MAY", value1: 5, value2: 6 },
  { name: "JUN", value1: 8, value2: 5 },
  { name: "JUL", value1: 6, value2: 6 },
  { name: "Aug", value1: 4, value2: 5 },
  { name: "Sep", value1: 3, value2: 4 },
  { name: "Oct", value1: 5, value2: 3 },
  { name: "Nov", value1: 8, value2: 3 },
  { name: "Dec", value1: 8, value2: 2 },
]

// Custom tooltip component to match the design
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#292d30] text-white px-3 py-1 rounded-md text-xs">
        <p className="text-center font-medium">$100.00</p>
      </div>
    )
  }
  return null
}

export function DashboardContent() {
  const [weekSelected, setWeekSelected] = useState(true)

  return (
    <div className="p-8">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#3b4b65] text-right">مرحباً بعودتك، متجر الهدايا!</h1>
        <Link href="/dashboard">
        <MoreButtom />
        </Link>
      </div>

        {/* Stats Grid */}
        <div className=" flex gap-4 mb-10 flex-wrap ">
          <StatCardPrice />
          <StatCard  
           value="1.470"
           label="الزيـــارات"
           percentage="+48%"
           comparison="110+ مقارنة بالشهر الماضي"
           valueColor="text-red-400"
           trend="up"
           className=""
           srcIcon="/icons/ViewIcon.svg"
          />
         

         <StatCard  
           value="1.470"
           label="إجمـــالي الطلبــات"
           percentage="+48%"
           comparison="110+ مقارنة بالشهر الماضي"
           valueColor="text-red-400"
           trend="up"
           className=""
           srcIcon="/icons/ViewIcon.svg"
          />
          <StatCard  
           value="799"
           label="إجمـــالي الحجــوزات"
           percentage="+48%"
           comparison="110+ مقارنة بالشهر الماضي"
           valueColor="text-red-400"
           trend="up"
           className=""
           srcIcon="/icons/ViewIcon.svg"
          />




        </div>

     <ChartStats />
    </div>
  )
}

interface StatCardProps {
  icon: React.ReactNode
  title: string
  value: string
  change: string
  changeText: string
  changeValue: string
  iconBg: string
  valuePrefix?: string
}

// function StatCard({ icon, title, value, change, changeText, changeValue, iconBg, valuePrefix }: StatCardProps) {
//   return (
//     <div className="bg-white rounded-lg p-6 shadow-sm">
//       <div className="flex justify-between items-start mb-4">
//         <div className={`w-10 h-10 rounded-full flex items-center justify-center`} style={{ backgroundColor: iconBg }}>
//           {icon}
//         </div>
//         <div className="flex items-center gap-1">
//           <span className="text-xs text-[#595959]">{changeText}</span>
//           <span className="text-xs text-green-500">{changeValue}</span>
//         </div>
//       </div>

//       <div className="text-right">
//         <h3 className="text-4xl font-bold text-[#e97f72]">
//           {valuePrefix && <span className="text-sm mr-1">{valuePrefix}</span>}
//           {value}
//         </h3>
//         <p className="text-sm text-[#595959]">{title}</p>
//       </div>

//       <div className="flex items-center gap-1 mt-2 justify-end">
//         <span className="text-xs text-green-500">{change}</span>
//         <ChevronUp className="h-3 w-3 text-green-500" />
//       </div>
//     </div>
//   )
// }
