import moment from "moment"

let DEFAULT_LANGUAGE = "en";


export const hourAgoFun = (date) => {
    const formattedDate = `${moment(date).fromNow(true)} ago`
    return formattedDate;
}

export const dateFormater = (date, format = 'YYYY-MM-DD', locale = DEFAULT_LANGUAGE) => {
    return moment(date).locale(locale).format(format)
}

export const getRandomInt = (max = 5) => {
    return Math.floor(Math.random() * max);
}


export const genrateTimeSlots = (timeIn, timeOut, interval = 60) => {
    const slots = [];

    let currentTime = new Date(`01/01/2000 ${timeIn}`);
    const endTime = new Date(`01/01/2000 ${timeOut}`);
    let id = 1;
    while (currentTime < endTime) {
        const label = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        slots.push({
            id,
            label,
            status: true,
            disable: false

        });

        currentTime.setMinutes(currentTime.getMinutes() + interval);
        id++;
    }

    return slots;
}