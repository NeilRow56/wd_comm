import PlayerCard from '@/components/PlayerCard'
import Search from '@/components/Search'
import db from '@/lib/db'
import { Plus } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="pt-24">
      <div className="container space-y-2 text-center">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl  lg:text-3xl xl:text-4xl">
          Game Log Tracker
        </h1>
        <p className="leading-relaxed tracking-tighter text-muted-foreground">
          The home of little league game log
        </p>
        <div className="flex items-center gap-2">
          <Search />
          <Link className="flex items-center gap-1" href="/new">
            <Plus />
            Add Player
          </Link>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          <PlayerList />
        </div>
      </div>
    </section>
  )
}

async function PlayerList() {
  const collections = await db.player.findMany({})

  if (collections.length === 0) {
    return (
      <div className="col-span-4 text-center">
        <div className="flex flex-col space-y-2">
          <h2 className="font-cold">No Players Added</h2>
          <p>Start tracking players today</p>
        </div>
      </div>
    )
  }
  return collections.map((collection) => (
    <PlayerCard key={collection.id} {...collection} />
  ))
}
