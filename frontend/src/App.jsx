import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import toast, { Toaster } from 'react-hot-toast';
import fetchUserDetails from './utils/fetchUserDetails';
import { useEffect } from 'react';
import { setUserDetails } from './store/userSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()

  const fetchUser = async()=>{
    const userData = await fetchUserDetails()
    dispatch(setUserDetails(userData.data))
}

// const fetchCategory = async()=>{
//   try {
//       dispatch(setLoadingCategory(true))
//       const response = await Axios({
//           ...SummaryApi.getCategory
//       })
//       const { data : responseData } = response

//       if(responseData.success){
//          dispatch(setAllCategory(responseData.data.sort((a, b) => a.name.localeCompare(b.name)))) 
//       }
//   } catch (error) {
      
//   }finally{
//     dispatch(setLoadingCategory(false))
//   }
// }

// const fetchSubCategory = async()=>{
//   try {
//       const response = await Axios({
//           ...SummaryApi.getSubCategory
//       })
//       const { data : responseData } = response

//       if(responseData.success){
//          dispatch(setAllSubCategory(responseData.data.sort((a, b) => a.name.localeCompare(b.name)))) 
//       }
//   } catch (error) {
      
//   }finally{
//   }
// }



useEffect(()=>{
  fetchUser()
  //fetchCategory()
  //fetchSubCategory()
  // fetchCartItem()
},[])

  return (
    <>
    <Header/>
    <main className='min-h-[80vh]'>
     <Outlet/>
    </main>
    <Footer/>
    <Toaster/>
    </>
  )
}

export default App
