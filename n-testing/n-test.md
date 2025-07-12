Test case: 'seconds' value passed to the Timer constructor is not a number

Steps: User attempts to create a timer with an invalid value. Frontend passes a NaN seconds value to the Timer class.

Expected Result: The Timer constructor ignores the invalid value and assumes a value of 600 seconds (10 minutes).
