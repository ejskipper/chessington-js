class Square {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }

    static at(row, col) {
        return new Square(row, col);
    }

    equals(otherSquare) {
        return !!otherSquare && this.row === otherSquare.row && this.col === otherSquare.col;
    }

    toString() {
        return `Row ${this.row}, Col ${this.col}`;
    }
}
const currentLocation=Square.at(2,3);
        let moves=[];

        for (let i=0;i<8;i++) {
            if (i !== currentLocation.col) {
                moves.push(Square.at(currentLocation.row,i));
            }
            if (i !== currentLocation.row) {
                moves.push(Square.at(i,currentLocation.col));
            }
        }

        console.log(moves);

        [ Square { row: 2, col: 0 },
            Square { row: 0, col: 3 },
            Square { row: 2, col: 1 },
            Square { row: 1, col: 3 },
            Square { row: 2, col: 2 },
            Square { row: 3, col: 3 },
            Square { row: 2, col: 4 },
            Square { row: 4, col: 3 },
            Square { row: 2, col: 5 },
            Square { row: 5, col: 3 },
            Square { row: 2, col: 6 },
            Square { row: 6, col: 3 },
            Square { row: 2, col: 7 },
            Square { row: 7, col: 3 } ]