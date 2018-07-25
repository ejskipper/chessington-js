import Piece from './piece';
import Square from '../square';
const filterOffboardMoves = require('./filterOffboardMoves');

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentLocation=board.findPiece(this);
        let moves=[];
        const activePlayer = this.player;
        let piecesInPath=[];

        let myRow1 = currentLocation.row;
        let myCol1 = currentLocation.col;
        do {
            const blockingPiece = board.getPiece(Square.at(myRow1+1,myCol1+1));
            if (blockingPiece) {
                piecesInPath.push(blockingPiece);
                break;
            }
            moves.push(Square.at(myRow1+1,myCol1+1));
            myRow1++;
            myCol1++;
        } while (0<myRow1 && myRow1<7 && 0<myCol1 && myCol1<7);

        let myRow2 = currentLocation.row;
        let myCol2 = currentLocation.col;
        do {
            const blockingPiece = board.getPiece(Square.at(myRow2+1,myCol2-1));
            if (blockingPiece) {
                piecesInPath.push(blockingPiece);
                break;
            }
            moves.push(Square.at(myRow2+1,myCol2-1));
            myRow2++;
            myCol2--;
        } while (0<myRow2 && myRow2<7 && 0<myCol2 && myCol2<7);

        let myRow3 = currentLocation.row;
        let myCol3 = currentLocation.col;
        do {
            const blockingPiece = board.getPiece(Square.at(myRow3-1,myCol3+1));
            if (blockingPiece) {
                piecesInPath.push(blockingPiece);
                break;
            }
            moves.push(Square.at(myRow3-1,myCol3+1));
            myRow3--;
            myCol3++;
        } while (0<myRow3 && myRow3<7 && 0<myCol3 && myCol3<7);

        let myRow4 = currentLocation.row;
        let myCol4 = currentLocation.col;
        do {
            const blockingPiece = board.getPiece(Square.at(myRow4-1,myCol4-1));
            if (blockingPiece) {
                piecesInPath.push(blockingPiece);
                break;
            }
            moves.push(Square.at(myRow4-1,myCol4-1));
            myRow4--;
            myCol4--;
        } while (0<myRow4 && myRow4<7 && 0<myCol4 && myCol4<7);

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