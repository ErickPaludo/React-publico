import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
     <div class="container-principal">
        <div class="container-lateral">
            <h1>Container</h1>
            <h1>Container</h1>
        </div>
        <div class="container-central">
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
          <div class="comp-filho">
            <h1>Eu sou o douglas</h1>
          </div>
        </div>
    </div>
   
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
