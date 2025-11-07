
export function Middleware(state){
    return function(next){
        return function(action){
            console.log("every action will come from here now")

            next(action)
        }
    }
}