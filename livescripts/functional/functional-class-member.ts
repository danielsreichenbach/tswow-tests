export class MyFunctionalClass extends TSClass {
    // Store as non-nullable but initialize to a no-op function
    fp: (cls: MyFunctionalClass, player: TSPlayer) => void = () => {};
    value: uint32;
    private initialized: boolean = false;

    constructor(value: uint32) {
        super();
        this.value = value;
        // Set the actual function
        this.fp = (cls, player) => {
            player.SendBroadcastMessage(`Hello from Functional class ${cls.value++}`);
        };
        this.initialized = true;
    }

    call(player: TSPlayer) {
        // Check if initialized before calling
        if(this.initialized)
        {
            this.fp(this, player);
        }
    }
}

let myFunctionalInstance = new MyFunctionalClass(10)

export function CallFunctionalClass(player: TSPlayer) {
    myFunctionalInstance.call(player);
}