import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <>  
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<h1>404 Not Found</h1>} />
    </Routes>
    </>
  );
}

export default App;






// import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import Navbar from './components/Navbar.jsx';
// import Home from './pages/Home.jsx';
// import About from './pages/About.jsx';
// import Contact from './pages/Contact.jsx';
// import Profile from './pages/Profile.jsx';
// import NotFound from './pages/NotFound.jsx';
// import Layout from './pages/Layout.jsx';

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/contact" element={<Contact />} />
// //         <Route path="/profile/:username" element={<Profile />} />
// //         <Route path="*" element={<NotFound />} />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path='about' element={<About />} />
//           <Route path='contact' element={<Contact />} />
//           <Route path='profile/:username' element={<Profile />} />
//         </Route>
//         <Route path='*' element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>

//   );
// }

// export default App;