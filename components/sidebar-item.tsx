import { ChevronRight } from "lucide-react";

interface SidebarItemProps {
    item: string;
}

const SidebarItem = ({item}:SidebarItemProps) => {
  return (
    <div className="pb-8">
        <span className="lg:text-base lg:tracking-tight text-sm uppercase font-bold group flex items-center gap-x-2">
            {item}
            <ChevronRight width={16} height={16} className="hidden group-hover:block animate-in"/>
        </span>
    </div>
  )
}

export default SidebarItem