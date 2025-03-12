import React, { useState } from 'react';
import BlogFormStandard from './BlogFormStandard';
import BlogFormModern from './BlogFormModern';
import BlogFormVisual from './BlogFormVisual';
import BlogFormCompact from './BlogFormCompact';

export default function BlogFormManager({ 
  templateId, 
  formData, 
  updateFormData, 
  onSubmit, 
  isSubmitting, 
  onBack,
  isEditing = false 
}) {
  // Renderizar el formulario específico según la plantilla seleccionada
  const renderTemplateForm = () => {
    switch (templateId) {
      case 1:
        return (
          <BlogFormStandard
            formData={formData}
            updateFormData={updateFormData}
            onSubmit={onSubmit}
            isSubmitting={isSubmitting}
            onBack={onBack}
            isEditing={isEditing}
          />
        );
      case 2:
        return (
          <BlogFormModern
            formData={formData}
            updateFormData={updateFormData}
            onSubmit={onSubmit}
            isSubmitting={isSubmitting}
            onBack={onBack}
            isEditing={isEditing}
          />
        );
      case 3:
        return (
          <BlogFormVisual
            formData={formData}
            updateFormData={updateFormData}
            onSubmit={onSubmit}
            isSubmitting={isSubmitting}
            onBack={onBack}
            isEditing={isEditing}
          />
        );
      case 4:
        return (
          <BlogFormCompact
            formData={formData}
            updateFormData={updateFormData}
            onSubmit={onSubmit}
            isSubmitting={isSubmitting}
            onBack={onBack}
            isEditing={isEditing}
          />
        );
      default:
        return <div>Selecciona una plantilla para continuar</div>;
    }
  };

  return (
    <div className="space-y-6">
      {renderTemplateForm()}
    </div>
  );
}