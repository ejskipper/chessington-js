import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentLocation=board.findPiece(this);
        let moves=[];

        let myRow1 = currentLocation.row;
        do {
            const blockingPiece = board.getPiece(Square.at(myRow1+1,currentLocation.col));
            if (blockingPiece) {
                break;
            }
            moves.push(Square.at(myRow1+1,currentLocation.col));
            myRow1++;
        } while (0<myRow1 && myRow1<7);

        let myRow2 = currentLocation.row;
        do {
            const blockingPiece = board.getPiece(Square.at(myRow2-1,currentLocation.col));
            if (blockingPiece) {
                break;
            }
            moves.push(Square.at(myRow2-1,currentLocation.col));
            myRow2--;
        } while (0<myRow2 && myRow2<7);

        let myCol1 = currentLocation.col;
        do {
            const blockingPiece = board.getPiece(Square.at(currentLocation.row,myCol1+1));
            if (blockingPiece) {
                break;
            }
            moves.push(Square.at(currentLocation.row,myCol1+1));
            myCol1++;
        } while (0<myCol1 && myCol1<7);

        let myCol2 = currentLocation.col;
        do {
            const blockingPiece = board.getPiece(Square.at(currentLocation.row,myCol2-1));
            if (blockingPiece) {
                break;
            }
            moves.push(Square.at(currentLocation.row,myCol2-1));
            myCol2--;
        } while (0<myCol2 && myCol2<7);


    return moves;
    }
}
