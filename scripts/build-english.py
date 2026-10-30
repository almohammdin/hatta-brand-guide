"""Build the English guide from the Arabic source and reviewed translations.
Run before export-reference.mjs. Untranslated Arabic copy fails the build.
"""
from html.parser import HTMLParser
from html import escape
from pathlib import Path
import json,re
root=Path(__file__).resolve().parent.parent
translations=json.loads((root/'translations/en.json').read_text())
class Translate(HTMLParser):
 def __init__(self):
  super().__init__(convert_charrefs=False);self.out=[];self.skip=0
 def translate(self,s):
  if re.search('[\u0600-\u06ff]',s):
   if s not in translations:raise ValueError('Missing translation: '+s)
   return translations[s]
  return s
 def handle_starttag(self,t,attrs):
  raw=self.get_starttag_text()
  for k,v in attrs:
   if k in ('alt','aria-label','placeholder','value','content') and v and re.search('[\u0600-\u06ff]',v):
    raw=raw.replace(k+'="'+v+'"',k+'="'+escape(self.translate(v),quote=True)+'"')
  self.out.append(raw)
  if t in ('style','script'):self.skip+=1
 def handle_startendtag(self,t,a):self.handle_starttag(t,a)
 def handle_endtag(self,t):
  self.out.append('</'+t+'>')
  if t in ('style','script'):self.skip-=1
 def handle_data(self,s):self.out.append(s if self.skip else escape(self.translate(s),quote=False))
 def handle_entityref(self,s):self.out.append('&'+s+';')
 def handle_charref(self,s):self.out.append('&#'+s+';')
 def handle_decl(self,s):self.out.append('<!'+s+'>')
 def handle_comment(self,s):self.out.append('<!--'+s+'-->')
p=Translate();p.feed((root/'index.html').read_text());s=''.join(p.out)
s=s.replace('<html lang="ar" dir="rtl">','<html lang="en" dir="ltr">')
s=s.replace('<link rel="canonical" href="https://almohammdin.github.io/hatta-brand-guide/">','<link rel="canonical" href="https://almohammdin.github.io/hatta-brand-guide/en.html">')
s=s.replace('content="ar_SA"','content="en_US"').replace('property="og:url" content="https://almohammdin.github.io/hatta-brand-guide/"','property="og:url" content="https://almohammdin.github.io/hatta-brand-guide/en.html"')
# Switch links work without JavaScript; shared JS preserves the current section.
s=re.sub(r'<div class="language-switch".*?</div>','<div class="language-switch" aria-label="Language"><a href="./" lang="ar" dir="rtl" data-language-link>العربية</a><a href="en.html" lang="en" aria-current="page">English</a></div>',s)
s=s.replace('<div class="type-role" dir="rtl">','<div class="type-role">')
# Arabic specimens remain Arabic to demonstrate the actual glyph features.
s=s.replace('<div class="sample">حتى','<div class="sample arabic-specimen" lang="ar" dir="rtl">حتى')
s=s.replace('<div class="sample sans-alt">','<div class="sample sans-alt arabic-specimen" lang="ar" dir="rtl">').replace('<div class="sample sans-default">','<div class="sample sans-default arabic-specimen" lang="ar" dir="rtl">')
s=s.replace('<input id="type-demo-input"','<input lang="ar" dir="rtl" id="type-demo-input"')
s=s.replace('class="sans-alt" data-type-preview','class="sans-alt arabic-specimen" lang="ar" dir="rtl" data-type-preview').replace('class="sans-default" data-type-preview','class="sans-default arabic-specimen" lang="ar" dir="rtl" data-type-preview')
for a,b in {'downloads/brand-guide.md':'downloads/brand-guide-en.md','downloads/quick-start.md':'downloads/quick-start-en.md','skills/apply-hatta-brand/SKILL.md':'downloads/implementation-en.md','skills/apply-hatta-brand/references/digital-quality.md':'downloads/digital-quality-en.md','CHANGELOG.md':'downloads/changelog-en.md'}.items():s=s.replace('href="'+a+'"','href="'+b+'"')
s=s.replace('content:"عرض خاص"','content:"Special offer"')
(root/'en.html').write_text(s)
print('Built English guide with',len(translations),'reviewed translations')
