import Piece from './piece';
import Square from '../square';
const filterOffboardMoves = require('./filterOffboardMoves');

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentLocation=board.findPiece(this);
        let moves=[];
        const activePlayer = this.player;
        let piecesInPath=[];
        
        moves.push(Square.at(currentLocation.row+2,currentLocation.col+1));
        moves.push(Square.at(currentLocation.row+2,currentLocation.col-1));
        moves.push(Square.at(currentLocation.row-2,currentLocation.col+1));
        moves.push(Square.at(currentLocation.row-2,currentLocation.col-1));
        moves.push(Square.at(currentLocation.row+1,currentLocation.col+2));
        moves.push(Square.at(currentLocation.row+1,currentLocation.col-2));
        moves.push(Square.at(currentLocation.row-1,currentLocation.col+2));
        moves.push(Square.at(currentLocation.row-1,currentLocation.col-2));

        moves.forEach(square => {
            if (square.col>-1 && square.col<8 && square.row>-1 && square.row<8) {
            const blockingPiece = board.getPiece(square);
            if (blockingPiece) {
                const index = moves.indexOf(square);
                moves.splice(index,1);
                piecesInPath.push(blockingPiece);
            }
            }
        });

        console.log(piecesInPath);
        piecesInPath.forEach(piece => {
            if (piece.player === activePlayer || piece.constructor.name === 'King') {
                const index = piecesInPath.indexOf(piece);
            piecesInPath.splice(index,1);
            }
        });
        console.log(piecesInPath);
        
        let takeableSquares = [];
        piecesInPath.forEach(piece => {
            takeableSquares.push(board.findPiece(piece));
        });

        const onBoardMoves = takeableSquares.concat(filterOffboardMoves(moves));
        return onBoardMoves;
    }
}
