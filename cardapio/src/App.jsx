import Hashtaurante from './assets/hashtaurante.jpeg'
import './App.css'
import { Navegacao } from './Navegacao'

export function App(){
  return <>
            <img src={Hashtaurante} alt="" className='capa'/> 
            <Navegacao/>
        </>
}