import { Menu } from 'lucide-react'
import Link from 'next/link'

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import SidebarItem, { SidebarItemProps } from "./sidebar-item"
import Image from 'next/image'



interface SidebarListProps {
    data : SidebarItemProps[]
}

const SidebarList = (
    { data } : SidebarListProps
) => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className='pl-6'>
          <Menu width={24} height={24}/>
        </div>
      </SheetTrigger>
      <SheetContent>
        <div className='w-full p-6 md:hidden'>
            <Link href={"/"}>
                <Image src="./Gucci_Logo.svg" alt='' width={148} height={22.89} />
            </Link>
        </div>
        <div className="lg:p-20 p-6 flex flex-col overflow-auto">
          {data.map(item => (
            <SidebarItem key={item.title} title={item.title} children={ item.children } />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default SidebarList