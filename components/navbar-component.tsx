"use client"

import { useState, useEffect } from 'react';
import { Bell, Moon, LogOut, Settings, HelpCircle, User, ChevronDown } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const UserHeader = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Ensure hydration match
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (!mounted) return null;

  return (
    <div className="flex items-center flex-row-reverse justify-end py-2 px-4 gap-4  dark:border-gray-800">
      {/* User name and role with dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            className="flex items-center gap-2 px-1 py-1 h-auto hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <div className="flex flex-col gap-0 text-end">
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">أ. فيـراس</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
            <ChevronDown size={16} className="text-gray-400" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 mt-1">
          <DropdownMenuLabel className="flex flex-col">
            <p className="text-sm font-semibold">أ. فيـراس</p>
            <p className="text-xs text-gray-500">admin@example.com</p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem className="cursor-pointer">
              <User size={16} className="mr-2" />
              <span>الملف الشخصي</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Settings size={16} className="mr-2" />
              <span>الإعدادات</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <HelpCircle size={16} className="mr-2" />
              <span>المساعدة</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-red-600 focus:text-red-700 cursor-pointer">
            <LogOut size={16} className="mr-2" />
            <span>تسجيل الخروج</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* User icon */}
      <Button variant="ghost" size="icon" className="rounded-full bg-white dark:bg-gray-800 h-10 w-10 flex items-center justify-center">
        <User size={20} className="text-gray-600 dark:text-gray-300" />
      </Button>

      {/* Notification bell with red dot */}
      <Button variant="ghost" size="icon" className="relative rounded-full bg-white dark:bg-gray-800 h-10 w-10 flex items-center justify-center">
        <Bell size={20} className="text-gray-600 dark:text-gray-300" />
        <Badge className="absolute top-1 right-1 w-2 h-2 p-0 bg-red-500" />
      </Button>
      
      {/* Dark mode toggle with moon icon */}
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={toggleDarkMode} 
        className="rounded-full bg-gray-700 h-10 w-10 flex items-center justify-center hover:bg-g"
      >
        <Moon size={18} className="text-white" />
      </Button>
    </div>
  );
};


export default UserHeader;