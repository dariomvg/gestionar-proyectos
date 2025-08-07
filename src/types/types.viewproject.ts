import { ObjProjectBase } from "./types";

export interface UseViewProject {
    project: ObjProjectBase; 
    isDisabled: boolean;  
    sendProject: () => void;
    changeProject: (e: React.ChangeEvent<HTMLInputElement>) => void;
}