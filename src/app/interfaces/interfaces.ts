import { Subject } from "rxjs";
import { Departments } from "./Subject.interface";

export interface Student {


    id: string,
    creationDate?: Date,
    modificationDate?: Date,
    active?: boolean,
    firstName: string,
    lastName: string,
    dni: string,
    birthdayDate: Date,
    avgGrade: number,
    subject?:[]
    //subjects: Array<subjectcontent>
}

export interface subjectcontent {

    id: string,
    creationDate: Date,
    modificationDate: Date,
    active: boolean,
    subjectName: string,
    department: Departments
}
export interface Teacher {

    id: string,
    creationDate?: Date,
    modificationDate?: Date,
    active?: boolean,
    firstName: string,
    lastName: string,
    dni: string,
    departHead: boolean,
    subjects?: [];
}

