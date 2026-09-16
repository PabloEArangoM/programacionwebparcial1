import { useState } from 'react'
import './App.css'

function App() {
  const [tareas, setTareas] = useState([])
  const [texto, setTexto] = useState('')

  const agregarTarea = (e) => {
    e.preventDefault()
    const textoLimpio = texto.trim()
    if (textoLimpio === '') return

    const nuevaTarea = {
      id: Date.now(),
      texto: textoLimpio,
      completada: false,
    }

    setTareas([...tareas, nuevaTarea])
    setTexto('')
  }

  const marcarTerminada = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    )
  }

  const borrarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id))
  }

  const totalPendientes = tareas.filter((t) => !t.completada).length

  return (
    <div className="app">
      <div className="card">
        <h1>📝 Lista de Tareas</h1>

        <form className="formulario" onSubmit={agregarTarea}>
          <input
            type="text"
            placeholder="Escribe una nueva tarea..."
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
          <button type="submit">Agregar</button>
        </form>

        {tareas.length === 0 ? (
          <p className="vacio">No hay tareas todavía. ¡Agrega una! 🚀</p>
        ) : (
          <ul className="lista-tareas">
            {tareas.map((tarea) => (
              <li key={tarea.id} className={tarea.completada ? 'completada' : ''}>
                <label>
                  <input
                    type="checkbox"
                    checked={tarea.completada}
                    onChange={() => marcarTerminada(tarea.id)}
                  />
                  <span>{tarea.texto}</span>
                </label>
                <button
                  className="borrar"
                  onClick={() => borrarTarea(tarea.id)}
                  aria-label="Borrar tarea"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}

        {tareas.length > 0 && (
          <p className="contador">
            {totalPendientes} tarea{totalPendientes !== 1 ? 's' : ''} pendiente
            {totalPendientes !== 1 ? 's' : ''}
          </p>
        )}
      </div>
    </div>
  )
}

export default App
