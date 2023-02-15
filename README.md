# l2emicroproject

Student Enrollment Form UsingJPDB
-------------------
Web Form which stores the Students data through the web page in an STU-REL table in STUDENT Database through Save button.

Benefits of using JsonPowerDB
----------------------------------
Simple to use Real-time Database Reduced development and maintainance cost Maximum data processing performance

Release History
---------------
7th August 2022

Illustrations
--------------
Enter the data into the Web Form (student roll no, fullname,class,birthdate,address,enrollment date)

Click the save button

On-click
Validate the data
Creating PUT request
Executing the request(If it is new one save or existing then provide the data)
Reset the data

Check the results on http://api.login2explore.com:5577/user/jpdb_view.html

Scope of functionalities
------------------------
  saveData(): On-click of save button 
  
  validateAndGetFormData(): Validates the data;
  
  createPUTRequest() and executeCommandAtGivenBaseUrl(): For request creation and execution (Taken from "http://login2explore.com/jpdb/resources/js/0.0.3/jpdb-         commons.js");
  
  resetForm(): resets form for the new data entry

Examples of use
----------------
Backend database in dynamic web application/ Mobile/ Desktop Apps

Project status
---------------
Completed the linking of JPDB to the Web Form.
Performed all the functionalities.

Sources
---------
Introduction to JsonPowerDB: https://learn.login2explore.com/course/view.php?id=7
