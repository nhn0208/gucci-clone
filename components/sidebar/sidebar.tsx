import SidebarList from "./sidebar-list"

const items = [
  { title:"What's new" },
  { title:"Handbags", children: [
      { title: "View All",href:"/ca/handbags/"}
  ] },
  { title:"Travel"},
  { title:"Women", },
  { title:"Men", },
  { title:"MX", },
  { title:"Children", },
  { title:"Jewelry & watches", },
  { title:"Beauty", },
  { title:"Décor & lifestyle", },
  { title:"Gifts", },
  { title:"Vault", },
]

const Sidebar = () => {
  return (
    <SidebarList data={items}/>
  )
}

export default Sidebar