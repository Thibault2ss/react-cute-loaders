import React from 'react'

import { Cube3DLoader } from 'react-cute-loaders'
import 'react-cute-loaders/dist/index.css'

const App = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <div style={{ display: 'flex' }}>
        <Cube3DLoader size={40} variant={1} />
        <Cube3DLoader size={40} variant={2} />
        <Cube3DLoader size={40} variant={3} />
        <Cube3DLoader size={40} variant={4} />
        <Cube3DLoader size={40} variant={5} />
      </div>
      {/* <div style={{ display: 'flex' }}>
        <Cube3DLoader size={40} variant={1} color='#e20b78' />
        <Cube3DLoader size={40} variant={2} color='#e20b78' />
        <Cube3DLoader size={40} variant={3} color='#e20b78' />
        <Cube3DLoader size={40} variant={4} color='#e20b78' />
        <Cube3DLoader size={40} variant={5} color='#e20b78' />
      </div>
      <div style={{ display: 'flex' }}>
        <Cube3DLoader size={40} variant={1} color='#5eec15' />
        <Cube3DLoader size={40} variant={2} color='#5eec15' />
        <Cube3DLoader size={40} variant={3} color='#5eec15' />
        <Cube3DLoader size={40} variant={4} color='#5eec15' />
        <Cube3DLoader size={40} variant={5} color='#5eec15' />
      </div>
      <div style={{ display: 'flex' }}>
        <Cube3DLoader size={40} variant={1} color='#ec8215' />
        <Cube3DLoader size={40} variant={2} color='#ec8215' />
        <Cube3DLoader size={40} variant={3} color='#ec8215' />
        <Cube3DLoader size={40} variant={4} color='#ec8215' />
        <Cube3DLoader size={40} variant={5} color='#ec8215' />
      </div> */}
    </div>
  )
}

export default App
