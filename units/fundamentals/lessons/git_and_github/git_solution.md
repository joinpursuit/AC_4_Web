# Git Solution

## First Set
1. cd Desktop mkdir git_exercises cd git exercises
2. git init
3. touch foo bar
4. ls
5. git status
6. 
  * git add foo 
  * git status
7. git commit -m "add foo"
8. git status
9. 
  * git add bar
  * git status
10. git commit -m "Add bar"
11. git log

## Second Set
1. touch baz
2. ls
3. git status
4. 
  * git add . 
  * git commit -m "Add bazz"
5. git commit --amend -m "Add baz"
6. 
  * git log
  * git show <id>
  
## Third Seet
1. git log -p
2. 
  * touch README.md 
3. git remote add origin https://github.com/coreyladovsky/git_exercises.git
4.  
  * atom README.md
  * # hello
5. 
  * git status
  * git add .
  * git status
  * commit -m "hello readme"
  * git status
6. git push origin master
7. git checkout -b 'second_branch'
8. git branch
9. 
  * git status
  * git add .
  * git status
  * commit -m "second branch create"
10. ls
11. git checkout master
12. git branch
13. ls
14. git merge second_branch
15. ls 

