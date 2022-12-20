const Year = {
    isLeapYear: (leapYearArr,year) => {
        const jahr = leapYearArr.map(leapYear => {
            if(leapYear === year){
                return true
            } else {
                return false
            }
        })
        return jahr.includes(true) ? true : false
    },
    months: [],
    weeks: [],
    days: [],
    students: []
}

export default Year;