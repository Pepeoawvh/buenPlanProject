import React, { useState } from 'react';
import TipTapEditor from '@/app/blog/components/TipTapEditor';

export default function BlogFormStandard({ 
  formData, 
  updateFormData, 
  onSubmit, 
  isSubmitting, 
  onBack,
  isEditing = false 
}) {
  const [validationErrors, setValidationErrors] = useState({});

  // Función para verificar si el HTML de TipTap está vacío
  const isEditorEmpty = (content) => {
    if (!content) return true;
    const cleanHTML = content.replace(/<[^>]*>/g, '').trim();
    return cleanHTML === '' || content.trim() === '<p></p>';
  };

  // Componente para mostrar alertas de error
  const ErrorAlert = ({ error }) => {
    if (!error) return null;
    
    return (
      <p className="text-red-600 text-sm mt-1 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        {error}
      </p>
    );
  };

  // Validación personalizada antes de enviar el formulario
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const errors = {};
    
    // Validación del título
    if (!formData.title?.trim()) {
      errors.title = "El título es obligatorio";
    }
    
    // Validación del contenido
    if (isEditorEmpty(formData.content)) {
      errors.content = "El contenido del artículo es obligatorio";
    }
    
    // Determinar si hay errores
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      
      // Mostrar mensaje de error general
      alert("Hay campos obligatorios sin completar. Por favor, revisa el formulario.");
      return;
    }
    
    // Si no hay errores, limpiar y enviar
    setValidationErrors({});
    
    // Crear una copia limpia de los datos para enviar
    const cleanedFormData = { ...formData };
    
    // Eliminar propiedades no serializables
    if (cleanedFormData.nativeEvent) delete cleanedFormData.nativeEvent;
    
    onSubmit(cleanedFormData);
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-6 text-black">
      <div>
        <h2 className="text-xl font-semibold mb-1">
          {isEditing ? 'Editar artículo' : '2. Completa la información del artículo'}
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Plantilla Estándar: Ideal para artículos informativos con formato simple.
        </p>
      </div>

      {/* TÍTULO */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Título *
        </label>
        <input 
          type="text" 
          value={formData.title || ''}
          onChange={(e) => {
            updateFormData('title', e.target.value);
            if (validationErrors.title) {
              const newErrors = {...validationErrors};
              delete newErrors.title;
              setValidationErrors(newErrors);
            }
          }}
          className={`w-full border ${validationErrors.title ? 'border-red-300 ring-1 ring-red-300' : 'border-gray-300'} rounded-md shadow-sm p-2`}
          required
          placeholder="Título principal del artículo"
        />
        <ErrorAlert error={validationErrors.title} />
      </div>
      
      {/* SUBTÍTULO */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Subtítulo</label>
        <input 
          type="text" 
          value={formData.subtitle || ''}
          onChange={(e) => updateFormData('subtitle', e.target.value)}
          className="w-full border border-gray-300 rounded-md shadow-sm p-2"
          placeholder="Breve descripción o resumen del artículo"
        />
      </div>
      
      {/* URL DE LA IMAGEN */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          URL de la imagen principal
        </label>
        <input 
          type="url" 
          value={formData.imageUrl || ''}
          onChange={(e) => updateFormData('imageUrl', e.target.value)}
          placeholder="https://ejemplo.com/imagen.jpg"
          className="w-full border border-gray-300 rounded-md shadow-sm p-2" 
        />
        <p className="text-xs text-gray-500 mt-1">URL de una imagen ya alojada en un servidor</p>
      </div>
      
      {/* PIE DE FOTO */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Pie de foto</label>
        <input 
          type="text" 
          value={formData.imageCaption || ''}
          onChange={(e) => updateFormData('imageCaption', e.target.value)}
          className="w-full border border-gray-300 rounded-md shadow-sm p-2"
          placeholder="Descripción o crédito de la imagen"
        />
      </div>
      
      {/* CONTENIDO */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Contenido *
          <span className="ml-1 text-xs font-normal text-gray-500">
            (Utiliza el editor para dar formato al texto)
          </span>
        </label>
        <div className={`border ${validationErrors.content ? 'border-red-300 ring-1 ring-red-300' : 'border-gray-300'} rounded-md overflow-hidden`}>
          <TipTapEditor 
            value={formData.content || ''}
            onChange={(value) => {
              updateFormData('content', value);
              if (validationErrors.content) {
                const newErrors = {...validationErrors};
                delete newErrors.content;
                setValidationErrors(newErrors);
              }
            }}
            placeholder="Escribe el contenido del artículo aquí..."
          />
        </div>
        <ErrorAlert error={validationErrors.content} />
      </div>
      
      {/* CAMPOS SEO */}
      <div className="mb-6 bg-gray-50 p-4 rounded-md border border-gray-200">
        <h3 className="text-sm font-medium text-gray-700 mb-3">SEO (opcional)</h3>
        <div className="mb-3">
          <label className="block text-sm text-gray-600 mb-1">Meta descripción</label>
          <textarea 
            value={formData.metaDescription || ''}
            onChange={(e) => updateFormData('metaDescription', e.target.value)}
            className="w-full border border-gray-300 rounded-md shadow-sm p-2"
            rows={2}
            placeholder="Descripción para buscadores (máx. 160 caracteres)"
            maxLength={160}
          ></textarea>
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Palabras clave</label>
          <input 
            type="text" 
            value={formData.keywords || ''}
            onChange={(e) => updateFormData('keywords', e.target.value)}
            className="w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="isapre, plan de salud, seguro (separadas por comas)"
          />
        </div>
      </div>

      {/* BOTONES DE ACCIÓN */}
      <div className="mt-8 pt-4 flex justify-end gap-4 border-t border-gray-200">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
          disabled={isSubmitting}
        >
          Volver
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-[#2694e7] text-white rounded-md hover:bg-blue-700 transition-colors flex items-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {isEditing ? 'Actualizando...' : 'Publicando...'}
            </>
          ) : (
            isEditing ? 'Actualizar artículo' : 'Publicar artículo'
          )}
        </button>
      </div>
    </form>
  );
}