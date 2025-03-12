"use client";

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Underline from '@tiptap/extension-underline';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import React, { useEffect } from 'react';

// Estilos para el editor
const editorStyles = `
  .tiptap-editor {
    border: 1px solid #e2e8f0;
    border-radius: 0.375rem;
    min-height: 200px;
    padding: 1rem;
    background-color: white;
  }

  .tiptap-toolbar {
    display: flex;
    flex-wrap: wrap;
    padding: 0.5rem;
    border: 1px solid #e2e8f0;
    border-bottom: none;
    background-color: #f8fafc;
    border-radius: 0.375rem 0.375rem 0 0;
  }

  .tiptap-toolbar button {
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
    padding: 0.25rem 0.5rem;
    border: 1px solid #e2e8f0;
    border-radius: 0.25rem;
    background-color: white;
    font-size: 0.875rem;
    cursor: pointer;
  }

  .tiptap-toolbar button.is-active {
    background-color: #2694e7;
    color: white;
  }

  .tiptap-editor p {
    margin-bottom: 0.75em;
  }

  .tiptap-editor h1 {
    font-size: 1.75em;
    font-weight: bold;
    margin-bottom: 0.75em;
  }

  .tiptap-editor h2 {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 0.75em;
  }

  .tiptap-editor h3 {
    font-size: 1.25em;
    font-weight: bold;
    margin-bottom: 0.75em;
  }

  .tiptap-editor ul, .tiptap-editor ol {
    padding-left: 1.5em;
    margin-bottom: 0.75em;
  }

  .tiptap-editor ul {
    list-style-type: disc;
  }

  .tiptap-editor ol {
    list-style-type: decimal;
  }

  .tiptap-editor a {
    color: #2694e7;
    text-decoration: underline;
  }

  .tiptap-editor blockquote {
    border-left: 3px solid #e2e8f0;
    padding-left: 1em;
    color: #64748b;
    font-style: italic;
    margin: 1em 0;
  }
`;

const TipTapEditor = ({ value, onChange, placeholder = "Escribe aquí..." }) => {
  // Configurar el editor con extensiones
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          rel: 'noopener noreferrer',
          target: '_blank',
        },
      }),
      Image.configure({
        inline: true,
        allowBase64: true,
      }),
      Underline,
      TextStyle,
      Color,
    ],
    content: value || '',
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'tiptap-editor',
        placeholder: placeholder,
      },
    },
  });

  // Actualizar el contenido cuando value cambie desde props
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || '');
    }
  }, [editor, value]);

  // Si el editor no está listo, mostrar un indicador de carga
  if (!editor) {
    return <div>Cargando editor...</div>;
  }

  // Función para agregar un enlace
  const setLink = () => {
    const url = window.prompt('URL:');
    if (url) {
      editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    } else {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
    }
  };

  return (
    <div className="tiptap-wrapper">
      <style>{editorStyles}</style>
      
      {/* Barra de herramientas */}
      <div className="tiptap-toolbar">
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        >
          H1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        >
          H3
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          Negrita
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          Cursiva
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive('underline') ? 'is-active' : ''}
        >
          Subrayado
        </button>
        <button onClick={setLink} className={editor.isActive('link') ? 'is-active' : ''}>
          Enlace
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          Lista
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
        >
          Numerada
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active' : ''}
        >
          Cita
        </button>
      </div>

      {/* Contenido del editor */}
      <EditorContent editor={editor} />
    </div>
  );
};

export default TipTapEditor;