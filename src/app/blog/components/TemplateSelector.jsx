"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function TemplateSelector({ onSelect }) {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  
  const templates = [
    {
      id: 1,
      name: "Estándar",
      description: "Diseño clásico con imagen destacada y contenido estructurado para artículos informativos.",
      image: "/img/template1-preview.jpg"
    },
    {
      id: 2,
      name: "Moderna",
      description: "Diseño con imagen lateral y estilo visual elegante. Ideal para contenido editorial.",
      image: "/img/template2-preview.jpg"
    },
    {
      id: 3,
      name: "Visual",
      description: "Enfoque en imágenes y secciones personalizables para artículos con contenido multimedia.",
      image: "/img/template3-preview.jpg"
    },
    {
      id: 4,
      name: "Compacta",
      description: "Formato directo con puntos clave destacados. Perfecto para guías prácticas.",
      image: "/img/template4-preview.jpg"
    }
  ];
  
  const handleSelect = (templateId) => {
    setSelectedTemplate(templateId);
  };
  
  const handleConfirmSelection = () => {
    if (selectedTemplate) {
      onSelect(selectedTemplate);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {templates.map((template) => (
          <div 
            key={template.id}
            className={`border ${selectedTemplate === template.id ? 'border-[#2694e7] ring-2 ring-blue-200' : 'border-gray-200'} rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-200`}
            onClick={() => handleSelect(template.id)}
          >
            <div className="relative h-40 bg-gray-100">
              {template.image ? (
                <Image 
                  src={template.image} 
                  alt={`Vista previa de plantilla ${template.name}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="opacity-90"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Vista previa no disponible
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="flex items-center mb-2">
                <div className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center ${selectedTemplate === template.id ? 'bg-[#2694e7]' : 'border border-gray-300'}`}>
                  {selectedTemplate === template.id && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <h3 className="font-semibold">Plantilla {template.name}</h3>
              </div>
              <p className="text-sm text-gray-600">{template.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-end">
        <button
          onClick={handleConfirmSelection}
          disabled={!selectedTemplate}
          className={`px-6 py-2 rounded-md ${
            selectedTemplate 
              ? 'bg-[#2694e7] text-white hover:bg-blue-700' 
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          } transition-colors`}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}