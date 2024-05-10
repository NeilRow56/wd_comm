type SportNameProps = {
  sport: string
}

export default function SportName({ sport }: SportNameProps) {
  let backgroundColor

  switch (sport.toLowerCase()) {
    case 'football':
      backgroundColor = 'bg-green-300'
      break
    case 'basketball':
      backgroundColor = 'bg-orange-300'
      break
    case 'baseball':
      backgroundColor = 'bg-blue-300'
      break
    case 'soccer':
      backgroundColor = 'bg-purple-300'
      break
    case 'track & field':
      backgroundColor = 'bg-gray-300'
      break
    default:
      backgroundColor = 'bg-red-300'
  }

  return (
    <div
      className={`inline-block rounded-md px-2 py-1 ${backgroundColor} text-xs text-white`}
    >
      {sport}
    </div>
  )
}
