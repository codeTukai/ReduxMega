import React from 'react'
import { Container, Logo, LogOutBtn } from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    { name: 'Home', slug: "/", active: true },
    { name: "login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ]

  return (
    <header className='bg-gray-900 border-b border-gray-700'>
      <Container>
        
        {/* 🔥 FIXED NAV */}
        <nav className='flex items-center justify-between py-4'>
          
          {/* LEFT: Logo */}
          <Link to="/" className="flex items-center">
            <Logo width='80px' />
          </Link>

          {/* RIGHT: Nav Items */}
          <ul className='flex items-center gap-6'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='text-gray-300 hover:text-white transition'
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}

            {authStatus && (
              <li>
                <LogOutBtn />
              </li>
            )}
          </ul>

        </nav>
      </Container>
    </header>
  )
}

export default Header