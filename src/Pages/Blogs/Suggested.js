import React, { Component } from 'react';
import Pop from "./Pop"; 

class Suggested extends Component {
	render() {
		return (
            <div>
               
  <div className="container md:px-48 px-5 py-24 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-100">
                {
                  Pop.Blog.map((blog) => {
                    return (
                      <>
                     
                     <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700 uppercase">{blog.cat}</span>
          <span className="mt-1 text-gray-500 text-sm">{blog.date}</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{blog.title}</h2>
          <p className="leading-relaxed">{blog.Desc}</p>
          <button><a className="text-indigo-500 inline-flex items-center mt-4" href={blog.link}>Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </button>
        </div>
      </div>

                      </>
                    );
                  })
                } 
                
                </div>
                </div>
            </div>
        );
    }
} 
export default Suggested;