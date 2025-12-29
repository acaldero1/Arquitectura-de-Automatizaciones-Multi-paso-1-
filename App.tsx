import React, { useState } from 'react';
import { content } from './data/content';
import { ModuleContent } from './components/ModuleContent';
import { Menu, X, ChevronRight, Award, LogOut } from 'lucide-react';

const App: React.FC = () => {
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [completedModules, setCompletedModules] = useState<number[]>([0]);

  const currentModule = content.modules[currentModuleIndex];
  const isLastModule = currentModuleIndex === content.modules.length - 1;

  const handleNext = () => {
    if (currentModuleIndex < content.modules.length - 1) {
      const nextIndex = currentModuleIndex + 1;
      setCurrentModuleIndex(nextIndex);
      if (!completedModules.includes(nextIndex)) {
        setCompletedModules([...completedModules, nextIndex]);
      }
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (currentModuleIndex > 0) {
      setCurrentModuleIndex(currentModuleIndex - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleNavClick = (index: number) => {
    setCurrentModuleIndex(index);
    if (!completedModules.includes(index)) {
      setCompletedModules([...completedModules, index]);
    }
    setIsSidebarOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#F4F6F5] flex font-sans text-[#0F2A24]">
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 w-full bg-[#0F2A24] text-white p-4 flex items-center justify-between z-50 md:hidden shadow-md">
        <div className="font-bold tracking-wider text-[#6FBF9C]">LÍDER IA</div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-1">
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside 
        className={`fixed inset-y-0 left-0 w-72 bg-[#0F2A24] text-white transform transition-transform duration-300 ease-in-out z-40
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:h-screen md:sticky md:top-0 shadow-xl flex flex-col`}
      >
        <div className="p-8 hidden md:block">
           <h1 className="text-2xl font-bold tracking-tight text-white mb-1">LÍDER IA</h1>
           <p className="text-[#6FBF9C] text-xs font-semibold tracking-widest uppercase">Academia de Automatización</p>
        </div>

        <div className="p-6 md:hidden mt-16">
           <p className="text-[#6FBF9C] text-xs font-semibold tracking-widest uppercase mb-4">Menú de Navegación</p>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 pb-4">
          <ul className="space-y-2">
            {content.modules.map((mod, index) => {
              const isActive = currentModuleIndex === index;
              const isCompleted = completedModules.includes(index);
              
              return (
                <li key={mod.module_id}>
                  <button
                    onClick={() => handleNavClick(index)}
                    className={`w-full text-left p-3 rounded-lg text-sm transition-all duration-200 flex items-center gap-3
                      ${isActive 
                        ? 'bg-[#1F4D3F] text-white font-semibold border-l-4 border-[#6FBF9C]' 
                        : 'text-gray-400 hover:text-white hover:bg-[#1F4D3F]/50'
                      }`}
                  >
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs border
                      ${isActive ? 'border-[#6FBF9C] text-[#6FBF9C]' : isCompleted ? 'border-gray-500 text-gray-400' : 'border-gray-600 text-gray-600'}
                    `}>
                      {index + 1}
                    </span>
                    <span className="line-clamp-2">{mod.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-6 border-t border-[#1F4D3F]">
          <div className="flex items-center gap-3 text-gray-400 text-xs">
            <Award size={16} />
            <span>Progreso: {Math.round((completedModules.length / content.modules.length) * 100)}%</span>
          </div>
          <div className="w-full bg-[#1F4D3F] h-1.5 mt-2 rounded-full overflow-hidden">
            <div 
              className="bg-[#6FBF9C] h-full transition-all duration-500" 
              style={{ width: `${(completedModules.length / content.modules.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 md:pt-12 pt-24 px-4 md:px-12 transition-all">
        <ModuleContent module={currentModule} />

        {/* Navigation Footer */}
        <div className="max-w-3xl mx-auto flex items-center justify-between pb-12 pt-6 border-t border-gray-200">
          <button
            onClick={handlePrev}
            disabled={currentModuleIndex === 0}
            className={`text-sm font-semibold flex items-center gap-2 px-4 py-2 rounded transition-colors
              ${currentModuleIndex === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-[#1F4D3F] hover:bg-gray-100'}
            `}
          >
            Anterior
          </button>

          {!isLastModule ? (
            <button
              onClick={handleNext}
              className="bg-[#0F2A24] text-white px-6 py-3 rounded-lg font-bold shadow-lg shadow-[#0F2A24]/20 hover:bg-[#1F4D3F] hover:shadow-xl transition-all flex items-center gap-2 group"
            >
              Siguiente Lección
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          ) : (
            <div className="flex flex-col items-end">
               <button
                className="bg-[#6FBF9C] text-[#0F2A24] px-6 py-3 rounded-lg font-bold shadow-lg hover:brightness-110 transition-all flex items-center gap-2"
                onClick={() => alert("¡Módulo completado! Preparado para el siguiente OVA.")}
              >
                <Award size={18} />
                Completar Módulo
              </button>
            </div>
          )}
        </div>

        {/* Handoff Section (Only on last module) */}
        {isLastModule && (
            <div className="max-w-3xl mx-auto mb-20 bg-gradient-to-r from-[#0F2A24] to-[#1F4D3F] rounded-xl p-8 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-32 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                
                <h3 className="text-lg font-bold text-[#6FBF9C] mb-2 uppercase tracking-wider flex items-center gap-2">
                    <LogOut size={20} />
                    Próximo Nivel
                </h3>
                <h2 className="text-2xl font-bold mb-4">{content.handoff_next_ova.next_title}</h2>
                <p className="text-gray-300 mb-6 max-w-lg">{content.handoff_next_ova.bridge_text}</p>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-4 py-2 rounded text-sm font-medium transition-colors">
                    Ver Temario Siguiente
                </button>
            </div>
        )}
      </main>
    </div>
  );
};

export default App;