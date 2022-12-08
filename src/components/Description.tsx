type DescriptionProps = {
    isHoliday: boolean;
    holidayName: string;
}

export function Description(props: DescriptionProps) {
    return props.isHoliday ? <p>Hoje é {props.holidayName}.</p> : <></>
}