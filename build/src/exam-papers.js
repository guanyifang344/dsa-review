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
        "prompt": "For a non-empty Python list a, what does this expression access?\n\n```python\na[-1]\n```",
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
        "prompt": "What does this code print?\n\n```python\nprint(len([4, 8, 2]))\n```",
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
        "prompt": "What does this code print?\n\n```python\na = [10, 20, 30, 40]\nprint(a[1:3])\n```",
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
        "prompt": "What does this statement do to the list?\n\n```python\na.append(x)\n```",
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
        "prompt": "What does this code print?\n\n```python\nprint(len(\"cat\"))\n```",
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
        "prompt": "What is the value of this Python expression?\n\n```python\n\"abc\"[1]\n```",
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
        "prompt": "What is the value of this Python expression?\n\n```python\n\"abc\".upper()\n```",
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
        "prompt": "What does this call return for a Python list a?\n\n```python\nsorted(a)\n```",
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
        "prompt": "What does this call return for a Python list a?\n\n```python\na.sort()\n```",
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
        "prompt": "What does this code print?\n\n```python\na = [7, 9, 5]\nprint(a[2])\n```",
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
        "prompt": "Which elements does this slice include?\n\n```python\na[0:2]\n```",
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
        "prompt": "What happens to a after this code runs?\n\n```python\na = [1, 2]\na.append(3)\n```",
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
        "prompt": "If a is a Python list, what does b refer to after this assignment?\n\n```python\nb = a\n```",
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
        "prompt": "What is the value of this Python expression?\n\n```python\n\"hello\"[1:4]\n```",
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
        "prompt": "What is the value of this Python expression?\n\n```python\n\"a\" + \"bc\"\n```",
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
        "prompt": "What happens to s after this code runs?\n\n```python\ns = \"abc\"\ns.upper()\n```",
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
        "prompt": "What does this call return?\n\n```python\nsorted([3, 1, 2])\n```",
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
        "prompt": "Which pair formed by the two endpoints adds up to the target?\n\n```python\na = [1, 3, 5, 8]\ntarget = 9\n```",
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
        "prompt": "How many times is work() called?\n\n```python\nfor i in range(n):\n    for j in range(i):\n        work()\n```",
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
        "prompt": "What is the time complexity of this code?\n\n```python\ni = 1\nwhile i < n:\n    i *= 2\n```",
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
        "prompt": "What does this code print?\n\n```python\na = [1, 2]\nb = a\nb[0] = 9\nprint(a)\n```",
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
        "prompt": "What does this code print?\n\n```python\na = [1, 2]\nb = a[:]\nb.append(3)\nprint(a)\n```",
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
        "prompt": "What is the value of this Python expression?\n\n```python\n[10, 20, 30, 40, 50][1:5:2]\n```",
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
        "prompt": "What does this code print?\n\n```python\na = [3, 1, 2]\nx = a.sort()\nprint(x)\n```",
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
        "prompt": "Given this list, which expression raises IndexError?\n\n```python\na = [4, 8, 12]\n```",
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
        "prompt": "What is the value of this Python expression?\n\n```python\n[1, 2, 3, 4][::-1]\n```",
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
        "prompt": "What does this code print?\n\n```python\ns = \"banana\"\ns.replace(\"a\", \"o\")\nprint(s)\n```",
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
        "prompt": "What is the value of this Python expression?\n\n```python\n\"abcdef\"[-5:-1:2]\n```",
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
        "prompt": "Given this string, which statement raises an error?\n\n```python\ns = \"abc\"\n```",
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
        "prompt": "What is the value of this Python expression?\n\n```python\nlen(\"a b\") + len(\"\")\n```",
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
        "prompt": "What is a after this single left-to-right bubble-sort pass?\n\n```python\na = [4, 1, 3, 2]\nfor i in range(len(a) - 1):\n    if a[i] > a[i + 1]:\n        a[i], a[i + 1] = a[i + 1], a[i]\n```",
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
        "prompt": "What is a after this first pass of ascending selection sort?\n\n```python\na = [4, 2, 3, 1]\nmin_index = 0\nfor i in range(1, len(a)):\n    if a[i] < a[min_index]:\n        min_index = i\na[0], a[min_index] = a[min_index], a[0]\n```",
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
        "prompt": "Which output is possible when the records are stably sorted by score in ascending order?\n\n```python\nrecords = [(\"A\", 2), (\"B\", 1), (\"C\", 2), (\"D\", 1)]\n```",
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
        "prompt": "Which statement about a and b is true after this code runs?\n\n```python\na = [3, 1, 2]\nb = sorted(a)\n```",
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
        "prompt": "What is the value of b after this code runs?\n\n```python\na = [2, 1]\nb = a\na.sort()\n```",
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
        "prompt": "Binary search starts with these inclusive bounds. If a[mid] is below the target, what is the new value of lo?\n\n```python\nlo = 0\nhi = 7\nmid = (lo + hi) // 2\n```",
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
        "prompt": "The two pointers start at the endpoints. The sum is too large. Which move comes first?\n\n```python\na = [1, 2, 4, 7, 11]\ntarget = 9\n```",
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
        "prompt": "Which pair is found by the opposite-end two-pointer method?\n\n```python\na = [-3, -1, 2, 4, 8]\ntarget = 1\n```",
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
        "prompt": "Why must the two-pointer search stop when left equals right?\n\n```python\na = [2, 3, 5]\ntarget = 4\n```",
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
        "prompt": "Can the two pointers use both occurrences of 1 to reach the target?\n\n```python\na = [1, 1, 2, 3]\ntarget = 2\n```",
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
  },
  {
    "title": "考前打靶",
    "questions": [
      {
        "id": "exam-target-01",
        "lesson": "L01",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "The task is to return the largest number in any non-empty list of integers. This algorithm compares every item and always stops. Which input shows that it is not correct for every valid input?\n\n```python\ndef largest(items):\n    best = 0\n    for item in items:\n        if item > best:\n            best = item\n    return best\n```",
        "options": [
          "[0, 4, 2]",
          "[-8, -3, -5]",
          "[7]",
          "[-4, 0, -1]"
        ],
        "answer": 1,
        "exp": "初值 0 比三个负数都大，最终返回 0。真正的最大值是 -3。一个合法输入失败就足以否定算法对所有合法输入的正确性。",
        "zh": "回看 L09 复习笔记第 3 节。"
      },
      {
        "id": "exam-target-02",
        "lesson": "L01",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "A list holds 1,024 distinct student IDs. Each test compares the target with the middle ID. What property lets each test safely discard about half the remaining IDs?",
        "options": [
          "The list has no duplicate IDs.",
          "The list has a power of two items.",
          "The IDs are stored in ascending order.",
          "The IDs are stored as integers."
        ],
        "answer": 2,
        "exp": "有序性让中间值成为界线，能证明目标只可能在一侧。元素互异、数量为 2 的幂和整数类型本身都不能提供这条保证。",
        "zh": "回看 L09 复习笔记第 3 节。"
      },
      {
        "id": "exam-target-03",
        "lesson": "L02",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "Exactly how many times does the line that updates count run when n = 7?\n\n```python\ncount = 0\nfor i in range(7):\n    for j in range(i):\n        count = count + 1\n```",
        "options": [
          "21",
          "28",
          "49",
          "42"
        ],
        "answer": 0,
        "exp": "内层每次从 0 到 i-1，共 i 次。i 取 0 到 6，所以总次数为 0 + 1 + 2 + 3 + 4 + 5 + 6 = 21。",
        "zh": "回看 L09 复习笔记第 4 节。"
      },
      {
        "id": "exam-target-04",
        "lesson": "L02",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "What is the total time complexity as n grows? Assume each update does constant work.\n\n```python\ncount = 0\nfor i in range(n):\n    count = count + 1\n\nsize = n\nwhile size > 0:\n    for j in range(size):\n        count = count + 1\n    size = size // 2\n```",
        "options": [
          "O(log n)",
          "O(n log n)",
          "O(n²)",
          "O(n)"
        ],
        "answer": 3,
        "exp": "首个循环运行 n 次。第二部分外层减半，内层依次运行 n、约 n/2、约 n/4 次，合计小于 2n。两个部分相加是 O(n)。",
        "zh": "回看 L09 复习笔记第 4 节。"
      },
      {
        "id": "exam-target-05",
        "lesson": "L02",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "The function receives a list of n numbers. What is its peak extra space complexity?\n\n```python\ndef repeated_copies(numbers):\n    total = 0\n    for item in numbers:\n        copy = numbers[1:]\n        total = total + len(copy)\n    return total\n```",
        "options": [
          "O(n²)",
          "O(n)",
          "O(1)",
          "O(log n)"
        ],
        "answer": 1,
        "exp": "每次切片都产生一个长度为 n-1 的新列表，但循环不会保留所有副本。同一时刻只有常数个这样的列表，总时间 O(n²)，峰值额外空间 O(n)。",
        "zh": "回看 L09 复习笔记第 4 节。"
      },
      {
        "id": "exam-target-06",
        "lesson": "L02",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "What are the worst-case running times of f and g, respectively, on a list of n items?\n\n```python\ndef f(items):\n    for item in items:\n        return item < 0\n    return False\n\ndef g(items):\n    for item in items:\n        if item < 0:\n            return True\n    return False\n```",
        "options": [
          "O(1), O(1)",
          "O(n), O(n²)",
          "O(1), O(n)",
          "O(n), O(n)"
        ],
        "answer": 2,
        "exp": "f 的循环体最多运行一次就返回。g 可能直到最后一个元素才找到负数，或扫描整份列表仍找不到。",
        "zh": "回看 L09 复习笔记第 4 节。"
      },
      {
        "id": "exam-target-07",
        "lesson": "L02",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "What does this code print?\n\n```python\ni = 1\ncount = 0\nwhile i < 17:\n    i = i * 2\n    count = count + 1\nprint(count)\n```",
        "options": [
          "3",
          "4",
          "6",
          "5"
        ],
        "answer": 3,
        "exp": "每轮更新前 i 依次为 1、2、4、8、16。第五轮后变成 32，比较 32 < 17 为假。",
        "zh": "回看 L09 复习笔记第 4 节。"
      },
      {
        "id": "exam-target-08",
        "lesson": "L02",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "What is the time complexity of this code? Assume n is a positive integer and each update does constant work.\n\n```python\ncount = 0\nfor i in range(n):\n    k = n\n    while k > 1:\n        k = k // 2\n        count = count + 1\n```",
        "options": [
          "O(n log n)",
          "O(n²)",
          "O(n)",
          "O(log n)"
        ],
        "answer": 0,
        "exp": "每轮外层循环都把 k 重置为 n，内层需要约 log n 次减半；共进行 n 轮这样的计算。",
        "zh": "回看 L09 复习笔记第 4 节。"
      },
      {
        "id": "exam-target-09",
        "lesson": "L03",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "What does this code print?\n\n```python\na = [1, 2]\nb = a\nb[0] = 7\nb = b[:]\nb.append(3)\nprint(a)\n```",
        "options": [
          "[7, 2]",
          "[1, 2, 3]",
          "[7, 2, 3]",
          "[1, 2]"
        ],
        "answer": 0,
        "exp": "b 与 a 最初指向同一份列表，b[0] = 7 修改了原列表。随后 b 指向切片生成的新列表，append 只修改新列表。",
        "zh": "回看 L09 复习笔记第 5 节。"
      },
      {
        "id": "exam-target-10",
        "lesson": "L03",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "What does this code print?\n\n```python\nitems = [3, 3, 2, 3, 3]\nfor item in items:\n    if item == 3:\n        items.remove(item)\nprint(items)\n```",
        "options": [
          "[2]",
          "[3, 2, 3]",
          "[3, 3, 2, 3, 3]",
          "[2, 3, 3]"
        ],
        "answer": 3,
        "exp": "第一次移除首个 3，得到 [3, 2, 3, 3]。下一轮索引 1 读到 2。再下一轮索引 2 读到 3，但 remove(3) 会删掉当前列表里第一个 3，最后索引 3 已越过列表末尾。",
        "zh": "回看 L09 复习笔记第 5 节。"
      },
      {
        "id": "exam-target-11",
        "lesson": "L03",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "Starting with n items, what is the total cost of all shifts in this loop?\n\n```python\nwhile len(items) > 0:\n    items.pop(0)\n```",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n²)",
          "O(1)"
        ],
        "answer": 2,
        "exp": "每次 pop(0) 分别移动 n-1、n-2、……、0 个元素。相加为 n(n-1)/2。",
        "zh": "回看 L09 复习笔记第 5 节。"
      },
      {
        "id": "exam-target-12",
        "lesson": "L03",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "What does this code print?\n\n```python\na = [1, 2, 3]\nb = a[1:]\na.pop()\nb.pop(0)\nprint(a, b)\n```",
        "options": [
          "[1, 2] [2, 3]",
          "[2, 3] [1, 2]",
          "[1, 2] [2]",
          "[1, 2] [3]"
        ],
        "answer": 3,
        "exp": "切片 b 起初是 [2, 3] 的独立副本。a.pop() 只从 a 尾部删 3，b.pop(0) 只从 b 开头删 2。",
        "zh": "回看 L09 复习笔记第 5 节。"
      },
      {
        "id": "exam-target-13",
        "lesson": "L04",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "What does this code print?\n\n```python\ntext = \"green tea\"\nif text.find(\"z\"):\n    print(\"found\")\nelse:\n    print(\"missing\")\n```",
        "options": [
          "found",
          "0",
          "missing",
          "An error"
        ],
        "answer": 0,
        "exp": "虽然字符串里没有 z，find 却返回 -1。-1 在条件判断中为真，所以进入第一个分支。检查是否找到时应显式判断返回值是否为 -1。",
        "zh": "回看 L09 复习笔记第 6 节。"
      },
      {
        "id": "exam-target-14",
        "lesson": "L04",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "What does this code print?\n\n```python\ntext = \"a  b cc\"\nwords = text.split()\nprint(\"-\".join(words))\n```",
        "options": [
          "a b cc",
          "a-b-cc",
          "A--B-CC",
          "['a', 'b', 'cc']"
        ],
        "answer": 1,
        "exp": "split() 按空白分词并跳过连续空格，得到三个词。join 在词之间插入一个连字符，不保留原来的空格。",
        "zh": "回看 L09 复习笔记第 6 节。"
      },
      {
        "id": "exam-target-15",
        "lesson": "L04",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "The original string has length n. Using the course cost model, what is the total time spent on slicing?\n\n```python\nwhile len(text) > 0:\n    text = text[1:]\n```",
        "options": [
          "O(n)",
          "O(1)",
          "O(n log n)",
          "O(n²)"
        ],
        "answer": 3,
        "exp": "每次切片都复制当前字符串除首字符之外的部分。复制长度依次为 n-1、n-2、……、0，合计为二次量级。",
        "zh": "回看 L09 复习笔记第 6 节。"
      },
      {
        "id": "exam-target-16",
        "lesson": "L04",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "What does this code print?\n\n```python\ns = \"boat\"\na = s[0:2] + s[2:]\nb = s[1:] + s[0]\nprint(a, b)\n```",
        "options": [
          "boat oatb",
          "boat bat",
          "bat oatb",
          "bat boat"
        ],
        "answer": 0,
        "exp": "s[0:2] 为 bo，s[2:] 为 at。第一个拼接结果是 boat，第二个把首字符移到末尾得到 oatb。两个表达式都只读取原字符串。",
        "zh": "回看 L09 复习笔记第 6 节。"
      },
      {
        "id": "exam-target-17",
        "lesson": "L05",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "Bubble sort compares neighbours from left to right and sorts in ascending order. What is the list after two complete passes?\n\n```python\nnumbers = [5, 1, 4, 3, 2]\n```",
        "options": [
          "[1, 3, 2, 4, 5]",
          "[1, 2, 3, 4, 5]",
          "[1, 3, 4, 2, 5]",
          "[1, 4, 3, 2, 5]"
        ],
        "answer": 0,
        "exp": "第一趟依次把 5 推到末尾，得到 [1, 4, 3, 2, 5]。第二趟把未排序区间的最大值 4 推向右边，得到 [1, 3, 2, 4, 5]。",
        "zh": "回看 L09 复习笔记第 7 节。"
      },
      {
        "id": "exam-target-18",
        "lesson": "L05",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "Ascending selection sort always selects the smallest item in the unsorted suffix. What is the list after the first two passes?\n\n```python\nnumbers = [8, 2, 7, 3, 5]\n```",
        "options": [
          "[2, 3, 7, 5, 8]",
          "[8, 2, 7, 3, 5]",
          "[2, 3, 5, 7, 8]",
          "[2, 3, 7, 8, 5]"
        ],
        "answer": 3,
        "exp": "第一趟将 2 与开头的 8 交换，得到 [2, 8, 7, 3, 5]。第二趟将剩余部分的最小值 3 与 8 交换。",
        "zh": "回看 L09 复习笔记第 7 节。"
      },
      {
        "id": "exam-target-19",
        "lesson": "L05",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "Selection sort scans every item after the current position to find the minimum. On seven items, which pair gives the number of comparisons and the maximum number of swaps?",
        "options": [
          "21 comparisons, 6 swaps",
          "6 comparisons, 21 swaps",
          "21 comparisons, 7 swaps",
          "7 comparisons, 6 swaps"
        ],
        "answer": 0,
        "exp": "前六趟分别扫描 6、5、4、3、2、1 项。一趟最多交换一次，所以总共比较 21 次，最多交换 6 次。",
        "zh": "回看 L09 复习笔记第 7 节。"
      },
      {
        "id": "exam-target-20",
        "lesson": "L05",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "The bubble sort below stops as soon as it finishes a pass with no swaps. How many comparisons does this input cause in total?\n\n```python\na = [2, 1, 3, 4]\nfor end in range(len(a) - 1, 0, -1):\n    swapped = False\n    for i in range(end):\n        if a[i] > a[i + 1]:\n            a[i], a[i + 1] = a[i + 1], a[i]\n            swapped = True\n    if not swapped:\n        break\n```",
        "options": [
          "3",
          "6",
          "5",
          "2"
        ],
        "answer": 2,
        "exp": "第一趟三次比较，仅交换 2 和 1，得到 [1, 2, 3, 4]。第二趟比较两次，无交换，马上停止。",
        "zh": "回看 L09 复习笔记第 7 节。"
      },
      {
        "id": "exam-target-21",
        "lesson": "L05",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "After one left-to-right bubble-sort pass, what are the list and the number of swaps?\n\n```python\nnumbers = [4, 2, 4, 1]\n```",
        "options": [
          "[2, 1, 4, 4], 1",
          "[2, 4, 1, 4], 2",
          "[1, 2, 4, 4], 3",
          "[2, 4, 1, 4], 3"
        ],
        "answer": 1,
        "exp": "先交换 4 和 2，接着比较相等的 4 和 4，不交换。最后交换右侧的 4 和 1，共两次。",
        "zh": "回看 L09 复习笔记第 7 节。"
      },
      {
        "id": "exam-target-22",
        "lesson": "L06",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "A stable sort orders these records by score from lowest to highest. In what order do the names appear?\n\n```python\nrecords = [(\"A\", 7), (\"B\", 5), (\"C\", 6), (\"D\", 7), (\"E\", 5)]\n```",
        "options": [
          "C, B, E, A, D",
          "B, E, C, A, D",
          "B, E, C, D, A",
          "E, B, C, A, D"
        ],
        "answer": 1,
        "exp": "5 分组按原顺序 B、E，随后是 6 分的 C，最后 7 分组按 A、D 排列。稳定性约束的是同分记录的相对顺序。",
        "zh": "回看 L09 复习笔记第 8 节。"
      },
      {
        "id": "exam-target-23",
        "lesson": "L06",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "What does this code print?\n\n```python\na = [4, 1, 3]\nb = a[:]\nc = a\nout = c.sort()\nprint(a, b, out)\n```",
        "options": [
          "[1, 3, 4] [4, 1, 3] None",
          "[4, 1, 3] [1, 3, 4] None",
          "[4, 1, 3] [4, 1, 3] None",
          "[1, 3, 4] [4, 1, 3] [1, 3, 4]"
        ],
        "answer": 0,
        "exp": "b 是切片复制出来的独立列表，c 与 a 指向同一份列表。c.sort() 会修改 a，也会返回 None，因此 out 为 None。",
        "zh": "回看 L09 复习笔记第 8 节。"
      },
      {
        "id": "exam-target-24",
        "lesson": "L06",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "Both calls scan their input. What does the code print, and what is its total time for a list of length n ≥ 3?\n\n```python\nnumbers = [9, 4, 2, 8]\nprint(max(numbers) - min(numbers[1:]))\n```",
        "options": [
          "7, O(n²)",
          "8, O(n)",
          "7, O(n)",
          "10, O(n)"
        ],
        "answer": 2,
        "exp": "max(numbers) 为 9，min(numbers[1:]) 为 2，差为 7。复制切片、扫描求最小值和扫描求最大值各耗线性时间，顺序执行的成本相加。",
        "zh": "回看 L09 复习笔记第 8 节。"
      },
      {
        "id": "exam-target-25",
        "lesson": "L06",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "We need the three smallest values from a list of n items and must leave the original list unchanged. Which line does both?",
        "options": [
          "values.sort()[:3]",
          "sorted(values[:3])",
          "values.sort(); result = values[:3]",
          "result = sorted(values)[:3]"
        ],
        "answer": 3,
        "exp": "先对整个列表生成有序副本，再取前三个。只排序开头三项可能漏掉后面更小的值，sort() 会原地修改列表并返回 None。",
        "zh": "回看 L09 复习笔记第 8 节。"
      },
      {
        "id": "exam-target-26",
        "lesson": "L07",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "What does this code print?\n\n```python\ndef find_index(items, target):\n    for i in range(len(items)):\n        if items[i] == target:\n            return i\n    return -1\n\nnumbers = [2, 5, 9]\nposition = find_index(numbers, 7)\nprint(numbers[position])\n```",
        "options": [
          "-1",
          "2",
          "9",
          "0"
        ],
        "answer": 2,
        "exp": "目标不在列表时返回 -1，随后 numbers[-1] 按 Python 的负索引规则访问最后一个元素 9。",
        "zh": "回看 L09 复习笔记第 9 节。"
      },
      {
        "id": "exam-target-27",
        "lesson": "L07",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "Binary search uses inclusive bounds and mid = (low + high) // 2. It starts with low = 0 and high = len(numbers) - 1. Which values does it inspect, in order, when searching for 7?\n\n```python\nnumbers = [2, 4, 6, 8, 10, 12, 14, 16]\n```",
        "options": [
          "8, 4, 6",
          "8, 6, 4",
          "6, 8",
          "8, 4, 6, 7"
        ],
        "answer": 0,
        "exp": "中点索引依次是 3、1、2。看到 8 往左找，看到 4 和 6 都往右找，最后区间为空。",
        "zh": "回看 L09 复习笔记第 9 节。"
      },
      {
        "id": "exam-target-28",
        "lesson": "L07",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "The loop is meant to return the position of a target in an ascending list. Which single edit fixes it for every valid input?\n\n```python\ndef search(a, target):\n    low = 0\n    high = len(a) - 1\n    while low < high:\n        mid = (low + high) // 2\n        if a[mid] == target:\n            return mid\n        if a[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return -1\n```",
        "options": [
          "Change low = mid + 1 to low = mid.",
          "Change high = mid - 1 to high = mid.",
          "Set high = len(a) initially.",
          "Change while low < high to while low <= high."
        ],
        "answer": 3,
        "exp": "当 low == high 时仍剩下一个未检查的位置，例如单元素列表。改成 <= 后会检查该位置，每次都排除已检查中点，循环可以正常终止。",
        "zh": "回看 L09 复习笔记第 9 节。"
      },
      {
        "id": "exam-target-29",
        "lesson": "L07",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "For one list sorted at a cost of 1,000 steps, each binary search costs 10 steps. On the same unsorted list, each linear search costs 100 steps. What is the smallest number of searches for which sorting once and then using binary search costs strictly less?",
        "options": [
          "10",
          "12",
          "11",
          "100"
        ],
        "answer": 1,
        "exp": "比较 1000 + 10k 与 100k，需要 90k > 1000。11 次时花 1110 对 1100，12 次时花 1120 对 1200。",
        "zh": "回看 L09 复习笔记第 9 节。"
      },
      {
        "id": "exam-target-30",
        "lesson": "L08",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "What does this code print?\n\n```python\ndef remove_value(numbers, target):\n    slow = 0\n    for fast in range(len(numbers)):\n        if numbers[fast] != target:\n            numbers[slow] = numbers[fast]\n            slow = slow + 1\n    return slow\n\nnumbers = [0, 7, 8, 0, 9]\nlength = remove_value(numbers, 0)\nprint(length, numbers)\n```",
        "options": [
          "3 [7, 8, 9]",
          "5 [7, 8, 9, 0, 9]",
          "3 [7, 8, 9, 0, 9]",
          "3 [7, 8, 9, 8, 9]"
        ],
        "answer": 2,
        "exp": "快指针扫描所有值，慢指针依次写入 7、8、9。只更新前三个位置，列表长度仍是五，尾部原来的 0、9 仍留着。",
        "zh": "回看 L09 复习笔记第 10 节。"
      },
      {
        "id": "exam-target-31",
        "lesson": "L08",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "Which pair of values does this function find first?\n\n```python\ndef find_pair_sorted(numbers, target):\n    left = 0\n    right = len(numbers) - 1\n    while left < right:\n        total = numbers[left] + numbers[right]\n        if total == target:\n            return (numbers[left], numbers[right])\n        if total < target:\n            left = left + 1\n        else:\n            right = right - 1\n    return None\n\nprint(find_pair_sorted([1, 2, 4, 6, 8, 11], 10))\n```",
        "options": [
          "(2, 8)",
          "(4, 6)",
          "(1, 5)",
          "(2, 6)"
        ],
        "answer": 0,
        "exp": "首先比较 1 + 11，大于 10，右指针左移到 8。接着 1 + 8 小于 10，左指针右移到 2。之后 2 + 8 匹配，立刻返回。",
        "zh": "回看 L09 复习笔记第 10 节。"
      },
      {
        "id": "exam-target-32",
        "lesson": "L08",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "An opposite-end two-pointer search starts with left = 0 and right = n - 1, where n ≥ 1. On each unsuccessful turn it moves one pointer inward by exactly one. What is the largest possible number of pairs checked before it finds no match?",
        "options": [
          "n",
          "n(n - 1) / 2",
          "log₂ n",
          "n - 1"
        ],
        "answer": 3,
        "exp": "两指针起初相距 n-1。每检查一个不匹配的数对，距离减 1。距离变成 0 时停止，所以最多检查 n-1 次。这里假定 n ≥ 1。",
        "zh": "回看 L09 复习笔记第 10 节。"
      },
      {
        "id": "exam-target-33",
        "lesson": "L08",
        "src": "exam",
        "topic": "考前打靶",
        "prompt": "Which edit keeps the valid pairs while preventing an index from being used twice?\n\n```python\ndef pair(a, target):\n    left = 0\n    right = len(a) - 1\n    while left <= right:\n        total = a[left] + a[right]\n        if total == target:\n            return (a[left], a[right])\n        if total < target:\n            left = left + 1\n        else:\n            right = right - 1\n    return None\n\nprint(pair([1, 3, 8], 6))\n```",
        "options": [
          "Change while left <= right to while left < right.",
          "Require a[left] != a[right] before returning.",
          "Set right = len(a) initially.",
          "Move left and right on every turn."
        ],
        "answer": 0,
        "exp": "只允许 left < right 保证位置不同。数值可以相等，例如两个不同位置的 3 可以凑成 6。对下面的输入，修正后会返回 None。",
        "zh": "回看 L09 复习笔记第 10 节。"
      }
    ]
  }
];
