import Piece from './piece';
import Square from '../square';
import Player from '../player';
const functions = require('./functions');

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }
    
    getAvailableMoves(board) {
        const currentLocation=board.findPiece(this);
        let moves=[];
        const activePlayer = this.player;
        let piecesInPath=[];

        switch (this.player) {
            case Player.WHITE:
                moves.push(Square.at(currentLocation.row+1,currentLocation.col));
            
                if (currentLocation.row === 1) {
                    moves.push(Square.at(currentLocation.row+2,currentLocation.col));
                }

                let diagonals = [Square.at(currentLocation.row+1,currentLocation.col-1),Square.at(currentLocation.row+1,currentLocation.col+1)];
                diagonals.forEach(square => {     
                if (square.col>-1 && square.col<8 && square.row>-1 && square.row<8) {
                    const blockingPiece = board.getPiece(square);
                    if (blockingPiece) {
                        piecesInPath.push(blockingPiece);
                    }
                }
                });

            break;

            case Player.BLACK:
                moves.push(Square.at(currentLocation.row-1,currentLocation.col));
        
                if (currentLocation.row === 6) {
                    moves.push(Square.at(currentLocation.row-2,currentLocation.col));
                }

                let blackDiag = [Square.at(currentLocation.row-1,currentLocation.col-1),Square.at(currentLocation.row+1,currentLocation.col+1)];
                blackDiag.forEach(square => {     
                if (square.col>-1 && square.col<8 && square.row>-1 && square.row<8) {
                    const blockingPiece = board.getPiece(square);
                    if (blockingPiece) {
                        piecesInPath.push(blockingPiece);
                    }
                }
                });
            break;
        }

        let onBoardMoves = functions.filterOffboardMoves(moves);
        
        onBoardMoves.forEach(square => {
            const blockingPiece = board.getPiece(square)
            if (blockingPiece) {
                const index = onBoardMoves.indexOf(square);
                onBoardMoves.splice(index,1);
                if (square.row === currentLocation.row + 1 || square.row === currentLocation.row - 1) {
                    onBoardMoves = [];
                }
            }
        });
        
        
        

        functions.removeKingFriendly(piecesInPath,activePlayer);
        
        let takeableSquares = [];
        piecesInPath.forEach(piece => {
            takeableSquares.push(board.findPiece(piece));
        });

        const allMoves = takeableSquares.concat(onBoardMoves);
        return allMoves;
    }
}
    