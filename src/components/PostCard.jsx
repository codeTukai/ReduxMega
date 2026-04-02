import React from 'react'
import appWriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer'>
        
   
        <div className='w-full h-48 overflow-hidden'>
          <img
            src={appWriteService.getFilePreview(featuredImage)}
            alt={title}
            className='w-full h-full object-cover'
          />
        </div>

       
        <div className='p-4'>
          <h2 className='text-lg font-semibold text-white line-clamp-2'>
            {title}
          </h2>
        </div>

      </div>
    </Link>
  )
}

export default PostCard