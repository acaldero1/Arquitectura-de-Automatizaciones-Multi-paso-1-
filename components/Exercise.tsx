import React, { useState } from 'react';
import { MiniExercise } from '../types';
import { HelpCircle, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

interface ExerciseProps {
  exercise: MiniExercise;
}

export const Exercise: React.FC<ExerciseProps> = ({ exercise }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-8 bg-white rounded-lg border-l-4 border-[#6FBF9C] shadow-sm overflow-hidden">
      <div className="p-5">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-[#F4F6F5] rounded-full text-[#1F4D3F]">
            <HelpCircle size={20} />
          </div>
          <div>
            <h4 className="font-bold text-[#0F2A24] text-lg mb-1">Ejercicio Rápido</h4>
            <p className="text-gray-700 italic">{exercise.prompt}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-[#F4F6F5] px-5 py-3 border-t border-gray-100">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-[#1F4D3F] font-semibold text-sm hover:text-[#0F2A24] transition-colors"
        >
          <span>{isOpen ? 'Ocultar Respuesta' : 'Ver Respuesta Sugerida'}</span>
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        {isOpen && (
          <div className="mt-4 pb-2 animate-fadeIn">
            <div className="flex items-start gap-2 text-[#0F2A24]">
              <CheckCircle2 size={18} className="text-[#6FBF9C] mt-1 flex-shrink-0" />
              <div className="text-sm">
                {Array.isArray(exercise.expected_answer) ? (
                  <ul className="list-disc pl-4 space-y-1">
                    {exercise.expected_answer.map((ans, i) => (
                      <li key={i}>{ans}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{exercise.expected_answer}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};