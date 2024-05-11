type HeadingProps = {
  title: string
}

const Heading = ({ title }: HeadingProps) => {
  return (
    <header className="w-full flex-1  py-6">
      <div>
        <h2 className=" text-lg font-bold md:text-xl xl:text-2xl ">{title}</h2>
      </div>
    </header>
  )
}

export default Heading
