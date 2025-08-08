import React from 'react' 

import Navbar from './componets/Navbar' ;
import CreateSnippet from './componets/CreateSnippet';

const App = () => {
  return (
     
    <main className='w-screen h-screen bg-black text-white container '>
      <Navbar/>
      <CreateSnippet/>
    </main>
     
  )
}

export default App
