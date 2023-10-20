export type CartItemType = {
    sku: string,
    name: string,
    price: number,
    qty: number
}

type CartStateType = { cart: CartItemType }

const initCartState: CartStateType = { cart:[] }

const REDUCER_ACTION_TYPE = {
    ADD: "ADD",
    REMOVER: "REMOVER",
    QUANTITY: "QUANTITY",
    SUBMIT: "SUBMIT"
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE

export type ReducerAction = {
    type: string,
    payload?: CartItemType
}

consr reducer = (state: CartStateType, action: ReducerAction): CartStateType => {
    switch(action.type){
        case REDUCER_ACTION_TYPE.ADD: {
            if(!action.payload) {
                throw new Error("action.payload missig in ADD action")
            }
            const { sku, name, price } = action.payload
            const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku)
            const itemExist: CartItemType | undefined = state.cartfind(item => item.sku === sku)
            const qty: number = itemExist ? itemExist.qty +1 : 1
            return { ...state, cart: [ ...filteredCart, { sku, name, price, qty }]}
        } 
        case REDUCER_ACTION_TYPE.REMOVER: {
            if(!action.payload) {
                throw new Error("action.payload missig in REMOVE action")
            }
        }
        case REDUCER_ACTION_TYPE.QUANTITY: {
            if(!action.payload) {
                throw new Error("action.payload missig in QUANTITY action")
            }
        }
        case REDUCER_ACTION_TYPE.SUBMIT: {
            return { ...state, cart: []}
        }
        default:
            throw new Error('Unidentified reducer action type')
    }
}