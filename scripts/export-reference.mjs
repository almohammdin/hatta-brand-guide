import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
function toMarkdown(source){
const clean=x=>x.replace(/<[^>]*>/g,"").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&nbsp;/g," ").replace(/[ \t]+/g," ").trim();
const base="https://almohammdin.github.io/hatta-brand-guide/";
let s=source.slice(source.indexOf("<body"));
s=s.replace(/<(script|style|header|footer|nav)\b[^>]*>[\s\S]*?<\/\1>/gi,"").replace(/<input\b[^>]*>/gi,"");
s=s.replace(/<table\b[^>]*>([\s\S]*?)<\/table>/g,(_,t)=>{let rows=[...t.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/g)].map(r=>[...r[1].matchAll(/<t[hd]\b[^>]*>([\s\S]*?)<\/t[hd]>/g)].map(c=>clean(c[1]).replaceAll("|","\\|")));if(!rows.length)return "";return "\n\n"+rows.map((r,i)=>"| "+r.join(" | ")+" |\n"+(i===0?"| "+r.map(()=>"---").join(" | ")+" |\n":"")).join("")+"\n";});
s=s.replace(/<pre\b[^>]*>([\s\S]*?)<\/pre>/g,(_,x)=>"\n\n```css\n"+clean(x)+"\n```\n\n");
s=s.replace(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/g,(_,l,t)=>"\n\n"+"#".repeat(Math.min(Number(l)+1,6))+" "+clean(t.replace(/<br\s*\/?>/g," "))+"\n\n");
s=s.replace(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g,(_,u,t)=>{let label=clean(t);if(!label)return "";return "["+label+"]("+(/^https?:/.test(u)?u:base+u)+")";});
s=s.replace(/<a class="skip-link"[\s\S]*?<\/a>/g,"").replace(/<button\b[^>]*>[\s\S]*?<\/button>/g,"").replace(/<\/(span|small|strong|em)>/g," ");
s=s.replace(/<li\b[^>]*>/g,"\n- ").replace(/<\/li>/g,"\n").replace(/<summary\b[^>]*>([\s\S]*?)<\/summary>/g,(_,t)=>"\n\n**"+clean(t)+"**\n\n");
s=s.replace(/<img\b[^>]*>/g,"").replace(/<br\s*\/?>/g,"\n").replace(/<\/(p|div|article|section|details|ul|ol)>/g,"\n\n").replace(/<[^>]*>/g,"");
s=clean(s).replace(/\n[ \t]+/g,"\n").replace(/\n{3,}/g,"\n\n");
return "# دليل هوية حتى\n\nالإصدار 2.0 · 25-10-2026\n\nالمصدر: "+base+"\n\nهذا المرجع مستخرج من محتوى صفحة الدليل. استخدم معه tokens.json والأصول من الإصدار نفسه.\n\n"+s+"\n";
}
const markdown=toMarkdown(fs.readFileSync(path.join(root,'index.html'),'utf8'));
for(const p of ['downloads/brand-guide.md','skills/apply-hatta-brand/references/brand-guide.md']){fs.mkdirSync(path.dirname(path.join(root,p)),{recursive:true});fs.writeFileSync(path.join(root,p),markdown);}
console.log('Updated both Markdown references from index.html');
