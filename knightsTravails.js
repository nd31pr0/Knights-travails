function knightMoves(start, end) {
    const moves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    function isValid(x, y) {
        return x >= 0 && x < 8 && y >= 0 && y < 8;
    }

    const queue = [{ position: start, path: [start] }];
    const visited = new Set();
    visited.add(`${start[0]},${start[1]}`);

    while (queue.length > 0) {
        const { position, path } = queue.shift();
        const [x, y] = position;

        // Check if we reached the end position
        if (x === end[0] && y === end[1]) {
            console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
            path.forEach(square => console.log(square));
            return path; // Return the path taken to reach the end
        }

        // Explore all possible knight moves
        for (const [dx, dy] of moves) {
            const newX = x + dx;
            const newY = y + dy;

            if (isValid(newX, newY) && !visited.has(`${newX},${newY}`)) {
                visited.add(`${newX},${newY}`);
                queue.push({ position: [newX, newY], path: [...path, [newX, newY]] });
            }
        }
    }
    return [];    
}

knightMoves([3, 3], [4, 3]);