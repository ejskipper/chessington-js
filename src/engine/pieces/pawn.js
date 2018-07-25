import Piece from './piece';
import Square from '../square';
import Player from '../player';
const filterOffboardMoves = require('./filterOffboardMoves');

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
            break;

            case Player.BLACK:
                moves.push(Square.at(currentLocation.row-1,currentLocation.col));
        
            if (currentLocation.row === 6) {
                moves.push(Square.at(currentLocation.row-2,currentLocation.col));
            }
            break;
        }

        let onBoardMoves = filterOffboardMoves(moves);
        
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
        return onBoardMoves;
    }
}
    