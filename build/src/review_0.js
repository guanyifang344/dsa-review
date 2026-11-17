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
