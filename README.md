
# Questions Ansewer

## 1- Add at least 3 Project features

 #### Course Selection: 
 - This feature allows users to browse and select courses from a list. The course data is typically fetched from a JSON file or an API, and it is displayed in a user-friendly format, making it easy for users to choose the courses they want to register for..

  #### Price Display:
 - Each course in the list is accompanied by its price. This helps users make informed decisions about which courses to select based on their budget or preferences.

  #### Credit Limit: 
 - Users are assigned a credit limit, typically set at 20 credits. The code is designed to prevent users from exceeding this limit when selecting courses. This ensures that users do not register for more courses than they are allowed to take in a given semester.

  #### Toast Notifications:
 - The code utilizes the React-Toastify library to provide toast notifications to users. These notifications are used to inform users about various actions and events in a user-friendly way. For example, when a user successfully selects a course, they might receive a toast notification confirming their selection. Similarly, if a user attempts to exceed their credit limit or lacks the necessary funds, they will be notified through toast messages.


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


