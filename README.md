
# Questions Ansewer

## 1- Add at least 3 Project features

 #### Course Catalog:
 - Your application fetches a list of courses from a JSON file, creating a diverse catalog of available courses for users to explore.

  #### Price Transparency:
 - Each course in the catalog displays its associated price, ensuring transparency and allowing users to make informed decisions.

  #### Credit Limit Management:
 - Users are subject to a credit limit of 20. The code monitors selected courses' credit values to prevent users from surpassing this limit.

  #### Interactive User Feedback:
 - To enhance the user experience, the code employs the react-toastify library, which generates informative and non-disruptive toast notifications.
 - When a user attempts to select a course they've already chosen, a notification informs them of their prior selection.
 - If a user exceeds their 20-credit limit, another notification warns them about this constraint.
 - Additionally, if a user's accumulated course prices exceed a predefined threshold, they receive a notification regarding insufficient funds.


 ## 2- Discuss how you managed the state in your assignment project.

 #### State Initialization: 
 - Variables like allCourses, selectedCourse, totalPrice, totalCredit, and remainingCredit are managed with useState.

 #### Fetching Data: 
 - The useEffect hook fetches course data    from a JSON file on component mount.
 #### Course Selection: 
 - handleSelectCourse manages course selection, calculating totals and showing toast notifications for errors.
 #### Rendering Courses: 
 - Courses are dynamically rendered from allCourses, and users can select them.
 #### Cart:
 - A separate component displays selected courses and related info.
 #### Toast Notifications:
 - Feedback for errors like duplicate selections or exceeding limits is provided using react-toastify.


