
import { Teacher } from '../interfaces/Teacher.interface';

export interface Subject{
    id:string,
    creationDate?:Date,
    modificationDate?:Date,
    active?:boolean,
    department:Departments,
    subjectName:string,
    cordinator?:Teacher,
    teachers?:[],
    students?:[] 
}
export enum Departments {

    SOCIAL_STUDIES = "SOCIAL_STUDIES", 
    MATH = "MATH", 
    LANGUAGE = "LANGUAGE", 
    PHYSICAL_EDUCATION = "PHYSICAL_EDUCATION ", 
	ART = "ART", 
    TECHNOLOGY = "TECHNOLOGY", 
    CULTURE = "CULTURE", 
    SCIENCES = "SCIENCES"
}