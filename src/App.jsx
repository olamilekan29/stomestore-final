// import React from 'react'
// import Navbar from './components/Navbar.jsx'
// import Home from './components/Home.jsx'
// import Services from './components/Service.jsx'
// import About from './components/About.jsx'
// import Features from './components/Features.jsx'
// import Contact from './components/Contact.jsx'
// import Whitelist from './components/Whitelist.jsx'
// import Footer from './components/Footer.jsx'
// import { Route, Routes} from 'react-router-dom'
// function App() {
  

//   return (
//     <> 
//     <div>
//     <Navbar />
//       <Routes>
//           <Route path='/' element= { <Home/>} />
//           <Route path='/services' element= { <Services/>} ></Route>
//           <Route path='/about' element= {<About/>}></Route>
//           <Route path='/features' element= {<Features/>}></Route>
//           <Route path='/contact' element= {<Contact/>}></Route>
//           <Route path='/whitelist' element= {<Whitelist/>}></Route>
//           <Route path='/footer' element= {<Footer/>}></Route>
//         </Routes>

      
//     </div>

//     </>
//   )
// }

// export default App


import React from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Services from './components/Service.jsx'
import About from './components/About.jsx'
import Features from './components/Features.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <> 
      <Navbar />
      <Home />
      <Services />
      <About />
      <Features />
      <Contact />
      <Footer />
    </>
  )
}

export default App