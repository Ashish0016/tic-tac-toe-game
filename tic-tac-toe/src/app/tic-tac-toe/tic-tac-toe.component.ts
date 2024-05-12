import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkerType, Player, PlayerType, TicTacToeType } from '../Common/interfaces';
import { Marker, Players, TicTacToeGame } from '../Common/globalConstant';

@Component({
  selector: 'app-tic-tac-toe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {

  public ticTacToe: TicTacToeType[] = TicTacToeGame;
  public markers: MarkerType = Marker;
  public players: PlayerType[] = Players;
  public playerRound: string | undefined;
  public player: number | undefined;
  public winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  public winnerCombination: number[] | undefined;

  constructor() { }

  ngOnInit(): void {
    this.playerRound = this.players[0].name;
    this.player = Player.PlayerX;
  }

  play(id: number): void {
    this.ticTacToe.forEach((prop: TicTacToeType) => {
      if (prop.id === id && prop.playerPlayed == 0 && this.winnerCombination === undefined) {
        if (this.player === Player.PlayerX) {
          prop.iconClass = this.markers.xMark;
          prop.playerPlayed = Player.PlayerX;
          this.playerRound = this.players[1].name;
          this.player = Player.PlayerO;
        } else {
          prop.iconClass = this.markers.oMark;
          prop.playerPlayed = Player.PlayerO;
          this.playerRound = this.players[0].name;
          this.player = Player.PlayerX;
        }
        this.gameWiningStatergy();
      }
    })
  }

  gameWiningStatergy() {
    const playerXMoves: number[] = [];
    const playerOMoves: number[] = [];

    this.ticTacToe.forEach((prop: TicTacToeType) => {
      if (prop.playerPlayed === Player.PlayerX) {
        playerXMoves.push(prop.id);
      }

      if (prop.playerPlayed === Player.PlayerO) {
        playerOMoves.push(prop.id);
      }
    });

    if (playerXMoves.length !== 0 && this.winnerCombination === undefined) {
      this.winnerCombination = this.winningCombinations.find(prop => prop.every(cell => playerXMoves.includes(cell)));
      if (this.winnerCombination) {
        this.playerRound = 'Player X is Winner!'
        this.declareWinner(Player.PlayerX);
      }
    }

    if (playerOMoves.length !== 0 && this.winnerCombination === undefined) {
      this.winnerCombination = this.winningCombinations.find(prop => prop.every(cell => playerOMoves.includes(cell)));
      if (this.winnerCombination) {
        this.playerRound = 'Player O is Winner!'
        this.declareWinner(Player.PlayerO);
      }
    }

    if (!this.winnerCombination) this.gameTieSituation();
  }

  declareWinner(playerId: number) {
    this.ticTacToe.forEach((prop: TicTacToeType) => {
      if (this.winnerCombination?.includes(prop.id) && prop.playerPlayed === playerId) {
        prop.iconClass += ' text-green-400';
      }
    })
  }

  gameTieSituation() {
    let isGameTie: boolean = this.ticTacToe.every((prop: TicTacToeType) => prop.playerPlayed !== 0 && (prop.playerPlayed === Player.PlayerX || Player.PlayerO))
    if (isGameTie) {
      this.playerRound = 'Game is Tie! Please replay to play again.'
      this.ticTacToe.forEach((prop: TicTacToeType) => {
        prop.iconClass += ' text-red-400';
      })
    }
  }

  replay() {
    this.ticTacToe.forEach((prop: TicTacToeType) => {
      prop.iconClass = 'p-8 font-bold text-2xl';
      prop.playerPlayed = 0;
    });
    this.winnerCombination = undefined;
    this.ngOnInit();
  }
}







