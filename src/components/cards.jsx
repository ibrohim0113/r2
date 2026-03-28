import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Cards = () => {

  let api = "http://37.27.29.18:8001/api/to-dos"
  let apiImages = "http://37.27.29.18:8001/images"

  let [data, setData] = useState([])

  async function get() {
    try {
      let { data } = await axios.get(api)
      setData(data.data)
    } catch (error) {
      console.error(error);
    }
  }

  async function addData(obj) {
    try {
      await axios.post(api, obj)
      get()
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    get()
  }, [])

  let hendelSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData
    formData.append("Images", e.target["image"].files[0])
    formData.append("Name", e.target["name"].value)
    formData.append("description", e.target["description"].value)


    addData(formData)

    e.target["name"].value = ""
    e.target["description"].value = ""

  }

 async function deletes(id) {
  try {
    await axios.delete(`${api}?id=${id}`)
    get()
  } catch (error) {
    console.error(error);
  }
 } 
  return (
    <>
      <div className='bg-blue-950 pb-[100px]'>
        <div className='flex justify-center pt-[30px] pb-[30px]'>
          <form onSubmit={hendelSubmit} className='rounded-2xl flex flex-col gap-[10px] w-[300px] border '>
            <input className='text-white m-4 rounded-2xl  border' name='name' type="text" />
            <input className='text-white m-4 rounded-2xl  border' name='description' type="text" />
            <input className='text-white m-4 rounded-2xl  border' name='image' type="file" />
            <button type='submit' className='text-white m-4 rounded-2xl  bg-gray-300'>submit</button>
          </form>
        </div>
        <div className='flex gap-[100px] flex-wrap'>
          {data.map((el) => {
            return (
              <div className='bg-blue-600 rounded-2xl w-[300px] h-[300px] border'>
                <div>
                  {
                    el.images.map((el) => {
                      return (
                        <img className='hover:opacity-90 rounded-t-2xl w-[300px] h-[180px]' src={`${apiImages}/${el.imageName}`} alt="" />
                      )
                    })
                  }
                </div>
                <div className='pl-[10px]'>
                  <h1 className='text-white'>{el.name}</h1>
                  <h2 className='text-white'>{el.description}</h2>
                  <button onClick={() => deletes(el.id)}>delete</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Cards
