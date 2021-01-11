export class personalData {
    constructor(
        public firstName:string,
        public lastName:string,
        public email:string,
        public country:string,
        public code:string,
        public mob:any,
        public address1:string,
        public address2:string,
        public landmark:string,
        public state:string,
        public district:string,
        public city:string,
        public zipCode:any
    ){}
};

export class academicData{
    constructor(
        public degree:string,
        public specilization:string,
        public university:string,
        public yos:null,
        public cgpa:null,
        public interest:string,
        public brk:string,
        public backlog:string,
        public scolarship:string,
        public offer:boolean
    ){}
}

export class workData{
    constructor(
        public employer:string,
        public yoe:null,
        public role:string,
        public salary:null,
        public start:null,
        public address1:string,
        public address2:string,
        public country:string,
        public state:string,
        public district:string,
        public city:string,
        public zipCode:any
    ){}
}

export class uploadData{
    constructor(
        public url:string
    ){}
}