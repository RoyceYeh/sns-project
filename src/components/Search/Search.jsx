import React from 'react'

const Search = () => {
  return (
    <div className="text-base relative">
      <div className="text-base relative font-normal inline-flex text-slate-500">
        <input type="text" className="shadow pr-8 rounded-full m-0 max-w-full flex-[1_0_auto] outline-0 text-left leading-5  p-[0.5rem_1rem] bg-white border border-solid border-slate-400 focus:outline-0 focus:outline-stone-400 focus:border-slate-100 focus:bg-white" />
        <button className="absolute cursor-pointer leading-normal text-center top-0 right-3 m-0 h-full w-[1.5rem] opacity-50 round-[0_0.25_0.25_0]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Search
