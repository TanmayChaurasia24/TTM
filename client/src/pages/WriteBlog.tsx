import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { FloatingDockDemo } from '../components/MenuBarHome'

export default function BlogWriter() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState('')
  const [showPreview, setShowPreview] = useState(false)

  const handleSave = () => {
    console.log('Saving blog post:', { title, content, tags })
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Write Your Blog</h1>
        
        <div className="mb-6">
          <input
            type="text"
            placeholder="Enter your blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-neutral-800 rounded-lg py-2 px-4 text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="mb-6">
          <textarea
            placeholder="Write your blog content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={15}
            className="w-full bg-neutral-800 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-y"
          />
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Enter tags (comma-separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full bg-neutral-800 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="flex justify-between items-center mb-6">
          <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 flex items-center"
          >
            <div className="mr-2" />
            Save Draft
          </button>
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 flex items-center"
          >
            {showPreview ? (
              <>
                <EyeOff size={20} className="mr-2" />
                Hide Preview
              </>
            ) : (
              <>
                <Eye size={20} className="mr-2" />
                Show Preview
              </>
            )}
          </button>
        </div>

        {showPreview && (
          <div className="bg-gray-800 rounded-lg p-6 mt-6">
            <h2 className="text-2xl font-bold mb-4">Preview</h2>
            <h3 className="text-xl font-semibold mb-2">{title || 'Untitled Blog Post'}</h3>
            <div className="prose prose-invert max-w-none">
              {content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
            {tags && (
              <div className="mt-4">
                {tags.split(',').map((tag, index) => (
                  <span key={index} className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
                    {tag.trim()}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <div className='bottom-3 left-1/2 -translate-x-1/2 transform fixed'>
        <FloatingDockDemo/>
      </div>
    </div>
  )
}