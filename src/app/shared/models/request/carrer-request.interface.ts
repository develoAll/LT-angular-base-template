
export interface CarrerWithCourses {
    title: string;
    description: string;
    image: string;
    courses: Course[]
}

interface Course {
    id: number
}

export interface EnrollCareer {
    idStudent: number;
    idCareer: number
}