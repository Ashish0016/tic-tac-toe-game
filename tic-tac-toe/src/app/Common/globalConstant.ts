import { MarkerType, PlayerType, TicTacToeType } from "./interfaces";

export const TicTacToeGame: TicTacToeType[] = [
    {
        id: 0,
        classList: 'border-r-4 border-b-4 p-8 cursor-pointer',
        iconClass: 'p-8 font-bold text-2xl',
        playerPlayed: 0
    },
    {
        id: 1,
        classList: 'border-r-4 border-b-4 p-8 cursor-pointer',
        iconClass: 'p-8 font-bold text-2xl',
        playerPlayed: 0
    },
    {
        id: 2,
        classList: 'border-b-4 p-8 cursor-pointer',
        iconClass: 'p-8 font-bold text-2xl',
        playerPlayed: 0
    },
    {
        id: 3,
        classList: 'border-r-4 border-b-4 p-8 cursor-pointer',
        iconClass: 'p-8 font-bold text-2xl',
        playerPlayed: 0
    },
    {
        id: 4,
        classList: 'border-r-4 border-b-4 p-8 cursor-pointer',
        iconClass: 'p-8 font-bold text-2xl',
        playerPlayed: 0
    },
    {
        id: 5,
        classList: 'border-b-4 p-8 cursor-pointer',
        iconClass: 'p-8 font-bold text-2xl',
        playerPlayed: 0
    },
    {
        id: 6,
        classList: 'border-r-4 p-8 cursor-pointer',
        iconClass: 'p-8 font-bold text-2xl',
        playerPlayed: 0
    },
    {
        id: 7,
        classList: 'border-r-4 p-8 cursor-pointer',
        iconClass: 'p-8 font-bold text-2xl',
        playerPlayed: 0
    },
    {
        id: 8,
        classList: 'p-8 cursor-pointer',
        iconClass: 'p-8 font-bold text-2xl',
        playerPlayed: 0
    }
]

export const Marker: MarkerType = {
    xMark: 'fa-solid fa-xmark font-bold text-2xl',
    oMark: 'fa-solid fa-o font-bold text-2xl'
}

export const Players: PlayerType[] = [
    {
        id: 1,
        name: 'Player X'
    },
    {
        id: 2,
        name: 'Player O'
    }
]