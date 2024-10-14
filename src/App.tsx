import './App.css'
import Navigation from './components/navigation/Navigation'
import Home from './pages/Home'

function App() {

  return (
    <div className='h-screen min-h-screen flex flex-col'>
      <header>
        <Navigation />
      </header>
      <main className="relative p-2 flex-grow">
        <Home />
      </main>
    </div>
  )
}

export default App