import { User2 } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const UserButton = () => {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger>
      <div className='pl-6' >
        <User2 width={24} height={24} />
      </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent className='mt-6'>
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuItem>Subscription</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  
  )
}

export default UserButton