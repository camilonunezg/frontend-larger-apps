import { CourseId } from "./CourseId";
import { CourseImageUrl } from "./CourseImageUrl";
import { CourseTitle } from "./CourseTitle";

export class Course {
	constructor(
		readonly id: CourseId | null,
		readonly title: CourseTitle,
		readonly imageUrl: CourseImageUrl,
	) {}
}
