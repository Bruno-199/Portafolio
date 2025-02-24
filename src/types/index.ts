export interface Project {
  title: string;
  description: string;
  video?: string;
  poster?: string;
  image?: string;
  gallery?: string[];
  technologies: string[];
  github: string;
  demo: string;
}

export interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: (index: number) => void;
}

export interface ModalProps {
  project: Project;
  onClose: () => void;
}