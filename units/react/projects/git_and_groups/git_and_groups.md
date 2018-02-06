# Your First Group Project: A Clicker Game

Use [Cookie Clicker](http://orteil.dashnet.org/cookieclicker/) as inspiration for this project.

In your groups of four, implement a [clicker game](https://en.wikipedia.org/wiki/Incremental_game) using React (optional: Redux), Express, and SQL.

Clicker games are not that different from counter apps, but our app will be the most complex counter app you'll create. Your players will click a button to gain points. They will be able to purchase powerups with those points that make those clicks accrue more points.

For example, your user is, initially, gaining 1 point per click. They might be able to purchase a powerup, for 20 points, that adds +1 point per click, increasing their total points-per-click to 2. Then, they purchase a x2 multiplier for 100 points. This makes them accrue 4 points per click, and so on.

Your app should include these primary features:

* **Register/login** pages that allow users to create new accounts and login to existing ones. User accounts should remember their total number of clicks, powerups, etc., and should be protected by user authentication and session management.
* A **main interface** that shows the user's name, total number of points attained, powerups attained, and the all-important clicker button.
* A **store** that lets you purchase powerups with accrued points.

It should also, likely, have these qualities:

* A strong **theme** - what do your points represent? What are your powerups called? Use Cookie Clicker as inspiration here.
* Elegant **styling**.
* Clean, well-commented **code**.

Optionally, you are welcome to implement these features:

* **Automation**. Certain powerups may allow points to accrue automatically. Use setInterval (while the user has the app open) and Date objects and methods (while the user is away) to implement this feature.
* **Redux**. Not strictly necessary for this, but good to implement.

See us if, after all your work, you're interested in deploying this somewhere - we'd be happy to help.
