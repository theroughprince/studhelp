import React from 'react'

export default function Navbar() {
  return (
    <>
    <nav className="flex justify-center space-x-4 py-10">
  <a href="/" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
  <a href="/Blog" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Blogs</a>
  <a href="/Team" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Team</a>
  <a href="/Contact" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Contact</a>
</nav>
<hr className='mb-4'/>
  </>
  )
}
