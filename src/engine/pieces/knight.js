import Piece from './piece';
import Square from '../square';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentLocation=board.findPiece(this);
        let moves=[];
        
        moves.push(Square.at(currentLocation.row+2,currentLocation.col+1));
        moves.push(Square.at(currentLocation.row+2,currentLocation.col-1));
        moves.push(Square.at(currentLocation.row-2,currentLocation.col+1));
        moves.push(Square.at(currentLocation.row-2,currentLocation.col-1));
        moves.push(Square.at(currentLocation.row+1,currentLocation.col+2));
        moves.push(Square.at(currentLocation.row+1,currentLocation.col-2));
        moves.push(Square.at(currentLocation.row-1,currentLocation.col+2));
        moves.push(Square.at(currentLocation.row-1,currentLocation.col-2));

        const onBoardMoves = moves.filter(square => square.row > -1 && square.row < 8 && square.col > -1 && square.col < 8);
        return onBoardMoves;
    }
}
