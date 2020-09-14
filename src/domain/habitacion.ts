export class Habitacion {

    id: number
    desc: string
    precio: number
    ok: boolean = false
    
   
    constructor(_id: number,_desc: string, _precio: number){
        this.id=_id
        this.desc=_desc
        this.precio=_precio
    }
}

