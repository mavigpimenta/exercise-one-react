import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import { NavBar } from './components/NavBar'; 
import { Footer } from './components/Footer'; 
import { PageContent } from './components/PageContent'; 

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchedUsers = [
      { id: 1, name: 'Nicolas' },
      { id: 2, name: 'Queila' },
      { id: 3, name: 'Don' },
      { id: 4, name: 'Trevisan' },
      { id: 5, name: 'Nycollas' },
      { id: 6, name: 'Fabio' },
      { id: 7, name: 'Stati' },
      { id: 8, name: 'Moll' },
    ];
    setUsers(fetchedUsers);
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col w-full">
        <NavBar></NavBar> 
        {/* componente desenvolvido para a navbar da pagina */}
        <PageContent users={users}></PageContent>
        {/* componente desenvolvido para a parte da lista de usuarios */}
        <Footer></Footer>
        {/* componente desenvolvido para o footer da pagina */}
      </div>
    </>
  );
}

export default App
