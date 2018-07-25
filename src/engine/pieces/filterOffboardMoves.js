function filterOffboardMoves(moves) {
    return moves.filter(square => square.row > -1 && square.row < 8 && square.col > -1 && square.col < 8);
}

module.exports=filterOffboardMoves;