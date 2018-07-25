import Piece from './piece';
import Square from '../square';
const filterOffboardMoves = require('./filterOffboardMoves');

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentLocation=board.findPiece(this);
        let moves=[];
        const activePlayer = this.player;
        let piecesInPath=[];

        let myRow1 = currentLocation.row;
        do {
            const blockingPiece = board.getPiece(Square.at(myRow1+1,currentLocation.col));
            if (blockingPiece) {
                piecesInPath.push(board.getPiece(Square.at(myRow1+1,currentLocation.col)));
                break;
            }
            moves.push(Square.at(myRow1+1,currentLocation.col));
            myRow1++;
        } while (0<myRow1 && myRow1<7);

        let myRow2 = currentLocation.row;
        do {
            const blockingPiece = board.getPiece(Square.at(myRow2-1,currentLocation.col));
            if (blockingPiece) {
                piecesInPath.push(blockingPiece);
                break;
            }
            moves.push(Square.at(myRow2-1,currentLocation.col));
            myRow2--;
        } while (0<myRow2 && myRow2<7);

        let myCol1 = currentLocation.col;
        do {
            const blockingPiece = board.getPiece(Square.at(currentLocation.row,myCol1+1));
            if (blockingPiece) {
                piecesInPath.push(blockingPiece);
                break;
            }
            moves.push(Square.at(currentLocation.row,myCol1+1));
            myCol1++;
        } while (0<myCol1 && myCol1<7);

        let myCol2 = currentLocation.col;
        do {
            const blockingPiece = board.getPiece(Square.at(currentLocation.row,myCol2-1));
            if (blockingPiece) {
                piecesInPath.push(blockingPiece);
                break;
            }
            moves.push(Square.at(currentLocation.row,myCol2-1));
            myCol2--;
        } while (0<myCol2 && myCol2<7);

        
        piecesInPath.forEach(piece => {
            if (piece.player === activePlayer || piece.constructor.name === 'King') {
                const index = piecesInPath.indexOf(piece);
            piecesInPath.splice(index,1);
            }
        });
        
        let takeableSquares = [];
        piecesInPath.forEach(piece => {
            takeableSquares.push(board.findPiece(piece));
        });

        const onBoardMoves = takeableSquares.concat(filterOffboardMoves(moves));
        return onBoardMoves;
    }
}
