import Heading from '@/components/header/Header'
import { ThemeToggle } from '@/components/header/ThemeToggle'

const WebsiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex h-screen w-full flex-col bg-background ">
      <div className="container mx-auto flex w-full  flex-row items-center gap-4 border-b px-4 sm:px-2 md:px-10 xl:px-20">
        <Heading title="Logo" />
        <ThemeToggle />
      </div>
      {children}
    </div>
  )
}

export default WebsiteLayout
