import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
  const [files, setFiles] = useState([])
  const [rowConfig, setRowConfig] = useState({
    startRow: 1,
    endRow: null, // Will automatically be set based on file data
    startColumn: 'A',
    endColumn: 'Z',
  })
  const [isMerging, setIsMerging] = useState(false)

  const handleFileChange = (e) => {
    setFiles([...files, ...e.target.files])
  }

  const handleMerge = async () => {
    const formData = new FormData()
    files.forEach((file) => formData.append('files', file))

    // Send global row and column configuration
    formData.append('rowConfig', JSON.stringify(rowConfig))

    console.log(JSON.stringify(rowConfig))

    setIsMerging(true)
    try {
      const response = await axios.post(
        'https://aymen-excel-merger-backend.vercel.app/merge',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
          responseType: 'blob',
        }
      )

      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'merged.xlsx')
      document.body.appendChild(link)
      link.click()
      link.remove()
    } catch (error) {
      console.error('Error during merge:', error)
      alert('An error occurred while merging files.')
    } finally {
      setIsMerging(false)
    }
  }

  return (
    <div className='app-container'>
      <h1 className='app-header'>Aymen Excel File Merger</h1>
      <div className='file-upload'>
        <input
          type='file'
          multiple
          accept='.xlsx'
          onChange={handleFileChange}
          className='file-input'
        />
      </div>

      <div className='file-details'>
        <div className='file-row'>
          <div className='file-info'>
            <span className='file-name'>Global Settings</span>
          </div>
          <div className='row-config'>
            <input
              type='number'
              value={rowConfig.startRow}
              onChange={(e) =>
                setRowConfig({
                  ...rowConfig,
                  startRow: parseInt(e.target.value, 10),
                })
              }
              placeholder='Start Row'
              min='1'
              className='row-input'
            />
            <input
              type='number'
              value={rowConfig.endRow || ''}
              onChange={(e) =>
                setRowConfig({
                  ...rowConfig,
                  endRow: e.target.value ? parseInt(e.target.value, 10) : null,
                })
              }
              placeholder='End Row (Auto)'
              min='1'
              className='row-input'
            />
            <input
              type='text'
              value={rowConfig.startColumn}
              onChange={(e) =>
                setRowConfig({
                  ...rowConfig,
                  startColumn: e.target.value.toUpperCase(),
                })
              }
              placeholder='Start Column'
              className='column-input'
            />
            <input
              type='text'
              value={rowConfig.endColumn}
              onChange={(e) =>
                setRowConfig({
                  ...rowConfig,
                  endColumn: e.target.value.toUpperCase(),
                })
              }
              placeholder='End Column'
              className='column-input'
            />
          </div>
        </div>
      </div>

      <button
        onClick={handleMerge}
        disabled={isMerging}
        className={`merge-button ${isMerging ? 'disabled' : ''}`}
      >
        {isMerging ? 'Merging...' : 'Merge Files'}
      </button>
    </div>
  )
}

export default App
