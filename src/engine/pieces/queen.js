import Piece from './piece';
import Square from '../square';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        return [Square.at(2, 0), Square.at(2, 1), Square.at(2, 2), Square.at(2, 4), Square.at(2, 5), Square.at(2, 6), Square.at(2, 7),
            Square.at(0, 3), Square.at(1, 3), Square.at(3, 3), Square.at(4, 3), Square.at(5, 3), Square.at(6, 3), Square.at(7, 3),
            Square.at(0, 1), Square.at(1, 2), Square.at(3, 4), Square.at(4, 5), Square.at(5, 6), Square.at(6, 7),
            Square.at(0, 5), Square.at(1, 4), Square.at(3, 2), Square.at(4, 1), Square.at(5, 0)
         ];
    }
}
