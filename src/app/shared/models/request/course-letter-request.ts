
export interface CardCourse {
    logo: string;
    career: string;
    courses: string[];
    students: Student[];
}

export interface Student {
    name: string,
    secondName: string,
    motherLastName: string,
    fatherLastName: string,
    edad: number,
    codigo: string,
    birthdate: Date,
    photo: string,
    sex: string,
}