import { Menu } from 'lucide-react'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import SidebarItem from "./sidebar-item"

const sidebarItem = [
  "what's new",
  "handbags",
  "travel",
  "women",
  "men",
  "mx",
  "children",
  "jewelry & watches",
  "beauty",
  "décor & lifestyle",
  "gifts",
  "vault"
]

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className='pl-6'>
          <Menu width={24} height={24}/>
        </div>
      </SheetTrigger>
      <SheetContent>
        <div className="p-20 flex flex-col overflow-auto">
          {sidebarItem.map(item => (
            <SidebarItem key={item} item={item} />
          ))}
        </div>
      </SheetContent>
    </Sheet>

  )
}

export default Sidebar