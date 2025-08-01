export interface DetailsMainTypes {
  id: number;
  title: string;
  description: string;
}

export interface ObjBaseType {
  id: number;
  title: string;
  description: string;
  date_limit: string;
  notes: string;
  days_week: number;
}

export interface ContextProjectsTypes {
  projects: ObjBaseType[];
  searchProject: (id: number) => Promise<ObjBaseType[]>;
  addNewProject: (project: ObjBaseType) => void;
  removeProject: (id: number) => void;
  updateProject: (project: ObjBaseType) => void;
}

export interface ContextAuthTypes {
  login: () => void;
  logout: () => void;
  user: { avatar: string; email: string; name: string } | null;
}

