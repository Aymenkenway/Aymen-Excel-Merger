// // Frontend (React)
// import React, { useState } from 'react'
// import axios from 'axios'

// const App = () => {
//   const [files, setFiles] = useState([])
//   const [rowConfig, setRowConfig] = useState([])
//   const [isMerging, setIsMerging] = useState(false)

//   const handleFileChange = (e) => {
//     setFiles([...files, ...e.target.files])
//     setRowConfig([...rowConfig, { startRow: 1 }])
//   }

//   const handleRowChange = (index, value) => {
//     const newConfig = [...rowConfig]
//     newConfig[index].startRow = value
//     setRowConfig(newConfig)
//   }

//   const handleMerge = async () => {
//     const formData = new FormData()
//     files.forEach((file) => formData.append('files', file))
//     formData.append('rowConfig', JSON.stringify(rowConfig))

//     setIsMerging(true)
//     try {
//       const response = await axios.post(
//         'http://localhost:5000/merge',
//         formData,
//         {
//           headers: { 'Content-Type': 'multipart/form-data' },
//           responseType: 'blob',
//         }
//       )

//       const url = window.URL.createObjectURL(new Blob([response.data]))
//       const link = document.createElement('a')
//       link.href = url
//       link.setAttribute('download', 'merged.xlsx')
//       document.body.appendChild(link)
//       link.click()
//       link.remove()
//     } catch (error) {
//       console.error('Error during merge:', error)
//       alert('An error occurred while merging files.')
//     } finally {
//       setIsMerging(false)
//     }
//   }

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Excel File Merger</h1>
//       <input type='file' multiple accept='.xlsx' onChange={handleFileChange} />
//       <div>
//         {files.map((file, index) => (
//           <div key={index}>
//             <span>{file.name}</span>
//             <input
//               type='number'
//               value={rowConfig[index]?.startRow || 1}
//               onChange={(e) =>
//                 handleRowChange(index, parseInt(e.target.value, 10))
//               }
//               placeholder='Starting row'
//               min='1'
//             />
//           </div>
//         ))}
//       </div>
//       <button onClick={handleMerge} disabled={isMerging}>
//         {isMerging ? 'Merging...' : 'Merge Files'}
//       </button>
//     </div>
//   )
// }

// export default App

// Frontend (React)
// import React, { useState } from 'react'
// import axios from 'axios'

// const App = () => {
//   const [files, setFiles] = useState([])
//   const [rowConfig, setRowConfig] = useState([])
//   const [isMerging, setIsMerging] = useState(false)

//   const handleFileChange = (e) => {
//     setFiles([...files, ...e.target.files])
//     setRowConfig([...rowConfig, { startRow: 1, endColumn: 'Z' }]) // Default end column is Z
//   }

//   const handleRowChange = (index, value, field) => {
//     const newConfig = [...rowConfig]
//     newConfig[index][field] = value
//     setRowConfig(newConfig)
//   }

//   const handleMerge = async () => {
//     const formData = new FormData()
//     files.forEach((file) => formData.append('files', file))
//     formData.append('rowConfig', JSON.stringify(rowConfig))

//     setIsMerging(true)
//     try {
//       const response = await axios.post(
//         'http://localhost:5000/merge',
//         formData,
//         {
//           headers: { 'Content-Type': 'multipart/form-data' },
//           responseType: 'blob',
//         }
//       )

//       const url = window.URL.createObjectURL(new Blob([response.data]))
//       const link = document.createElement('a')
//       link.href = url
//       link.setAttribute('download', 'merged.xlsx')
//       document.body.appendChild(link)
//       link.click()
//       link.remove()
//     } catch (error) {
//       console.error('Error during merge:', error)
//       alert('An error occurred while merging files.')
//     } finally {
//       setIsMerging(false)
//     }
//   }

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Excel File Merger</h1>
//       <input type='file' multiple accept='.xlsx' onChange={handleFileChange} />
//       <div>
//         {files.map((file, index) => (
//           <div key={index}>
//             <span>{file.name}</span>
//             <input
//               type='number'
//               value={rowConfig[index]?.startRow || 1}
//               onChange={(e) =>
//                 handleRowChange(index, parseInt(e.target.value, 10), 'startRow')
//               }
//               placeholder='Starting row'
//               min='1'
//             />
//             <input
//               type='text'
//               value={rowConfig[index]?.endColumn || 'Z'}
//               onChange={(e) =>
//                 handleRowChange(
//                   index,
//                   e.target.value.toUpperCase(),
//                   'endColumn'
//                 )
//               }
//               placeholder='Ending column'
//             />
//           </div>
//         ))}
//       </div>
//       <button onClick={handleMerge} disabled={isMerging}>
//         {isMerging ? 'Merging...' : 'Merge Files'}
//       </button>
//     </div>
//   )
// }

