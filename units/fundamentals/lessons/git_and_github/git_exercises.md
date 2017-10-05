# Git Exercises

## First Set

1. Using `git init`, create a new repository.
2. Using the `touch` command, create empty files called foo and bar in your repository directory.
3. Using `git add foo`, add `foo` to the staging area. Confirm with `git status` that it worked.
4. Using `git commit -m` and an appropriate message, add foo to the repository.
5. Using `git add bar`, add bar to staging area. Confirm with git status that it worked.
6. Now run `git commit` without the `-m` option. Use your Vim knowledge to add the message `“Add bar”`, save, and quit.
6. Using `git log`, confirm that the commits made in the previous exercises worked correctly.

## Second Set

1. Use touch to create an empty file called baz.
2. Add baz to the staging area using `git add .`, then commit with the message `"Add bazz"`.
3. Realizing there’s a typo in your commit message, change bazz to baz using `git commit --amend`.
4. Run git log to get the id of the last commit, then view the diff using `git show <id>` to verify that the message was amended properly.

### Third Set

1. The `git log` command shows only the commit messages, which makes for a compact display but isn’t particularly detailed. Verify by running `git log -p` that the `-p` option shows the full diffs represented by each commit.
2. Create a file `README.md`, add and commit it.
3. Create a git repo. Connect y commit messages, which makes for a compact display but isn’t particularly detailed. Verify by running `git log -p` that the `-p` option shows the full diffs represented by each commit.
2. Create a file `README.md`, add and commit it.
3. Create a git repo. Connect your local repo to the remote one.
4. Add the line `# hello there` at the top of `README.md`.
5. Commit the new line with a commit message of your choice. Verify using `git log -p` that the change was committed as expected.
6. Push your changes: `git push origin master`. On github, click on the commit to verify the changes.

### Fourth Set

1. Using the markdown below, add a line at the end of the README with a link to the official Git documentation:

```markdown
~/repos/website/README.md
 For more information on Git, see the
[official Git documentation](https://git-scm.com/).
```

2. Commit your change with an appropriate message. Why not?

3. Push your change to GitHub. By refreshing your browser, confirm that the new line has been added to the rendered README. Click on the “official Git documentation” link to verify that it works.