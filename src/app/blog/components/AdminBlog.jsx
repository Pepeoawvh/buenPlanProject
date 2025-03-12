"use client";

import React, { useState, useEffect } from 'react';
import { firestoreDB, auth } from '@/app/firebase/config';
import TemplateSelector from './TemplateSelector';
import BlogFormStandard from './BlogFormStandard';
import BlogFormModern from './BlogFormModern';
import BlogFormVisual from './BlogFormVisual';
import BlogFormCompact from './BlogFormCompact';
import { useRouter } from 'next/navigation';
import firebase from 'firebase/compat/app';
import { useAuth } from "../../context/authProvider";

export default function AdminBlog({ postToEdit = null }) {
  const router = useRouter();
  const { currentUser } = useAuth();
  
  const [step, setStep] = useState(postToEdit ? 2 : 1);
  const [selectedTemplate, setSelectedTemplate] = useState(postToEdit ? postToEdit.templateId : null);
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    // Si hay un post para editar, prellenar el formulario con sus datos
    if (postToEdit) {
      // Preparar los datos para que sean seguros para el formulario
      const safePostData = { ...postToEdit };
      
      // Asegurar que relatedResources sea siempre un array
      if (safePostData.relatedResources && !Array.isArray(safePostData.relatedResources)) {
        try {
          if (typeof safePostData.relatedResources === 'string') {
            safePostData.relatedResources = JSON.parse(safePostData.relatedResources);
          }
          if (!Array.isArray(safePostData.relatedResources)) {
            safePostData.relatedResources = [safePostData.relatedResources];
          }
        } catch (e) {
          safePostData.relatedResources = [{ title: '', url: '', description: '' }];
        }
      }
      
      // Asegurar que keyPoints sea siempre un array
      if (safePostData.keyPoints && !Array.isArray(safePostData.keyPoints)) {
        try {
          if (typeof safePostData.keyPoints === 'string') {
            safePostData.keyPoints = JSON.parse(safePostData.keyPoints);
          }
          if (!Array.isArray(safePostData.keyPoints)) {
            safePostData.keyPoints = [safePostData.keyPoints];
          }
        } catch (e) {
          safePostData.keyPoints = [{ title: '', description: '' }];
        }
      }
      
      // Asegurar que sections sea siempre un array (para BlogFormVisual)
      if (safePostData.sections && !Array.isArray(safePostData.sections)) {
        try {
          if (typeof safePostData.sections === 'string') {
            safePostData.sections = JSON.parse(safePostData.sections);
          }
          if (!Array.isArray(safePostData.sections)) {
            safePostData.sections = [safePostData.sections];
          }
        } catch (e) {
          safePostData.sections = [{ title: '', content: '', imageUrl: '' }];
        }
      }
      
      setFormData(safePostData);
      setSelectedTemplate(safePostData.templateId || 1);
      setStep(2); // Saltar directamente al paso de edición
    }
  }, [postToEdit]);

  const handleTemplateSelect = (templateId) => {
    console.log("Template selected:", templateId);
    setSelectedTemplate(templateId);
    setStep(2);
  };

  const handleBack = () => {
    if (postToEdit) {
      // Si estamos editando, volver a la lista de posts
      router.push('/adminbp/blog');
    } else {
      // Si estamos creando, volver a la selección de plantilla
      setStep(1);
    }
  };

  const updateFormData = (key, value) => {
    setFormData(prevData => ({
      ...prevData,
      [key]: value
    }));
  };

  const handleSubmit = async (formEventOrData) => {
    let dataToSave;
    
    // Si lo que recibimos es un evento de formulario, prevenimos el comportamiento por defecto
    if (formEventOrData?.preventDefault) {
      formEventOrData.preventDefault();
      dataToSave = { ...formData };
    } else {
      // Si no, asumimos que recibimos directamente los datos
      dataToSave = { ...formEventOrData };
    }
    
    // Eliminar propiedades que no deberían ir a Firestore
    if (dataToSave.nativeEvent) delete dataToSave.nativeEvent;

    try {
      setError(null);
      setIsSubmitting(true);
      console.log("Saving data:", dataToSave);
      
      // Asegurar que el templateId está presente
      if (!dataToSave.templateId) {
        dataToSave.templateId = selectedTemplate;
      }
      
      // Convertir templateId a número si es string
      dataToSave.templateId = parseInt(dataToSave.templateId, 10) || 1;
      
      // Agregar información de autor y fecha
      if (!postToEdit) { // Si es un nuevo post
        dataToSave.createdAt = firebase.firestore.FieldValue.serverTimestamp();
        dataToSave.author = currentUser.email;
      } else { // Si es edición
        dataToSave.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
        dataToSave.lastEditedBy = currentUser.email;
      }

      // Guardar en Firestore usando nombre de colección 'blogbuenplan'
      if (postToEdit) {
        await firestoreDB.collection('blogbuenplan').doc(postToEdit.id).update(dataToSave);
        setSuccess('¡Artículo actualizado exitosamente!');
        console.log("Post updated successfully!");
      } else {
        await firestoreDB.collection('blogbuenplan').add(dataToSave);
        setSuccess('¡Artículo publicado exitosamente!');
        console.log("Post created successfully!");
        
        // Limpiar formulario después de crear nuevo post
        setFormData({});
      }

      // Opcional: redirigir después de guardar
      setTimeout(() => {
        router.push('/adminbp/blog');
      }, 2000);
    } catch (err) {
      console.error("Error saving post:", err);
      setError('Error al guardar el artículo. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const renderForm = () => {
    console.log("FormData:", JSON.stringify(formData, null, 2));
    switch (selectedTemplate) {
      case 1:
        return <BlogFormStandard formData={formData} updateFormData={updateFormData} onSubmit={handleSubmit} isSubmitting={isSubmitting} isEditing={!!postToEdit} onBack={handleBack} />;
      case 2:
        return <BlogFormModern formData={formData} updateFormData={updateFormData} onSubmit={handleSubmit} isSubmitting={isSubmitting} isEditing={!!postToEdit} onBack={handleBack} />;
      case 3:
        return <BlogFormVisual formData={formData} updateFormData={updateFormData} onSubmit={handleSubmit} isSubmitting={isSubmitting} isEditing={!!postToEdit} onBack={handleBack} />;
      case 4:
        return <BlogFormCompact formData={formData} updateFormData={updateFormData} onSubmit={handleSubmit} isSubmitting={isSubmitting} isEditing={!!postToEdit} onBack={handleBack} />;
      default:
        return <div>Selecciona una plantilla para continuar</div>;
    }
  };

  if (!currentUser) {
    return <div className="text-center p-8">Cargando...</div>;
  }
  
  return (
    <div className="bg-white rounded-lg md:mx-24 shadow-md p-6">
      {step === 1 ? (
        <div>
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Selecciona una plantilla para tu artículo</h1>
          <TemplateSelector onSelect={handleTemplateSelect} />
        </div>
      ) : (
        <div>
          {error && (
            <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 text-red-700">
              {error}
            </div>
          )}
          
          {success && (
            <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 text-green-700">
              {success}
            </div>
          )}
          
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              {postToEdit ? 'Editar artículo' : 'Crear nuevo artículo'}
            </h1>
            <div className="h-1 w-16 bg-[#2694e7] mt-2"></div>
          </div>
          
          {selectedTemplate && (
            <div className="mb-8">
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2694e7] text-white mr-3">
                  1
                </div>
                <div className="text-gray-700">
                  <h3 className="font-medium">Plantilla seleccionada</h3>
                  <p className="text-sm text-gray-500">
                    {selectedTemplate === 1 && "Plantilla Estándar: Para artículos de texto con formato sencillo"}
                    {selectedTemplate === 2 && "Plantilla Moderna: Con imagen destacada lateral y estilo visual"}
                    {selectedTemplate === 3 && "Plantilla Visual: Con secciones personalizables e imágenes"}
                    {selectedTemplate === 4 && "Plantilla Compacta: Para información clara y directa"}
                  </p>
                </div>
                {!postToEdit && (
                  <button
                    onClick={handleBack}
                    className="ml-auto text-blue-600 hover:text-blue-800 text-sm"
                  >
                    Cambiar
                  </button>
                )}
              </div>
            </div>
          )}
          
          {renderForm()}
        </div>
      )}
    </div>
  );
}