// export default App

// Frontend (React)
// import React, { useState } from 'react'
// import axios from 'axios'

// const App = () => {
//   const [files, setFiles] = useState([])
//   const [rowConfig, setRowConfig] = useState([])
//   const [isMerging, setIsMerging] = useState(false)

//   const handleFileChange = (e) => {
//     setFiles([...files, ...e.target.files])
//     setRowConfig([...rowConfig, { startRow: 1, endRow: 10 }]) // Default start and end rows
//   }

//   const handleRowChange = (index, value, field) => {
//     const newConfig = [...rowConfig]
//     newConfig[index][field] = value
//     setRowConfig(newConfig)
//   }

//   const handleMerge = async () => {
//     const formData = new FormData()
//     files.forEach((file) => formData.append('files', file))
//     formData.append('rowConfig', JSON.stringify(rowConfig))

//     setIsMerging(true)
//     try {
//       const response = await axios.post(
//         'http://localhost:5000/merge',
//         formData,
//         {
//           headers: { 'Content-Type': 'multipart/form-data' },
//           responseType: 'blob',
//         }
//       )

//       const url = window.URL.createObjectURL(new Blob([response.data]))
//       const link = document.createElement('a')
//       link.href = url
//       link.setAttribute('download', 'merged.xlsx')
//       document.body.appendChild(link)
//       link.click()
//       link.remove()
//     } catch (error) {
//       console.error('Error during merge:', error)
//       alert('An error occurred while merging files.')
//     } finally {
//       setIsMerging(false)
//     }
//   }

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Excel File Merger</h1>
//       <input type='file' multiple accept='.xlsx' onChange={handleFileChange} />
//       <div>
//         {files.map((file, index) => (
//           <div key={index}>
//             <span>{file.name}</span>
//             <div>
//               <input
//                 type='number'
//                 value={rowConfig[index]?.startRow || 1}
//                 onChange={(e) =>
//                   handleRowChange(
//                     index,
//                     parseInt(e.target.value, 10),
//                     'startRow'
//                   )
//                 }
//                 placeholder='Starting row'
//                 min='1'
//               />
//               <input
//                 type='number'
//                 value={rowConfig[index]?.endRow || 10}
//                 onChange={(e) =>
//                   handleRowChange(index, parseInt(e.target.value, 10), 'endRow')
//                 }
//                 placeholder='Ending row'
//                 min='1'
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//       <button onClick={handleMerge} disabled={isMerging}>
//         {isMerging ? 'Merging...' : 'Merge Files'}
//       </button>
//     </div>
//   )
// }

// export default App

//Finaaaaaaaaaaaaaaaaaaaaaaal
// import React, { useState } from 'react'
// import axios from 'axios'

// const App = () => {
//   const [files, setFiles] = useState([])
//   const [rowConfig, setRowConfig] = useState([])
//   const [isMerging, setIsMerging] = useState(false)

//   const handleFileChange = (e) => {
//     setFiles([...files, ...e.target.files])
//     setRowConfig([
//       ...rowConfig,
//       { startRow: 1, endRow: 100, startColumn: 'A', endColumn: 'Z' },
//     ])
//   }

//   const handleRowChange = (index, type, value) => {
//     const newConfig = [...rowConfig]
//     newConfig[index][type] = value
//     setRowConfig(newConfig)
//   }

//   const handleMerge = async () => {
//     const formData = new FormData()
//     files.forEach((file) => formData.append('files', file))
//     formData.append('rowConfig', JSON.stringify(rowConfig))

//     setIsMerging(true)
//     try {
//       const response = await axios.post(
//         'http://localhost:5000/merge',
//         formData,
//         {
//           headers: { 'Content-Type': 'multipart/form-data' },
//           responseType: 'blob',
//         }
//       )

