var current_player = 'X';
var next_player = 'O';
var turns = 0;
var input = process.stdin;
input.setRawMode(1);
// input.resume();
input.setEncoding('utf8');
var output = process.stdout;
var board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function render() {
  output.write('\033c' + 'turn: ' + current_player + '\n' + board[0]+ '|'+board[1]+'|'+board[2]+'\n' + board[3]+'|'+board[4]+'|'+board[5]+'\n'+board[6]+'|'+board[7]+'|'+board[8]+'\n');
}

function turn(f) {
  if (typeof board[f - 1] == 'number'){
    board[f - 1] = current_player;
    if (current_player == 'X') {
      current_player='O';
      next_player = 'X';
    } else {
      current_player='X';
      next_player = 'O';
    }

    turns++;
  }
}

function W() {
  if(
       (board[0] == board[4] && board[4] == board[8])
    || (board[2] == board[4] && board[4] == board[6])
    || (board[0] == board[1] && board[1] == board[2])
    || (board[3] == board[4] && board[4] == board[5])
    || (board[6] == board[7] && board[7] == board[8])
    || (board[0] == board[3] && board[3] == board[6])
    || (board[1] == board[4] && board[4] == board[7])
    || (board[2] == board[5] && board[5] == board[8])) {
      return 1;
    }
}

input.on('data', function (k) {
  if (k == 'q') {
    process.exit()
  };
  if (k > 0 && k <= 9)
  turn(k);
  render();
  if (W()) {
    output.write(next_player +' WINS'+ '\n');
    process.exit();
  }
  if (turns > 8) {
    output.write("It's a draw!\n");
    process.exit();
  }
});

render();
