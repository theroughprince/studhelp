import React from 'react'
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import State from './Component/State';
import TopC from './Component/TopC';

export default function Team() {
  return (
   <div>
    <Navbar/>
<div className='md:px-48 px-4'>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200"/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">Holden Caulfield</h2>
            <h3 className="text-gray-500 mb-3">UI Developer</h3>
            <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/201x201"/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">Alper Kamu</h2>
            <h3 className="text-gray-500 mb-3">Designer</h3>
            <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/204x204"/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">Atticus Finch</h2>
            <h3 className="text-gray-500 mb-3">UI Developer</h3>
            <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/206x206"/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">Henry Letham</h2>
            <h3 className="text-gray-500 mb-3">Designer</h3>
            <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<TopC/>

<hr/>
<State/>
<hr/>
<Contact/>
</div>
<Footer/>
    </div>
  )
}
