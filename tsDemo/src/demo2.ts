// enum 枚举

// 初级
// function getServe(status: number) {
//     if(status === 0) {
//         return 'massage'
//     } else if(status === 1) {
//         return 'SPA'
//     } else if(status === 2) {
//         return 'dabaojian'
//     }
// }
// let result = getServe(2)
// console.log(`我要去${result}`)


// 中级
// const Status = {
//     MASSAGE : 0,
//     SPA : 1,
//     DABAOJIAN : 2
// }
// function getServe(status: any) {
//     if(status === Status.MASSAGE) {
//         return 'massage'
//     } else if(status === Status.SPA) {
//         return 'SPA'
//     } else if(status === Status.DABAOJIAN) {
//         return 'dabaojian'
//     }
// }
// let result = getServe(Status.MASSAGE)
// console.log(`我要去${result}`)

// 高级
enum Status {
    MASSAGE = 11,
    SPA,
    DABAOJIAN
}
function getServe(status: any) {
    if(status === Status.MASSAGE) {
        return 'massage'
    } else if(status === Status.SPA) {
        return 'SPA'
    } else if(status === Status.DABAOJIAN) {
        return 'dabaojian'
    }
}
let result = getServe(2)
console.log(Status.MASSAGE);
console.log(Status.SPA);
console.log(Status.DABAOJIAN);
console.log(Status[Status.MASSAGE]);
console.log(Status[Status.SPA]);
console.log(Status[Status.DABAOJIAN]);

console.log(`我要去${result}`)
