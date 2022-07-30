import { MainButton } from "./Button.styled"

export function Button(props) {
    return (
        <MainButton border={props.border} type="button" >Read More</MainButton>
    )
}