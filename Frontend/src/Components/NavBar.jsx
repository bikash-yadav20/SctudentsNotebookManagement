import React from 'react'
import logo from '../assets/kaizenlogo-removebg-preview (1).png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="sm:px-6 ">
        {/* Flex container */}
        <div className="flex justify-between items-center h-16">
          {/* Logo + Title */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Kaizen Logo" className="h-10 w-auto" />
            <h3 className="text-lg font-semibold text-gray-800">
              Students Notebook Report
            </h3>
          </div>

          {/* Navigation links (hidden on mobile) */}
          <div className="hidden md:flex space-x-6">
            <Link to="/"  className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link className="text-gray-700 hover:text-blue-600">Reports</Link>
            <Link  className="text-gray-700 hover:text-blue-600">About</Link>
            <Link  className="text-gray-700 hover:text-blue-600">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
