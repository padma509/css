 export class Teacher{
    tname:string;
    tstudents:number;
    getdetails():any{
        return this.tname+this.tstudents;

    }
}