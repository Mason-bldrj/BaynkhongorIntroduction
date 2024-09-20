import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const Editor = dynamic(
          () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
          { ssr: false }
        );
const RichTextExample: React.FC<{ description: (data: any) => void }> = ({
  description,
}) => {
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty() // Initialize editor state
  );

  useEffect(() => {
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const htmlContent = draftToHtml(rawContentState);

    // Pass the HTML content to the parent component's state
    description((prevData: any) => ({
      ...prevData,
      description: htmlContent,
    }));
  }, [editorState, description]);

  const onEditorStateChange = (newEditorState: EditorState): void => {
    setEditorState(newEditorState);
  };

  const handlePastedText = (text: string) => {
    // Allow pasted text to be inserted
    return false; // Returning true allows the paste
  };

  return (
    <div className="h-fit border">
      <Editor
        editorState={editorState} // Ensure this is correctly typed
        onEditorStateChange={onEditorStateChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        handlePastedText={handlePastedText}
      />
    </div>
  );
};

export default RichTextExample;
