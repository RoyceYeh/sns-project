import React from 'react'

const Signin = () => {
  return (
    <div className="w-full max-w-sm mt-[30vh] border rounded-xl shadow m-auto sm:max-w-lg ">
      <form className="bg-white px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-base font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input className="text-base border-slate-400 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-0 focus:shadow-outline focus:ring-slate-400 outline-slate-400 focus:border-slate-400 " id="username" type="text" placeholder="Username" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-base font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow border-slate-400 appearance-none border text-base rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tightfocus:outline-0 focus:shadow-outline focus:ring-slate-400 outline-slate-400 focus:border-slate-400 " id="password" type="password" placeholder="Password" />
          {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  )
}

export default Signin
