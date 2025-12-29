import React from 'react';
import { VisualFlowDescription, VisualNode } from '../types';
import { ArrowDown } from 'lucide-react';

interface VisualFlowProps {
  description: VisualFlowDescription;
  isBranched?: boolean;
}

const Node: React.FC<{ node: VisualNode }> = ({ node }) => {
  // Determine text color based on background luminance roughly
  // Light green (#6FBF9C) is light, others are dark
  const isLightBg = node.color === '#6FBF9C';
  const textColor = isLightBg ? 'text-[#0F2A24]' : 'text-white';

  return (
    <div
      className={`relative z-10 w-full max-w-[200px] py-4 px-2 rounded-lg shadow-md text-center font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center border border-opacity-10 border-white`}
      style={{ backgroundColor: node.color, color: isLightBg ? '#0F2A24' : '#FFFFFF' }}
    >
      {node.label}
    </div>
  );
};

const Connector = () => (
  <div className="h-8 flex justify-center items-center text-gray-400">
    <ArrowDown size={20} strokeWidth={2} />
  </div>
);

export const VisualFlow: React.FC<VisualFlowProps> = ({ description, isBranched = false }) => {
  if (isBranched) {
    // Specialized layout for M3 (Common -> Decision -> Branches)
    // Assuming structure: Common -> Decision -> [Route A, Route B]
    const commonNode = description.nodes[0];
    const decisionNode = description.nodes[1];
    const branchNodes = description.nodes.slice(2);

    return (
      <div className="flex flex-col items-center w-full p-6 rounded-xl border border-gray-200" style={{ backgroundColor: description.background }}>
        <h4 className="mb-4 text-xs uppercase tracking-widest text-[#0F2A24] font-bold opacity-50">Diagrama Arquitectónico</h4>
        
        {/* Common */}
        {commonNode && <Node node={commonNode} />}
        {commonNode && decisionNode && <Connector />}
        
        {/* Decision */}
        {decisionNode && <Node node={decisionNode} />}
        
        {/* Branches */}
        {branchNodes.length > 0 && (
          <>
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="w-[80%] h-px bg-gray-300 relative mb-6">
                <div className="absolute left-0 top-0 w-px h-6 bg-gray-300 transform translate-y-0"></div>
                <div className="absolute right-0 top-0 w-px h-6 bg-gray-300 transform translate-y-0"></div>
            </div>
            
            <div className="flex justify-between w-full max-w-[400px] gap-4">
              {branchNodes.map((node, i) => (
                <div key={i} className="flex flex-col items-center w-1/2">
                    <ArrowDown size={16} className="text-gray-400 mb-2 -mt-4" />
                    <Node node={node} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }

  // Linear layout for other modules
  return (
    <div className="flex flex-col items-center w-full p-8 rounded-xl border border-gray-200" style={{ backgroundColor: description.background }}>
      <h4 className="mb-6 text-xs uppercase tracking-widest text-[#0F2A24] font-bold opacity-50">Flujo Secuencial</h4>
      {description.nodes.map((node, index) => (
        <React.Fragment key={index}>
          <Node node={node} />
          {index < description.nodes.length - 1 && <Connector />}
        </React.Fragment>
      ))}
    </div>
  );
};