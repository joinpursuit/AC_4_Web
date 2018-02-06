# Git and Working in Groups

### Resources

* [Git Branching & Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
* [Pull Request Tutorial](https://yangsu.github.io/pull-request-tutorial/)
* [Merging a Pull Request](https://help.github.com/articles/merging-a-pull-request/)
* [About Merge Conflicts](https://help.github.com/articles/about-merge-conflicts/)
* [Resolving a Merge Conflict Using the Command Line](https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/)

## Overview

Largely, you've been `git add`-ing, `git push`-ing, and `git commit`-ing, likely without much thought about what you're doing. After all, what's the risk? If you mess up, you can always just revert to a previous commit. Besides, it's your repo anyways, right?

Well, that's about to change. Why? Because you'll be working with other people on the same repository. This is known as the **shared-repository model**.

## Before We Get Into Git: Roles

In team-based development, everybody pitches in to ensure all aspects of the application are functional, well-designed, and a pleasure to use. However, in order to ensure that no aspect of the application is neglected, you will divide up ownership into roles.

For this project, you'll be separated into groups of four. Your four roles are as follows:

**Project Manager**

Project managers ensure that stuff gets done. They ensure that the others are on task. They delegate the day's responsibilities. They lead group meetings. Finally, they manage the group's Trello/Asana boards (which we won't be using for this project). It's crucial that they maintain a bird's eye view on project progression.

**Technical Lead**

The technical lead is in charge of maintaining the Git repository. They make decisions about project architecture in collaboration with other group members. They review pull requests and resolve any merge conflicts.

**UI/UX**

UI/UX designers ensure that the design of the app is beautiful and that the flow of the app makes sense. They don't just write CSS - they work in collaboration with their fellow team members to make sure that design decisions and their implementations are made with the user in mind.

**QA**

The QA manager is responsible for reviewing code for bugs and testing the master branch for issues. They consider edge cases and predict implementation issues before they happen. If you've ever used a buggy or crash-prone app, you know that QA is essential to ensure a project's success.

Now that we've got roles down, let's git into Git (lol):

## Git Branches

```
git branch new-feature
git checkout new-feature
```

Or, more succinctly:

```
git checkout -b new-feature
```

Git branches are, essentially, copies of the main project. They allow you to make changes without the pressure of committing to the master branch. **Branches are essential to an effective collaboration using Git.**

Why, do you ask? Well, in order to understand that, we have to understand pulls.

## Git Fetches, Pulls, and Pull Requests

`git fetch` and `git pull` are two essential commands in Git. They seem to do the same thing, but they are, in fact, quite different.

`git fetch` grabs remote data from the repository, but doesn't modify your working (local) branch.

`git pull` grabs remote date from the repository, and then *attempts to sync* your working branch with the repository. It is, essentially, shorthand for `git fetch` and `git merge`. This can be bad, because if you and a colleague are working on the same code, you can run into **merge conflicts**.

You can try to avoid merge conflicts by making **pull requests**.

## Merging branches

Once you've implemented your feature or fixed your bug in your working branch, make sure you `git push` to that branch. Then, you can go to the GitHub page and make a pull request to try to merge your working branch with the master. The project manager will then review, get a chance to comment, and then can merge with the main branch.

## Merge Conflicts

I'm working on a project with Susie. We both, accidentally, implement the same sorting algorithm. My version is implemented first. However, Susie makes a pull request with her algorithm. This creates what's known in Git as a **merge conflict**.

Avoid merge conflicts like the plague! They represent redundant efforts, they are annoying to resolve, and if there are a lot of them, they can be downright terrible. For example, say my sorting algorithm sorted our data in alphabetical order, and Susie's sorted in reverse alphabetical order. This would affect **every part** of the app that depends on that algorithm.

[Project](../../project/git_and_groups/git_and_groups.md)
