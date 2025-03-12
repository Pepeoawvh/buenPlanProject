import React, { useState } from 'react';
import TipTapEditor from '@/app/blog/components/TipTapEditor';
import TemplateSpecificFields from './TemplateSpecificFields';

export default function BlogForm({ 
  templateId, 
  formData, 
  updateFormData, 
  onSubmit, 
  isSubmitting, 
  onBack,
  isEditing = false 
}) {
  const [validationErrors, setValidationErrors] = useState({});

  // Función para mostrar descripciones de las plantillas
  const getTemplateDescription = () => {
    switch(templateId) {
      case 1:
        return "Plantilla Estándar: Ideal para artículos informativos con formato simple.";
      case 2:
        return "Plantilla Moderna: Con imagen lateral y elementos destacados.";
      case 3:
        return "Plantilla Visual: Organizada por secciones y con contenido visual.";
      case 4:
        return "Plantilla Compacta: Con puntos clave destacados al inicio.";
      default:
        return "";
    }
  };

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
    
    // Validación del título para todas las plantillas
    if (!formData.title?.trim()) {
      errors.title = "El título es obligatorio";
    }
    
    // Validación específica por plantilla
    if (templateId === 3) {
      // Para plantilla 3: validar secciones o contenido general
      const sections = formData.sections || [];
      
      // Verificar si hay al menos una sección completa (título y contenido)
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
          errors.content = "Debes incluir al menos una sección con título y contenido, o proporcionar un contenido general";
        }
      }
    } else {
      // Para plantillas 1, 2 y 4: validar el contenido general
      if (isEditorEmpty(formData.content)) {
        errors.content = "El contenido del artículo es obligatorio";
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
    // Esto es crucial para evitar el error de Firestore con objetos no serializables
    const cleanedFormData = { ...formData };
    
    // Asegurarse de que no haya propiedades de eventos ni otros objetos no serializables
    // Aquí estamos eliminando específicamente nativeEvent que podría estar causando el problema
    if (cleanedFormData.nativeEvent) delete cleanedFormData.nativeEvent;
    
    // Pasar solo los datos limpios, no el evento completo
    onSubmit(cleanedFormData);
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

  return (
    <form onSubmit={handleFormSubmit} className="space-y-6 text-black">
      <div>
        <h2 className="text-xl font-semibold mb-1">
          {isEditing ? 'Editar artículo' : '2. Completa la información del artículo'}
        </h2>
        <p className="text-sm text-gray-600 mb-6">{getTemplateDescription()}</p>
      </div>

      {/* Consejos e indicaciones para todas las plantillas arriba */}
      {templateId === 3 && (
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
      )}
      
      {/* 1. TÍTULO */}
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
      
      {/* 2. SUBTÍTULO */}
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
      
      {/* 3. URL DE LA IMAGEN */}
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
      
      {/* 4. PIE DE FOTO */}
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
      
      {/* 5. INTRODUCCIÓN (para plantilla 3) o CONTENIDO (para plantillas 1, 2 y 4) */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {templateId === 3 ? 'Introducción *' : 'Contenido *'}
          <span className="ml-1 text-xs font-normal text-gray-500">
            {templateId === 3 
              ? '(Párrafo inicial que presenta el tema)' 
              : '(Utiliza el editor para dar formato al texto)'}
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
            placeholder={templateId === 3 
              ? "Escribe la introducción de tu artículo aquí..." 
              : "Escribe el contenido del artículo aquí..."}
          />
        </div>
        <ErrorAlert error={validationErrors.content} />
      </div>
      
      {/* 6. SECCIONES CON TÍTULO (solo para plantilla 3) */}
      {templateId === 3 && (
        <div className="mb-6">
          <TemplateSpecificFields 
            templateId={templateId} 
            formData={formData}
            updateFormData={updateFormData}
            validationErrors={validationErrors}
            setValidationErrors={setValidationErrors}
          />
        </div>
      )}

      {/* 7. CAMPOS ESPECÍFICOS PARA PLANTILLAS 1, 2 y 4 */}
      {(templateId === 1 || templateId === 2 || templateId === 4) && (
        <div className="mb-6">
          <TemplateSpecificFields 
            templateId={templateId} 
            formData={formData}
            updateFormData={updateFormData}
            validationErrors={validationErrors}
            setValidationErrors={setValidationErrors}
          />
        </div>
      )}
      
      {/* 8. CONCLUSIÓN (solo para plantilla 3) */}
      {templateId === 3 && (
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
      )}
      
      {/* 9. TEMAS RELACIONADOS (solo para plantilla 3) */}
      {templateId === 3 && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Temas relacionados
            <span className="ml-1 text-xs font-normal text-gray-500">
              (Otros temas que puedan interesar al lector)
            </span>
          </label>
          <input
            type="text"
            value={formData.relatedTopics || ''}
            onChange={(e) => updateFormData('relatedTopics', e.target.value)}
            className="w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Ej: Isapres, Seguros de Salud, Planes Familiares (separados por comas)"
          />
        </div>
      )}
      
      {/* Botón de verificación para Template 3 */}
      {templateId === 3 && (
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
                alert("❌ Debes completar al menos una sección con título y contenido, o proporcionar un contenido general para el artículo.");
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
      )}

      {/* 10. CAMPOS SEO (para todas las plantillas) */}
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

      {/* Botones de acción */}
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