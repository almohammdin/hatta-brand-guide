
const toggle=document.getElementById('motion-toggle');
const motion=document.querySelector('.motion-demo');
const motionStatus=document.getElementById('motion-status');
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
function stopMotion(){motion?.classList.remove('running');toggle?.setAttribute('aria-pressed','false');if(toggle)toggle.textContent='تشغيل المثال';if(motionStatus)motionStatus.textContent=reduced.matches?'المساهمة تتجه إلى المشروع؛ الحركة مخفضة حسب إعداد جهازك.':'المثال متوقف';}
toggle?.addEventListener('click',()=>{if(reduced.matches){stopMotion();return;}const running=motion.classList.toggle('running');toggle.setAttribute('aria-pressed',String(running));toggle.textContent=running?'إيقاف المثال':'تشغيل المثال';motionStatus.textContent=running?'تتحرك مساهمة الشريك باتجاه المشروع':'المثال متوقف';});
reduced.addEventListener('change',stopMotion);stopMotion();
document.addEventListener('visibilitychange',()=>{if(document.hidden)stopMotion();});
document.getElementById('copy-brief')?.addEventListener('click',async()=>{const out=document.getElementById('copy-status');const text='طبق هوية حتى بحسب النطاق المحدد في طلبي. اقرأ https://almohammdin.github.io/hatta-brand-guide/downloads/brand-guide.md وتعليمات https://almohammdin.github.io/hatta-brand-guide/skills/apply-hatta-brand/SKILL.md وتحقق من توافق الإصدار مع tokens.json. استخدم الأصول الأصلية، وراجع الخطوط والعربية والمقاس النهائي والتصدير. للمواقع اقرأ مرجع references/digital-quality.md ضمن مهارة حتى واختبر الجوال والبيانات الطويلة وتقليل الحركة والحالات الفارغة والخطأ. إذا طلبت الخطوط فقط فاقتصر عليها.';try{await navigator.clipboard.writeText(text);out.textContent='تم نسخ التوجيه';}catch{out.textContent='تعذر النسخ التلقائي؛ حمل ملف البداية السريعة.';}});
