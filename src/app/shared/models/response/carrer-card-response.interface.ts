export interface CardCareer {
    id: number
    title: string;
    description: string;
    image: string;
    courses: Course[];
    students: Student[];
}

interface Course {
    id: number,
    title: string
}

interface Student {
    id: number,
    name: string
}