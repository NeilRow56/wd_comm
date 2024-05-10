'use client'

import { SearchIcon } from 'lucide-react'
import { Input } from './ui/input'

export default function Search() {
  return (
    <div className="relative w-full cursor-pointer pt-4">
      <Input
        className="w-full rounded-md border border-primary py-2 pl-10 focus:border-primary/60 focus:outline-none"
        type="text"
        placeholder="Search..."
      />
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <SearchIcon className="mt-4 text-gray-400" />
      </div>
    </div>
  )
}
