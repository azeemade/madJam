import data from "./data.json"

const rawWeekly = data.filter((item) => {
        return item.tableName == "Weekly Features"
} )
export const weekly = rawWeekly[0].content

const rawMonthly = data.filter((item) => {
        if (item.tableName == "Monthly playlists"){
            return item.content;
        }
    } )
export const monthly = rawMonthly[0].content

export const space = data.filter((item) => {
        if (item.tableName == "Space schedules"){
            return item.content;
        }
    } )[0].content

var rawCategories = data.filter((item) => {
        return item.tableName == "Categories"
} )
export const categories = rawCategories[0].content
