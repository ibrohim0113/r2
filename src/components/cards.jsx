import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Input, Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';

export default function IntroDivider() {
  let [idx, setIdx] = useState("")
  let api = "http://37.27.29.18:8001/api/categories"

  let [data, setData] = useState([])

  let [addName, setAddName] = useState("")
  let [addAge, setAddAge] = useState("")
  let [addAbout, setAddAbout] = useState("")

  let [editName, setEditName] = useState("")
  let [editAge, setEditAge] = useState("")
  let [editAbout, setEditAbout] = useState("")

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  async function get() {
    try {
      let { data } = await axios.get(api)
      setData(data.data)
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteUser(id) {

    try {
      await axios.delete(`${api}?id=${id}`)
      get()
    } catch (error) {
      console.error(error);
    }
  }

  async function hendelSubmit(e) {
    e.preventDefault()
    let newUser = {
      name: addName,
      age: addAge,
      about: addAbout
    }
    try {
      await axios.post(api, newUser)
      get()
      setIsModalOpen(false)
      setAddName("")
      setAddAge("")
      setAddAbout("")

    } catch (error) {
      console.error(error);
    }
  }



  useEffect(() => {
    get()
  }, [])



  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);


  function ddd(id) {
    setIsModalOpenEdit(true)
    setIdx(id.id)
    setEditName(id.name) 
  }

  async function editSubmit(e) {
    e.preventDefault()
    let editUser = {
      id: idx,
      name: editName
    }
    try {
      await axios.put(api, editUser)
      get()

      setIsModalOpenEdit(false)

      setEditName("")
      setEditAge("")
      setEditAbout("")
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <>
      <div>
        <div>
          <Button className='ml-[40px] mt-10' type="primary" onClick={showModal}>
            Open Modal
          </Button>
          <Modal
            title="Add New User"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <form onSubmit={hendelSubmit} >
              <Input
                placeholder="User Name..."
                name="name"
                onChange={(e) => setAddName(e.target.value)}
                value={addName}
              />
              <div className='mt-[15px] mb-[15px]'>
                <Input name='Age' placeholder='User Age'
                  onChange={(e) => setAddAge(e.target.value)}
                  value={addAge} />
              </div>
              <TextArea name='about' rows={4} placeholder="User About..."
                value={addAbout}
                onChange={(e) => setAddAbout(e.target.value)} />
              <Button htmlType="submit" type="primary" className="mt-4">
                Add
              </Button>
              <div className='absolute left-80  top-[300px] z-10 bg-white w-[200px] h-10'>
              </div>
            </form>
          </Modal>
        </div>
        <div className='my-10 ml-[180px]  flex gap-[30px] flex-wrap '>
          {data.map((el) => {
            return (
              <Card Card variant="outlined" sx={{ maxWidth: 360 }
              }>
                <Box sx={{ p: 2 }}>
                  <Stack
                    direction="row"
                    sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      {el.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      $4.50
                    </Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {el.about ? el.about : "Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall."}
                  </Typography>
                </Box>
                <Divider />
                <Box sx={{ p: 2 }}>
                  <Typography gutterBottom variant="body2">
                    Select type
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <Chip onClick={() => deleteUser(el.id)} label="Delete" size="small" color='error' />


                    <Chip onClick={() => ddd(el)} label="Edit" size="small" color='info' />
                    <Modal
                      title="Edit User"
                      open={isModalOpenEdit}
                      onCancel={() => setIsModalOpenEdit(false)}
                      footer={null}
                    >
                      <form onSubmit={editSubmit}>
                        <Input
                          placeholder="User Name..."
                          onChange={(e) => setEditName(e.target.value)}
                          value={editName}
                        />

                        <div className='mt-[15px] mb-[15px]'>
                          <Input
                            placeholder='User Age'
                            onChange={(e) => setEditAge(e.target.value)}
                            value={editAge}
                          />
                        </div>

                        <TextArea
                          rows={4}
                          placeholder="User About..."
                          value={editAbout}
                          onChange={(e) => setEditAbout(e.target.value)}
                        />

                        <Button htmlType="submit" type="primary" className="mt-4">
                          Save
                        </Button>
                      </form>
                    </Modal>
                  </Stack>
                </Box>
              </Card >
            )
          })
          }
        </div>
      </div>
    </>)
}