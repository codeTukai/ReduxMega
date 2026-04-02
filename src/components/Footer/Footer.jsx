import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Logo + About */}
        <div>
          <Logo width="120px" />
          <p className="mt-4 text-sm text-gray-400">
            Build modern web apps with ease. Fast, scalable, and developer friendly.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-sm font-semibold uppercase text-gray-400 mb-4">
            Company
          </h3>
          <ul className="space-y-3">
            <li><Link className="hover:text-white transition" to="/">Features</Link></li>
            <li><Link className="hover:text-white transition" to="/">Pricing</Link></li>
            <li><Link className="hover:text-white transition" to="/">Affiliate</Link></li>
            <li><Link className="hover:text-white transition" to="/">Press Kit</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-sm font-semibold uppercase text-gray-400 mb-4">
            Support
          </h3>
          <ul className="space-y-3">
            <li><Link className="hover:text-white transition" to="/">Account</Link></li>
            <li><Link className="hover:text-white transition" to="/">Help</Link></li>
            <li><Link className="hover:text-white transition" to="/">Contact</Link></li>
            <li><Link className="hover:text-white transition" to="/">Support</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-sm font-semibold uppercase text-gray-400 mb-4">
            Legal
          </h3>
          <ul className="space-y-3">
            <li><Link className="hover:text-white transition" to="/">Terms</Link></li>
            <li><Link className="hover:text-white transition" to="/">Privacy</Link></li>
            <li><Link className="hover:text-white transition" to="/">License</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} DevUI. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer