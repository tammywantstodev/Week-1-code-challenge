#Week 1 Code Challenge-Toy Problems
##Student Grade Generator
The program prompts the user to provide an input; a number grade
between 0 and 100. It then uses various conditional statements to
evaluate the grade``(  A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40) ``
and returns an appropriate output. Any grades out of bounds return
undefined.

##Speed Detector
The program prompts the user to provide an input; a number representing
the speed that a car is going. If the speed is below the limit(70),
it returns ``ok``. If the speed is above the limit, it first performs a calculation
then issues demerit points accordingly--``every 5km/s above the limit equals
one demerit point``. If the car exceeds the 12 demerit point allowance then it
returns that their ``licence is suspended``. Otherwise, it ``returns the number of
demerit points`` the car will receive.

##Net Salary Calculator
This program takes in two inputs, the user's basic (gross) salary and the benefits which
assume a default value of zero. With the salary value, the program evaluates it against
various conditions for different deductions such as ``payee tax``, ``NHIF deductions`` and
``NSSF deductions``. Then finally, it deducts the deductions from the basic salary and then
adds the benefits outputting the net salary value to the user.

##Prerequisites
Have Node.js installed on your computer
Clone this repository into your editor ``git clone <git link>``
Run each file using node.js ``node <fileName>``


###Author: Tamara Kaka