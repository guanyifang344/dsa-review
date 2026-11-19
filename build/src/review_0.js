// Building blocks for lesson write-ups. Each lesson file returns {lead, sections:[{id,title,blocks:[...]}]}.
window.REVIEW = {};
window.RV = {
  P: text => ({t:'p', text}),                       // paragraph (supports `code` and **bold**)
  H: text => ({t:'h', text}),                       // small sub-heading inside a section
  LI: items => ({t:'list', items}),                 // bullet list
  C: (code, cap) => ({t:'code', code, cap}),        // python code, highlighted
  T: (head, rows, cap) => ({t:'table', head, rows, cap}),
  W: (bad, good, why) => ({t:'wrong', bad, good, why}),   // wrong vs right, side by side
  X: text => ({t:'exam', text}),                    // how it shows up in MCQ1
  K: text => ({t:'key', text}),                     // one sentence to remember
  D: (key, cap) => ({t:'demo', key, cap}),          // embedded step-through demo
  S: (id, title, ...blocks) => ({id, title, blocks})
};

window.REVIEW_GLOSSARY = [
  ['读题与代码追踪', [
    ['output / return value', '输出 / 返回值', 'What does this code print? 问屏幕上显示什么。What does the function return? 问函数交回给调用者的值。'],
    ['raise an exception', '抛出异常', '执行在该处中断。例如取超出范围的列表索引会引发 IndexError。'],
    ['terminate / termination', '终止 / 终止性', '问算法能否对每个合法输入都在有限步骤内结束。'],
    ['invariant', '不变式', '每次迭代在指定位置都成立的条件。例如每轮开始时，左侧前缀已经排好序。'],
    ['trace / iteration', '逐步推演 / 一次迭代', 'Trace the code 要按执行顺序记变量值。One iteration 指指定循环执行一轮。'],
    ['at most / exactly', '至多 / 恰好', 'At most n 包含 n，也允许更少。Exactly n 必须等于 n。'],
    ['initially / after / remaining', '起初 / 执行之后 / 剩余的', 'After one pass 只推演一趟。Remaining items 指当前还没排除或处理的元素。'],
    ['duplicate / distinct', '重复元素 / 互不相同的', 'Two distinct indices 要求索引不同，即使两个位置的值相同也能满足。'],
  ]],
  ['L01–L02 · 算法与复杂度', [
    ['algorithm / data structure', '算法 / 数据结构', '前者是解决问题的步骤，后者是组织和存取数据的方式。'],
    ['time complexity / space complexity', '时间复杂度 / 空间复杂度', '分别问操作次数和空间用量如何随输入规模增长。看到 extra memory 时只算额外内存。'],
    ['best / worst / average case', '最好 / 最坏 / 平均情况', '同一输入规模下分别看最少成本、最大成本和某个输入分布下的期望成本。'],
    ['drop constants / dominant term', '忽略常数因子 / 主导项', '4n² + 3n + 7 的主导项是 n²。题目若问确切操作次数，要保留各项。'],
    ['constant / logarithmic / linear', '常数 / 对数 / 线性', '分别常写作 O(1)、O(log n)、O(n)。每轮将范围减半常对应对数轮数。'],
    ['quadratic / nested loop', '平方级 / 嵌套循环', '两层各做 n 轮时通常是 O(n²)。内层若固定做 3 次，总次数只有 3n。'],
  ]],
  ['L03–L04 · 列表与字符串', [
    ['index / length', '索引 / 长度', '长度为 n 的非空序列，最后一个非负索引是 n − 1。'],
    ['slice / exclusive end', '切片 / 不包含结束位置', 'a[i:j] 包含 i，直到 j 前一位。列表的 a[:] 产生浅拷贝。'],
    ['alias / shallow copy', '别名 / 浅拷贝', 'b = a 共享同一个列表。b = a[:] 拷贝外层列表，内部可变对象仍可能共享。'],
    ['mutable / immutable', '可变 / 不可变', '列表可原地修改，字符串不能通过索引给某个字符赋值。'],
    ['append / insert / shift', '追加 / 插入 / 移位', '列表末尾 append 的均摊成本为 O(1)。在列表开头插入通常要移动其余元素。'],
    ['pop / remove', '按位置移除并返回 / 按值移除', 'pop(i) 返回被移除的元素。remove(x) 删除第一个等于 x 的元素，返回 None。'],
    ['concatenate / split / join', '拼接 / 拆分 / 连接', 'split() 把字符串拆成列表。separator.join(parts) 用分隔符连接字符串片段。'],
    ['substring / find / truthy', '子串 / 查找位置 / 在布尔判断中为真', 'str.find() 找到时返回索引，找不到返回 −1。Python 中 0 为假，−1 为真。'],
  ]],
  ['L05–L06 · 排序', [
    ['ascending / descending', '升序 / 降序', '判断顺序时也要留意题目是否要求保留重复项。'],
    ['comparison / swap', '比较 / 交换', '一次比较用来决定顺序，只有满足交换条件时才计一次交换。'],
    ['adjacent / one full pass', '相邻 / 完整一趟', '冒泡排序对相邻元素反复比较。按常见升序写法，从左往右一趟会将当前最大值移到右端。'],
    ['selection sort / unsorted suffix', '选择排序 / 未排序的后缀', '从未排序部分选最小项，放到该部分开头。'],
    ['stable / relative order', '稳定 / 相对顺序', '排序键相同的元素仍保持原有先后顺序，则排序是稳定的。'],
    ['in place / return None', '原地修改 / 返回 None', 'Python 的 list.sort() 修改原列表并返回 None。sorted() 返回一个新列表。'],
  ]],
  ['L07–L08 · 搜索与双指针', [
    ['target / match', '目标值 / 匹配', '题目可能问是否找到、匹配索引或比较次数，先看清要返回哪一种。'],
    ['linear search / early exit', '线性搜索 / 提前结束', '可按顺序扫未排序列表，命中就返回。即使能提前结束，最坏仍可能扫遍整个列表。'],
    ['binary search / sorted input', '二分搜索 / 已排序输入', '利用有序性比较中点，每次排除一半候选范围。题目若要求先排序，需计入排序成本。'],
    ['low / high / midpoint', '下界 / 上界 / 中点', '先确认 high 是否包含在搜索区间内，再判断循环条件和边界更新。'],
    ['two pointers / read and write indices', '双指针 / 读写索引', '删除指定值时，读指针扫描，写指针只在保留元素时前进。'],
    ['logical length / valid prefix', '逻辑长度 / 有效前缀', '原地保留元素后，返回的长度 k 只保证前 k 项有效，底层列表可能比 k 长。'],
    ['pair sum / remaining range', '两数之和 / 剩余范围', '对升序列表，当前和太小就移动左指针，太大就移动右指针。'],
  ]],
];
