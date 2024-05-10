import { Shirt } from 'lucide-react'

type JerseyNumberProps = {
  jersey: number
}

export default function JerseyNumber({ jersey }: JerseyNumberProps) {
  return (
    <div className=" flex items-center  justify-center space-x-2">
      <Shirt className="h-6 w-6 shrink-0 text-red-500" />
      <span className=" text-blue-500">{jersey} </span>
    </div>
  )
}
