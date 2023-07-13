import { Form, DatePicker, Row, Col, Input, Button } from 'antd';

function SearchSerial() {
    const [form] = Form.useForm();

    return (
        <Form layout="vertical" form={form}>
            <Row>
                <Col>
                    <Form.Item label="Field A" required tooltip="This is a required field">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item label="DatePicker">
                        <DatePicker />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item label="DatePicker">
                        <DatePicker />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item>
                        <Button>Submit</Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
}

export default SearchSerial;
