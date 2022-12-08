type AnswerProps = {
    isHoliday: boolean;
}

export function Answer(props: AnswerProps) {
    return props.isHoliday ? <h2>Sim!</h2> : <h2>Não!</h2>
}