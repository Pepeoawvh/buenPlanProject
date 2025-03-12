import React, { useState, useEffect } from 'react';
import TipTapEditor from '@/app/blog/components/TipTapEditor';
import InputField from './InputField';
import SectionField from './SectionField';

export default function BlogFormVisual({ 
  formData, 
  updateFormData, 
  onSubmit, 
  isSubmitting, 
  onBack,
  isEditing = false 
}) {
  const [validationErrors, setValidationErrors] = useState({});

  // Asegurar que existe el array de secciones
  useEffect(() => {
    if (!Array.isArray(formData.sections)) {
      updateFormData('sections', [{ title: '', content: '', imageUrl: '', imageCaption: '' }]);
    }
  }, [formData.sections, updateFormData]);

  // Función para verificar si el HTML de TipTap está vacío
  const isEditorEmpty = (content) => {
    if (!content) return true;
    const cleanHTML = content.replace(/<[^>]*>/g, '').trim();
    return cleanHTML === '' || content.trim() === '<p></p>';
  };

  // Validación personalizada antes de enviar el formulario
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const errors = {};
    
    // Validación del título
    if (!formData.title?.trim()) {
      errors.title = "El título es obligatorio";
    }
    
    // Verificar si hay al menos una sección completa (título y contenido)
    const sections = formData.sections || [];
    const hasValidSection = sections.some(section => {
      const titleValid = section.title?.trim();
      const contentValid = section.content && 
                         section.content.trim() !== '' && 
                         section.content.trim() !== '<p></p>';
      return titleValid && contentValid;
    });
    
    // Si no hay secciones válidas, verificar contenido general
    if (!hasValidSection) {
      // Si no hay contenido general, mostrar error
      if (isEditorEmpty(formData.content)) {
        errors.content = "Debes incluir al menos una sección con título y contenido, o proporcionar una introducción";
      }
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
    
    // Asignar ID de plantilla explícitamente
    cleanedFormData.templateId = 3;
    
    onSubmit(cleanedFormData);
  };
  
  // Función para actualizar un campo de sección
  const updateSectionField = (index, field, value) => {
    const updated = [...(formData.sections || [])];
    updated[index] = {...updated[index], [field]: value};
    updateFormData('sections', updated);
  };

  // Función para eliminar una sección
  const removeSection = (index) => {
    const updated = [...(formData.sections || [])];
    updated.splice(index, 1);
    updateFormData('sections', updated);
  };

  // Componente para mostrar alertas de error
  const ErrorAlert = ({ error }) => (
    <div className="text-red-600 text-sm mt-1 flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
      {error}
    </div>
  );

  return (
    <form onSubmit={handleFormSubmit} className="space-y-6 text-black">
      <div>
        <h2 className="text-xl font-semibold mb-1">
          {isEditing ? 'Editar artículo' : '2. Completa la información del artículo'}
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Plantilla Visual: Organizada por secciones y con contenido visual.
        </p>
      </div>

      {/* CONSEJOS PARA LA PLANTILLA VISUAL */}
      <div className="bg-amber-50 p-4 mb-6 rounded-md border border-amber-200">
        <div className="flex items-start">
          <svg className="h-5 w-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div>
            <h4 className="font-medium text-amber-800 text-sm">Estructura recomendada para tu artículo:</h4>
            <ul className="list-disc pl-5 mt-1 text-xs text-amber-700 space-y-1">
              <li>Comienza con una introducción general</li>
              <li>Agrega secciones con títulos específicos</li>
              <li>Finaliza con una conclusión y temas relacionados</li>
              <li>Los campos marcados con * son obligatorios</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* TÍTULO */}
      <InputField
        label="Título *"
        value={formData.title || ''}
        onChange={(e) => {
          updateFormData('title', e.target.value);
          if (validationErrors.title) {
            const newErrors = {...validationErrors};
            delete newErrors.title;
            setValidationErrors(newErrors);
          }
        }}
        placeholder="Título principal del artículo"
        required
        error={validationErrors.title}
      />
      
      {/* SUBTÍTULO */}
      <InputField
        label="Subtítulo"
        value={formData.subtitle || ''}
        onChange={(e) => updateFormData('subtitle', e.target.value)}
        placeholder="Breve descripción o resumen del artículo"
      />
      
      {/* URL DE LA IMAGEN */}
      <InputField
        label="URL de la imagen principal"
        value={formData.imageUrl || ''}
        onChange={(e) => updateFormData('imageUrl', e.target.value)}
        placeholder="https://ejemplo.com/imagen.jpg"
      />
      <p className="text-xs text-gray-500 mt-1">URL de una imagen ya alojada en un servidor</p>
      
      {/* PIE DE FOTO */}
      <InputField
        label="Pie de foto"
        value={formData.imageCaption || ''}
        onChange={(e) => updateFormData('imageCaption', e.target.value)}
        placeholder="Descripción o crédito de la imagen"
      />
      
      {/* INTRODUCCIÓN */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Introducción *
          <span className="ml-1 text-xs font-normal text-gray-500">
            (Párrafo inicial que presenta el tema)
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
            placeholder="Escribe la introducción de tu artículo aquí..."
          />
        </div>
        <ErrorAlert error={validationErrors.content} />
      </div>
      
      {/* SECCIONES CON TÍTULO */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Secciones
            <span className="ml-1 text-xs text-rose-500">*</span>
          </label>
          <button 
            type="button"
            onClick={() => updateFormData('sections', [
              ...(formData.sections || []),
              { title: '', content: '', imageUrl: '', imageCaption: '' }
            ])}
            className="text-sm text-[#2694e7] hover:underline"
          >
            + Agregar sección
          </button>
        </div>
        
        {(formData.sections || []).map((section, index) => (
          <SectionField
            key={index}
            section={section}
            index={index}
            updateSectionField={updateSectionField}
            removeSection={removeSection}
          />
        ))}
        
        {/* Mensaje de ayuda sobre secciones */}
        <div className="bg-green-50 border border-green-200 p-3 rounded-md mt-2 mb-4">
          <div className="flex items-center">
            <svg className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-green-700">
              <strong>Consejo:</strong> Para publicar, asegúrate de que cada sección tenga título y contenido, o proporciona una introducción.
            </p>
          </div>
        </div>
      </div>
      
      {/* CONCLUSIÓN */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Conclusión
          <span className="ml-1 text-xs font-normal text-gray-500">
            (Resumen final o llamado a la acción)
          </span>
        </label>
        <div className="border border-gray-300 rounded-md overflow-hidden">
          <TipTapEditor 
            value={formData.conclusion || ''}
            onChange={(value) => updateFormData('conclusion', value)}
            placeholder="Escribe una conclusión para tu artículo..."
          />
        </div>
      </div>
      
      {/* TEMAS RELACIONADOS */}
      <InputField
        label="Temas relacionados"
        value={formData.relatedTopics || ''}
        onChange={(e) => updateFormData('relatedTopics', e.target.value)}
        placeholder="Ej: Isapres, Seguros de Salud, Planes Familiares (separados por comas)"
      />
      
      {/* BOTÓN DE VERIFICACIÓN */}
      <div className="mt-2 mb-4">
        <button
          type="button"
          onClick={() => {
            // Verificar si hay secciones válidas
            const hasValidSections = formData.sections?.some(section => 
              section.title?.trim() && 
              !isEditorEmpty(section.content)
            );
            
            // Verificar si hay contenido general
            const hasGeneralContent = !isEditorEmpty(formData.content);
            
            if (hasValidSections || hasGeneralContent) {
              alert("✅ La información de tu artículo está completa. Puedes publicarlo.");
            } else {
              alert("❌ Debes completar al menos una sección con título y contenido, o proporcionar una introducción.");
            }
          }}
          className="text-blue-600 text-sm hover:underline flex items-center"
        >
          <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Verificar si el artículo está completo
        </button>
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