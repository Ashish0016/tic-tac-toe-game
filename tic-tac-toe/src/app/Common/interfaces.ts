export interface TicTacToeType {
    id: number;
    classList: string;
    iconClass: string;
    playerPlayed: number;
}

export interface MarkerType {
    xMark: string;
    oMark: string;
}

export interface PlayerType {
    id: number;
    name: string;
}

export enum Player {
    PlayerX = 1,
    PlayerO = 2
}