import Search from '@/components/Search'
import { Plus } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="pt-24">
      <div className="container space-y-2">
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
      </div>
    </section>
  )
}
