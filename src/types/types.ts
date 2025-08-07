export interface DetailsMainTypes {
  id: number;
  title: string;
  description: string;
}

export type ObjProjectBase = {
  title: string;
  description: string;
  date_limit: string;
  id: number | null;
}

export interface ObjBaseType {
  id?: number;
  title: string;
  description: string;
  date_limit: string;
  notes?: string;
}

export interface ContextProjectsTypes {
  projects: ObjBaseType[];
  searchProject: (id: number) => Promise<ObjProjectBase[]>;
  addNewProject: (project: ObjBaseType) => void;
  removeProject: (id: number) => void;
  updateProject: (project: ObjProjectBase) => void;
}

export interface ContextAuthTypes {
  login: () => void;
  logout: () => void;
  user: { avatar: string; email: string; name: string, user_id: string } | null;
}

