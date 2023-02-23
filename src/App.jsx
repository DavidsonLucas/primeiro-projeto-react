import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Container, TodaALista, Input, Button, Space1, Space2, Space3, Trach, Chak, Baise, Space4} from './styles.js'

function App() {
  // Sintaxe JSX mesturar html com JavaScript
  // Código em Javacript

  const [list, setList] = useState([]);
  const [task, setTask] = useState('');

  function inputMudou(event) {
    setTask(event.target.value)

  }

  function buton() {
    if  (task) {
    setList([...list, { id: uuid(), task,finished:false }])
    }
  }

  function button2(event) {
    if (event.key === 'Enter') {
      setList([...list, { id: uuid(), task, finished: false }])

    }
  }

  function finalizarTarefa(id) {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: true } : item
    ))

    setList(newList)
  }

  function delet(id) {
    const newlist = list.filter(item => item.id !== id)

    setList(newlist)
  }

  // REtorna código HTML
  return (
    <Container>
      <TodaALista>

        <Space1>
          <Input onChange={inputMudou} placeholder="O que tenho para fazer..." onKeyDown={button2} />
          <Button onClick={buton} >Adicionar</Button>
        </Space1>

        <Space2>
          <ul>
            {list.length > 0 ? (
              list.map(item => (
                <Space3 isFiniched={item.finished} key={item.id}>
                  <Chak onClick={() => finalizarTarefa(item.id)} />
                  <li>{item.task}</li>
                  <Trach onClick={() => delet(item.id)} />
                </Space3>
              ))) : (
              <Space4>
                <Baise />
                <h3>Adicionar novos itens a lista ... </h3>
              </Space4> 
            )
            }
          </ul>
        </Space2>

      </TodaALista>
    </Container>

  )
}

export default App
