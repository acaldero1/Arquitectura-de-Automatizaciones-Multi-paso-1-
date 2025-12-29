export interface Audience {
  profile: string;
  level: string;
  prerequisites: string[];
  learning_style: string;
}

export interface BrandGuidelines {
  brand: string;
  palette: {
    verde_oscuro_principal: string;
    verde_medio_acento: string;
    verde_claro_highlights: string;
    gris_claro_fondos: string;
    blanco: string;
  };
}

export interface VisualNode {
  label: string;
  color: string;
}

export interface VisualFlowDescription {
  background: string;
  nodes: VisualNode[];
  arrows: string;
}

export interface MiniExercise {
  prompt: string;
  expected_answer: string | string[];
}

export interface CaseStudy {
  title: string;
  steps: string[];
  expected_outcome: string;
}

export interface Module {
  module_id: string;
  title: string;
  key_message: string;
  simple_explanation?: string;
  principle?: string;
  analogy?: string;
  business_example?: string;
  best_practices?: string[];
  case?: CaseStudy;
  mini_exercise: MiniExercise;
  visual_flow_description: VisualFlowDescription;
}

export interface Handoff {
  next_title: string;
  bridge_text: string;
}

export interface OVAMetadata {
  title: string;
  duration: string;
  competencies: string[];
}

export interface OVAContent {
  role: string;
  objective: string;
  audience: Audience;
  brand_guidelines: BrandGuidelines;
  core_principles: string[];
  ova_metadata: OVAMetadata;
  modules: Module[];
  common_mistakes_addressed: string[];
  handoff_next_ova: Handoff;
}