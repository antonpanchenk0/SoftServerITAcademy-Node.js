export function multi(...nums) {
    return nums.reduce((p, el)=>p*el);
}