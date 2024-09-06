import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import { HooksAppComponent } from './components/HooksAppComponent'
import { CounterApp } from './components/useState/CounterApp'
import { CounterWithCustomHook } from './components/useState/CounterWithCustomHook'
import { SimpleForm } from './components/useEffect/SimpleForm'
import { FormWithCustomHook } from './components/useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './components/examples/MultipleCustomHooks'
import { FocusScreen } from './components/useRef/FocusScreen'
import { Memorize } from './components/memos/Memorize'
import { MemoHook } from './components/memos/MemoHook'
import { CallbackHook } from './components/memos/CallbackHook'
import { Padre } from './components/07-tarea-memo/Padre'
import { TodoApp } from './components/useReducer/TodoApp'
import { MainAppComponent } from './components/useContext/MainAppComponent'


//import './components/useReducer/intro-reducer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MainAppComponent />
    </BrowserRouter>
  </StrictMode>,
)
