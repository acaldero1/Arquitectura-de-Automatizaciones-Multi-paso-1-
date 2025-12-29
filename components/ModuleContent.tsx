import React from 'react';
import { Module } from '../types';
import { VisualFlow } from './VisualFlow';
import { Exercise } from './Exercise';
import { Lightbulb, Briefcase, GitCommit, Layers } from 'lucide-react';

interface ModuleContentProps {
  module: Module;
}

export const ModuleContent: React.FC<ModuleContentProps> = ({ module }) => {
  const isBranchingModule = module.module_id === 'M3';

  return (
    <div className="max-w-3xl mx-auto pb-20 animate-slideIn">
      {/* Header */}
      <header className="mb-8 border-b border-gray-200 pb-6">
        <div className="flex items-center gap-2 text-[#6FBF9C] font-bold text-sm tracking-wider mb-2">
          <span className="px-2 py-1 bg-[#0F2A24] rounded text-white">{module.module_id}</span>
          <span>ARQUITECTURA</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#0F2A24] mb-4">{module.title}</h1>
        <p className="text-xl text-[#1F4D3F] font-medium leading-relaxed">
          {module.key_message}
        </p>
      </header>

      {/* Main Explanation */}
      <section className="mb-10 text-gray-700 leading-relaxed text-lg">
        <p>{module.simple_explanation}</p>
        
        {module.principle && (
            <div className="mt-4 p-4 bg-[#F4F6F5] border-l-4 border-[#1F4D3F] rounded-r">
                <h4 className="font-bold text-[#0F2A24] mb-1 flex items-center gap-2">
                    <Layers size={18} /> Principio Fundamental
                </h4>
                <p className="italic">{module.principle}</p>
            </div>
        )}
      </section>

      {/* Visual Flow Representation */}
      <section className="mb-12">
        <VisualFlow description={module.visual_flow_description} isBranched={isBranchingModule} />
        <p className="text-center text-sm text-gray-500 mt-3">
            Representación visual del flujo arquitectónico
        </p>
      </section>

      {/* Grid for Analogy and Business Example */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {/* Analogy */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-yellow-50 text-yellow-600 rounded-lg">
              <Lightbulb size={24} />
            </div>
            <h3 className="font-bold text-[#0F2A24]">Analogía</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            {module.analogy}
          </p>
        </div>

        {/* Business Example */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <Briefcase size={24} />
            </div>
            <h3 className="font-bold text-[#0F2A24]">Ejemplo Empresarial</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            {module.business_example}
          </p>
        </div>
      </div>

      {/* Best Practices (Specific to M4) */}
      {module.best_practices && (
        <section className="mb-10 bg-[#0F2A24] text-white p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <GitCommit className="text-[#6FBF9C]" />
            Buenas Prácticas
          </h3>
          <ul className="grid sm:grid-cols-2 gap-4">
            {module.best_practices.map((practice, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-gray-200">
                <span className="text-[#6FBF9C] font-bold">•</span>
                {practice}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Case Study (Specific to M5) */}
      {module.case && (
        <section className="mb-10 p-6 border-2 border-[#6FBF9C] rounded-xl bg-[#F4F6F5] relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#6FBF9C] text-[#0F2A24] text-xs font-bold px-3 py-1 rounded-bl-lg">
            CASO INTEGRAL
          </div>
          <h3 className="text-xl font-bold text-[#0F2A24] mb-4">{module.case.title}</h3>
          <div className="mb-4">
            <h4 className="text-sm font-bold text-[#1F4D3F] uppercase tracking-wide mb-2">Pasos del Proceso</h4>
            <ul className="space-y-2">
                {module.case.steps.map((step, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700 bg-white p-2 rounded border border-gray-100">
                        <span className="w-5 h-5 rounded-full bg-[#1F4D3F] text-white flex items-center justify-center text-xs font-bold">{idx + 1}</span>
                        {step}
                    </li>
                ))}
            </ul>
          </div>
          <p className="text-sm text-[#1F4D3F] font-semibold mt-4">
            Resultado Esperado: <span className="font-normal text-gray-700">{module.case.expected_outcome}</span>
          </p>
        </section>
      )}

      {/* Exercise */}
      <Exercise exercise={module.mini_exercise} />
    </div>
  );
};