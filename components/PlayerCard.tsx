import { User2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SportName from './SportName'
import JerseyNumber from './JerseyNumber'
import PlaysRan from './PlaysRan'

type PlayerCardProps = {
  name: string
  jersey: number
  plays: number
  sport: string
  id: string
}

export default function PlayerCard({
  name,
  jersey,
  plays,
  sport,
  id,
}: PlayerCardProps) {
  return (
    <div className="flex flex-1 cursor-pointer select-none items-center rounded-lg border border-primary/10 p-4 hover:bg-primary/10">
      <div className="mr-4 flex h-10 w-10 flex-col items-center justify-center">
        <Link href={`/players/${id}/player`}>
          <User2
            size={24}
            className=" mx-auto shrink-0 object-cover text-blue-600"
          />
        </Link>
      </div>
      <div className="flex-1 p-1">
        <div className="mb-5 flex justify-between font-medium">
          {name}
          <SportName sport={sport} />
        </div>
        <div className="flex  justify-between text-sm  text-gray-600">
          <JerseyNumber jersey={jersey} />
          <PlaysRan plays={plays} />
        </div>
      </div>
    </div>
  )
}
