import Moment from "moment"

function commonDate(value) {
    return Moment(value).format('YYYY-MM-DD hh:mm:ss')
}

export { commonDate }