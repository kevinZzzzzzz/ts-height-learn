// 接口只是一种能力，一个约束而已
(() => {
    interface IPerson{
        firstName?: String,
        lastName: String
    }

    function showFullName(person: IPerson) {
        return person.firstName +'·'+ person.firstName;
    }
    console.log(showFullName({
        // firstName: 'kevin',
        lastName: 'zhang'
    }))
})()