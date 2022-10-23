export interface Teacher {

    id: string,
    creationDate?: Date,
    modificationDate?: Date,
    active?: boolean,
    firstName: string,
    lastName: string,
    dni: string,
    birthdayDate:Date,
    departHead: boolean,
    subjects?: [],
    cordinator?:[];
}