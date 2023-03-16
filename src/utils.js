import dayjs from "dayjs";

export function getMonth(month = dayjs().month()){
    const year = dayjs().year();
    const firstDayOfMonth = dayjs(new Date(year,month,1)).day();
    let currMonth = 0 - firstDayOfMonth;

    const daysTable = new Array(5).fill([]).map(()=>{
        return new Array(7).fill(null).map(()=>{
            currMonth++;
            return dayjs(year,month,currMonth);
        })
    })

    return daysTable;
}