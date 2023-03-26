import { Foot } from "../comps/Foot"
import { Head } from "../comps/Head"
import { Navbar } from "../comps/Navbar"
import { Sidebar } from "../comps/Sidebar"
import { Outlet } from "react-router-dom"
import '../assets/main.scss'

type LayoutProps = {
  children: React.ReactNode
}

// Main layout
export const LayoutOne = (props: LayoutProps) => {
  return (
    <div>
      <Head />
      <Navbar />
      <div className="wrapper">
        <div className="main">
          <Outlet />
        </div>
        <Sidebar />
      </div>
      <Foot />
    </div>
  )
}
