# Hatta Digital Experience Standards

Version 2.2 · 30-10-2026

Source: https://almohammdin.github.io/hatta-brand-guide/en.html

This reference is generated from the guide. Use it with tokens.json and assets from the same release.

12.1 · Digital Experience and Implementation Skills

### A distinct identity. A refined experience.

Implementation standards for Hatta interfaces, turning design principles into practical checks before delivery. Apply them according to the deliverable and task scope.

#### A consistent identity serving the task

- Keep the logo, colors, type roles, pattern and signature as defined in this guide. Use skill references to improve implementation within Hatta's identity, rather than importing another brand's colors, fonts or personality.

- Start with the action the user wants to complete: a clear heading, a readable result and a defined primary action. Explain empty, loading, success and error states directly and offer a useful next step.

- For materially different layouts, compare 2–3 alternatives with the same content and dimensions before adopting one. Preserve calculations, data and functionality.

#### Calm, responsive motion

- Every animation needs a purpose: press feedback, a state change, a relationship or the origin of a panel. Remove repeated decorative motion and scroll effects that delay content.

- Hatta starting values: press feedback 100–160 ms; menus and tooltips 150–220 ms; dialogs 200–280 ms. Frequent actions and keyboard shortcuts should respond without waiting for an animation.

- Reserve 400–700 ms for an explanatory diagram or presentation scene that needs time to understand. Do not use it as the default for tool buttons or navigation.

- Start promptly and settle gently using ease-out or the approved curve. Menus emerge from their trigger; centered dialogs remain centered. Avoid scaling from zero or exaggerated bounce.

- Allow motion to reverse and elements to close during transitions. Successful saving or closing must not depend on a visual effect finishing. Prefer transform and opacity; name transition properties rather than using transition: all.

- For reduced motion, remove translation, scaling, repetition and unnecessary smooth scrolling, while keeping state descriptions clear. Repeating demonstrations start on request and provide a stop control.

#### Mobile and touch

- Target an interaction area of at least 44 × 44 px. Show feedback as soon as touch begins, but execute actions through click to retain keyboard support. Do not trigger deletion or submission on initial touch.

- Limit hover effects to devices supporting a fine pointer and hover. Start mobile inputs at 16 px to reduce automatic zoom; allow user zoom and choose suitable numeric, email or phone keyboards.

- Use svh or dvh according to the page's purpose instead of assuming a fixed height. Respect safe areas at the top and bottom, and check that fields and submit buttons remain visible when the keyboard opens.

- Place the footer after content and at the bottom of short pages, without covering content or adding needless height. Reserve space for fixed bars. Let tables scroll in a named region when required.

- Keep text and results selectable and copyable. Configure gestures only on the elements that need them; do not globally disable page scrolling or pull-to-refresh by default.

- Review on a real phone when available. Screen emulation is supplementary. If hardware is unavailable, explicitly state that the keyboard, touch behavior and safe areas were not verified on a device.

#### Arabic and realistic data

- Review Arabic in RTL and English and French in LTR when supported by the product. Isolate mixed-direction numbers, identifiers and URLs. Retain digits 0–9 as required by the guide.

- Test a long Arabic name, long email, translated button label, empty optional field, missing image, zero items, one item and a realistic large count. Use plausible synthetic fixtures separate from user data.

- Never truncate amounts, dates or numbers used for comparison. Wrap essential text; make the full value accessible when shortening secondary descriptions. Handle missing values without displaying NaN or undefined.

- Review at 320, 390, 768 and 1440 px and at 200% zoom where appropriate. Check for clipped letters, overlapping logos and unreachable actions. Do not ship fixture-switching controls in production.

#### Skills to use when relevant

- emil-design-eng: review layout and interaction quality, giving Hatta's identity standards priority over the reference's visual preferences.

- mobile-native: check viewport height, touch, inputs, scrolling and safe areas on phones.

- break-ui: stress-test with realistic difficult data, fix defects within scope, then recheck the normal case.

- prototype: compare alternatives for a component or specific area when the decision affects usability, without unnecessarily redesigning the whole platform.

- review-animations and remove-animations: review purpose, frequency and duration; remove motion that obstructs reading or delays work.

- animation-performance: diagnose stutter with measurements and evidence before adding a library or effect. Prefer existing tools and CSS when sufficient.

#### Delivery criteria

- Verify all four type roles, alternate letterforms, logos and contrast. Avoid repeating Naif's signature or handle within the same area.

- Test the primary path from input to result, plus loading, failure, retry and empty states, using safe data. Check keyboard navigation, visible focus, button labels and focus restoration after dialogs close.

- Test mobile, supported languages, long data, reduced motion and repeated presses during transitions. Wait for fonts before exporting images or PDF, then inspect the exported artifact itself.

- Provide a brief account of changes, checks and verification limits. Reading a skill or adding it to the guide does not prove implementation quality; acceptance depends on the actual result.

Reference: [Emil Kowalski Skills ↗](https://github.com/emilkowalski/skills), reviewed 30-10-2026. These standards are rewritten and adapted for Hatta, not copied verbatim or adopted wholesale. User instructions take priority, followed by project scope and Hatta's identity. Timing values are Hatta implementation choices and may be adjusted for a documented reason. Adding this reference does not automatically install external skills.

[Download quality and skill standards ↓](https://almohammdin.github.io/hatta-brand-guide/downloads/digital-quality-en.md)[Matching implementation resources ↘](https://almohammdin.github.io/hatta-brand-guide/en.html#resources)
