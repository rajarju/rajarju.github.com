title: Modulus of nth Fibonacci Number
--------------------

As part of an assignment I was asked to find an optimized algorithm to find the m modulus of nth Fibonacci number.
Sounds pretty easy, untill you see the size of the inputs, n has 30 digits in it.

At this stage, basic methods or brute force methods will take eons to finish this. And I had to go back to Maths to find the solution.
The algorithm came from here http://math.stackexchange.com/questions/784710/how-to-prove-fibonacci-sequence-with-matrices#answer-784723
Using A matrix equation for calculating super huge fibonacci numbers.

What we are trying to achieve is
```
F(n) % n
```

Below is the python code for the same.

<script src="https://gist.github.com/rajarju/3cc220e6f9c9993f7ed2.js"></script>
