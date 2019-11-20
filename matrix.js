module.exports = {
    print: (matrix) => {
        //  goes through rows and columns and prints the matrix
        for (let i = 0; i < matrix.length; i++) {
            let row = '';
            for (let j = 0; j < matrix[0].length; j++) {
                row += '' + matrix[i][j] + ' ';
            }
            console.log('[ ' + row + ' ]');
        }
    }
}