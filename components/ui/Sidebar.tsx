'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const assignments = [
    { id: 1, title: "Bài tập tuần 1", href: "/assignment1" },
    { id: 2, title: "Bài tập tuần 2", href: "/assignment2" },
    { id: 3, title: "Bài tập tuần 3", href: "/assignment3" },
    { id: 4, title: "Bài tập tuần 4", href: "/assignment4" },
    { id: 5, title: "Bài tập tuần 5", href: "/assignment5" },
    { id: 6, title: "Bài tập tuần 6", href: "/assignment6" },
    { id: 7, title: "Bài tập tuần 7", href: "/assignment7" },
    { id: 8, title: "Bài tập tuần 8", href: "/assignment8" },
    { id: 9, title: "Bài tập tuần 9", href: "/assignment9" },
    { id: 10, title: "Bài tập tuần 10", href: "/assignment10" },
  ];
  const pathname = usePathname();
 
  return <div className='h-full'>
  {/* Mobile Header */}
  <header className="lg:hidden p-4 bg-white border-b border-gray-200 flex justify-between items-center fixed w-full top-0 z-50">
    <Link href="/" className="text-xl font-semibold text-black">Nhóm 26</Link>
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="py-2 px-3 bg-gray-800 text-white rounded-lg hover:bg-gray-950"
      aria-label="Toggle navigation"
    >
      {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
    </button>
  </header>

  {/* Sidebar */}
  <div
    className={`fixed lg:relative inset-y-0 left-0 z-40 w-64 transform ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } lg:translate-x-0 transition-transform duration-300 ease-in-out bg-white border-e border-gray-200 h-full mt-16 lg:mt-0`}
  >
    <div className="relative flex flex-col h-full max-h-full">
      {/* Desktop Header */}
      <div className="p-4 bg-white border-b border-gray-200 hidden lg:block">
        <Link href="/" className="text-xl font-semibold text-black">Nhóm 26</Link>
      </div>

      {/* Navigation */}
      <nav className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
        <div className="pb-0 px-2 w-full flex flex-col flex-wrap">
          <ul className="space-y-1">
            {assignments.map(assignment => {
              const isActive = pathname === assignment.href
              return (
                <li key={assignment.id}>
                  <Link
                    className={`flex items-center gap-x-3.5 py-2 px-2.5 ${
                      isActive ? "bg-gray-100" : ""
                    } text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100`}
                    href={assignment.href}
                    onClick={() => setIsOpen(false)}
                  >
                    <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                    {assignment.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  </div>

  {/* Overlay for Mobile */}
  {isOpen && (
    <div
      className="fixed inset-0 z-30 bg-black/50 lg:hidden"
      onClick={() => setIsOpen(false)}
    />
  )}
</div>
};

export default Sidebar;