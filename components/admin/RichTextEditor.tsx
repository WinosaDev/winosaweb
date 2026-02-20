'use client'

import { useEffect, useRef } from 'react'

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
  disabled?: boolean
  placeholder?: string
}

export default function RichTextEditor({
  value,
  onChange,
  disabled = false,
  placeholder = 'Write your blog content here...',
}: RichTextEditorProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const quillRef = useRef<any>(null)
  const isUpdating = useRef(false)
  const initialized = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (initialized.current) return
    initialized.current = true

    const loadQuill = async () => {
      const Quill = (await import('quill')).default

      if (!containerRef.current) return

      // Clear any existing content to prevent double render
      containerRef.current.innerHTML = ''

      // Create a fresh div for Quill to mount into
      const editorDiv = document.createElement('div')
      containerRef.current.appendChild(editorDiv)

      quillRef.current = new Quill(editorDiv, {
        theme: 'snow',
        placeholder,
        readOnly: disabled,
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ color: [] }, { background: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ align: [] }],
            ['blockquote', 'code-block'],
            ['link', 'image'],
            ['clean'],
          ],
        },
      })

      if (value) {
        quillRef.current.root.innerHTML = value
      }

      quillRef.current.on('text-change', () => {
        if (isUpdating.current) return
        const html = quillRef.current.root.innerHTML
        onChange(html === '<p><br></p>' ? '' : html)
      })
    }

    loadQuill()

    return () => {
      // Cleanup on unmount
      if (quillRef.current) {
        quillRef.current = null
      }
      initialized.current = false
    }
  }, [])

  // Sync external value
  useEffect(() => {
    if (!quillRef.current) return
    const currentHtml = quillRef.current.root.innerHTML
    if (value !== currentHtml) {
      isUpdating.current = true
      quillRef.current.root.innerHTML = value || ''
      isUpdating.current = false
    }
  }, [value])

  // Sync disabled state
  useEffect(() => {
    if (!quillRef.current) return
    quillRef.current.enable(!disabled)
  }, [disabled])

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.7/quill.snow.min.css"
      />
      <style>{`
        .ql-toolbar.ql-snow {
          border: 1px solid #e5e7eb;
          border-bottom: none;
          border-radius: 12px 12px 0 0;
          background: #f9fafb;
          padding: 8px 12px;
        }
        .ql-container.ql-snow {
          border: 1px solid #e5e7eb;
          border-radius: 0 0 12px 12px;
          font-size: 14px;
          background: #ffffff;
        }
        .ql-editor {
          min-height: 260px;
          padding: 14px 16px;
          line-height: 1.7;
          color: #111827;
        }
        .ql-editor.ql-blank::before {
          color: #9ca3af;
          font-style: normal;
          font-size: 14px;
        }
        .ql-toolbar button:hover,
        .ql-toolbar button.ql-active {
          color: #ca8a04 !important;
        }
        .ql-toolbar button:hover .ql-stroke,
        .ql-toolbar button.ql-active .ql-stroke {
          stroke: #ca8a04 !important;
        }
        .ql-toolbar button:hover .ql-fill,
        .ql-toolbar button.ql-active .ql-fill {
          fill: #ca8a04 !important;
        }
      `}</style>
      <div ref={containerRef} className={disabled ? 'opacity-60 pointer-events-none' : ''} />
    </>
  )
}