//       const url = window.URL.createObjectURL(new Blob([response.data]))
//       const link = document.createElement('a')
//       link.href = url
//       link.setAttribute('download', 'merged.xlsx')
//       document.body.appendChild(link)
//       link.click()
//       link.remove()
//     } catch (error) {
//       console.error('Error during merge:', error)
//       alert('An error occurred while merging files.')
//     } finally {
//       setIsMerging(false)
//     }
//   }

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Aymen Excel File Merger</h1>
//       <input type='file' multiple accept='.xlsx' onChange={handleFileChange} />
//       <div>
//         {files.map((file, index) => (
//           <div key={index}>
//             <span>{file.name}</span>
//             <div>
//               <input
//                 type='number'
//                 value={rowConfig[index]?.startRow || 1}
//                 onChange={(e) =>
//                   handleRowChange(
//                     index,
//                     'startRow',
//                     parseInt(e.target.value, 10)
//                   )
//                 }
//                 placeholder='Starting Row'
//                 min='1'
//               />
//               <input
//                 type='number'
//                 value={rowConfig[index]?.endRow || 100}
//                 onChange={(e) =>
//                   handleRowChange(index, 'endRow', parseInt(e.target.value, 10))
//                 }
//                 placeholder='Ending Row'
//                 min='1'
//               />
//               <input
//                 type='text'
//                 value={rowConfig[index]?.startColumn || 'A'}
//                 onChange={(e) =>
//                   handleRowChange(index, 'startColumn', e.target.value)
//                 }
//                 placeholder='Starting Column'
//               />
//               <input
//                 type='text'
//                 value={rowConfig[index]?.endColumn || 'Z'}
//                 onChange={(e) =>
//                   handleRowChange(index, 'endColumn', e.target.value)
//                 }
//                 placeholder='Ending Column'
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//       <button onClick={handleMerge} disabled={isMerging}>
//         {isMerging ? 'Merging...' : 'Merge Files'}
//       </button>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
  const [files, setFiles] = useState([])
  const [rowConfig, setRowConfig] = useState([])
  const [isMerging, setIsMerging] = useState(false)

  const handleFileChange = (e) => {
    setFiles([...files, ...e.target.files])
    setRowConfig([
      ...rowConfig,
      { startRow: 1, endRow: 100, startColumn: 'A', endColumn: 'Z' },
    ])
  }

  const handleRowChange = (index, value, type) => {
    const newConfig = [...rowConfig]
    newConfig[index][type] = value
    setRowConfig(newConfig)
  }

  const handleMerge = async () => {
    const formData = new FormData()
    files.forEach((file) => formData.append('files', file))
    formData.append('rowConfig', JSON.stringify(rowConfig))

    setIsMerging(true)
    try {
      const response = await axios.post(
        'http://localhost:5000/merge',
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
        {files.map((file, index) => (
          <div className='file-row' key={index}>
            <div className='file-info'>
              <span className='file-name'>{file.name}</span>
            </div>
            <div className='row-config'>
              <input
                type='number'
                value={rowConfig[index]?.startRow || 1}
                onChange={(e) =>
                  handleRowChange(
                    index,
                    parseInt(e.target.value, 10),
                    'startRow'
                  )
                }
                placeholder='Start Row'
                min='1'
                className='row-input'
              />
              <input
                type='number'
                value={rowConfig[index]?.endRow || 100}
                onChange={(e) =>
                  handleRowChange(index, parseInt(e.target.value, 10), 'endRow')
                }
                placeholder='End Row'
                min='1'
                className='row-input'
              />
              <input
                type='text'
                value={rowConfig[index]?.startColumn || 'A'}
                onChange={(e) =>
                  handleRowChange(
                    index,
                    e.target.value.toUpperCase(),
                    'startColumn'
                  )
                }
                placeholder='Start Column'
                className='column-input'
              />
              <input
                type='text'
                value={rowConfig[index]?.endColumn || 'Z'}
                onChange={(e) =>
                  handleRowChange(
                    index,
                    e.target.value.toUpperCase(),
                    'endColumn'
                  )
                }
                placeholder='End Column'
                className='column-input'
              />
            </div>
          </div>
        ))}
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
