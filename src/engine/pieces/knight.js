import Piece from './piece';
import Square from '../square';
const functions = require('./functions');

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

        functions.removeKingFriendly(piecesInPath,activePlayer);
        
        let takeableSquares = [];
        piecesInPath.forEach(piece => {
            takeableSquares.push(board.findPiece(piece));
        });

        const onBoardMoves = takeableSquares.concat(functions.filterOffboardMoves(moves));
        return onBoardMoves;
    }
}
