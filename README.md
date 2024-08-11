<h1>Gesture API</h1>
This API lets create gesture data by either uploading a .json file or by creating a new entry in directly in the database.
<h2>Usage</h2>
To start the application run <a href="https://github.com/RobinZitt/gestureAPI/blob/master/bin/www">www</a>.
This will start a local server at <a href="http://localhost:3000">http://localhost:3000</a>.
To create a new entry in the database either upload a .json file at the very top of the page or press the "Create new entry"
button. A correct schema for the .json file looks like this: <a href="https://github.com/RobinZitt/gestureAPI/blob/master/exampleGesture.json">exampleGesture</a>.
<br>
To view the data entries in the database click the "Show data" button. This will display each entry in the database as a button.
Pressing one of these buttons will display all the details of this entry. Furthermore, you will be able to update or delete
the data here.
<br>
To analyse a gesture press the "Analyse Gesture!" button right next to the update and delete buttons. This will create a 
new entry in the database for analysed gestures. Based on the position vales of the gesture data a prediction is made on
which gesture was performed. The possible gesture predictions are:
<ul>
<li>Swipe Left</li>
<li>Swipe Right</li>
<li>Swipe Up</li>
<li>Swipe Down</li>
<li>Point</li>
<li>Wave</li>
<li>Rotate Clockwise</li>
<li>RotateCounterclockwise</li>
</ul>
<br>
To view the analysed data press the "Show Analysis" button.

<h2>Tests</h2>
To execute the unit tests run the test suits inside <a href="https://github.com/RobinZitt/gestureAPI/blob/master/tests/tests.js">tests.js</a>.
To make sure that the test work correctly only run the test suits on not the single tests.