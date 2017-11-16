# Node `fs` Module - Exercises

All of the following exercises should be done only by writing a JavaScript file that uses the `fs` module to manipulate your file system. You should not manually open any files and write or copy and paste anything from them, and you should not manually create or manipulate any folders. You can, however, manually open a file to check if your code worked as expected.

## File exercises

- create a new file called `lyrics-1.txt`
- choose any song and look up the lyrics. write the first two lines of the lyrics into the `lyrics-1.txt` file.
- read the contents from `lyrics-1.txt` and log the contents to the console
- create a new file called `lyrics-2.txt`
- write the next two lines of the song into the `lyrics-2.txt` file.
- read the contents from both `lyrics-1.txt` and `lyrics-2.txt` and log both to the console
- create a new file called `lyrics-3.txt` and write the contents from both `lyrics-1.txt` and `lyrics-2.txt` into `lyrics-3.txt`

## Folder exercises

- create a new folder called `folder-1`
- delete the folder that you just created
- created 100 new folders, and named them `folder-1`, `folder-2`, `folder-3`, etc., all the way up to `folder-100`
- change the name of all 100 folders to add the word 'new' to the beginning. For example, `new-folder-1`, `new-folder-2`, `new-folder-3`, etc.
- delete all 100 folders

### List Files By Extension

Create a function that prints a list of files in a given directory, filtered by the extension of the files. The user will provided a directory name as the first argument to the function (e.g. '/path/to/dir/') and a file extension to filter by as the second argument.

For example, if you get `'txt'` as the second argument, you will need to only list files that end with `.txt`. Note that the second argument will not come prefixed with a `'.'`.

The list of files should be printed to the console, one file per line. You must use asynchronous I/O.

Use the core node `path` module for its [extname](https://nodejs.org/api/path.html#path_path_extname_path) method.

## Challenges

Only attempt these if you've finished all of the other exercises:

### Jabberwocky

- copy and paste the following poem into a JavaScipt file (if you're curious, you can [read about this poem here](https://en.wikipedia.org/wiki/Jabberwocky)). Then create 28 new files, and call them `jabb-1.txt`, `jabb-2.txt`, etc, all the way up to `jabb-28.txt`. Add one line of the poem, in order, to each file. Once you have all 28 files, create a master file called `jabb-master.txt` that contains the text of the entire poem.:

```js
//Jabberwocky by Lewis Carroll

var poem = '’Twas brillig, and the slithy toves \n      Did gyre and gimble in the wabe: \nAll mimsy were the borogoves, \n      And the mome raths outgrabe. \n\n“Beware the Jabberwock, my son! \n      The jaws that bite, the claws that catch! \nBeware the Jubjub bird, and shun \n      The frumious Bandersnatch!” \n\nHe took his vorpal sword in hand; \n      Long time the manxome foe he sought— \nSo rested he by the Tumtum tree \n      And stood awhile in thought. \n\nAnd, as in uffish thought he stood, \n      The Jabberwock, with eyes of flame, \nCame whiffling through the tulgey wood, \n      And burbled as it came! \n\nOne, two! One, two! And through and through \n      The vorpal blade went snicker-snack! \nHe left it dead, and with its head \n      He went galumphing back. \n\n“And hast thou slain the Jabberwock? \n      Come to my arms, my beamish boy! \nO frabjous day! Callooh! Callay!” \n      He chortled in his joy. \n\n’Twas brillig, and the slithy toves \n      Did gyre and gimble in the wabe: \nAll mimsy were the borogoves, \n      And the mome raths outgrabe.';
```

### Watch Me

- create a file called `watch-me.txt` that is initially empty. Create another empty file called `new-text.txt`. Use `fs.watch` so that whenever you add new text to the `watch-me.txt` file, the `new-text.txt` file will automatically get the same content  (you can manually open up the `watch-me.txt` file and add new text to it to test this out)
- create a JavaScript file that lets you enter a filename and some text into the command line in your terminal. The script should create a new file that contains the text you entered. For example, the following command should create a new file called 'new-file.txt' that contains the text 'this is a test' (hint: use `process.argv`):

```bash
node script.js new-file.txt this is a test
```