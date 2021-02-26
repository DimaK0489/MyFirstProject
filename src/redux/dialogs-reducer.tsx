import {v1} from "uuid";
import {MessageType} from "./store";

const ADD_MESSAGE = "ADD-MESSAGE"
const CHANGE_NEW_MESSAGE = "CHANGE-NEW-MESSAGE"

export const addMessageAC = () => ({type: ADD_MESSAGE} as const)
export const onMessageChangeAC = (newText: string) => ({type: CHANGE_NEW_MESSAGE, newText: newText} as const)

export type ActionsType =
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof onMessageChangeAC>

export let initialState = {
    newMessagesText: "",
    messages: [
        {id: v1(), message: "Hello my friends"},
        {id: v1(), message: "How are you"},
        {id: v1(), message: "Sorry i am latte"},
        {id: v1(), message: "React very easy"},
        {id: v1(), message: "Good night"},
    ],
    dialogs: [
        {id: 1, name: "Alena"},
        {id: 2, name: "Denis"},
        {id: 3, name: "Andrey"},
        {id: 4, name: "Juliya"},
        {id: 5, name: "Dimas"},
        {id: 6, name: "Maks"}
    ],
}
type InitialStateType = typeof initialState

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage: MessageType = {
                id: v1(),
                message: state.newMessagesText,
            }
            state.messages.push(newMessage)
            state.newMessagesText = " "
            return state

        case "CHANGE-NEW-MESSAGE":
            state.newMessagesText = action.newText;
            return state
        default:
            return state
    }
}