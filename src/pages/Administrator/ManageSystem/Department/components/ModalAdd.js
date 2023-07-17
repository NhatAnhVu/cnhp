import React, { useState } from 'react';
import { Button, Modal } from 'antd';

function ModalAdd({ open, onOk, onCancel }) {
    return (
        <Modal title="Basic Modal" open={open} onOk={onOk} onCancel={onCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    );
}

export default ModalAdd;
