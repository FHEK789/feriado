type HeaderProps = {
    title: string;
}

export function Header(props: HeaderProps) {
    return (
        <>
            <h1>{props.title}</h1>
        </>
    )
}