//Bước 1: Thiết kế Interface cho lớp ArrayList
// Tạo file IArrayList có nội dung như sau.

export interface IArrayList<T>{
    add(data:T):void;
    get(index:number):void;
    size():number;
    remove():void;
}