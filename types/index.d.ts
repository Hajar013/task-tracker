declare namespace Tasks{
    export interface IResponseTask{
        userId:number;
        id:number;
        todo:string;
        completed:boolean;
    }
    export interface IResponse{
        todos:IResponseTask[];
        limit:number;
        skip:number;
        total:number;
    }
    export interface ITask{
        id:number;
        todo:string;
        completed:boolean;
        priority:Priority;
    }      
}