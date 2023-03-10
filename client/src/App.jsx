import React from 'react'
import { Outlet } from 'react-router-dom'
import GoogleFontLoader from 'react-google-font'
import CssBaseline from '@mui/material/CssBaseline'
import { Box } from '@mui/material'
import GlobalTheme from './config/GlobalTheme'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import fonts from './config/fonts'
import appLogo from './assets/logo.png'
export { appLogo }

function App () {
  return (
    <GlobalTheme>
      <CssBaseline />
      <GoogleFontLoader fonts={fonts} />
      <Box
        sx={{
          // minHeight: '100vh',
          minHeight: '100dvh',
          display: 'grid',
          gridAutoColumns: '100%',
          gridTemplateRows: 'auto 1fr auto'
        }}
      >
        <Navbar />
        <Outlet />
        <Footer />
      </Box>
    </GlobalTheme>
  )
}

export default App
