export interface TimeRemaining {
    [key: string]: number,
}

const getTimeRemaining = (eventTime: Date) : TimeRemaining => {
    const now: Date = new Date()
    const current: number = now.getTime()
    const event: number = eventTime.getTime()
    const remainingTime: number = event - current

    const seconds = Math.floor( remainingTime / 1000 )
    const minutes = Math.floor( seconds / 60 )
    const hours =  Math.floor( minutes / 60 )
    const days = Math.floor( hours / 24 )
    
    return {
        seconds: seconds%60,
        minutes: minutes%60,
        hours: hours%24,
        days: days
    }
}

export default getTimeRemaining