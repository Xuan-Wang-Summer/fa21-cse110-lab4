1. Line 12 will print 3. Because i is declared as var so that it can be accessed outside of for loop and i = price.length + 1.
2. Line 13 will print 150. Because discountedPrice is declared as var so that it can be accessed outside of for loop and can be modified at line 7. Also, discountedPrice stores the last value calculated in line 7, which = 300 * (1-0.5) = 150.
3. Line 14 will print 150. Because finalPrice is declared as var so that it can be modified at line 8.
4. The function returns [ 50, 100, 150 ], which is discounted. Because discounted is declared as var, which can be accessed everywhere and because discounted stores 3 finalPrice in sequence.
5. The code returns an error because i is declared inside the for loop  using let, it cannot be accessed outside of the for loop.
6. The code returns an error because discountedPrice is declared inside the for loop  using let, it cannot be accessed outside of the for loop.
7. Line 14 will print 150. Because finalPrice is declared as var so that it can be modified at line 8 and because line 14 is in the same block with line 3, which is where finalPrice is declared.
8. The function returns [ 50, 100, 150 ], which is discounted. Because discounted stores 3 finalPrice in sequence and because discounted is declared in line 3, which is in the same block as return so that it can be accessed.
9. The code returns an error because i is declared inside the for loop  using let, it cannot be accessed outside of the for loop.
10. The code returns 3, which is the length. Because length is declared as const in line 4, which is in the same block as line 12 so that it can be accessed. Also, there is no attemp to modify length so that no error will be generated.
11. The function returns [ 50, 100, 150 ], which is discounted. Because discounted stores 3 finalPrice in sequence and because discounted is declared in line 3, which is in the same block as return in line 14 so that it can be accessed. And we can push to discounted because pushing to an array is not re-assigning or re-declaring const.
12. A. student.name\
    B. student['Grad Year']\
    C. student.greeting()\
    D. student['Favorite Teacher'].name\
    E. student.courseLoad[0]
13. A. '32'. The result gives a string '32', because integer 2 maps to string'2' and '3'+'2' become '32'.\
    B. 1. The result gives an integer 1, because string '3' maps to integer 3 and integer 3 is substracted by 2, which gets 1.\
    C. 3. null maps to integer 0.\
    D. '3null'. null maps to string 'null'.\
    E. 4. true maps to integer 1.\
    F. 0. false maps to integer 0 and null maps to integer 0.\
    G. '3undefined'. undefined maps to string 'undefined'.\
    H. NaN. string '3' maps to integer 3 and undefined maps to NaN, then 3-NaN = NaN.
14. A. true. string '2' maps to integer 2.\
    B. false. In string comparison,'2' comes after '1' in lexicographical order.\
    C. true. string '2' maps to integer 2. \
    D. false. integer 2 and string '2' are not in the same type.\
    E. false. true maps to 1.\
    F. true. Boolean(2) maps to true.
15. A strict equality operator === checks the equality without type conversion. While == checks the equality with type conversion.
16. See the script "part2-question16.js" and the result I print out is 21 45 5 2 (list vertically).
17. The function returns [2, 4, 6]. Because in the for loop, we call doSomething to mutliple each element in array by 2, then we pushed them in sequence to newArr.
18. See the script "part2-question18.js"
19. 1\
    4\
    3\
    2