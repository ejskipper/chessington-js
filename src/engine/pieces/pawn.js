import Piece from './piece';
import Square from '../square';
import Board from '../board';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }
    
    getAvailableMoves(board) {
        const location=board.findPiece(this)
        const stringLocation = `${location.row},${location.col}`

        switch (stringLocation) {
        case '2,0': 
            return [Square.at(3,0)]
        break;
        case '1,7':
            return [Square.at(2,7),Square.at(3,7)];
        break; 
        case '5,0':
            return [Square.at(4,0)]
        break;
        case '6,7':
            return    [Square.at(4,7),Square.at(5,7)];
        break;
        }
    }
}
