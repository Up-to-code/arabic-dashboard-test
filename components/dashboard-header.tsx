import { Search, Bell, Moon } from "lucide-react"
import Image from "next/image"
import UserHeader from "./navbar-component"

export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between px-6  pt-6  h-20">
      {/* Left side - Logo */}
      <div className="flex items-center w-[21%] lg:w-[260px] justify-center">
        <Image src="/icons/Logo.svg" alt="Logo" width={50} height={30} className="ml-2" />
      </div>

      {/* Middle - Search */}
      <div className="flex-1    flex items-center  gap-3">
        <input
          type="text"
          placeholder="ابحث برقم الطلب، اسم العميل، رقم الهاتف..."
          className="w-[340px] py-2   px-5  text-right bg-white rounded-full border-0    text-sm focus:outline-none h-12"
          dir="rtl"
        />
        <div className="flex w-max items-center justify-center p-[15px] rounded-full bg-[#E97F72]">
          <Image src="/icons/Search.svg" alt="Search" width={18} height={18} />
        </div>
      </div>

      {/* Right side - Icons & Profile */}
      <div className="flex items-center gap-4">
        <UserHeader />
      </div>
    </header>
  )
}