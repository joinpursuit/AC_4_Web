# Cryptography

### Some Basics
We learned from Crypto Chris that plain text
passwords are _no good_. We also learned that
md5 encryption is _no good_ because it is easily
reversed.

### Exercise: MD5 Decrypt
Imagine a database row with a username 'sandwich'
and a password '2fe238cdc81d1d42232d54c47b3e172a'.
If you know this password is md5 encrypted without
a salt, what is the plaintext password of user
'sandwich'?

What is the plaintext password of user 'boomshaboom'
with passord 'e10adc3949ba59abbe56e057f20f883e'?

### Exercise: Rainbow Tables
In this directory is a SQLite database stored in
the file _unsaltedusers.db_. All of the passwords are
stored as SHA256 encryptions. The directory also
contains a file _rainbowtable.js_. Use
_rainbowtable.js_ to find the user with the plaintext
password '123456'.

The sample database and rainbow table are small enough
to determine the answer visually but please build a
programatic solution that would work with a much
larger database and a much larger rainbow table.
