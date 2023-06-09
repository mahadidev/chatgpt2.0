import { IoMdSend } from "react-icons/io";
import { BiRefresh } from "react-icons/bi";
import { TbLayoutSidebar, TbLayoutSidebarRight } from "react-icons/tb";
import { MdOutlineLightMode } from "react-icons/md";

const Icon = {
  SVG: {
    send: <IoMdSend />,
    generate: <BiRefresh />,
    toggleLeft: <TbLayoutSidebar />,
    toggleRight: <TbLayoutSidebarRight />,
    sun: <MdOutlineLightMode />,
  },
};

export default Icon;
