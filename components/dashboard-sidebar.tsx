"use client"

import { useState, useEffect } from "react"
import {
  Home,
  Package,
  Users,
  FileText,
  Share2,
  Settings,
  Menu,
  X,
  CircleDot,
  CircleDollarSign,
  Building2,
  MessageSquareText,
  BoxIcon,
  LayoutGrid,
} from "lucide-react"
import Link from "next/link"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function DashboardSidebar() {
  const isMobile = useIsMobile()
  const [isOpen, setIsOpen] = useState(false)

  // Close sidebar when switching from mobile to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false)
    }
  }, [isMobile])

  // Handle clicking outside to close sidebar on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('mobile-sidebar')
      if (isMobile && isOpen && sidebar && !sidebar.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobile, isOpen])

  // Toggle sidebar on mobile
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  // Mobile sidebar toggle button
  const MobileToggle = () => (
    <button
      onClick={toggleSidebar}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-[#3b4b65] text-white md:hidden"
    >
      <Menu className="h-6 w-6" />
    </button>
  )

  // Sidebar content
  const SidebarContent = () => (
    <>
      <div className="px-4 flex items-center justify-between    mb-10">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">

          </div>
          <div className="text-right flex flex-col gap-1">
            <h3 className="font-bold text">متجر الهدايا</h3>
            <Link href="#" className="text-[12px] text-white flex items-center gap-1  ">

              زيارة المتجر
              <Image src="/icons/Link.svg" alt="Link" width={14} height={14} />
            </Link>

          </div>
        </div>
        {isMobile && isOpen ? (
          <button onClick={toggleSidebar} className="p-1 rounded-full bg-white">
            <X className="h-4 w-4 text-[#3b4b65]" />
          </button>
        ) : (
          <button className="p-[10px] rounded-full bg-white">
            <Image src="/icons/Shere.svg" alt="Share" width={20} height={20} />
          </button>
        )}
      </div>
      <p className="text-lg font-light text-white mb-1">
        الرئيسية
      </p>
      <nav className="flex-1 overflow-y-auto py-4 pb-10">
        <ul className="space-y-[10px] px-2">
          <li>
            <Link href="#" className="flex items-center h-10 gap-3 px-4 py-3 justify-between rounded-full bg-[#e97f72] text-white">

              <span className="text-sm">الرئيسية</span>

              <Image src="/icons/Home.svg" alt="Home" width={18} height={18} />
            </Link>
          </li>



          <li>
            <Link href="#" className="flex items-center justify-between  px-4 py-3 rounded-full bg-white">
              <span className="text-sm text-[#3b4b65]">الخدمــات</span>
              <Image src="/icons/Serves.svg" alt="Serves" width={18} height={18} />
            </Link>
          </li>




          <li>
            <Link href="#" className="flex items-center justify-between  px-4 py-3 rounded-full bg-white">
              <span className="text-sm text-[#3b4b65]">الخدمــات</span>
              <Image src="/icons/Serves.svg" alt="Serves" width={18} height={18} />
            </Link>
          </li>



          <li>
            <Link href="#" className="flex items-center justify-between  px-4 py-3 rounded-full bg-white">
              <span className="text-sm text-[#3b4b65]">الخدمــات</span>
              <Image src="/icons/Serves.svg" alt="Serves" width={18} height={18} />
            </Link>
          </li>



          <li>
            <Link href="#" className="flex items-center justify-between  px-4 py-3 rounded-full bg-white">
              <span className="text-sm text-[#3b4b65]">الخدمــات</span>
              <Image src="/icons/Serves.svg" alt="Serves" width={18} height={18} />
            </Link>
          </li>



          <li>
            <Link href="#" className="flex items-center justify-between  px-4 py-3 rounded-full bg-white">
              <span className="text-sm text-[#3b4b65]">الخدمــات</span>
              <Image src="/icons/Serves.svg" alt="Serves" width={18} height={18} />
            </Link>
          </li>



          <li>
            <Link href="#" className="flex items-center justify-between  px-4 py-3 rounded-full bg-white">
              <span className="text-sm text-[#3b4b65]">الخدمــات</span>
              <Image src="/icons/Serves.svg" alt="Serves" width={18} height={18} />
            </Link>
          </li>



          <li>
            <Link href="#" className="flex items-center justify-between  px-4 py-3 rounded-full bg-white">
              <span className="text-sm text-[#3b4b65]">الخدمــات</span>
              <Image src="/icons/Serves.svg" alt="Serves" width={18} height={18} />
            </Link>
          </li>



          <li>
            <Link href="#" className="flex items-center justify-between  px-4 py-3 rounded-full bg-white">
              <span className="text-sm text-[#3b4b65]">الخدمــات</span>
              <Image src="/icons/Serves.svg" alt="Serves" width={18} height={18} />
            </Link>
          </li>



          <li>
            <Link href="#" className="flex items-center justify-between  px-4 py-3 rounded-full bg-white">
              <span className="text-sm text-[#3b4b65]">الخدمــات</span>
              <Image src="/icons/Serves.svg" alt="Serves" width={18} height={18} />
            </Link>
          </li>



          <li>
            <Link href="#" className="flex items-center justify-between  px-4 py-3 rounded-full bg-white">
              <span className="text-sm text-[#3b4b65]">الخدمــات</span>
              <Image src="/icons/Serves.svg" alt="Serves" width={18} height={18} />
            </Link>
          </li>


        </ul>
      </nav>

    </>
  )

  // Render different layouts for mobile and desktop
  return (
    <>
      {isMobile && <MobileToggle />}

      {/* Desktop sidebar */}
      {!isMobile && (
        <aside className="hidden md:flex w-[300px] bg-[#3B4B65] text-white flex-col h-max mx-4 my-4 rounded-[30px] py-[30px] px-[18px] ">
          <SidebarContent />
        </aside>
      )}

      {/* Mobile sidebar */}
      {isMobile && (
        <aside
          id="mobile-sidebar"
          className={cn(
            "fixed inset-y-0 right-0 z-40 w-64 bg-[#3b4b65] text-white flex flex-col h-screen shadow-lg transform transition-transform duration-300 ease-in-out",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <SidebarContent />
        </aside>
      )}
    </>
  )
}
