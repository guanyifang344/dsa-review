window.EXAM_PAPERS = [
  {
    "title": "模拟试卷 一",
    "questions": [
      {
        "id": "exam-1-01",
        "lesson": "L01",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "Which property requires an algorithm to stop after a finite number of steps?",
        "options": [
          "Finiteness",
          "Randomness",
          "Recursion",
          "Sorting"
        ],
        "answer": 0,
        "exp": "Finiteness means the algorithm eventually terminates."
      },
      {
        "id": "exam-1-02",
        "lesson": "L01",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "What is a data structure?",
        "options": [
          "An execution error",
          "A way to organize and store data",
          "A programming language",
          "A single output"
        ],
        "answer": 1,
        "exp": "A data structure organizes data for operations."
      },
      {
        "id": "exam-1-03",
        "lesson": "L01",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "One successful test proves an algorithm is correct for which inputs?",
        "options": [
          "Only sorted inputs",
          "No inputs",
          "Only the tested input",
          "All valid inputs"
        ],
        "answer": 2,
        "exp": "One example cannot establish correctness for every input."
      },
      {
        "id": "exam-1-04",
        "lesson": "L01",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "Which instruction is unambiguous?",
        "options": [
          "Add a little to x",
          "Repeat until it feels right",
          "Choose a nice value",
          "Add exactly 2 to x"
        ],
        "answer": 3,
        "exp": "An algorithm requires precise steps."
      },
      {
        "id": "exam-1-05",
        "lesson": "L02",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "A loop runs n times with constant work each time. Its time complexity is:",
        "options": [
          "O(n)",
          "O(1)",
          "O(log n)",
          "O(n²)"
        ],
        "answer": 0,
        "exp": "Constant work repeated n times is linear."
      },
      {
        "id": "exam-1-06",
        "lesson": "L02",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "Two nested loops each run n times. The total work is:",
        "options": [
          "O(1)",
          "O(n²)",
          "O(n)",
          "O(log n)"
        ],
        "answer": 1,
        "exp": "There are n × n iterations."
      },
      {
        "id": "exam-1-07",
        "lesson": "L02",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "Which grows slowest as n becomes very large?",
        "options": [
          "n²",
          "2ⁿ",
          "log n",
          "n"
        ],
        "answer": 2,
        "exp": "Logarithmic growth is slower than linear growth."
      },
      {
        "id": "exam-1-08",
        "lesson": "L02",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "What does O(1) describe?",
        "options": [
          "Exactly one instruction",
          "Work proportional to n",
          "A sorted input",
          "Work bounded independently of input size"
        ],
        "answer": 3,
        "exp": "Constant complexity does not require exactly one operation."
      },
      {
        "id": "exam-1-09",
        "lesson": "L02",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "If n doubles, approximately how does n² change?",
        "options": [
          "It quadruples",
          "It doubles",
          "It halves",
          "It stays unchanged"
        ],
        "answer": 0,
        "exp": "(2n)² = 4n²."
      },
      {
        "id": "exam-1-10",
        "lesson": "L03",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "What is the index of the first element of a Python list?",
        "options": [
          "The list length",
          "0",
          "1",
          "-1"
        ],
        "answer": 1,
        "exp": "Python uses zero-based indexing."
      },
      {
        "id": "exam-1-11",
        "lesson": "L03",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "What does a[-1] access for a non-empty list?",
        "options": [
          "The second element",
          "An invalid index",
          "The last element",
          "The first element"
        ],
        "answer": 2,
        "exp": "Negative index -1 refers to the last element."
      },
      {
        "id": "exam-1-12",
        "lesson": "L03",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "What is len([4, 8, 2])?",
        "options": [
          "2",
          "4",
          "8",
          "3"
        ],
        "answer": 3,
        "exp": "The list contains three elements."
      },
      {
        "id": "exam-1-13",
        "lesson": "L03",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "For a = [10, 20, 30, 40], what is a[1:3]?",
        "options": [
          "[20, 30]",
          "[10, 20, 30]",
          "[20, 30, 40]",
          "[30]"
        ],
        "answer": 0,
        "exp": "A slice includes its start and excludes its stop."
      },
      {
        "id": "exam-1-14",
        "lesson": "L03",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "What does list.append(x) do?",
        "options": [
          "Adds x to the front",
          "Adds x to the end of the list",
          "Returns a new sorted list",
          "Removes the last element"
        ],
        "answer": 1,
        "exp": "append mutates the list by adding one element at the end."
      },
      {
        "id": "exam-1-15",
        "lesson": "L04",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "What is len('cat')?",
        "options": [
          "4",
          "0",
          "3",
          "2"
        ],
        "answer": 2,
        "exp": "The string contains three characters."
      },
      {
        "id": "exam-1-16",
        "lesson": "L04",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "What does 'abc'[1] return?",
        "options": [
          "'a'",
          "'c'",
          "'bc'",
          "'b'"
        ],
        "answer": 3,
        "exp": "The character at index 1 is b."
      },
      {
        "id": "exam-1-17",
        "lesson": "L04",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "What does 'abc'.upper() return?",
        "options": [
          "'ABC'",
          "'abc'",
          "None",
          "3"
        ],
        "answer": 0,
        "exp": "upper returns a new uppercase string."
      },
      {
        "id": "exam-1-18",
        "lesson": "L04",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "Are Python strings mutable?",
        "options": [
          "Only when sorted",
          "No",
          "Yes, individual characters can be assigned",
          "Only when empty"
        ],
        "answer": 1,
        "exp": "Strings are immutable; create a new string instead."
      },
      {
        "id": "exam-1-19",
        "lesson": "L05",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "After the first complete left-to-right pass of ascending bubble sort, which element is at the end?",
        "options": [
          "The median",
          "Always zero",
          "The largest element",
          "The smallest element"
        ],
        "answer": 2,
        "exp": "Adjacent swaps move the largest element to the end."
      },
      {
        "id": "exam-1-20",
        "lesson": "L05",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "In ascending selection sort, what is selected for the next position?",
        "options": [
          "A random element",
          "The largest element always",
          "The last element only",
          "The smallest remaining element"
        ],
        "answer": 3,
        "exp": "Selection sort places the smallest remaining value next."
      },
      {
        "id": "exam-1-21",
        "lesson": "L05",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "How many adjacent comparisons does the first bubble-sort pass over 6 elements make?",
        "options": [
          "5",
          "6",
          "4",
          "12"
        ],
        "answer": 0,
        "exp": "Six elements have five adjacent pairs."
      },
      {
        "id": "exam-1-22",
        "lesson": "L05",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "What is the worst-case time complexity of basic selection sort?",
        "options": [
          "O(n log n)",
          "O(n²)",
          "O(log n)",
          "O(1)"
        ],
        "answer": 1,
        "exp": "It repeatedly scans the remaining unsorted elements."
      },
      {
        "id": "exam-1-23",
        "lesson": "L05",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "When should two adjacent values swap in ascending bubble sort?",
        "options": [
          "On every comparison",
          "Only when equal",
          "When the left value is greater",
          "When the left value is smaller"
        ],
        "answer": 2,
        "exp": "Swapping an inverted pair moves larger values right."
      },
      {
        "id": "exam-1-24",
        "lesson": "L06",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "What does a stable sorting algorithm preserve?",
        "options": [
          "The original position of every element",
          "Descending order",
          "The number of comparisons",
          "The relative order of equal keys"
        ],
        "answer": 3,
        "exp": "Equal-key elements retain their initial relative order."
      },
      {
        "id": "exam-1-25",
        "lesson": "L06",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "What does sorted(a) do for a Python list?",
        "options": [
          "Returns a new sorted list",
          "Sorts a in place and returns None",
          "Deletes a",
          "Returns the largest value"
        ],
        "answer": 0,
        "exp": "sorted creates a new list without modifying the original."
      },
      {
        "id": "exam-1-26",
        "lesson": "L06",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "What does a.sort() return?",
        "options": [
          "The last element",
          "None",
          "A new sorted list",
          "The length"
        ],
        "answer": 1,
        "exp": "list.sort changes the list in place and returns None."
      },
      {
        "id": "exam-1-27",
        "lesson": "L06",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "Which Python expression sorts numbers in descending order without changing a?",
        "options": [
          "a.sort()",
          "reversed(a.sort())",
          "sorted(a, reverse=True)",
          "a.append(True)"
        ],
        "answer": 2,
        "exp": "sorted with reverse=True returns a new descending list."
      },
      {
        "id": "exam-1-28",
        "lesson": "L07",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "What input condition does binary search require?",
        "options": [
          "The data contains only positive values",
          "The list has even length",
          "All values differ",
          "The data is sorted"
        ],
        "answer": 3,
        "exp": "Binary search eliminates halves using sorted order."
      },
      {
        "id": "exam-1-29",
        "lesson": "L07",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "What is the worst-case time complexity of linear search?",
        "options": [
          "O(n)",
          "O(1)",
          "O(log n)",
          "O(n²)"
        ],
        "answer": 0,
        "exp": "The target may be absent or at the end."
      },
      {
        "id": "exam-1-30",
        "lesson": "L07",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "What is the worst-case time complexity of binary search on a sorted array?",
        "options": [
          "O(2ⁿ)",
          "O(log n)",
          "O(n²)",
          "O(n)"
        ],
        "answer": 1,
        "exp": "Each comparison approximately halves the remaining range."
      },
      {
        "id": "exam-1-31",
        "lesson": "L07",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "In ascending binary search, the middle value is smaller than the target. What can be discarded?",
        "options": [
          "The entire array",
          "Nothing",
          "The middle and all values to its left",
          "The right half"
        ],
        "answer": 2,
        "exp": "All values at or left of the middle are too small."
      },
      {
        "id": "exam-1-32",
        "lesson": "L08",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "In a sorted array, a two-pointer sum is too small. Which pointer should move?",
        "options": [
          "Move the right pointer left",
          "Move both outward",
          "Stop immediately",
          "Move the left pointer right"
        ],
        "answer": 3,
        "exp": "Moving the left pointer right can increase the sum."
      },
      {
        "id": "exam-1-33",
        "lesson": "L08",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "Why can opposite-end two pointers find a pair sum in linear time on a sorted array?",
        "options": [
          "Each pointer moves inward at most n positions",
          "It checks every possible pair",
          "It sorts on every step",
          "It never compares numbers"
        ],
        "answer": 0,
        "exp": "The pointers only move inward, so there are O(n) moves."
      }
    ]
  },
  {
    "title": "模拟试卷 二",
    "questions": [
      {
        "id": "exam-2-01",
        "lesson": "L01",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "Which is a valid algorithm property?",
        "options": [
          "It only works on one input",
          "Its instructions are precise",
          "It must be written in Python",
          "It must never terminate"
        ],
        "answer": 1,
        "exp": "Precise instructions can be followed without ambiguity."
      },
      {
        "id": "exam-2-02",
        "lesson": "L01",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "Which example is a data structure?",
        "options": [
          "A comparison result",
          "A syntax error",
          "A list of numbers",
          "A sorting step"
        ],
        "answer": 2,
        "exp": "A list organizes a collection of values."
      },
      {
        "id": "exam-2-03",
        "lesson": "L01",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "An algorithm gives the right answer for every valid input and always stops. What does this establish?",
        "options": [
          "Constant running time",
          "That it uses a list",
          "That it is stable",
          "Correctness and termination"
        ],
        "answer": 3,
        "exp": "Correct results and termination are separate important properties."
      },
      {
        "id": "exam-2-04",
        "lesson": "L01",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "Why choose an appropriate data structure?",
        "options": [
          "It can make operations more efficient",
          "It always reduces data size to zero",
          "It removes the need for algorithms",
          "It makes every program correct"
        ],
        "answer": 0,
        "exp": "Data organization affects the cost of operations."
      },
      {
        "id": "exam-2-05",
        "lesson": "L02",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "What is the complexity of examining all n elements once?",
        "options": [
          "O(n²)",
          "O(n)",
          "O(1)",
          "O(log n)"
        ],
        "answer": 1,
        "exp": "Each of n elements is visited once."
      },
      {
        "id": "exam-2-06",
        "lesson": "L02",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "A search space is halved at every step. Its step count is generally:",
        "options": [
          "O(n)",
          "O(2ⁿ)",
          "O(log n)",
          "O(n²)"
        ],
        "answer": 2,
        "exp": "Repeated halving takes logarithmically many steps."
      },
      {
        "id": "exam-2-07",
        "lesson": "L02",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "Simplify O(3n + 7):",
        "options": [
          "O(3)",
          "O(n²)",
          "O(log n)",
          "O(n)"
        ],
        "answer": 3,
        "exp": "Big-O ignores constant factors and lower-order terms."
      },
      {
        "id": "exam-2-08",
        "lesson": "L02",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "Which grows fastest for large n?",
        "options": [
          "n²",
          "n",
          "log n",
          "1"
        ],
        "answer": 0,
        "exp": "Quadratic growth dominates these alternatives."
      },
      {
        "id": "exam-2-09",
        "lesson": "L02",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "Two separate loops each process n elements once. Total complexity is:",
        "options": [
          "O(1)",
          "O(n)",
          "O(n²)",
          "O(log n)"
        ],
        "answer": 1,
        "exp": "n + n is linear, not quadratic."
      },
      {
        "id": "exam-2-10",
        "lesson": "L03",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "For a = [7, 9, 5], what is a[2]?",
        "options": [
          "9",
          "IndexError",
          "5",
          "7"
        ],
        "answer": 2,
        "exp": "Indices 0, 1 and 2 correspond to 7, 9 and 5."
      },
      {
        "id": "exam-2-11",
        "lesson": "L03",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "What does a[0:2] include?",
        "options": [
          "Only index 2",
          "Indices 0, 1 and 2",
          "The entire list",
          "Elements at indices 0 and 1"
        ],
        "answer": 3,
        "exp": "The stop index is excluded."
      },
      {
        "id": "exam-2-12",
        "lesson": "L03",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "What happens after a = [1, 2]; a.append(3)?",
        "options": [
          "a becomes [1, 2, 3]",
          "a becomes [3, 1, 2]",
          "a becomes None",
          "a remains [1, 2]"
        ],
        "answer": 0,
        "exp": "append modifies the list in place."
      },
      {
        "id": "exam-2-13",
        "lesson": "L03",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "If b = a and a is a list, what does b refer to?",
        "options": [
          "A string",
          "The same list",
          "An independent copy",
          "The first element"
        ],
        "answer": 1,
        "exp": "Assignment binds b to the same list object."
      },
      {
        "id": "exam-2-14",
        "lesson": "L03",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "Which expression accesses the second-last list element?",
        "options": [
          "a[2]",
          "a[len(a)]",
          "a[-2]",
          "a[-1]"
        ],
        "answer": 2,
        "exp": "Negative indices count backward from the end."
      },
      {
        "id": "exam-2-15",
        "lesson": "L04",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "What is 'hello'[1:4]?",
        "options": [
          "'hel'",
          "'ello'",
          "'hello'",
          "'ell'"
        ],
        "answer": 3,
        "exp": "The slice includes indices 1, 2 and 3."
      },
      {
        "id": "exam-2-16",
        "lesson": "L04",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "What does 'a' + 'bc' produce?",
        "options": [
          "'abc'",
          "['a', 'bc']",
          "3",
          "'a bc'"
        ],
        "answer": 0,
        "exp": "The + operator concatenates strings."
      },
      {
        "id": "exam-2-17",
        "lesson": "L04",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "Given s = 'abc', what happens to s after s.upper() with no assignment?",
        "options": [
          "It is deleted",
          "It remains 'abc'",
          "It becomes 'ABC'",
          "It becomes None"
        ],
        "answer": 1,
        "exp": "upper returns a new string; it does not mutate s."
      },
      {
        "id": "exam-2-18",
        "lesson": "L04",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "Which statement about string indexing is true?",
        "options": [
          "s[-1] is always an error",
          "s[len(s)] is the last character",
          "s[0] is the first character",
          "s[1] is always the first character"
        ],
        "answer": 2,
        "exp": "Python indices start at zero."
      },
      {
        "id": "exam-2-19",
        "lesson": "L05",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "In selection sort, after the first pass of ascending order, what is fixed?",
        "options": [
          "The largest element at index 0",
          "The entire list",
          "The median at the end",
          "The smallest element at index 0"
        ],
        "answer": 3,
        "exp": "The first pass selects and places the smallest value."
      },
      {
        "id": "exam-2-20",
        "lesson": "L05",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "What does bubble sort compare directly?",
        "options": [
          "Adjacent elements",
          "Only the first and last",
          "Only equal values",
          "Random pairs"
        ],
        "answer": 0,
        "exp": "Bubble sort compares neighboring pairs."
      },
      {
        "id": "exam-2-21",
        "lesson": "L05",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "How many adjacent comparisons are in the first bubble-sort pass over 4 values?",
        "options": [
          "8",
          "3",
          "4",
          "2"
        ],
        "answer": 1,
        "exp": "There are three adjacent pairs in four elements."
      },
      {
        "id": "exam-2-22",
        "lesson": "L05",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "Which list is in ascending order?",
        "options": [
          "[2, 1, 4]",
          "[4, 1, 2]",
          "[1, 2, 4]",
          "[4, 2, 1]"
        ],
        "answer": 2,
        "exp": "Each element is no larger than the next."
      },
      {
        "id": "exam-2-23",
        "lesson": "L05",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "Basic bubble sort worst-case time complexity is:",
        "options": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n²)"
        ],
        "answer": 3,
        "exp": "It may perform a linear number of passes with linear comparisons."
      },
      {
        "id": "exam-2-24",
        "lesson": "L06",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "Given pairs (A, 2), (B, 1), (C, 2), stable sorting by number produces:",
        "options": [
          "(B, 1), (A, 2), (C, 2)",
          "(B, 1), (C, 2), (A, 2)",
          "(A, 2), (B, 1), (C, 2)",
          "(C, 2), (A, 2), (B, 1)"
        ],
        "answer": 0,
        "exp": "A appears before C originally and must remain before C among equal keys."
      },
      {
        "id": "exam-2-25",
        "lesson": "L06",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "Which operation sorts a list in place?",
        "options": [
          "a[0]",
          "a.sort()",
          "sorted(a)",
          "len(a)"
        ],
        "answer": 1,
        "exp": "list.sort modifies the original list."
      },
      {
        "id": "exam-2-26",
        "lesson": "L06",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "What does sorted([3, 1, 2]) return?",
        "options": [
          "[3, 1, 2]",
          "6",
          "[1, 2, 3]",
          "None"
        ],
        "answer": 2,
        "exp": "sorted returns a new list in ascending order."
      },
      {
        "id": "exam-2-27",
        "lesson": "L06",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "Why is stability useful when sorting records?",
        "options": [
          "It guarantees O(1) time",
          "It removes duplicates",
          "It reverses equal keys",
          "It preserves earlier ordering among equal keys"
        ],
        "answer": 3,
        "exp": "Equal-key records preserve their relative order."
      },
      {
        "id": "exam-2-28",
        "lesson": "L07",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "A linear search for an absent item in a list of n elements may inspect:",
        "options": [
          "All n elements",
          "Only one element",
          "Exactly log n elements",
          "No elements"
        ],
        "answer": 0,
        "exp": "It may need to check every element before reporting absence."
      },
      {
        "id": "exam-2-29",
        "lesson": "L07",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "Which is a valid prerequisite for ordinary binary search?",
        "options": [
          "The target is present",
          "Elements are sorted according to the comparison",
          "Every value is unique",
          "The length is a power of two"
        ],
        "answer": 1,
        "exp": "Binary search also works with duplicates or absent targets, provided data is sorted."
      },
      {
        "id": "exam-2-30",
        "lesson": "L07",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "In ascending binary search, the middle value is greater than the target. Which side remains?",
        "options": [
          "Both sides always",
          "Neither side always",
          "The left side",
          "The right side"
        ],
        "answer": 2,
        "exp": "Values at or right of the middle are too large."
      },
      {
        "id": "exam-2-31",
        "lesson": "L07",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "Approximately how many halvings reduce 1024 candidates to 1?",
        "options": [
          "2",
          "32",
          "512",
          "10"
        ],
        "answer": 3,
        "exp": "2¹⁰ = 1024."
      },
      {
        "id": "exam-2-32",
        "lesson": "L08",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "For sorted values [1, 3, 5, 8] and target 9, which endpoint pair matches?",
        "options": [
          "1 and 8",
          "3 and 8",
          "5 and 8",
          "1 and 3"
        ],
        "answer": 0,
        "exp": "1 + 8 = 9."
      },
      {
        "id": "exam-2-33",
        "lesson": "L08",
        "src": "exam",
        "topic": "模拟考试",
        "prompt": "In a sorted array, if the two-pointer sum is too large, what is the usual next move?",
        "options": [
          "Keep both pointers fixed",
          "Move the right pointer left",
          "Move the left pointer left",
          "Move the right pointer right"
        ],
        "answer": 1,
        "exp": "Decreasing the right value can reduce the sum."
      }
    ]
  },
  {
    "title": "炼狱",
    "questions": [
      {
        "id": "exam-inferno-01",
        "lesson": "L01",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "An algorithm returns the correct answer whenever it terminates, but may loop forever on some valid inputs. Which property is missing?",
        "options": [
          "Correctness on terminating runs",
          "A programming language",
          "A data structure",
          "Termination"
        ],
        "answer": 3,
        "exp": "算法可能不结束，因此缺少终止性。"
      },
      {
        "id": "exam-inferno-02",
        "lesson": "L01",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "A proposed algorithm says “repeat until the result is good enough” without defining good enough. What is the main issue?",
        "options": [
          "It cannot use a list",
          "Its output must be a number",
          "The steps are ambiguous",
          "It always takes quadratic time"
        ],
        "answer": 2,
        "exp": "没有定义判断标准，步骤不够明确。"
      },
      {
        "id": "exam-inferno-03",
        "lesson": "L02",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "How many times does the inner statement run? `for i in range(n): for j in range(i): work()`",
        "options": [
          "2n",
          "n(n-1)/2",
          "n² exactly",
          "n(n+1)/2"
        ],
        "answer": 1,
        "exp": "次数为 0+1+…+(n−1)，即 n(n−1)/2。"
      },
      {
        "id": "exam-inferno-04",
        "lesson": "L02",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "What is the time complexity of `i = 1; while i < n: i *= 2`?",
        "options": [
          "O(log n)",
          "O(n)",
          "O(n²)",
          "O(1) for all n"
        ],
        "answer": 0,
        "exp": "每轮 i 加倍，约需 log₂n 轮。"
      },
      {
        "id": "exam-inferno-05",
        "lesson": "L02",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "An algorithm runs a loop n times, and each iteration performs a binary search on n sorted items. What is the total time?",
        "options": [
          "O(log n)",
          "O(n)",
          "O(n² log n)",
          "O(n log n)"
        ],
        "answer": 3,
        "exp": "每次二分 O(log n)，重复 n 次得到 O(n log n)。"
      },
      {
        "id": "exam-inferno-06",
        "lesson": "L02",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "What is the asymptotic time of 5n² + 100n + 9?",
        "options": [
          "O(log n)",
          "O(n³) as the tightest listed bound",
          "O(n²)",
          "O(n)"
        ],
        "answer": 2,
        "exp": "最高阶 n² 主导增长；常数系数不改变阶。"
      },
      {
        "id": "exam-inferno-07",
        "lesson": "L02",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "A list has n elements. A loop compares every distinct unordered pair once. How many comparisons?",
        "options": [
          "2ⁿ",
          "n(n-1)/2",
          "n²",
          "n(n+1)/2"
        ],
        "answer": 1,
        "exp": "每个元素与其后的元素比较，总数为 n(n−1)/2。"
      },
      {
        "id": "exam-inferno-08",
        "lesson": "L03",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "What is printed? `a=[1,2]; b=a; b[0]=9; print(a)`",
        "options": [
          "[9, 2]",
          "[1, 2]",
          "[1, 9]",
          "[9, 1, 2]"
        ],
        "answer": 0,
        "exp": "a 和 b 引用同一个列表，修改 b 也改变 a。"
      },
      {
        "id": "exam-inferno-09",
        "lesson": "L03",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "What is printed? `a=[1,2]; b=a[:]; b.append(3); print(a)`",
        "options": [
          "[1, 2, 3]",
          "[3, 1, 2]",
          "None",
          "[1, 2]"
        ],
        "answer": 3,
        "exp": "切片 a[:] 创建一个新的列表，append 不改变 a。"
      },
      {
        "id": "exam-inferno-10",
        "lesson": "L03",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "What is the value of `[10,20,30,40,50][1:5:2]`?",
        "options": [
          "[10, 30, 50]",
          "[20, 40, 50]",
          "[20, 40]",
          "[20, 30, 40]"
        ],
        "answer": 2,
        "exp": "起点为索引 1，步长 2，取索引 1 和 3，不含终点 5。"
      },
      {
        "id": "exam-inferno-11",
        "lesson": "L03",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "What is printed? `a=[3,1,2]; x=a.sort(); print(x)`",
        "options": [
          "3",
          "None",
          "[1, 2, 3]",
          "[3, 1, 2]"
        ],
        "answer": 1,
        "exp": "list.sort 原地排序并返回 None。"
      },
      {
        "id": "exam-inferno-12",
        "lesson": "L03",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "For `a=[4,8,12]`, which expression raises IndexError?",
        "options": [
          "a[len(a)]",
          "a[-1]",
          "a[0]",
          "a[len(a)-1]"
        ],
        "answer": 0,
        "exp": "列表长度为 3，合法正索引最大为 2，a[3] 越界。"
      },
      {
        "id": "exam-inferno-13",
        "lesson": "L03",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "What is the value of `[1,2,3,4][::-1]`?",
        "options": [
          "[1, 2, 3, 4]",
          "[]",
          "[3, 2, 1]",
          "[4, 3, 2, 1]"
        ],
        "answer": 3,
        "exp": "负步长从尾向头遍历，产生反序列表。"
      },
      {
        "id": "exam-inferno-14",
        "lesson": "L04",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "What is printed? `s='banana'; s.replace('a','o'); print(s)`",
        "options": [
          "bananaNone",
          "An error",
          "banana",
          "bonono"
        ],
        "answer": 2,
        "exp": "字符串不可变，replace 返回新字符串；没有赋值给 s。"
      },
      {
        "id": "exam-inferno-15",
        "lesson": "L04",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "What is the value of `'abcdef'[-5:-1:2]`?",
        "options": [
          "'df'",
          "'bd'",
          "'bcde'",
          "'ac'"
        ],
        "answer": 1,
        "exp": "负索引对应起点 1、终点 5，步长 2，因此取索引 1 和 3。"
      },
      {
        "id": "exam-inferno-16",
        "lesson": "L04",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "Which statement raises an error for `s='abc'`?",
        "options": [
          "s[0] = 'A'",
          "s = s.upper()",
          "x = s[-1]",
          "s = s + 'd'"
        ],
        "answer": 0,
        "exp": "字符串不可变，不能对单个字符索引赋值。"
      },
      {
        "id": "exam-inferno-17",
        "lesson": "L04",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "What is the value of `len('a b') + len('')`?",
        "options": [
          "2",
          "4",
          "1",
          "3"
        ],
        "answer": 3,
        "exp": "空格也是字符，空字符串长度为 0。"
      },
      {
        "id": "exam-inferno-18",
        "lesson": "L05",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "Using ascending bubble sort, after one full left-to-right pass over [4, 1, 3, 2], what is the list?",
        "options": [
          "[4, 1, 2, 3]",
          "[3, 1, 2, 4]",
          "[1, 3, 2, 4]",
          "[1, 2, 3, 4]"
        ],
        "answer": 2,
        "exp": "依次比较交换，最大值 4 移到末尾；其余元素未必已排好。"
      },
      {
        "id": "exam-inferno-19",
        "lesson": "L05",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "Using ascending selection sort on [4, 2, 3, 1], what is the array after the first swap?",
        "options": [
          "[4, 2, 1, 3]",
          "[1, 2, 3, 4]",
          "[2, 4, 3, 1]",
          "[1, 4, 2, 3]"
        ],
        "answer": 1,
        "exp": "首轮选最小值 1，与索引 0 的 4 交换。"
      },
      {
        "id": "exam-inferno-20",
        "lesson": "L05",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "A basic selection sort scans the unsorted tail for each position. How many comparisons for 5 items?",
        "options": [
          "10",
          "5",
          "20",
          "25"
        ],
        "answer": 0,
        "exp": "比较次数为 4+3+2+1=10。"
      },
      {
        "id": "exam-inferno-21",
        "lesson": "L05",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "A bubble sort swaps only when left > right. What happens to equal elements?",
        "options": [
          "They are always reversed",
          "One is removed",
          "They are always swapped",
          "Their relative order is preserved"
        ],
        "answer": 3,
        "exp": "严格大于时才交换，相等元素不会互相跨越，因此稳定。"
      },
      {
        "id": "exam-inferno-22",
        "lesson": "L05",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "A bubble sort performs a complete pass with zero swaps. What can be concluded?",
        "options": [
          "The list is in descending order",
          "The list has one element",
          "The list is sorted in nondecreasing order",
          "All elements are distinct"
        ],
        "answer": 2,
        "exp": "没有逆序的相邻对，表示列表已非降序排列。"
      },
      {
        "id": "exam-inferno-23",
        "lesson": "L06",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "Stable sort by score ascending: [(A,2),(B,1),(C,2),(D,1)]. Which result is possible?",
        "options": [
          "(A,2),(C,2),(B,1),(D,1)",
          "(B,1),(D,1),(A,2),(C,2)",
          "(D,1),(B,1),(A,2),(C,2)",
          "(B,1),(D,1),(C,2),(A,2)"
        ],
        "answer": 1,
        "exp": "同分时保留原有相对次序：B 在 D 前，A 在 C 前。"
      },
      {
        "id": "exam-inferno-24",
        "lesson": "L06",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "Given `a=[3,1,2]; b=sorted(a)`, which is true?",
        "options": [
          "a is [3,1,2] and b is [1,2,3]",
          "Both a and b are [1,2,3]",
          "a is None",
          "b is None"
        ],
        "answer": 0,
        "exp": "sorted 返回新列表，原列表保持不变。"
      },
      {
        "id": "exam-inferno-25",
        "lesson": "L06",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "After `a=[2,1]; b=a; a.sort()`, what is b?",
        "options": [
          "[2, 1]",
          "None",
          "[1]",
          "[1, 2]"
        ],
        "answer": 3,
        "exp": "a 和 b 引用同一列表，原地排序两者都可见。"
      },
      {
        "id": "exam-inferno-26",
        "lesson": "L07",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "Binary search uses inclusive bounds `lo=0, hi=7` and `mid=(lo+hi)//2`. If the middle value is below the target, what is the new lo?",
        "options": [
          "5",
          "7",
          "4",
          "3"
        ],
        "answer": 2,
        "exp": "mid=3；中间值过小，索引 0 至 3 均可排除，lo=4。"
      },
      {
        "id": "exam-inferno-27",
        "lesson": "L07",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "For a sorted array of 16 distinct values, what is the maximum number of comparisons in a standard binary search for an absent target?",
        "options": [
          "8",
          "5",
          "4",
          "16"
        ],
        "answer": 1,
        "exp": "最坏情况下候选区间可经历 16→8→4→2→1，最多 5 次比较。"
      },
      {
        "id": "exam-inferno-28",
        "lesson": "L07",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "Why is `lo = mid` unsafe in inclusive-bound binary search when the middle value is below the target?",
        "options": [
          "The search may never shrink when lo equals mid",
          "It always skips the target",
          "It sorts the array",
          "It makes the middle value larger"
        ],
        "answer": 0,
        "exp": "当 lo 与 mid 相等时，lo 不变会造成死循环，应使用 mid+1。"
      },
      {
        "id": "exam-inferno-29",
        "lesson": "L07",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "Which operation can linear search perform correctly without sorting first?",
        "options": [
          "Discard half after every comparison",
          "Guarantee O(log n) worst-case time",
          "Find the insertion index for binary search without comparison",
          "Find whether an arbitrary target occurs in an unsorted list"
        ],
        "answer": 3,
        "exp": "线性查找逐项检查，不要求输入有序。"
      },
      {
        "id": "exam-inferno-30",
        "lesson": "L08",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "In sorted [1,2,4,7,11], target 9: which first move follows a sum that is too large?",
        "options": [
          "Move both pointers inward",
          "Stop because no pair exists",
          "Move the right pointer from 11 to 7",
          "Move the left pointer from 1 to 2"
        ],
        "answer": 2,
        "exp": "首对 1+11=12，大于 9；右指针左移以减小和。"
      },
      {
        "id": "exam-inferno-31",
        "lesson": "L08",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "For sorted [-3,-1,2,4,8], target 1, which pair is found by opposite-end two pointers?",
        "options": [
          "(-3,8)",
          "(-3,4)",
          "(-1,4)",
          "(2,4)"
        ],
        "answer": 1,
        "exp": "先算 −3+8=5，右指针左移得到 −3+4=1。"
      },
      {
        "id": "exam-inferno-32",
        "lesson": "L08",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "For sorted [2,3,5] and target 4, why must a standard two-pointer method stop when left equals right?",
        "options": [
          "The same element cannot be used twice when two distinct indices are required",
          "The array becomes unsorted",
          "A match is guaranteed",
          "The sum cannot be computed"
        ],
        "answer": 0,
        "exp": "题目要求两个不同索引时，指针相遇就不能再组成有效元素对。"
      },
      {
        "id": "exam-inferno-33",
        "lesson": "L08",
        "src": "exam",
        "topic": "炼狱挑战",
        "prompt": "For sorted [1,1,2,3] and target 2, may two pointers use both ones?",
        "options": [
          "No, equal values can never form a pair",
          "Only if the list has unique values",
          "Only after removing duplicates",
          "Yes, they occupy distinct indices"
        ],
        "answer": 3,
        "exp": "两个数的值可以相同，只要它们位于不同索引。"
      }
    ]
  }
];
