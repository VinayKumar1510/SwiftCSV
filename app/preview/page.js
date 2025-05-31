'use client'

import { useEffect, useState } from 'react'
import Papa from 'papaparse'
import { FixedSizeList as List } from 'react-window'

export default function PreviewPage() {
  const [data, setData] = useState([])
  const [headers, setHeaders] = useState([])
  const [listHeight, setListHeight] = useState(500)
  const [windowWidth, setWindowWidth] = useState(0)
  const [isMounted, setIsMounted] = useState(false) // fix hydration issues

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateSize = () => {
        setListHeight(window.innerHeight - 150)
        setWindowWidth(window.innerWidth)
      }

      updateSize()
      setIsMounted(true) // mark ready for rendering
      window.addEventListener('resize', updateSize)
      return () => window.removeEventListener('resize', updateSize)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const csvText = localStorage.getItem('uploadedCSV')
    if (!csvText) return

    const tempHeaders = new Set()
    const rows = []

    Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      worker: true,
      step: (results) => {
        const row = results.data
        Object.keys(row).forEach((key) => tempHeaders.add(key))
        rows.push(row)
      },
      complete: () => {
        setHeaders(Array.from(tempHeaders))
        setData(rows)
        localStorage.removeItem('uploadedCSV') // clear after use
      },
    })
  }, [])

  if (!isMounted || data.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400 text-lg">
        Loading or No CSV data found.
      </div>
    )
  }

  const isPhone = windowWidth < 768
  const fixedColWidth = 120
  const minTableWidth = headers.length * fixedColWidth

  const Row = ({ index, style }) => {
    const row = data[index]
    return (
      <div
        style={{
          ...style,
          display: 'flex',
          backgroundColor: index % 2 === 0 ? '#1e293b' : '#273549',
          borderBottom: '1px solid #334155',
          minWidth: isPhone ? minTableWidth : 'auto',
        }}
      >
        {headers.map((key) => (
          <div
            key={key}
            className="px-2 py-2 whitespace-nowrap overflow-hidden text-ellipsis"
            style={{
              flex: isPhone ? '0 0 120px' : '1 1 0',
              borderRight: '1px solid #334155',
            }}
            title={row[key] ?? ''}
          >
            {row[key] ?? ''}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-4 flex flex-col">
      <h1 className="text-3xl font-bold mb-4 text-center select-none">CSV Preview</h1>

      <div
        className={`border-b-2 border-gray-500 mb-2 ${isPhone ? 'overflow-x-auto' : ''}`}
        style={{ minWidth: isPhone ? minTableWidth : 'auto' }}
      >
        <div
          className="flex bg-slate-900 font-semibold"
          style={{ minWidth: isPhone ? minTableWidth : 'auto' }}
        >
          {headers.map((header) => (
            <div
              key={header}
              className="px-2 py-2 whitespace-nowrap overflow-hidden text-ellipsis border-r border-gray-600"
              style={{ flex: isPhone ? '0 0 120px' : '1 1 0' }}
              title={header}
            >
              {header}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <List
          height={listHeight}
          itemCount={data.length}
          itemSize={35}
          width={isPhone ? Math.min(windowWidth - 32, minTableWidth) : windowWidth - 32}
        >
          {Row}
        </List>
      </div>
    </div>
  )
}
