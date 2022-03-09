import { useState } from 'react';
import './App.css';
import './components/card/tailwind.css'
import useClickOutSide from './components/hook/useClickOutSide';
import Form from './components/form/Form';
import SidebarMenu from './components/SidebarMenu';
import Dropdown from './components/youtube/Dropdown';
import TextareaAutoResize from './components/youtube/TextareaAutoResize';
import MovieSearchApp from './components/MovieSearchApp';
// https://picsum.photos/v2/list
// import CardList from './components/card/CardList';
// import CardTailwind from './components/card/CardTailwind';
function App() {

  return (
    <div>  
      <MovieSearchApp></MovieSearchApp>
    </div>
  );
}

export default App;

{/* <CardList>
  <CardTailwind primary></CardTailwind>
</CardList> */}



// function App() {
//   const {show, setShow, nodeRef} = useClickOutSide();
//   return (
//     <div>  
//     <button 
//       className='inline-block m-3 p-3 rounded-lg text-white bg-green-400'
//       onClick={() => setShow(true)}  
//     >show menu</button>
//       <SidebarMenu show={show} ref={nodeRef}></SidebarMenu>
//       <Dropdown></Dropdown>
//     </div>
//   );
// }
