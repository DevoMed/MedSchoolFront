
import { Teacher } from '../interfaces/Teacher.interface';

export interface Subject{
    

    id?:string,
    creationDate?:Date,
    modificationDate?:Date,
    active:boolean,
    department?:Departments,
    subjectName:string,
    cordinator?:Teacher,
    teachers?:[],
    students?:[]
    
    
}
export enum Departments {

    SOCIAL_STUDIES = "Social Studies", 
    MATH = "Math", 
    LANGUAGE = "Language", 
    PHYSICAL_EDUCATION = "Physical Education", 
	ART = "Art", 
    TECHNOLOGY = "Technology", 
    CULTURE = "Culture", 
    SCIENCES = "Sciences"
}