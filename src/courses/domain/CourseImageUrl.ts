export class CourseImageUrl {
    
    constructor(readonly value: string) {
        CourseImageUrl.isCourseImageUrlValid(value)
    }

    static isCourseImageUrlValid(imageUrl: string): boolean { 
        const regexExp = /^(?:https?:\/\/)?(?:[\w]+\.)(?:\.?[\w]{2,})(\/[\w]*)*(\.[\w]+)*/; //TODO: this should be placed in core
    
        return regexExp.test(imageUrl);
    }
}

export class CourseImageUrlNotValidError extends Error {
    constructor(value: string) {
        super(`CourseImage ${value} is not valid`)
    }
}
