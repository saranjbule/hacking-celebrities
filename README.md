# Title
Hacking Celebrities

# Description
A cross-platform app that fetches JSON objects of celebrity's data and displays it in accordion. 
It enables adult celebrities to hide their identity by updating their details and also to deleting them.

# Technology Stack
ReactJS, MUI, JavaScript, CSS, HTML, JSX

# Working Demo
URL- https://drive.google.com/file/d/1c_LM8xPbkcN3D2u-rVFITZQ0hpFQe8_Q/view?usp=share_link

# Problem Statement 
You are a famous hacker who has access to a list of the world's most famous celebrities.
You have to create a system where you can view and edit their details to hide their public presence.

Your mission if you choose to accept it, you have to:

1. Create the user interface provided with the design provided

2. The user list item is an accordion,

   - when clicked on, it will cause all the other accordions to collapse and enlarge the one which was clicked.
   - If clicked on the same one it will collapse.
   - Manage the + and - icons in open or collapsed mode (collapsed = - | open = +)

3. Fetch the JSON file provided to fill the list of users. (NOTE - YOU CANNOT EDIT THE JSON FILE)

   - You have to calculate the age of the user based on the date of birth provided
   - gender should be a dropdown (Male | Female | Transgender | Rather not say | Other)
   - country is a text field
   - Description is a text area

4. Provide buttons to edit or delete

   - edit mode will let you edit the details of the user in the exact place
   - you can only edit the user if the user is an adult
   - validations to be implemented where a user cannot
     -- input text in the age field
     -- input numbers in the nationality
     -- keep anything empty
   - when in edit mode you can either save or cancel
     -- save button will be disabled by default and will enable only if the details have changed
     -- save click will update the user's details
     -- cancel will revert the details to their last known state
     -- you cannot open another accordion while in edit mode
   - delete mode should alert you if you actually want to delete the user
     -- if yes - the user will be deleted
     -- if no - do nothing

5. Typescript is a plus

This message will self destruct in 5... 4... 3... 2... 1... NOT

# Images
![Screenshot (11)](https://user-images.githubusercontent.com/48684466/216748605-6cb91879-fe16-4e0b-8be6-3a6c1469c802.png)
![Screenshot (12)](https://user-images.githubusercontent.com/48684466/216748609-706661c7-6c48-4ca0-9363-3f5e98c60cb7.png)
![Screenshot (15)](https://user-images.githubusercontent.com/48684466/216748610-3a04a799-5c15-4081-82a7-d0c6005734da.png)
![Screenshot (14)](https://user-images.githubusercontent.com/48684466/216748612-1016886c-79aa-4158-a885-66b35a9197c3.png)

