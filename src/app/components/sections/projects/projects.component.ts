import { Component } from '@angular/core';

@Component({
  selector: 'section-projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {

  isModalOpen = false;

  constructor() {}

  additionalProjects = [
    {
      title: 'Migración a Google Cloud Platform para una Institución Financiera',
      description: 'Migración de un sistema on-premises a GCP utilizando Infraestructura como Código (IaC) y pipelines de CI/CD.',
      technologies: ['Docker', 'Kubernetes', 'Terraform']
    },
    {
      title: 'Aplicación RAG de Generative AI',
      description: 'Creación y despliegue de soluciones en la nube para aplicaciones de Generative AI utilizando Vertex AI y Gemini de Google.',
      technologies: ['AWS', 'GenAI', 'DB Vectorial', 'Gemini']
    },
    {
      title: 'Entrenamiento de Modelos',
      description: 'Creacion de modelos de Machine Learning personalizados y entrenamiento de modelos de lenguaje natural para aplicaciones de procesamiento de texto.',
      technologies: ['Python', 'TensorFlow', 'Hugging Face']
    },
    {
      title: 'Desarrollo de un Chatbot para Atención al Cliente',
      description: 'Creación de un chatbot para mejorar la atención al cliente y automatizar respuestas a consultas frecuentes.',
      technologies: ['Dialogflow', 'Node.js', 'Angular']
    },
    {
      title: 'Diseño e Implementación de un Data Lake en GCP',
      description: 'Creación de un Data Lake escalable en GCP, integrando datos estructurados y no estructurados para análisis de datos y generación de reportes.',
      technologies: ['BigQuery', 'Dataflow', 'ETL']
    },
    {
      title: 'Automatización y Optimización de Flujos de Trabajo',
      description: 'Implementación de procesos automatizados para mejorar la eficiencia y reducir la carga operativa.',
      technologies: ['GCP', 'Scripts de Automatización']
    },
    {
      title: 'Desarrollo y Mantenimiento de APIs para Integración de Aplicaciones',
      description: 'Creación y mantenimiento de APIs para asegurar la integración entre aplicaciones frontend y servicios backend.',
      technologies: ['Node.js', 'Angular', 'SQL']
    },
    {
      title: 'Estandarización de un Patrón de Gestión de Recursos en la Nube',
      description: 'Desarrollo de un patrón estandarizado para la gestión de recursos en la nube, optimizando la eficiencia y consistencia en múltiples proyectos.',
      technologies: ['Cloud Computing', 'GCP', 'AWS']
    },
    {
      title: 'Desarrollo de Aplicaciones Web Dinámicas con Angular',
      description: 'Desarrollo de aplicaciones web dinámicas y escalables, utilizando Angular para frontend y optimizando la experiencia del usuario.',
      technologies: ['Angular', 'TypeScript', 'CSS']
    },
    {
      title: 'Transformación Digital para Empresas con Proyectos Internacionales',
      description: 'Participación en proyectos de transformación digital a nivel nacional e internacional.',
      technologies: ['WordPress', 'CMS', 'SEO']
    },
    {
      title: 'Colaboración en el Diseño de UX/UI de Aplicaciones Web',
      description: 'Trabajo en conjunto con equipos de diseño para mejorar la experiencia de usuario y la interfaz de aplicaciones web.',
      technologies: ['UX/UI', 'Diseño Web']
    },
    {
      title: 'Aseguramiento de Rendimiento y Seguridad en Servidores y Bases de Datos on premises y en la nube',
      description: 'Aplicación de prácticas óptimas para asegurar el rendimiento, escalabilidad y seguridad de servidores y bases de datos en la nube y on premise.',
      technologies: ['Google Cloud Platform', 'AWS', 'On-premises']
    }
  ];

  randomProjects = this.additionalProjects.sort(() => Math.random() - 0.5).slice(0, 5);
  randomIndex = Array.from({ length: 8 }, (_, i) => i + 1).sort(() => Math.random() - 0.5);

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
