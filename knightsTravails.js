function knightMoves(start, end) {
    const moves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    function isValid(x, y) {
        return x >= 0 && x < 8 && y >= 0 && y < 8;
    }
}