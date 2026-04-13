import { Button, Input, Modal } from 'antd'
import React, { useReducer, useState } from 'react'

const initialState = {
  data: [
    {
      id: 1,
      name: "Алишер Назаров",
      description: "Frontend разработчик, увлекается React и современным дизайном.",
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alisher"
    },
    {
      id: 2,
      name: "Елена Смирнова",
      description: "Project Manager с опытом работы в крупных IT-проектах.",
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
    },
    {
      id: 3,
      name: "Марк Воронов",
      description: "Backend специалист, мастер Node.js и баз данных PostgreSQL.",
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mark"
    },
    {
      id: 4,
      name: "Сабина Саидова",
      description: "UI/UX дизайнер, создает интуитивно понятные интерфейсы.",
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sabina"
    },
    {
      id: 5,
      name: "Дмитрий Волков",
      description: "QA инженер, знает всё о мануальном и авто-тестировании.",
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dmitry"
    },
    {
      id: 6,
      name: "Анна Кузнецова",
      description: "Специалист по маркетингу и продвижению в социальных сетях.",
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anna"
    },
    {
      id: 7,
      name: "Тимур Рахимов",
      description: "Fullstack разработчик, любит экспериментировать с новыми фреймворками.",
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Timur"
    },
    {
      id: 8,
      name: "Виктория Ли",
      description: "Аналитик данных, превращает скучные цифры в понятные отчеты.",
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Victoria"
    },
    {
      id: 9,
      name: "Артем Белов",
      description: "DevOps инженер, отвечает за стабильность и деплой систем.",
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Artem"
    },
    {
      id: 10,
      name: "Нигина Хакимова",
      description: "Content Creator, пишет тексты, которые цепляют аудиторию.",
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nigina"
    }
  ],
  isModalOpen: false
}
function reducer(state, action) {
  switch (action.key) {
    case "del":
      return {
        ...state,
        data: state.data.filter((el) => el.id !== action.type)
      }

    case "showModal":
      return {
        ...state,
        isModalOpen: true
      }

    case "handleOk":
      return {
        ...state,
        isModalOpen: false
      }

    case "handleCancel":
      return {
        ...state,
        isModalOpen: false
      }

    default:
      return state
  }
}

const Services = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  
  
  return (
    <>
      {state.data.map(user => (
        <div key={user.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
          <img src={user.img} alt={user.name} width={50} height={50} />
          <h2>{user.name}</h2>
          <p>{user.description}</p>
          <Button onClick={() => dispatch({ key: "del", type: user.id })}>
            Удалить
          </Button>
          <Button
            type="primary" onClick={() => dispatch({ key: "showModal" })}>
            Open Modal
          </Button>
        </div>
      ))}
      <Modal
        title="Edit User"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={state.isModalOpen}
        onOk={() => dispatch({ key: "handleOk" })}
        onCancel={() => dispatch({ key: "handleCancel" })}
        footer={[null]}
      >
        <form onSubmit={hendelSubmit}>
          <Input className=''></Input>
          <Input className='mt-3'></Input>
          <Button
            type="primary">Submit</Button>
        </form>
      </Modal>
    </>
  )
}

export default Services