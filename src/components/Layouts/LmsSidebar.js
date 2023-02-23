import { useAuth } from "@/hooks/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  FaChartBar,
  FaCog,
  FaFolder,
  FaSignOutAlt,
  FaUsers,
  FaSitemap,
  FaGraduationCap,
  FaTachometerAlt,
  FaDollarSign,
  FaChartLine,
  FaCalendar,
  FaAngleRight
} from "react-icons/fa";
import LmsProfile from "../LmsProfile";

// type SidebarProps = {
//   isOpen: boolean;
// };

function LmsSidebar({user}) {
    const router= useRouter();
  const [isOpen, setIsOpen] = React.useState(true);
  const { logout } = useAuth();
  const Menus = [
    { title: "Dashboard", src: <FaTachometerAlt size={12} />,linkto: "/admin/cred" ,click:'true'},
    { title: "Utilities", src: <FaFolder size={12} />,linkto: "/admin/cred",click:'true',submenu:[
        {title: "Utilities", src: <FaFolder size={12} />, linkto: "/admin/cred"},
        {title: "Utilities", src: <FaFolder size={12} />, linkto: "/admin/cred"},
        {title: "Utilities", src: <FaFolder size={12} />, linkto: "/admin/cred"},
        {title: "Utilities", src: <FaFolder size={12} />, linkto: "/admin/cred"},
        {title: "Utilities", src: <FaFolder size={12} />, linkto: "/admin/cred"},
        {title: "Utilities", src: <FaFolder size={12} />, linkto: "/admin/cred"},
    ] },
    { title: "Users", src: <FaUsers size={12} />, linkto: "/admin/cred",click:'true' },
    { title: "Organisation ", src: <FaSitemap size={12} />, linkto: "/admin/cred" ,click:'true'},
    { title: "Courses", src: <FaGraduationCap size={12} />, linkto: "/admin/cred" ,click:'true'},
    { title: "Sales", src: <FaDollarSign size={12} />, linkto: "/admin/cred" ,click:'true'},
    { title: "Reporting ", src: <FaChartLine size={12} />, linkto: "/admin/cred",click:'true'},
    { title: "Calendar", src: <FaCalendar size={12} />, linkto: "/admin/cred" ,click:'true'},
    { title: "Logout", src: <FaSignOutAlt size={12} />, linkto: "/admin/cred", click:'logout'},
  ];

  const openEvent=()=>{
    console.log('aaaaa');
  }
  return (
    <div className="flex bg-sidebar">

      <div
        className={` ${
          isOpen ? "w-55" : "w-20 "
        } relative h-screen bg-sidebar-black  text-white duration-300`}
      >
      <LmsProfile />
      <div className="bg-[#36464c] text-center py-1 w-full top-1">
        <em className="text-white text-2xl w-full">ENERG<span className='text-[#3da9e3]'>E</span><sup className="text-[#f47e1f]">3</sup></em>
      </div>

        <ul className="pt-1">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  cursor-pointer items-center gap-x-4  p-1 text-lmsmenu font-black  hover:border-l-1 hover:border-white hover:bg-light-white border-b-2 border_sidebar_top_border border_sidebar_bottom_border text-slate-400
                 ${
                index === 0 && "bg-light-white"
              } `}

            >
              <Link href={Menu.linkto ? Menu.linkto : "#"} onClick={Menu.click==='logout'?logout:openEvent}>
              {Menu.src}
              </Link>
              <span
                className={`${!isOpen && "hidden"} origin-left duration-200`}
              >
                {Menu.title}
              </span>
              {
                Menu.submenu ?
                <span
                    className={`${!isOpen && "hidden"} origin-right float-right duration-200`}
                >
                <FaAngleRight />
                </span>
                :null
            }
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


export default LmsSidebar;
