function filterOffboardMoves(moves) {
    return moves.filter(square => square.row > -1 && square.row < 8 && square.col > -1 && square.col < 8);
}

function removeKingFriendly(piecesInPath,activePlayer) {
piecesInPath.forEach(piece => {
    if (piece.player === activePlayer || piece.constructor.name === 'King') {
        const index = piecesInPath.indexOf(piece);
        piecesInPath.splice(index,1);
    }
});
return piecesInPath;
}

module.exports={filterOffboardMoves,removeKingFriendly};