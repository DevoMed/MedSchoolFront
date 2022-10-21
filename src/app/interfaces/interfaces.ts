export interface Student{

    id:string,
    creationDate?:Date,
    modificationDate?:Date,
    active?:boolean,
    firstName:string,
    lastName:string,
    dni:string,
    birthdayDate:Date,
    avgGrade:number,
    subjects?:[];
}