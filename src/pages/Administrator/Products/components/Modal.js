import { Form, Modal, Upload, Row, Col, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function CustomModal({ open, onOk, onCancel }) {
    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
    return (
        <Modal title="Basic Modal" open={open} onOk={onOk} onCancel={onCancel} width={1024}>
            <Form>
                <Form.Item label="Hình ảnh sản phẩm" valuePropName="fileList" getValueFromEvent={normFile} required>
                    <Upload action="/upload.do">
                        <div>
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                    </Upload>
                    <span>Dung lượng file tối đa 5MB, định dạng:.JPG, .JPEG, .PNG, .SVG</span>
                </Form.Item>
                <Form.Item label="Video sản phẩm" valuePropName="fileList" getValueFromEvent={normFile} required>
                    <Upload action="/upload.do">
                        <div>
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                    </Upload>
                    <ul>
                        <li>Kích thước tối đa 30Mb, độ phân giải không vượt quá 1280x1280px</li>
                        <li>Độ dài: 10s - 60s</li>
                        <li>Định dạng: MP4 (không hỗ trợ xp9)</li>
                        <li>Lưu ý: Sản phẩm có thể hiển thị trong khi video đang được xử lý. Video sẽ tự động hiển thị sau khi đã xử lí thành công</li>
                    </ul>
                </Form.Item>
            </Form>
            <Form layout="vertical">
                <Form.Item label="Họ tên" required>
                    <Input placeholder="Nhập họ tên" />
                </Form.Item>
                <Row gutter={30}>
                    <Col span={12}>
                        <Form.Item label="Họ tên" required>
                            <Input placeholder="Nhập họ tên" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Số điện thoại" required>
                            <Input placeholder="Nhập số điện thoại" />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
}

export default CustomModal;
