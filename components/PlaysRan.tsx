import { Trophy } from 'lucide-react'

type PlaysRanProps = {
  plays: number
}

export default function PlaysRan({ plays }: PlaysRanProps) {
  return (
    <div className=" flex items-center  justify-center space-x-2">
      <Trophy className="h-6 w-6 shrink-0 text-yellow-400" />
      <span className=" text-blue-500">{plays} </span>
    </div>
  )
}
