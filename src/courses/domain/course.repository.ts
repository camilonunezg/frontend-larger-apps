import { Course } from './Course';

export interface ICoursesRepository {
    save: (course: Course) => Promise<Course | Error>;
}
