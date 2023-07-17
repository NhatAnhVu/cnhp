import React from 'react'
import { Card, Col, Form, Input, Row, Select } from "antd"
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import FormItem from 'antd/es/form/FormItem';

const { TextArea } = Input;

const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}
// const handleChange = (value) => {
//   console.log(`selected ${value}`);
// };

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
};
const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

const Posts = () => {
    const [form] = Form.useForm();
    const nameValue = Form.useWatch('name', form);
    return (
        <>
            <Card
                title = "Đăng bài viết"
            >
                 <Form form={form} layout="vertical" autoComplete="off">
                    <FormItem name="name" label="Tiêu đề">
                        <Input placeholder='Nhập tiêu đề'/>
                    </FormItem>
                    <Row flexDirection="column" flexWrap="wrap">
                        <Col span={24}>Hình thu nhỏ</Col>
                        <Col span={24}>Dung lượng file tối đa 1MB, định dạng:... JPEG, .PNG</Col>
                        <Upload {...props}>
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                        </Upload>
                    </Row>
                    <FormItem name="name" label="Tóm tắt">
                        <TextArea rows={4} placeholder="Nhập nội dung" maxLength={6} />
                    </FormItem>
                    <FormItem name="name" label="Nôi dung bài viết">
                        <TextArea rows={4} placeholder="Nhập nội dung" maxLength={6} />
                    </FormItem>
                    <FormItem name="name" label="Thẻ (từ khóa)">
                        <Select
                        mode="tags"
                        style={{
                            width: '100%',
                        }}
                        placeholder="Tags Mode"
                        onChange={handleChange}
                        options={options}
                        />
                    </FormItem>
                    <FormItem>
                        <Button type="submit" style={{background: "var(--btn-primary-color)", color: "#FFF"}}>Đăng bài</Button>
                    </FormItem>
                </Form>
            </Card>
        </>
    )
}

export default Posts