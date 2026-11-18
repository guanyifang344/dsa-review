window.L10_PRACTICE = {
  lesson: {
    id: 'L10',
    title: '栈',
    en: 'Stacks',
    color: '#6ee7b7',
    points: [
      '后进先出（LIFO）：最后压入的元素最先弹出。用 Python 列表的末尾当栈顶。',
      'push 用 append(x)，pop 用 pop()，peek 用 [-1]，判空和取大小用 len。末尾 append 是均摊 O(1)。',
      '括号匹配：左括号入栈；右括号先查栈是否为空，再弹栈核对类型；扫描完还要检查栈为空。',
      '撤销、退格和消除相邻重复字符都可以用栈。每次处理最近保留的元素。',
      '函数调用压入栈帧，返回时弹出。读 traceback 从最下面开始：异常、触发行、调用者。'
    ],
    traps: [
      'pop() 会删掉栈顶，[-1] 只读取。空栈执行这两种操作都会抛出 IndexError。',
      '用 insert(0, x) 或 pop(0) 会移动元素。n 次入栈加 n 次出栈需要 O(n²)。',
      '括号数量相等也可能嵌套错误，例如 ([)]。空栈遇到右括号和扫描结束时仍有左括号也应返回 False。',
      'None 可以作为普通元素入栈。栈可能为空时，先判空。'
    ]
  },
  questions: [
    {
      id: 'l10-r1-01', topic: '后进先出与栈顶',
      prompt: 'What does this code print?\n\n```python\nstack = ["x", "y"]\nstack.append("z")\nremoved = stack.pop()\nprint(removed, stack[-1], len(stack))\n```',
      options: ['`x z 2`', '`z y 2`', '`z y 1`', '`y z 2`'],
      answer: 1,
      zh: '`z` 最后入栈，所以先被弹出。随后 `stack[-1]` 读取 `y`，此时栈仍为 `["x", "y"]`，长度为 2。'
    },
    {
      id: 'l10-r1-02', topic: '栈操作与复杂度',
      prompt: 'A Python list stores the top of a stack at its end. Which statement is correct for a non-empty stack?',
      options: [
        '`items[-1]` removes and returns the top item.',
        '`items.pop()` shifts all remaining items one position.',
        '`len(items)` scans the whole stack.',
        '`items.append(x)` pushes `x` in amortized `O(1)` time.'
      ],
      answer: 3,
      zh: '`append(x)` 在末尾压入一个元素，偶尔扩容的成本摊到多次操作后，每次均摊 `O(1)`。`[-1]` 读取栈顶，`pop()` 弹出末尾元素，`len` 直接读取长度。'
    },
    {
      id: 'l10-r1-03', topic: '列表首端的代价',
      prompt: 'Starting from an empty list, a stack uses `insert(0, x)` to push and `pop(0)` to pop. It pushes all `n` items and then pops all `n` items. What is the tightest time bound?',
      options: ['`O(1)`', '`O(n)`', '`O(n²)`', '`O(n log n)`'],
      answer: 2,
      zh: '在位置 0 插入或删除时，需要搬动剩余元素。入栈阶段的移动次数为 `0 + 1 + … + (n - 1)`，出栈阶段同样是这个数量级，总时间为 `O(n²)`。'
    },
    {
      id: 'l10-r1-04', topic: '空栈与特殊值',
      prompt: 'A wrapper returns `None` when asked to pop an empty stack. The stack accepts any Python value. Why is the wrapper ambiguous?',
      options: [
        'A successful pop can also return `None`.',
        'An empty Python list has length `None`.',
        'All successful pops return `None`.',
        'Pushing `None` makes the stack empty.'
      ],
      answer: 0,
      zh: '栈中可以存放 `None`，弹出这个元素得到的也是 `None`。Python 的 `list.pop()` 在空列表上会抛出 `IndexError`，调用前可以先检查长度。'
    },
    {
      id: 'l10-r1-05', topic: '括号按栈顶匹配',
      prompt: 'A bracket checker scans `([)]` from left to right. When does it first detect a problem?',
      options: [
        'At `[`, because it opens before `(` closes.',
        'At `)`, because the stack is empty.',
        'At `)`, because the top of the stack is `[`.',
        'At the end, when an unmatched `[` remains.'
      ],
      answer: 2,
      zh: '读到 `)` 前栈中从底到顶是 `(`、`[`。`)` 必须与栈顶配对，遇到 `[` 就应判定失败。'
    },
    {
      id: 'l10-r1-06', topic: '扫描结束后的判空',
      prompt: 'The input contains only round brackets. Which input incorrectly returns `True`?\n\n```python\ndef balanced(text):\n    stack = []\n    for ch in text:\n        if ch == "(":\n            stack.append(ch)\n        elif not stack:\n            return False\n        else:\n            stack.pop()\n    return True\n```',
      options: ['`"()"`', '`")("`', '`""`', '`"(()"`'],
      answer: 3,
      zh: '`"(()"` 扫描完还剩一个左括号，循环中却没有遇到空栈弹出。最后应写 `return len(stack) == 0`。'
    },
    {
      id: 'l10-r1-07', topic: '调用栈与栈帧',
      prompt: '`outer()` calls `middle()`, which calls `inner()`. Immediately after `inner()` returns and before `middle()` returns, what happens?',
      options: [
        'Execution resumes in `middle()`, with the `middle()` frame at the top.',
        'Execution resumes in `outer()`, with the `inner()` frame at the top.',
        'The `outer()` frame is popped first.',
        'All three function frames are popped at once.'
      ],
      answer: 0,
      zh: '`inner()` 返回时弹出自己的栈帧，控制流回到调用它的 `middle()`。此时 `middle()` 在栈顶，`outer()` 还在等待。'
    },
    {
      id: 'l10-r1-08', topic: '读 traceback',
      prompt: 'Which line raises the exception shown here?\n\n```\nTraceback (most recent call last):\n  File "app.py", line 14, in <module>\n    undo([])\n  File "app.py", line 9, in undo\n    return take_last(history)\n  File "app.py", line 4, in take_last\n    return items.pop()\nIndexError: pop from empty list\n```',
      options: [
        'Line 14, in the module.',
        'Line 4, inside `take_last`.',
        'Line 9, inside `undo`.',
        'The traceback has no line number for the exception.'
      ],
      answer: 1,
      zh: '最后一行给出异常类型和信息。它上方最靠近的栈帧指向实际触发异常的语句，第 4 行 `items.pop()`。继续向上可看到调用路径。'
    },
    {
      id: 'l10-r1-09', topic: '撤销与列表副本',
      prompt: 'An undo function must return a new list and leave the caller’s history unchanged. Which line should replace `...`?\n\n```python\ndef undo(history, times):\n    stack = ...\n    for _ in range(times):\n        if not stack:\n            break\n        stack.pop()\n    return stack\n```',
      options: ['`stack = history`', '`stack = []`', '`stack = history[:]`', '`stack = history[-1:]`'],
      answer: 2,
      zh: '`history[:]` 复制整个列表。随后在副本上弹栈，调用方的列表保持原状。`stack = history` 让两个名字指向同一个列表。'
    },
    {
      id: 'l10-r1-10', topic: '退格模拟',
      prompt: 'Each letter is pushed onto the stack. A `#` pops one letter if the stack is non-empty and is ignored otherwise. What is left after processing `"#ab###cd#e"`?',
      options: ['`["c", "e"]`', '`["d", "e"]`', '`["a", "c", "e"]`', '`[]`'],
      answer: 0,
      zh: '开头的退格被忽略。`ab###` 先弹出 `b` 和 `a`，第三次退格遇到空栈。`cd#e` 弹出 `d` 后压入 `e`，留下 `["c", "e"]`。'
    },
    {
      id: 'l10-r1-11', topic: '消除相邻重复字符',
      prompt: 'What does `remove_pairs("azxxzy")` return?\n\n```python\ndef remove_pairs(text):\n    stack = []\n    for ch in text:\n        if stack and stack[-1] == ch:\n            stack.pop()\n        else:\n            stack.append(ch)\n    return stack\n```',
      options: ['`["a", "z", "z", "y"]`', '`["a", "z", "y"]`', '`[]`', '`["a", "y"]`'],
      answer: 3,
      zh: '两个 `x` 抵消后，栈恢复为 `["a", "z"]`。接着读到第二个 `z`，又弹出栈顶的 `z`，最后压入 `y`。'
    },
    {
      id: 'l10-r1-12', topic: '补齐圆括号',
      prompt: 'What is the minimum number of brackets to insert to make `")(()"` balanced?',
      options: ['0', '2', '1', '3'],
      answer: 1,
      zh: '开头的 `)` 缺一个在它之前的 `(`，结尾仍有一个 `(` 未配对，需要再补一个 `)`。两边各需要一次插入，共 2 次。'
    }
  ].map(q => ({...q, lesson: 'L10', src: 'ai'}))
};
