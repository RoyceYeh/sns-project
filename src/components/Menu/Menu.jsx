import React from 'react'

const Menu = (props) => {
  return <div className="text-base flex w-screen bg-white font-normal rounded shadow-md  min-h-[3rem]">{props.children}</div>
}

const MenuItem = ({ className, ...props }) => {
  return <div className="relative no-underline leading-none flex-[0_0_auto] select-none bg-[0_0] px-[1.25rem] py-[1rem] text-zinc-400">{props.children} </div>
}

export { Menu, MenuItem }
