import { Dispatch, SetStateAction } from "react";
import { ObjBaseType } from "./types";

export interface UseFindProject {
    project: ObjBaseType; 
    updateProject: () => void; 
    setProject: Dispatch<SetStateAction<ObjBaseType>>;
    isDisabled: boolean;  
    setIsDisabled: Dispatch<SetStateAction<boolean>>
}