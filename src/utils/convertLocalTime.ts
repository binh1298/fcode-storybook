const convertLocateTime = (date: Date) => {
    return new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
};

interface convertDateTimeProps {
    time: string;
    options?: {
        showDate?: boolean;
        showTime?: boolean;
    };
}
const convertDateTime = (props: convertDateTimeProps): string => {
    const { time, options } = props;

    const timeStamp = convertLocateTime(new Date(time));

    if (options) {
        if (!options.showDate && options.showTime) {
            return timeStamp.toLocaleString("en-US", { hour: "2-digit", minute: "2-digit" });
        }
        if (options.showDate && !options.showTime) {
            return timeStamp.toLocaleString("en-US", { dateStyle: "short" });
        }
        if (!options.showDate && !options.showTime) {
            return "";
        }
    }

    return (
        timeStamp.toLocaleString("en-US", { dateStyle: "short" }) +
        " AT " +
        timeStamp.toLocaleString("en-US", { hour: "2-digit", minute: "2-digit" })
    );
};

export default convertDateTime;
