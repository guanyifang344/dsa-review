s='build/src/'
h=open(s+'index.html').read()
h=h.replace('<link rel="stylesheet" href="style.css">','<style>'+open(s+'style.css').read()+'</style>')
app='(function(){\n'+'\n'.join(open(s+f).read() for f in ['js_1core.js','js_2art.js','js_3views.js','js_4quiz.js','js_5pages.js','js_5review.js','js_5review2.js','js_rank.js','js_6guide.js'])+'\n})();'
open('build/app.bundle.js','w').write(app)
h=h.replace('<script src="app.js"></script>','<script>'+app.replace('</script>','<\\/script>')+'</script>')
for f in ['data.js','practice_l10.js','exam-papers.js','cards.js','review_0.js','review_1.js','review_2.js','review_3.js','review_4.js','review_10.js']:
    h=h.replace(f'<script src="{f}"></script>','<script>'+open(s+f).read().replace('</script>','<\\/script>')+'</script>')
open('study.html','w').write(h); print(len(h))
