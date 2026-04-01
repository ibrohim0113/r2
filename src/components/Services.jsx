import React, { Component } from 'react';
import axios from 'axios';
import { Modal, Button, Input, Card, Popconfirm, message, Upload, Form } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      api: "http://37.27.29.18:8001/api/to-dos",
      apiImg: "http://37.27.29.18:8001/images/",
      isModalOpen: false,
      editingTodo: null,
      loading: false,
      fileList: []
    };
    this.formRef = React.createRef();
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const res = await axios.get(this.state.api);
      this.setState({ data: res.data.data || res.data });
    } catch (error) {
      message.error("Ошибка загрузки");
    }
  };

  deleteTodo = async (id) => {
    try {
      await axios.delete(`${this.state.api}?id=${id}`);
      message.success("Удалено");
      this.getData();
    } catch (error) {
      message.error("Ошибка удаления");
    }
  };

  onFinish = async (values) => {
    const { editingTodo, api, fileList } = this.state;
    this.setState({ loading: true });

    try {
      let todoId = null;

      if (editingTodo) {
        await axios.put(api, {
          id: editingTodo.id,
          name: values.name,
          description: values.description
        });
        todoId = editingTodo.id;
        message.success("Данные обновлены");
      } else {
        const res = await axios.post(api, values);
        todoId = res.data.data?.id || res.data.id;
        message.success("Создано успешно");
      }

      if (fileList.length > 0 && todoId) {
        const imgData = new FormData();
        imgData.append('Images', fileList[0]);
        await axios.post(`${api}/${todoId}/images`, imgData);
        message.success("Изображение загружено");
      }

      this.handleCancel();
      this.getData();
    } catch (error) {
      message.error("Ошибка операции");
    }
  };

  showModal = (todo = null) => {
    this.setState({ isModalOpen: true, editingTodo: todo, fileList: [] }, () => {
      setTimeout(() => {
        if (todo) {
          this.formRef.current?.setFieldsValue(todo);
        } else {
          this.formRef.current?.resetFields();
        }
      }, 100);
    });
  };

  handleCancel = () => {
    this.setState({ isModalOpen: false, editingTodo: null });
  };

  render() {
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Управление задачами</h1>
            <Button type="primary" icon={<PlusOutlined />} onClick={() => this.showModal()}>
              Добавить
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {this.state.data.map((el) => (
              <Card
                key={el.id}
                cover={
                  <div className="h-40 bg-white flex items-center justify-center overflow-hidden">
                    {el.images?.length > 0 ? (
                      <img src={`${this.state.apiImg}${el.images[0].imageName}`} className="w-full h-full object-cover" alt="" />
                    ) : <span className="text-gray-300">No Image</span>}
                  </div>
                }
                actions={[
                  <EditOutlined key="edit" onClick={() => this.showModal(el)} />,
                  <Popconfirm title="Удалить?" onConfirm={() => this.deleteTodo(el.id)}>
                    <DeleteOutlined key="delete" className="text-red-500" />
                  </Popconfirm>
                ]}
              >
                <Card.Meta title={el.name} description={el.description} />
              </Card>
            ))}
          </div>
        </div>
        <Modal
          title={this.state.editingTodo ? "Редактировать" : "Создать"}
          open={this.state.isModalOpen}
          onCancel={this.handleCancel}
          footer={null}
          destroyOnClose
        >
          <Form ref={this.formRef} layout="vertical" onFinish={this.onFinish}>
            <Form.Item name="name" label="Название" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="description" label="Описание" rules={[{ required: true }]}>
              <Input.TextArea rows={3} />
            </Form.Item>
            <Form.Item label="Картинка">
              <Upload
                beforeUpload={(file) => { this.setState({ fileList: [file] }); return false; }}
                fileList={this.state.fileList}
                onRemove={() => this.setState({ fileList: [] })}
              >
                <Button icon={<UploadOutlined />}>Выбрать файл</Button>
              </Upload>
            </Form.Item>
            <div className="flex justify-end gap-2">
              <Button onClick={this.handleCancel}>Отмена</Button>
              <Button type="primary" htmlType="submit" loading={this.state.loading}>
                {this.state.editingTodo ? "Обновить" : "Создать"}
              </Button>
            </div>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Services;