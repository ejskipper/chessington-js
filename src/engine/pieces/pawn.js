import Piece from './piece';
import Square from '../square';
import Board from '../board';
import Player from '../player';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }
    
    getAvailableMoves(board) {
        const currentLocation=board.findPiece(this);
        let moves=[];

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

        
        
        moves.forEach(square => {
            const blockingPiece = board.getPiece(square)
            if (blockingPiece) {
                const index = moves.indexOf(square);
                moves.splice(index,1);
                if (square.row === currentLocation.row + 1 || square.row === currentLocation.row - 1) {
                    moves = [];
                }
            }
            
        })  
        return moves;
    }
}
    