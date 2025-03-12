import React from 'react';

/**
 * Componente de entrada reutilizable con soporte para etiquetas, errores y ayudas
 * Se utiliza en los formularios de blog para mantener una apariencia consistente
 */
export default function InputField({ 
  label, 
  value, 
  onChange, 
  type = 'text', 
  placeholder = '', 
  required = false,
  error = null,
  className = '',
  helperText = null,
  maxLength = null,
  rows = null
}) {
  // Si es textarea, usar ese componente en lugar de input
  const isTextarea = rows !== null;

  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {isTextarea ? (
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`w-full border ${error ? 'border-red-300 ring-1 ring-red-300' : 'border-gray-300'} rounded-md shadow-sm p-2`}
          rows={rows}
          maxLength={maxLength}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          maxLength={maxLength}
          className={`w-full border ${error ? 'border-red-300 ring-1 ring-red-300' : 'border-gray-300'} rounded-md shadow-sm p-2`}
        />
      )}
      
      {error && (
        <div className="text-red-600 text-sm mt-1 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </div>
      )}
      
      {helperText && !error && (
        <p className="text-gray-500 text-xs mt-1">{helperText}</p>
      )}
    </div>
  );
}