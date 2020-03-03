export function sum(...nums) {
    if(nums.length == 0){
        return {
            status: 'failed',
            reason: 'Arguments is Null',
        };
    }
    return nums.reduce((p, el) => {
        if(typeof el == "number" && !isNaN(el)){
            return p + el;
        }else{
            return p;
        }
    }, 0);
}