import Link from "next/link";
import SidebarSubList from "./sidebar-sub-list";

// interface ItemProps {
//   title: string;
//   href: string;
//   chilren?: ItemProps[]
// }

export interface SidebarItemProps {
    title: string;
    href?: string;
    children?: SidebarItemProps[]
}

const SidebarItem = ({title,href,children}:SidebarItemProps) => {
  return (
    <div className="pb-8">
      {!!children ? (
        <div className="lg:text-base lg:tracking-tight text-sm uppercase font-bold group flex items-center gap-x-2">
          <SidebarSubList title={title} data={children} />
        </div>
      ):(
        <div className="lg:text-base lg:tracking-tight text-sm uppercase font-bold group flex items-center gap-x-2">
          <Link href={`${href}`}>{title}</Link>
        </div>
      )}
    </div>
    
  )
}

export default SidebarItem