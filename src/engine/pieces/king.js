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

        // moves.forEach(square => {
        //     if (square.col < 0 || square.col > 8 || square.row < 0 || square.row > 8) {
        //         const index = moves.indexOf(square);
        //         moves.splice(index,1);
        //     }
        // });

        const onBoardMoves = moves.filter(square => square.row > -1 && square.row < 8 && square.col > -1 && square.col < 8);

        return onBoardMoves;
    }
}
