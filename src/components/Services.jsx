import { useEffect, useState, useCallback, useMemo } from 'react'
import { Modal, Button, Select, Switch, Input } from 'antd';
import axios from 'axios';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';

const Services = () => {
    const api = useMemo(() => "http://37.27.29.18:8001/api/to-dos", []);
    const apiImg = useMemo(() => "http://37.27.29.18:8001/images", []);
    const apiCom = useMemo(() => "http://37.27.29.18:8001", []);

    let [data, setData] = useState([])
    const [editModal, setEditModal] = useState(false);
    const [editName, seteditName] = useState("");
    const [editDescription, seteditdescription] = useState("");
    const [editIdx, seteditIdx] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    let navigate = useNavigate()

    const get = useCallback(async () => {
        try {
            let { data } = await axios.get(api)
            setData(data.data)
        } catch (error) {
            console.error(error);
        }
    }, [api]);

    const handleDelete = useCallback(async (id) => {
        try {
            await axios.delete(`${api}?id=${id}`)
            get()
        } catch (error) {
            console.error(error);
        }
    }, [api, get]);

    useEffect(() => {
        get()
    }, [get])

    const showModal = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    const handleOk = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    const handleCancel = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    const onChange = useCallback(async (el) => {
        try {
            await axios.put(`${apiCom}/completed?id=${el}`)
            get()
        } catch (error) {
            console.error(error);
        }
    }, [apiCom, get]);

    const navigetKK = useCallback((id) => {
        navigate(`/Services/product/${id}`)
    }, [navigate]);

    const handleChange = useCallback((value, id, el) => {
        if (value == "delete") {
            let del = window.confirm("Ты точно хочешь удалить?");
            if (del) {
                handleDelete(id);
            }
        }
        if (value == "edit") {
            seteditName(el.name)
            seteditdescription(el.description)
            seteditIdx(el.id)
            setEditModal(true);
        }
        if (value == "info") {
            navigetKK(el.id)
        }
    }, [handleDelete, navigetKK]);

    const editUser = useCallback(async (e) => {
        e.preventDefault();
        const obj = {
            name: editName,
            description: editDescription,
            id: editIdx
        };
        try {
            await axios.put(api, obj);
            setEditModal(false);
            get();
        } catch (error) {
            console.error(error);
        }
    }, [api, editDescription, editIdx, editName, get]);

    const addData = useCallback(async (form) => {
        try {
            await axios.post(api, form)
            get()
        } catch (error) {
            console.error(error);
        }
    }, [api, get]);

    const hendelSubmits = useCallback((e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append("Images", e.target["image"].files[0])
        formData.append("Name", e.target["name"].value)
        formData.append("description", e.target["description"].value)
        addData(formData)
        e.target["name"].value = ""
        e.target["description"].value = ""
    }, [addData]);

    const renderedData = useMemo(() => {
        return data.map((el) => (
            <div key={el.id} className='border w-[300px] rounded-2xl'>
                <div className='h-[250px] overflow-y-auto'>
                    {el.images.map((img) => (
                        <div key={img.id}>
                            <img
                                className='my-[10px] mx-auto w-[200px] h-[200px] object-cover'
                                src={`${apiImg} / ${img.imageName}`}
                            />
                            <button onClick={() => { }}></button>
                        </div>
                    ))}
                </div>
                <div className='p-[20px] pl-[30px] pb-[20px] pr-[30px]'>
                    <h1 className='text-[20px]'>{el.name}</h1>
                    <p className='text-[14px] h-[40px] text-gray-400'>{el.description}</p>
                    {el.isCompleted ? <Button color="cyan" variant="solid">Active</Button> : <Button color="danger" variant="solid">Inactive</Button>}
                </div>
                <div className='pl-[20px] pb-[20px] flex items-center gap-[70px]'>
                    <Select
                        defaultValue="actoins"
                        style={{ width: 120 }}
                        onChange={(value) => handleChange(value, el.id, el)}
                        options={[
                            { value: 'actoins', label: 'Actions' },
                            { value: 'delete', label: 'Delete' },
                            { value: 'edit', label: 'Edit' },
                            { value: 'info', label: 'Info' }
                        ]}
                    />
                    <Switch
                        checked={el.isCompleted}
                        onClick={() => onChange(el.id)}
                    />
                </div>
            </div>
        ));
    }, [data, apiImg, handleChange, onChange]);

    return (
        <>
            <Modal
                title="Add Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <form onSubmit={hendelSubmits} className='rounded-2xl flex flex-col gap-[10px]'>
                    <Input name='name' placeholder="Name" />
                    <Input name='description' placeholder="Description" />
                    <input type="file" name='image' />
                    <Button htmlType="submit" type="primary" className='mt-[10px]'>Add</Button>
                </form>
            </Modal>
            <Button onClick={showModal} className='ml-[100px] mt-[30px]' type="primary">Add New Product <PlusCircleOutlined /></Button>
            <div className='gap-[10px] items-center flex mt-[30px] ml-[100px]'>
                <h1 className='text-[20px]'>Service</h1>
                <div className='h-[20px] w-[1.5px] bg-gray-200 '></div>
                <h1 className='text-[20px]'>product</h1>
            </div>
            <div className='flex ml-[100px] mt-[30px] flex-wrap gap-[20px] mb-[100px]'>
                {renderedData}
                <Modal
                    title="Edit Product"
                    open={editModal}
                    onCancel={() => setEditModal(false)}
                    footer={false}
                >
                    <form onSubmit={editUser} className='flex flex-col gap-[10px]'>
                        <Input
                            name='name'
                            placeholder="Name"
                            value={editName}
                            onChange={(e) => seteditName(e.target.value)} />
                        <Input
                            name='description'
                            placeholder="Description"
                            value={editDescription}
                            onChange={(e) => seteditdescription(e.target.value)} />
                        <Button htmlType="submit" type="primary">Save</Button>
                    </form>
                </Modal>
            </div>
        </>
    )
}

export default Services