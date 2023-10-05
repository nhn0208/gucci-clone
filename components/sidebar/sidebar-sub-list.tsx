import { ChevronRight } from 'lucide-react'

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import SidebarItem, { SidebarItemProps } from "./sidebar-item"

interface SidebarSubListProps {
    title:string;
    data: SidebarItemProps[]
}

const SidebarSubList = (
    { title,data } : SidebarSubListProps
) => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className='lg:text-base lg:tracking-tight text-sm uppercase font-bold group flex items-center gap-x-2'>
          {title}
          <ChevronRight width={16} height={16} className="hidden group-hover:block animate-in"/>
        </div>
      </SheetTrigger>
      <SheetContent>
        <div className='lg:p-20 p-6'>
            {/* Back to parent sidebar */}
            <h3 className=' text-2xl tracking-[-0.04em] lg:text-4xl font-thin cursor-pointer mt-8 mb-12'>{title}</h3>
            <div className="flex flex-col overflow-auto">
              {data?.map(item => (
                <SidebarItem key={item.title} title={item.title} href={item.href} children={item.children} />
              ))}
            </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default SidebarSubList