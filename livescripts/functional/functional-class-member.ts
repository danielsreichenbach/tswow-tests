export class MyFunctionalClass extends TSClass {
    fp: (this: any, cls: MyFunctionalClass, player: TSPlayer) => void;
    value: uint32;

    constructor(fp: (this: any, cls: MyFunctionalClass, player: TSPlayer)=>void, value: uint32) {
        super();
        this.fp = fp;
        this.value = value;
    }

    call(player: TSPlayer) {
        if(this.fp !== undefined)
        {
            this.fp(this,player);
        }
    }
}

let myFunctionalInstance = new MyFunctionalClass(
    (cls,player)=>player.SendBroadcastMessage(`Hello from Functional class ${cls.value++}`),10
)

export function CallFunctionalClass(player: TSPlayer) {
    myFunctionalInstance.call(player);
}