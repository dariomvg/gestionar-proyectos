import { ObjBaseType } from "./types";

export interface UseViewProject {
    project: ObjBaseType; 
    isDisabled: boolean;  
    sendProject: () => void;
    changeProject: (e: React.ChangeEvent<HTMLInputElement>) => void;
}