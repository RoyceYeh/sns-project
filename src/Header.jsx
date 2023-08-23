import React from 'react'
// import { Menu, Search } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Menu, MenuItem } from './components/Menu/Menu'
import Search from './components/Search/Search'

const Header = () => {
  return (
    <Menu>
      <Link className="relative no-underline leading-none flex-[0_0_auto] select-none bg-[0_0] px-[1.25rem] py-[1.5rem] text-zinc-400 text-xl border-r-2" to="/">
        Curious
      </Link>
      <MenuItem>
        <Search />
      </MenuItem>
      <Link className="border-l-2 block ml-auto relative no-underline leading-none flex-[0_0_auto] select-none bg-[0_0] px-[1.25rem] py-[1.5rem] text-zinc-400 text-base hover:text-slate-800 " to="/signin">
        登入/註冊
      </Link>
    </Menu>

    // <Menu>
    //   <Menu.Item as={Link} to="/">
    //     Social
    //   </Menu.Item>
    //   <Menu.Item>
    //     <Search />
    //   </Menu.Item>
    //   <Menu.Menu position="right">
    //     <Menu.Item as={Link} to="/signin">
    //       登入/註冊
    //     </Menu.Item>
    //   </Menu.Menu>
    // </Menu>
  )
}

export default Header
