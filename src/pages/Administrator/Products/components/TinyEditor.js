import { Editor } from '@tinymce/tinymce-react';
import { useState } from 'react';

function TinyEditor({ loading }) {
    const [text, setText] = useState('');
    const [value, setValue] = useState('<p>BlaBLa</p>');

    console.log('value ===>', value);
    console.log('text ===>', text);

    return (
        <Editor
            apiKey="ekjbux3o3ibi4jxd9zz545cyj67o7g2ahlz4skafkt64r1iy"
            onEditorChange={(newValue, editor) => {
                setValue(newValue);
                setText(editor.getContent({ format: 'text' }));
            }}
            value={value}
            loading={true}
        />
    );
}

export default TinyEditor;
