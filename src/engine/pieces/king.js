import Piece from './piece';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentLocation=board.findPiece(this);
        let moves=[];

        moves.push(Square.at(currentLocation.row, currentLocation.col+1));
        moves.push(Square.at(currentLocation.row-1, currentLocation.col+1));
        moves.push(Square.at(currentLocation.row-1, currentLocation.col));
        moves.push(Square.at(currentLocation.row-1, currentLocation.col-1));
        moves.push(Square.at(currentLocation.row, currentLocation.col-1));
        moves.push(Square.at(currentLocation.row+1, currentLocation.col-1));
        moves.push(Square.at(currentLocation.row+1, currentLocation.col));
        moves.push(Square.at(currentLocation.row+1, currentLocation.col+1));

        return moves;
    }
}
