// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import LoginForm from './Auth/Login';
// import Register from './Auth/Register';
// import PromiseApi from './praticeSet/PromiseApi/PromiseApi';
// import ProductForm from './pages/ProductForm';
// import CountDown from './MachineCoder/CountDown';
// import Home from './praticeSet/Home';
// import ApiCalls from './praticeSet/pratice/todo';
// import DigitalClock from './praticeSet/pratice/DigitalClock';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<CountDown/>}/>
//         <Route path='/form' element={<LoginForm />} />
//         <Route path='/register' element={<Register />} />
//         <Route path='/promiseapi' element={<PromiseApi/>}/>
//         <Route path='/productForm' element={<ProductForm/>}/>
//         <Route path='/api-call' element={<ApiCalls/>}/>
//          <Route path='/home' element={<Home/>}/>
//          <Route path='/timer' element={<DigitalClock/>}/>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



import React from 'react'
import Test from './inter/test'
import Search from './inter/Search'
import FormValidation from './inter/formValidation'
import AutoCompleteDropdown from './inter/AutoComplete'
import ProgressBar from './inter/ProgressBar'
import Accordain from './inter/Accordain'
import Getapi from './inter/Getapi'

const App = () => {
  return (
    <div>
      
      {/* <Test/> */}

      {/* <Search/> */}

      {/* <AutoCompleteDropdown/>
      <ProgressBar/>

      <FormValidation/> */}

      {/* <Accordain/> */}
      {/* <Search/> */}
      <Getapi/>

      
    </div>
  )
}

export default App
