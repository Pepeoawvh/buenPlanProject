import React from 'react';
import TipTapEditor from '@/app/blog/components/TipTapEditor';
import InputField from './InputField';

/**
 * Componente para manejar una sección del formulario visual de blog
 * Permite añadir título, contenido, imagen y pie de foto para cada sección
 */
const SectionField = ({ section, index, updateSectionField, removeSection }) => (
  <div className="border p-4 rounded-md mb-4 bg-gray-50">
    <div className="flex justify-between items-center mb-3">
      <h4 className="font-medium">Sección {index + 1}</h4>
      <button
        type="button"
        onClick={() => removeSection(index)}
        className="text-sm text-red-600 hover:text-red-800"
      >
        Eliminar
      </button>
    </div>
    
    <div className="mb-3">
      <InputField
        label="Título de la sección"
        value={section.title || ''}
        onChange={(e) => updateSectionField(index, 'title', e.target.value)}
        placeholder="Ej: Beneficios de los planes de salud"
      />
    </div>
    
    <div className="mb-3">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Contenido
      </label>
      <div className="border border-gray-300 rounded-md overflow-hidden">
        <TipTapEditor
          value={section.content || ''}
          onChange={(value) => updateSectionField(index, 'content', value)}
          placeholder="Escribe el contenido de esta sección..."
        />
      </div>
    </div>
    
    <div className="mb-3">
      <InputField
        label="URL de la imagen (opcional)"
        value={section.imageUrl || ''}
        onChange={(e) => updateSectionField(index, 'imageUrl', e.target.value)}
        placeholder="https://ejemplo.com/imagen.jpg"
      />
    </div>
    
    <div className="mb-1">
      <InputField
        label="Pie de imagen (opcional)"
        value={section.imageCaption || ''}
        onChange={(e) => updateSectionField(index, 'imageCaption', e.target.value)}
        placeholder="Descripción o crédito de la imagen"
      />
    </div>
  </div>
);

export default SectionField;