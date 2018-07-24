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

        let myRow1 = currentLocation.row;
        let myCol1 = currentLocation.col;
        while (0<myRow1 && myRow1<7 && 0<myCol1 && myCol1<7) {
            moves.push(Square.at(myRow1+1,myCol1+1))
            myRow1++;
            myCol1++;
        }

        let myRow2 = currentLocation.row;
        let myCol2 = currentLocation.col;
        while (0<myRow2 && myRow2<7 && 0<myCol2 && myCol2<7) {
            moves.push(Square.at(myRow2+1,myCol2-1))
            myRow2++;
            myCol2--;
        }

        let myRow3 = currentLocation.row;
        let myCol3 = currentLocation.col;
        while (0<myRow3 && myRow3<7 && 0<myCol3 && myCol3<7) {
            moves.push(Square.at(myRow3-1,myCol3+1))
            myRow3--;
            myCol3++;
        }

        let myRow4 = currentLocation.row;
        let myCol4 = currentLocation.col;
        while (0<myRow4 && myRow4<7 && 0<myCol4 && myCol4<7) {
            moves.push(Square.at(myRow4-1,myCol4-1))
            myRow4--;
            myCol4--;
        }

        console.log(moves);
