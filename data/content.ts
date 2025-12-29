import { OVAContent } from '../types';

export const content: OVAContent = {
  "role": "Diseñador instruccional senior en automatización con n8n y arquitecto de soluciones empresariales para Líder IA.",
  "objective": "Crear un OVA institucional para enseñar la Arquitectura de Automatizaciones Multi-paso, permitiendo que el estudiante diseñe flujos complejos, ordenados, escalables y resilientes, entendiendo cómo encadenar múltiples etapas sin perder control ni claridad.",
  "audience": {
    "profile": "Estudiantes de n8n con nociones previas de Trigger–Acción y uso básico de condiciones (IF / SWITCH)",
    "level": "Inicial–intermedio",
    "prerequisites": [
      "Comprensión de Trigger–Acción",
      "Uso conceptual de IF y SWITCH",
      "Entendimiento básico de datos y resultados"
    ],
    "learning_style": "Aprendizaje estructural, orientado a procesos empresariales y diseño lógico previo a la herramienta"
  },
  "brand_guidelines": {
    "brand": "Líder IA",
    "palette": {
      "verde_oscuro_principal": "#0F2A24",
      "verde_medio_acento": "#1F4D3F",
      "verde_claro_highlights": "#6FBF9C",
      "gris_claro_fondos": "#F4F6F5",
      "blanco": "#FFFFFF"
    }
  },
  "core_principles": [
    "Una automatización multi-paso es una cadena de decisiones y acciones organizadas por etapas.",
    "Cada paso debe tener un propósito claro y un resultado verificable.",
    "La complejidad se gestiona con orden, no con más nodos.",
    "Una buena arquitectura permite escalar sin rehacer el flujo."
  ],
  "ova_metadata": {
    "title": "OVA – Arquitectura de Automatizaciones Multi-paso",
    "duration": "25–40 minutos",
    "competencies": [
      "Diseñar automatizaciones por etapas (multi-paso)",
      "Separar responsabilidades dentro de un flujo",
      "Identificar acciones comunes y específicas",
      "Reducir redundancia y desorden en flujos complejos",
      "Preparar automatizaciones para escalar"
    ]
  },
  "modules": [
    {
      "module_id": "M1",
      "title": "Qué es una automatización multi-paso",
      "key_message": "Una automatización multi-paso no es un flujo largo: es un proceso bien organizado.",
      "simple_explanation": "Una automatización multi-paso encadena varias acciones y decisiones que ocurren en un orden lógico. Cada paso transforma la información o el estado del proceso.",
      "analogy": "Un proceso empresarial: recepción → validación → procesamiento → decisión → cierre.",
      "business_example": "Gestión de leads: capturar → validar datos → clasificar → asignar → notificar.",
      "mini_exercise": {
        "prompt": "Divide este proceso en pasos: 'Cuando llega un pedido, validar datos, cobrar, notificar y archivar'.",
        "expected_answer": [
          "Trigger: pedido recibido",
          "Paso 1: validar datos",
          "Paso 2: procesar cobro",
          "Paso 3: notificar",
          "Paso 4: archivar"
        ]
      },
      "visual_flow_description": {
        "background": "#F4F6F5",
        "nodes": [
          { "label": "TRIGGER", "color": "#0F2A24" },
          { "label": "PASO 1", "color": "#1F4D3F" },
          { "label": "PASO 2", "color": "#1F4D3F" },
          { "label": "PASO 3", "color": "#1F4D3F" },
          { "label": "RESULTADO", "color": "#6FBF9C" }
        ],
        "arrows": "Flechas lineales numeradas que indican secuencia"
      }
    },
    {
      "module_id": "M2",
      "title": "Diseño por etapas: separar responsabilidades",
      "key_message": "Cada paso debe resolver un solo problema.",
      "simple_explanation": "Un error común es hacer demasiadas cosas en un solo paso. La arquitectura correcta divide el flujo en etapas con responsabilidad única.",
      "principle": "Single Responsibility aplicado a automatización.",
      "analogy": "En una empresa, contabilidad no hace ventas ni soporte.",
      "business_example": "Un paso guarda datos, otro decide, otro comunica.",
      "mini_exercise": {
        "prompt": "Identifica qué acciones no deberían ir juntas: 'Guardar lead + clasificar + enviar WhatsApp'.",
        "expected_answer": "Guardar, clasificar y comunicar son responsabilidades distintas; deben separarse."
      },
      "visual_flow_description": {
        "background": "#FFFFFF",
        "nodes": [
          { "label": "ETAPA 1: Persistencia", "color": "#1F4D3F" },
          { "label": "ETAPA 2: Decisión", "color": "#1F4D3F" },
          { "label": "ETAPA 3: Comunicación", "color": "#1F4D3F" }
        ],
        "arrows": "Flechas secuenciales entre etapas claramente etiquetadas"
      }
    },
    {
      "module_id": "M3",
      "title": "Acciones comunes vs acciones específicas",
      "key_message": "Lo común se ejecuta una vez; lo específico se ramifica.",
      "simple_explanation": "En flujos multi-paso, muchas acciones aplican a todos los casos. Estas deben ejecutarse antes de ramificar con IF o SWITCH.",
      "analogy": "Todos los clientes se registran; no todos reciben el mismo tratamiento.",
      "business_example": "Guardar lead siempre → luego decidir cómo tratarlo.",
      "mini_exercise": {
        "prompt": "Marca qué acción es común: 'Guardar lead, si es VIP notificar gerente, si no enviar email'.",
        "expected_answer": "Guardar lead es acción común."
      },
      "visual_flow_description": {
        "background": "#F4F6F5",
        "nodes": [
          { "label": "ACCIÓN COMÚN", "color": "#1F4D3F" },
          { "label": "DECISIÓN", "color": "#1F4D3F" },
          { "label": "RUTA A", "color": "#6FBF9C" },
          { "label": "RUTA B", "color": "#6FBF9C" }
        ],
        "arrows": "Secuencia con ramificación posterior"
      }
    },
    {
      "module_id": "M4",
      "title": "Encadenar pasos sin perder control",
      "key_message": "Un flujo multi-paso debe ser legible incluso sin ejecutarse.",
      "simple_explanation": "El orden visual y lógico permite entender qué ocurre antes, durante y después, facilitando mantenimiento y escalabilidad.",
      "best_practices": [
        "Nombrar pasos por intención de negocio",
        "Evitar cruces visuales innecesarios",
        "Mantener dirección clara del flujo",
        "Agrupar etapas relacionadas"
      ],
      "analogy": "Un diagrama de procesos que cualquier gerente puede leer.",
      "business_example": "Flujo de onboarding de cliente con 6 pasos claramente definidos.",
      "mini_exercise": {
        "prompt": "Reordena estos pasos correctamente: notificar, validar, trigger, guardar.",
        "expected_answer": [
          "Trigger",
          "Validar",
          "Guardar",
          "Notificar"
        ]
      },
      "visual_flow_description": {
        "background": "#FFFFFF",
        "nodes": [
          { "label": "TRIGGER", "color": "#0F2A24" },
          { "label": "VALIDACIÓN", "color": "#1F4D3F" },
          { "label": "PROCESAMIENTO", "color": "#1F4D3F" },
          { "label": "COMUNICACIÓN", "color": "#1F4D3F" }
        ],
        "arrows": "Flujo descendente ordenado"
      }
    },
    {
      "module_id": "M5",
      "title": "Caso integral: Automatización multi-paso empresarial",
      "key_message": "La arquitectura convierte la automatización en un activo del negocio.",
      "case": {
        "title": "Onboarding automático de cliente",
        "steps": [
          "Trigger: cliente registrado",
          "Validar datos mínimos",
          "Guardar información",
          "Clasificar cliente",
          "Asignar responsable",
          "Enviar bienvenida",
          "Registrar trazabilidad"
        ],
        "expected_outcome": "Proceso consistente, escalable y sin intervención manual."
      },
      "mini_exercise": {
        "prompt": "Diseña el flujo en pasos numerados e identifica dónde irían decisiones.",
        "expected_answer": [
          "Trigger",
          "Validación (IF)",
          "Acción común: guardar",
          "Decisión (SWITCH)",
          "Acciones específicas",
          "Cierre"
        ]
      },
      "visual_flow_description": {
        "background": "#F4F6F5",
        "nodes": [
          { "label": "TRIGGER", "color": "#0F2A24" },
          { "label": "VALIDAR", "color": "#1F4D3F" },
          { "label": "GUARDAR", "color": "#1F4D3F" },
          { "label": "CLASIFICAR", "color": "#1F4D3F" },
          { "label": "ACCIONES POR RUTA", "color": "#6FBF9C" },
          { "label": "RESULTADO FINAL", "color": "#6FBF9C" }
        ],
        "arrows": "Flujo multi-etapa claramente numerado"
      }
    }
  ],
  "common_mistakes_addressed": [
    "Crear flujos largos sin etapas claras",
    "Mezclar validación, decisión y acción en un solo paso",
    "Duplicar acciones comunes en varias ramas",
    "Diseñar flujos difíciles de leer o mantener"
  ],
  "handoff_next_ova": {
    "next_title": "OVA – Manejo de Estados, Esperas y Orquestación Temporal",
    "bridge_text": "Una vez dominada la arquitectura multi-paso, el siguiente nivel es controlar el tiempo y la sincronización entre etapas."
  }
};