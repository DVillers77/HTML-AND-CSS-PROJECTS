# Course Assignment Index - HTML & CSS Projects

---

# Assignment Index

> **Important Note on Formatting (Updated 2025-07-16):**
> A new standardized format for assignment entries is being implemented from this date forward to enhance consistency, clarity, and precise cross-referencing with course materials. Newer entries will fully conform to this structure, including explicit course module titles and step numbers. Older entries may follow a previous format and might not contain all details.

This document tracks all coding assignments and challenges chronologically, detailing objectives, tasks, and relevant files, precisely cross-referenced with the course outline.

---

#### AI ASSISTANT PROJECT GUIDELINES
For detailed rules on collaboration, documentation, and project standards, please refer to the [AI Assistant Project Guidelines](https://github.com/DVillers77/Tech-Academy-Projects-/blob/main/ai-assistant-project-guidelines.md).

---

For a high-level overview of the entire project, including broader outcomes and learned skills, please refer to the main [README.md](README.md) file.

---

This file serves as a detailed index of **coding assignments** from the HTML & CSS Course, mapping specific course steps to the corresponding files and folders within this repository.

---

## Section 1: INTRODUCTION TO HTML

---

### Subsection B: UNDERSTANDING HTML ELEMENTS

#### Step 24: NOTPAD++ ASSIGNMENT - Basic HTML Setup
* **Objective:** Set up Notepad++ and create a basic "hello, world!" HTML page.
* **Relevant Files:** [hello-world.html](hello-world.html)

---

## Section 2: HTML FUNDAMENTALS

---

### Subsection B: THE HTML TEMPLATE

#### Step 53: HTML Template Assignment - Create Reusable Boilerplate
* **Objective:** Create a reusable HTML boilerplate file (`assignment.html`).
* **Relevant Files:** [assignment.html](html-documents/assignment.html)

#### Step 56: Basic Webpage Assignment - Add Structural Elements
* **Objective:** Update the existing `assignment.html` template by incorporating basic structural elements (`p`, `h1`, `h3`, `h6`) into its body and giving the page a title.
* **Relevant Files:** [assignment.html](html-documents/assignment.html)
* **Reflection/Learning Note:** This assignment was key for reinforcing basic HTML structure. I initially misunderstood the instruction and created a new file, which highlighted the importance of carefully re-reading assignment instructions and how Git tracks file changes (deletion and modification) within a single commit. This was a valuable lesson in attention to detail and version control.

---

### Subsection C: HTML Attributes

#### Step 67: FOOTER, MAIN AND IMAGE ASSIGNMENT - Add Semantic Tags
* **Objective:** Add `<footer>`, `<main>`, and `<img>` tags to `assignment.html`.
* **Relevant Files:** [assignment.html](html-documents/assignment.html)

#### Step 71: IMAGE ASSIGNMENT - Practice File Paths
* **Objective:** Create a temporary website structure with an `Images` folder and an HTML file that links to a local image, focusing on practical experience with file paths.
* **Status:** Completed (Temporary Exercise).
* **Core Course Concepts:** File system organization, relative file paths, `<img>` tag, temporary project setup.
* **Relevant Files:** This assignment involved a temporary project structure (`Website/` folder on desktop), which was later deleted. Example files would include: `Website/my-image-page.html`, `Website/Images/my-image.jpg`. These files were not integrated into the main repository.
* **Reflection/Learning Note:** This step provided hands-on experience with managing local file paths, which is crucial for linking assets like images within a project. An initial attempt to use a local placeholder image within the repository's main structure faced challenges due to link issues. As a solution/demonstration for linking images, a random cycling image from Picsum was subsequently used in a separate, temporary context to verify `<img>` tag functionality and external linking. The temporary "Website" folder was later deleted as instructed by the course.

#### Step 74: IMPLICIT LINK ASSIGNMENT - Two-Way Internal Links
* **Objective:** Create a new `dog.html` with an image, and link it two-way with `assignment.html` using implicit links.
* **Relevant Files:**
    * [assignment.html](html-documents/assignment.html)
    * [dog.html](html-documents/dog.html)
    * [images/xolo-art-01.png](images/xolo-art-01.png)

#### Step 75: EXPLICIT LINK ASSIGNMENT - Link External Image URL
* **Objective:** Create an explicit link in `assignment.html` that navigates directly to an online image URL.
* **Relevant Files:**
    * [assignment.html](html-documents/assignment.html)

#### Step 79: DOG WEBPAGE ASSIGNMENT - Integrate Navigation and Video
* **Objective:** Create a new HTML page (`dog-video.html`) with a YouTube video link, and integrate consistent navigation across `assignment.html`, `dog.html`, and `dog-video.html`.
* **Relevant Files:**
    * [assignment.html](html-documents/assignment.html)
    * [dog.html](html-documents/dog.html)
    * [dog-video.html](html-documents/dog-video.html)

#### Step 80: DOG WEBPAGE CHALLENGE
* **Objective:** Learn and implement the `<blockquote>` element in `assignment.html` and embed a YouTube video using `<iframe>` in `dog-video.html`.
* **Relevant Files:**
    * [html-documents/assignment.html](html-documents/assignment.html)
    * [html-documents/dog.html](html-documents/dog.html)
    * [html-documents/dog-video.html](html-documents/dog-video.html)
* **Note on File Reorganization:** Following initial submission, all HTML files were moved into the `html-documents/` folder, and all internal and documentation links were updated to reflect this change, addressing instructor feedback on file organization.

#### Step 81: HTML DOCUMENT SUBMISSION ASSIGNMENT - Course Submission
* **Objective:** Submit completed HTML and JavaScript files created thus far for review as part of the course's submission process.
* **Status:** Completed and Submitted.
* **Relevant Files:** All HTML and JavaScript files created/modified up to this step, including `assignment.html`, `dog.html`, `dog-video.html`, `basic-html-1.html`, `basic-html-2.html`, `basic-javascript-1.js`, and associated image files.
* **Reflection/Learning Note:** This step marked a milestone, involving the bundling and submission of all completed assignments from the HTML section. It reinforced the importance of ensuring all files and links were correctly organized and functional for a successful submission.

---

## Section 3: WEB DEVELOPMENT FUNDAMENTALS

---

### Subsection B: INTRODUCTION TO JAVASCRIPT AND OBJECT-ORIENTED PROGRAMMING

#### Step 107: BASIC HTML AND JAVASCRIPT ASSIGNMENT - Simple Alert Box
* **Objective:** Create an HTML file that uses JavaScript to display an alert box.
* **Relevant Files:**
    * [basic-html-and-javascript-1/basic-html-1.html](basic-html-and-javascript-1/basic-html-1.html)

#### Step 109: SOURCE ATTRIBUTE ASSIGNMENT - Link External JavaScript
* **Objective:** Create an external JavaScript file (`basic-javascript-1.js`) containing the alert method, and then link it to `basic-html-1.html` using the script `src` attribute to enable external script integration.
* **Relevant Files:**
    * [basic-html-and-javascript-1/basic-html-1.html](basic-html-and-javascript-1/basic-html-1.html) (Modified)
    * [basic-html-and-javascript-1/basic-javascript-1.js](basic-html-and-javascript-1/basic-javascript-1.js) (New)

#### Step 120: CREATING A FUNCTION (Independent Exercise)
* **Objective:** Implement a basic JavaScript function triggered by an HTML button click to dynamically update content using `document.getElementById()` and `innerHTML`.
* **Core Course Concepts:**
    * Basic JavaScript function definition.
    * HTML `onclick` event handler for user interaction.
    * Accessing HTML elements using `document.getElementById()`.
    * Manipulating element content with `innerHTML`.
* **Relevant Files:** [javascript-examples/120-onclick-function.html](javascript-examples/120-onclick-function.html)
* **Reflection/Learning Note:** Identified and corrected a syntax issue in the course's example where the `innerHTML` assignment was inadvertently split across two lines, preventing the dynamic content update. The correction involved adding the assignment operator (`=`) to ensure the `result` was correctly applied to the `innerHTML` property.

#### Step 121: TWO PART ASSIGNMENT - HTML and JavaScript Separation
* **Objective:**
    1. Create a new HTML file (`basic-html-2.html`) initially containing the interactive function from the previous step.
    2. Separate the JavaScript function into the existing external `basic-javascript-1.js` file and link `basic-html-2.html` to it.
* **Core Course Concepts:**
    * Reinforcement of `document.getElementById()` and `onclick` event handling.
    * **Best Practice:** Separating HTML (structure) and JavaScript (behavior) into distinct files.
    * HTML `<script src="...">` tag for linking external JavaScript files.
* **Relevant Files:**
    * [basic-html-and-javascript-1/basic-html-2.html](basic-html-and-javascript-1/basic-html-2.html)
    * [basic-html-and-javascript-1/basic-javascript-1.js](basic-html-and-javascript-1/basic-javascript-1.js)
* **Reflection/Learning Note:** This step emphasizes the importance of code organization and modularity. It demonstrates how to add new JavaScript functionality to an existing shared `.js` file, leading to cleaner, more maintainable, and reusable web projects. Adhered to kebab-case for file and folder naming for consistency and best practice. The existing `basic-javascript-1.js` was also updated to explicitly say "Hello, World!" as per Step 106's instruction.

---

### Subsection C: THE DOM AND DEVELOPER TOOLS

#### Step 128: CHALLENGE - DevTools Familiarization
* **Objective:** Become familiar with Google Chrome's Developer Tools by performing foundational inspection and navigation tasks.
* **Core Course Concepts:**
    * Introduction to client-side web development tools.
    * Understanding the browser's role in rendering HTML.
    * Basic navigation within the DevTools interface.
* **Outcome:** Successfully navigated Chrome Developer Tools to inspect a live webpage's HTML structure (DOM), gaining foundational familiarity with this essential development environment.
* **Relevant Files:** Any existing HTML file (e.g., [basic-html-and-javascript-1/basic-html-2.html](basic-html-and-javascript-1/basic-html-2.html)) can be used.
* **Reflection/Learning Note:** This challenge provided hands-on experience with DevTools, which are crucial for debugging and understanding how browsers interpret web code. Learning to inspect the live DOM is a foundational skill for future JavaScript interactions.

#### Step 133: WEB BROWSER TOOLS VIDEO - Cache & DevTools Essentials (Participation Activity)
* **Objective:** Understand browser caching, learn how to clear the cache, and gain further practical familiarity with essential Google Chrome Developer Tools panels.
* **Core Course Concepts:**
    * Browser caching mechanism and its impact on development.
    * Methods for clearing browser cache (full and force refresh).
    * In-depth practical use of Chrome DevTools: Elements panel (inspecting DOM, live editing), Console panel (REPL, error messages), Sources, Network, and an overview of other advanced panels.
* **Outcome:** Acquired the ability to manage browser cache effectively and utilize fundamental DevTools functionalities for inspecting, debugging, and temporarily modifying web pages during development.
* **Relevant Files:** Any local HTML file (e.g., [basic-html-and-javascript-1/basic-html-2.html](basic-html-and-javascript-1/basic-html-2.html)) was used for practical application and demonstration of DevTools.
* **Reflection/Learning Note:** Browser caching can be a significant hurdle during development, and mastering cache clearing methods like hard refresh is crucial. DevTools are the cornerstone of front-end debugging, allowing live inspection and testing. The ability to make temporary live edits in the Elements panel is particularly powerful for rapid prototyping and style adjustments.

#### Step 134: WEB BROWSER TOOLS ASSIGNMENT - Website Inspection
* **Objective:** Apply learned Developer Tools skills to inspect the HTML structure of a live website of choice.
* **Core Course Concepts:**
    * Practical application of the Chrome DevTools `Elements` tab for navigating and understanding live HTML/DOM.
    * Identifying various HTML tags, attributes (id, class, src, href, alt), and nested structures.
    * Using DevTools to make temporary, live modifications to webpage content (e.g., text, element visibility).
* **Outcome:** Gained hands-on experience in using browser Developer Tools to analyze the underlying code of any given website, enhancing understanding of web page construction and live debugging capabilities. Successfully inspected elements, understood nesting, and performed temporary content edits.
* **Relevant Files:** This assignment involved inspecting a live website (e.g., pff.com) using browser Developer Tools; no local project files were created or modified.
* **Reflection/Learning Note:** Directly inspecting live websites with DevTools is an invaluable skill for debugging, learning from existing sites, and rapid prototyping. It's fascinating to see how complex websites are structured and how quickly temporary changes can be made to test ideas, even if those changes aren't permanent. Recognizing dynamic content on complex sites (like the previous issue on The Tech Academy's page) versus simpler static elements is also a key practical insight gained.

## Section 4: WRITING CODE IN HTML

---

### Subsection A: STYLING WITH HTML

#### Step 144: COLOR ASSIGNMENT - Font Color with Deprecated Tags
* **Objective:** Add two paragraphs of text with specified colors to `basic-html-1.html` using the `<font>` element and its `color` attribute, demonstrating color names and hex codes.
* **Core Course Concepts:** Introduction to the `<font>` HTML element, specifying colors using color names and hexadecimal codes.
* **Outcome:** Successfully created/amended `basic-html-1.html` with correct HTML5 boilerplate, two colored paragraphs as instructed, and confirmed changes in the browser.
* **Relevant Files:**
    * [basic-html-and-javascript-1/basic-html-1.html](basic-html-and-javascript-1/basic-html-1.html)
* **Reflection/Learning Note:** This assignment introduced the `<font>` HTML element for styling. While it fulfills the course requirement, it's critical to note that the `<font>` element is **deprecated in modern HTML5**. Its use is discouraged in favor of CSS for separating content from presentation. This step also highlighted the importance of a complete HTML5 boilerplate, as the initial file structure was based on an incomplete course example and required significant additions for proper best-practice setup.
* **Independent Research & Best Practices:**
    * The **initial `basic-html-1.html` file was amended to include standard HTML5 boilerplate elements**, which were missing from the course's example image. This included correcting `<!DOCTYPE HTML>` to `<!DOCTYPE html>`, adding `<meta charset="utf-8">` for proper character encoding, and including a `<title>` tag for browser tab display.
    * The **deprecated `<font>` tag** was used as per course instruction. The modern and preferred method for applying font colors is via **CSS**, using properties like `color` applied through `style` attributes (inline CSS), or more robustly, via internal or external stylesheets.
    * Through collaborative "independent research," the **best practice for `<script>` tag placement** was identified and implemented. Scripts are typically placed just before the closing `</body>` tag to ensure HTML content loads quickly and is available for JavaScript manipulation without render-blocking.
    * **Evolution of In-Code Comments:** Due to a unique display issue where standard HTML comments (``) were not visible in the chat interface, and a subsequent attempt with custom `<x-doc>` tags resulted in unwanted display on the live page, a more robust solution was implemented. **`<script type="text/plain">` tags are now used for in-code developer notes.** This method ensures the comments are visible in the code editor/source code but are explicitly ignored and not displayed on the live web page by the browser, making it a reliable and universally recognized approach for this specific purpose in HTML.

#### Step 146: FACE AND SIZE ASSIGNMENT - Font Customization with Deprecated Tags
* **Objective:** Open `basic-html-1.html` and add `face` and `size` attributes to a `<font>` element, utilizing three different font sizes (e.g., 2, 4, and 6) to customize the text appearance.
* **Core Course Concepts:** Introduction to the `<font>` HTML element, specifying font family with the `face` attribute, and setting font size with the `size` attribute (using numeric values 1-7).
* **Relevant Files:**
    * [basic-html-and-javascript-1/basic-html-1.html](basic-html-and-javascript-1/basic-html-1.html) (Modified)
* **Reflection/Learning Note:** This assignment reinforced the use of deprecated HTML attributes for styling. It served as an important educational step to understand historical web development practices.
* **Independent Research & Best Practices:**
    * Through collaborative discussion, it was confirmed that the `<font>` tag is indeed **deprecated in HTML5**.
    * The modern and preferred approach for all font styling (color, family, size) is to utilize **CSS** properties (e.g., `color`, `font-family`, `font-size`). This adherence to CSS promotes a clear **separation of concerns** (structure in HTML, presentation in CSS), significantly improves maintainability, and aligns with current industry standards. This deeper understanding reinforces the importance of moving beyond older HTML styling methods.

#### Step 148: BOLD, ITALICS, UNDERLINE ASSIGNMENT - Text Styling with Deprecated Tags
* **Objective:** Open `basic-html-1.html` and add content that utilizes the `<b>`, `<i>`, and `<u>` tags to display bold, italicized, and underlined text.
* **Core Course Concepts:** Introduction to the `<b>` (bold), `<i>` (italic), and `<u>` (underline) HTML elements for basic text styling.
* **Relevant Files:**
    * [basic-html-and-javascript-1/basic-html-1.html](basic-html-and-javascript-1/basic-html-1.html) (Modified)
* **Reflection/Learning Note:** This assignment provided hands-on experience with the `<b>`, `<i>`, and `<u>` HTML elements for basic text styling, reinforcing understanding of direct inline formatting in HTML.
* **Independent Research & Best Practices:**
    * While the `<b>`, `<i>`, and `<u>` tags are still valid in HTML5, it's crucial to understand their role as primarily **presentational elements**. They convey visual style rather than semantic meaning.
    * For conveying **semantic meaning** (e.g., indicating importance or emphasis), the `<strong>` and `<em>` tags are the preferred modern alternatives. These tags have inherent meaning beyond just their default visual display.
    * For purely **visual styling** without semantic intent (e.g., a bold word just for aesthetic emphasis in a heading), **CSS** is the best practice. Properties like `font-weight: bold;`, `font-style: italic;`, and `text-decoration: underline;` offer greater control, promote separation of concerns, and improve maintainability of the codebase.

#### Step 149: IMAGE ELEMENT CHALLENGE - Image Element with Alt Attribute
* **Objective:** Define and learn how to utilize the HTML `alt` attribute by adding an `<img>` element to `basic-html-1.html` and demonstrating the `alt` text display when the image cannot be loaded.
* **Core Course Concepts:** Introduction to the `<img>` HTML element, specifying image source with the `src` attribute, and providing alternative text with the `alt` attribute.
* **Relevant Files:**
    * [basic-html-and-javascript-1/basic-html-1.html](basic-html-and-javascript-1/basic-html-1.html) (Modified)
* **Reflection/Learning Note:** This challenge provided hands-on experience adding an `<img>` element and directly observing the `alt` attribute's function as a fallback when the image source (`src`) is invalid or fails to load. This reinforced its practical utility in handling image display errors.
* **Independent Research & Best Practices:**
    * The `alt` attribute is **critical for web accessibility**, enabling screen readers to describe image content to visually impaired users. This ensures the information conveyed by images is accessible to all.
    * It also plays a significant role in **SEO (Search Engine Optimization)**, as search engines use `alt` text to understand image content, which can improve image and overall page ranking.
    * **Best practice for `alt` text** is to be descriptive, concise, and convey the image's content and function, rather than just stating "image of...". This provides valuable context even when the image isn't visible.

#### Step 150: BASIC HTML AND JAVASCRIPT 1 SUBMISSION ASSIGNMENT
* **Objective:** Successfully push the `Basic_HTML_and_JavaScript_1` folder to the GitHub repository, ensuring all specified minimum requirements for HTML elements (`<img>`, `alt`, `<b>`, `<i>`, `<u>`) are met in `basic-html-1.html` for instructor review.
* **Core Course Concepts:** Consolidating basic HTML elements, adherence to project requirements, GitHub repository management, and submission procedures.
* **Relevant Files:**
    * [basic-html-and-javascript-1/](basic-html-and-javascript-1/) (Entire folder for submission)
    * [basic-html-and-javascript-1/basic-html-1.html](basic-html-and-javascript-1/basic-html-1.html)
    * [basic-html-and-javascript-1/basic-javascript-1.js](basic-html-and-javascript-1/basic-javascript-1.js)
* **Reflection/Learning Note:** This assignment marked a significant milestone, requiring the consolidation of all prior `Basic_HTML_and_JavaScript_1` work and preparing the project for formal instructor review. It was a useful exercise in ensuring all required elements were in place for a complete submission.
* **Independent Research & Best Practices:**
    * **Interpreting Submission Requirements:** This step highlighted the importance of carefully interpreting assignment submission instructions, especially when phrasing might be ambiguous (e.g., whether a specific file URL or a broader project folder URL is required). The decision to provide the **folder URL** was made for comprehensiveness, allowing instructors to access all relevant project files.
    * **GitHub Project Structure for Submissions:** Emphasized the best practice of pushing and linking to the entire project folder on GitHub. This ensures the integrity of the project's file structure and provides the reviewer with full context, including all associated files like HTML and JavaScript, for a holistic review.
    * **Pre-Submission Checklist:** This step served as a practical demonstration of performing a final self-review of code against minimum requirements, ensuring all criteria are met before formal submission.

#### Step 158: BASIC HTML AND CSS ASSIGNMENT
* **Objective:** Create a new folder (`basic-html-and-css`) and an HTML file (`basic-html-3.html`) to demonstrate `div` and `<style>` tag usage with font colors.
* **Core Course Concepts:** Basic HTML structure, internal CSS (`<style>` tag), CSS specificity, HTML `div` element, and file/folder organization.
* **Relevant Files:**
    * [basic-html-and-css/](basic-html-and-css/) (Entire assignment folder for review)
    * [basic-html-and-css/basic-html-3.html](basic-html-and-css/basic-html-3.html)
* **Reflection/Learning Note:** This assignment provided practical experience in setting up a small web project, integrating basic HTML elements with internal CSS, and observing CSS specificity in action. It reinforced the importance of file naming conventions.
* **Independent Research & Best Practices:**
    * **Kebab-Case File Naming:** Confirmed kebab-case as a best practice for web-related file and folder names (`basic-html-and-css`, `basic-html-3.html`) for better URL compatibility and readability.
    * **Internal vs. External CSS:** Reaffirmed that while internal CSS is suitable for small, single-page examples, external stylesheets are generally preferred for larger projects for better organization and maintainability.

    ---

## SUBSECTION B: A PREVIEW OF CASCADING STYLE SHEETS (CSS)

### Course Step Number: 159
### Assignment Title: [Not yet assigned for this step, or a short descriptive if applicable]
### Date Assigned: 2025-07-16
### Status: In Progress

### Objective
* Understand the fundamental concepts of Cascading Style Sheets (CSS).
* Learn how CSS is used to style HTML elements.
* [Add any specific objectives for this initial CSS preview step.]

### Tasks
1.  Review course material for Subsection B: A Preview of CSS.
2.  Identify key terms and concepts related to CSS.
3.  [Add any practical tasks or exercises associated with this step.]

### Relevant Files
* [List any files directly related to this step, e.g., `style.css`, `index.html` if it's modified]

### Learning Reflections / Notes
* [Record any significant discoveries, challenges, or personal insights from this subsection.]

---

## CSS

### Course Step Number: 160
### Assignment Title: Core CSS Concepts Introduction
### Date Assigned: 2025-07-16
### Status: Completed

### Objective
* Understand the definition and purpose of Cascading Style Sheets (CSS).
* Grasp the concept of "separation of concerns" between HTML (structure) and CSS (presentation).
* Learn the fundamental principle of "cascading" and its benefits for centralized styling.

### Tasks
1.  Read and comprehend the course material for Step 160 on CSS.
2.  Internalize the definition of CSS and its role in web page appearance.
3.  Understand the "cascading" mechanism and its advantage for website maintenance.

### Relevant Files
* No direct files created for this informational step, but applies to all HTML pages (`.html`) when styling.

### Learning Reflections / Notes
* This step clarified the core purpose of CSS and how it decouples style from content, which is a major best practice.
* The "cascading" effect is a powerful concept for applying consistent styles site-wide.
* Noted the importance of `alt` text and accessibility from the course material's broken image example.

---

## AESTHETICS

### Course Step Number: 161
### Assignment Title: Introduction to Web Aesthetics with CSS
### Date Assigned: 2025-07-16
### Status: Completed

### Objective
* Understand the concept of "aesthetics" in web design.
* Recognize CSS as a primary tool for controlling the visual appearance of HTML documents.
* Grasp the efficiency benefits of using a single external CSS file to style multiple web pages.

### Tasks
1.  Read and comprehend the course material for Step 161, "AESTHETICS."
2.  Review the diagram illustrating the relationship between a single CSS file and multiple HTML pages.
3.  Internalize the role of CSS in separating content from presentation for improved efficiency.

### Relevant Files
* No direct files created for this informational step, but the concepts apply universally to web project files.

### Learning Reflections / Notes
* This step reinforced the core value proposition of CSS: centralized control over website appearance.
* The diagram made it very clear how scalable and efficient external stylesheets are for consistent design.
* The focus on "aesthetics" highlights the design aspect of web development, beyond just structure.

---

## Quiz

### Course Step Number: 162
### Assignment Title: CSS Definition Quiz
### Date Assigned: 2025-07-16
### Status: Completed

### Objective
* Verify understanding of fundamental CSS definitions.

### Tasks
1.  Complete the quiz for Step 162.
2.  Answer "What does CSS stand for?"

### Relevant Files
* No files associated with this quiz step.

### Learning Reflections / Notes
* Confirmed basic definition of CSS.

---

## SELECTORS, PROPERTIES AND VALUES

### Course Step Number: 163
### Assignment Title: Introduction to CSS Syntax
### Date Assigned: 2025-07-16
### Status: Completed

### Objective
* Understand the fundamental components of a CSS rule: selectors, properties, and values.
* Grasp the basic syntax for writing CSS declarations and declaration blocks.

### Tasks
1.  Read and comprehend the course material for Step 163, "SELECTORS, PROPERTIES AND VALUES."
2.  Analyze the provided diagram illustrating how selectors, properties, and values form a CSS rule.
3.  Identify each component (selector, property, value) in the given CSS example (`p { color: blue; }`).

### Relevant Files
* No direct files created for this informational step, but these concepts are universally applied in all CSS files.

### Learning Reflections / Notes
* This step clearly laid out the basic anatomy of a CSS rule, which is essential for writing any styles.
* The importance of correct syntax with colons and semicolons was reinforced.
* This foundational knowledge is critical for moving forward with practical CSS applications.

---

## CSS RULE-SET

### Course Step Number: 164
### Assignment Title: Understanding CSS Rule Structure
### Date Assigned: 2025-07-16
### Status: Completed

### Objective
* Comprehend the complete structure of a CSS rule-set, including selectors and declaration blocks.
* Understand the components of a declaration: property and value.
* Learn the importance of correct syntax, especially semicolon usage.
* Gain an initial understanding of `px` as a CSS unit of measurement.

### Tasks
1.  Read and analyze the course material for Step 164, "CSS RULE-SET."
2.  Identify the selector, declaration block, properties, and values within the provided CSS examples.
3.  Note the significance of semicolons in separating declarations.

### Relevant Files
* No direct files created for this informational step, but the concepts are fundamental to all CSS styling.

### Learning Reflections / Notes
* This step provided a clear, consolidated view of how CSS rules are constructed.
* The explanation of `px` was helpful for understanding absolute sizing in CSS.
* Reinforces the need for meticulous syntax to avoid errors in styling.

---

## HTML AND CSS

### Course Step Number: 165
### Assignment Title: Internal CSS Application Example
### Date Assigned: 2025-07-16
### Status: Completed

### Objective
* Understand how to apply CSS rules directly within an HTML document using `<style>` tags (Internal CSS).
* Observe the immediate visual impact of CSS properties like `color` and `text-align` on HTML elements.
* Recognize the interaction between HTML structure and CSS styling in a practical example.

### Tasks
1.  Review the provided HTML and internal CSS code snippet.
2.  Analyze the output to understand how the CSS rules affect the appearance of the HTML paragraphs.
3.  Note the location of the `<style>` tags within the HTML document.

### Relevant Files
* No files were created as part of this informational step, but it demonstrates fundamental integration of HTML and CSS.

### Learning Reflections / Notes
* Seeing a live code example truly clarifies the relationship between HTML and CSS.
* Confirmed the correct syntax for placing CSS rules within `<style>` tags.
* This step serves as a practical bridge between theoretical CSS concepts and actual web page styling.

---

## HTML5

### Course Step Number: 166
### Assignment Title: HTML5 Styling Best Practices
### Date Assigned: 2025-07-16
### Status: Completed

### Objective
* Understand HTML5's design philosophy regarding styling with CSS.
* Recognize that older HTML styling attributes are deprecated and should be avoided.
* Reinforce the best practice of using CSS exclusively for all web page styling.

### Tasks
1.  Read and analyze the course material for Step 166, "HTML5."
2.  Grasp the concept of deprecation and its implications for modern web development.
3.  Internalize the importance of separating HTML content/structure from CSS presentation.

### Relevant Files
* No direct files created for this informational step, but it outlines fundamental principles for all HTML and CSS development.

### Learning Reflections / Notes
* This step strongly emphasized the shift to CSS for styling and the reasons behind it.
* Understanding which HTML attributes are deprecated is crucial for writing modern, maintainable code.
* The message about making CSS the sole source of styling is a clear directive for best practices.

---

## LIST OF COLORS

### Course Step Number: 167
### Assignment Title: CSS Color Reference
### Date Assigned: 2025-07-16
### Status: Completed

### Objective
* Familiarize with available CSS color keywords.
* Understand that CSS offers various ways to specify colors for styling.

### Tasks
1.  Review the provided link to a list of CSS colors.
2.  Note the existence of different color specification methods beyond just named colors (e.g., Hex, RGB, HSL).

### Relevant Files
* No files associated with this informational step, but the color values are used in all CSS styling.

### Learning Reflections / Notes
* This step highlighted the vast range of colors available in CSS and the different formats to specify them.
* Understanding Hex and RGB/RGBA/HSL/HSLA is crucial for precise and modern web design.

---

## CSS COLOR AND ALIGNMENT ASSIGNMENT

### Course Step Number: 168
### Assignment Title: Apply Basic CSS Styling
### Date Assigned: 2025-07-16
### Date Completed: 2025-07-16
### Status: Completed

### Objective
* Apply fundamental CSS properties (`color`, `text-align`) to HTML elements.
* Practice integrating CSS within an HTML document using internal `<style>` tags.
* Verify stylistic changes in a web browser.

### Tasks
1.  Open the `basic-html-3.html` file.
2.  Add a new line of text within a paragraph or heading element.
3.  Utilize internal CSS to set both the text color and alignment of the new text.
4.  Save the file and successfully view the styled output in a web browser.

### Relevant Files
* **Modified File:** `HTML-AND-CSS-PROJECTS/basic-html-and-css/basic-html-3.html`

### Learning Reflections / Notes
* Successfully applied `color` and `text-align` properties to elements within `basic-html-3.html`.
* Gained hands-on experience with internal CSS and how it directly impacts element appearance.
* Used RGB color format for a custom color, building on recent learning.
* Confirmed the correct rendering of styles in the browser.

---

## SUBSECTION C: LINKING HTML AND CSS FILES

### Course Step Number: 169
### Assignment Title: [Transition to Linking HTML and CSS Files]
### Date Assigned: 2025-07-16
### Status: In Progress

### Objective
* Begin exploring methods for linking external HTML and CSS files.
* Understand the conceptual shift to modular stylesheet management.

### Tasks
1.  Acknowledge the transition to Subsection C in the course material.
2.  Prepare for upcoming lessons on external CSS linking.

### Relevant Files
* No specific files directly associated with this transitional step.

### Learning Reflections / Notes
* This marks a significant transition to a more scalable and organized approach to web styling.

---

## EXTERNAL STYLE SHEETS

### Course Step Number: 170
### Assignment Title: Understanding External CSS Linking
### Date Assigned: 2025-07-16
### Status: Completed

### Objective
* Understand the purpose and syntax of the HTML `<link>` element for external resources.
* Learn how to correctly use `rel`, `type`, and `href` attributes for linking external CSS stylesheets.
* Grasp the benefits and best practices associated with using external CSS files.

### Tasks
1.  Review the course material explaining external stylesheets and the `<link>` element.
2.  Familiarize with the roles of `rel="stylesheet"`, `type="text/css"`, and `href` attributes.
3.  Internalize why external CSS is the recommended method for web styling.

### Relevant Files
* No direct files created for this informational step, but the concepts are fundamental to all externally linked CSS.

### Learning Reflections / Notes
* This step provides the critical knowledge for linking HTML and CSS files externally, which is essential for professional web development.
* The detailed explanation of each `<link>` attribute was very helpful for practical application.
* The benefits of external CSS reinforce its importance in building scalable websites.

---

## LINKING STYLESHEETS

### Course Step Number: 171
### Assignment Title: Practical External Stylesheet Linking
### Date Assigned: 2025-07-17
### Date Completed: 2025-07-17
### Status: Completed

### Objective
* Practically demonstrate the separation of CSS from HTML into an external `.css` file.
* Implement the HTML `<link>` element to successfully connect an HTML document to an external stylesheet.
* Observe the identical visual styling achieved through external CSS compared to internal CSS.

### Tasks
1.  Review initial HTML code with internal CSS styling.
2.  Create a new `.css` file containing the extracted CSS rules.
3.  Modify the HTML document to remove internal CSS and add the `<link>` tag pointing to the new external `.css` file.
4.  Verify that the styling is correctly applied.

### Relevant Files
* **Example CSS File:** `My_Style.css` (conceptual, as created in the lesson)
* **Example HTML File:** `example.html` (conceptual, as modified in the lesson to link CSS)

### Learning Reflections / Notes
* Successfully demonstrated the fundamental process of linking external stylesheets, confirming the conceptual knowledge from Step 170.
* The explicit code examples (before and after separation) provided clear guidance.
* This step strongly reinforces the best practice of separating HTML structure and CSS presentation for better project organization.

---

## LINKING CSS ASSIGNMENT

### Course Step Number: 172
### Assignment Title: Implement External CSS Link
### Date Assigned: 2025-07-17
### Date Completed: 2025-07-17
### Status: Completed

### Objective
* Create and save an external CSS file (`Basic_CSS_1.css`) with specific styling rules for the `<p>` element (and optionally `div`).
* Modify `Basic_HTML_3.html` to remove internal CSS and correctly link to the new external stylesheet using the `<link>` tag.
* Verify successful application of styles in the web browser.

### Tasks
1.  Create `Basic_CSS_1.css` with `body` and `div` styling.
2.  Remove `<style>` element from `Basic_HTML_3.html`.
3.  Add `<link rel="stylesheet" type="text/css" href="basic-css-1.css">` to `Basic_HTML_3.html`.
4.  Confirm styling appears correctly in the browser.

### Relevant Files
* **`Basic_CSS_1.css`**: New CSS file created and saved in `Basic_HTML_and_CSS` folder.
* **`Basic_HTML_3.html`**: Existing HTML file modified to link the CSS.

### Learning Reflections / Notes
* Successfully applied knowledge of external CSS linking to a practical assignment.
* Gained experience in managing separate HTML and CSS files within the project structure.
* Confirmed the power of `body` styling for inheritance and the specificity of element-level rules.

---

## SUBSECTION D: STYLING HTML PAGES WITH THE CLASS ATTRIBUTE

### Course Step Number: 173
### Assignment Title: [Transition to Styling HTML Pages with the Class Attribute]
### Date Assigned: 2025-07-17
### Status: In Progress

### Objective
* Begin exploring methods for styling HTML elements using the `class` attribute.
* Understand the conceptual shift to more granular and reusable stylesheet management.

### Tasks
1. Acknowledge the transition to Subsection D in the course material.
2. Prepare for upcoming lessons on using the `class` attribute for styling.

### Relevant Files
* No specific files directly associated with this transitional step.

### Learning Reflections / Notes
* This marks a significant transition to a more powerful and flexible approach to applying styles in web development.

---

### Course Step Number: 174
### Assignment Title: CLASSES AND OBJECTS
### Date Assigned: 2025-07-17
### Status: In Progress

### Objective
* Understand the fundamental concept of "classes" as programmable objects representing types of things.
* Recognize the abstract nature of classes in programming before their application in HTML/CSS.

### Tasks
1. Read and comprehend the definition of classes and objects as presented in the course material.
2. Consider how this general programming concept will relate to styling in HTML and CSS using the `class` attribute.

### Relevant Files
* No specific files for code modification in this conceptual step.

### Learning Reflections / Notes
* This step introduces a core programming concept, which is foundational to understanding how the `class` attribute functions in HTML and CSS for grouping elements and applying styles. While presented generally, the immediate application will be for front-end styling.

---

### Course Step Number: 175
### Assignment Title: CLASSES AND OBJECTS
### Date Assigned: 2025-07-17
### Status: In Progress

### Objective
* Understand that a class functions as a template for creating objects, rather than being an object itself.
* Learn the terms "instantiation" and "instance" in the context of creating objects from a class.
* Differentiate between the structure and behavior defined by a class template.

### Tasks
1. Comprehend the distinction between a class (template) and an object (instance).
2. Understand the process of instantiation and the resulting instance.
3. Review the provided image diagram, which illustrates a basic concept of classification, specifically a hierarchical relationship between a general class and its individual members.

### Relevant Files
* No specific files for code modification in this conceptual step.

### Learning Reflections / Notes
* This step refines the understanding of classes as blueprints that define the characteristics and capabilities of objects, which are then created as instances. This abstract concept is crucial for grasping how CSS classes serve as reusable style templates for HTML elements, where each element styled with that class becomes an "instance" of that visual template. The image reinforces the idea of a general category (class) and its specific examples (instances).

---

### Course Step Number: 176
### Assignment Title: CLASS ATTRIBUTE
### Date Assigned: 2025-07-17
### Status: In Progress

### Objective
* Understand the purpose and syntax of the HTML `class` attribute for applying consistent styles to multiple elements.
* Learn how to define CSS classes and link them to HTML elements.
* Observe the reusability of CSS classes across different HTML tags.

### Tasks
1. Review the explanation of the `class` attribute and its role in styling.
2. Examine the provided CSS code defining classes (`.font_1`, `.font_2`).
3. Examine the HTML code demonstrating the application of `class` attributes to `h2`, `h3`, and `h4` elements.
4. Observe the rendered output to understand how the applied classes visually affect the elements.

### Relevant Files
* Example code provided within the lesson (for `basic-html-4.html` and `basic-css-2.css` if externalized).
* Output image demonstrating the visual result.

### Learning Reflections / Notes
* The `class` attribute is fundamental for applying reusable and consistent styles across a webpage. It allows for grouping elements conceptually and applying a common visual theme. This step highlights the power of separating content from presentation, even when using internal stylesheets for demonstration purposes. Future steps will likely build upon this by externalizing CSS.

---

### Course Step Number: 177
### Assignment Title: CLASS ATTRIBUTE ASSIGNMENT
### Date Assigned: 2025-07-17
### Status: Completed

### Objective
* Successfully transcribe and save the provided HTML and internal CSS code from Step 176.
* Confirm that the saved file (`basic-html-4.html`) renders correctly in a web browser, displaying the styles applied via the `class` attribute.

### Tasks
1. Write out the full HTML and internal CSS code from Step 176.
2. Save the file as `basic-html-4.html` within the `HTML-AND-CSS-PROJECTS/basic-html-and-css/` directory, adhering to kebab-case naming convention.
3. Open `basic-html-4.html` in a web browser to verify proper rendering and styling of elements.

### Relevant Files
* **`basic-html-4.html`**: New HTML file created containing the assignment code.
    * **File Path:** `HTML-AND-CSS-PROJECTS/basic-html-and-css/basic-html-4.html`

### Learning Reflections / Notes
* Successfully implemented the code from the previous step, reinforcing the practical application of the `class` attribute for styling.
* Confirmed browser rendering, including observation of `font-size` behavior and making an informed decision about using more precise units (like `px`) for future control.
* Demonstrated adherence to best practices by placing the `<style>` tag in the `<head>` section, even when the course example deviated, which improves document structure and separation of concerns.

---

### Course Step Number: 178
### Assignment Title: STYLE ELEMENT ASSIGNMENT
### Date Assigned: 2025-07-17
### Status: Completed

### Objective
* Create a custom CSS class within a `<style>` element.
* Apply `text-decoration` and `font-weight` properties to modify text appearance.
* Successfully execute the code in a browser to verify the custom styling.

### Tasks
1. Write HTML code that includes a `<style>` block in the `<head>` section.
2. Define a custom CSS class (e.g., `.My_Style` or your custom names) within this `<style>` block.
3. Apply CSS properties like `text-decoration` (e.g., `underline`, `wavy`, `line-through`) and `font-weight` (e.g., `bold`) with desired values to the custom class.
4. Apply the new class to one or more HTML elements in the `<body>`.
5. Save the code as `style-element-assignment.html` in a temporarily folder and open it in a browser to observe the styling.

### Relevant Files
* **HTML file with internal CSS**: `style-element-assignment.html` - Created/modified to complete the assignment.
    * **File Path (if committed):** `HTML-AND-CSS-PROJECTS/basic-html-and-css/style-element-assignment.html` (Note: This path assumes it would be committed to the main project directory, but it's currently saved locally as per your instruction.)

### Learning Reflections / Notes
* Successfully created and applied a custom CSS class, demonstrating the ability to define bespoke styles beyond predefined elements.
* Experimented with `text-decoration` and `font-weight` properties, gaining a direct understanding of their visual impact.
* Continued to apply best practices by ensuring the `<style>` block was correctly placed within the `<head>` section, even when the course example deviated, which improves document structure and separation of concerns.
* Confirmed successful execution and visual output of the custom styles in the browser.

---

### Course Step Number: 179
### Assignment Title: <P> ELEMENT ASSIGNMENT
### Date Assigned: 2025-07-17
### Status: Completed

### Objective
* Practice applying a custom CSS class to a `<p>` element using the `class` attribute.
* Confirm that the paragraph element displays the intended custom styles when rendered in a browser.

### Tasks
1. Add a `<p>` element to your existing HTML file (e.g., `style-element-assignment.html`).
2. Apply your custom class (e.g., `.my-style`) to this new `<p>` element using the `class` attribute.
3. Save the updated code and open the HTML file in a browser to verify the applied styles.

### Relevant Files
* **HTML file with internal CSS**: `style-element-assignment.html` - Updated to include the new `<p>` element (saved locally in a temporary folder).

### Learning Reflections / Notes
* Successfully applied a previously defined custom class to a new HTML element (`<p>`), demonstrating the reusability and flexibility of CSS classes.
* Confirmed that custom styles correctly override default browser styles for the `<p>` element, displaying the desired `color`, `background-color`, `font-weight`, `font-size`, and `text-decoration`.

---

#### Step 180: CLASS ATTRIBUTE - Assigning Style to Elements
* **Objective:** Understand how to use the `class` attribute in HTML in conjunction with CSS to apply specific styles to multiple elements.
* **Relevant Files:**
    * [index.html](basic-html-and-css/index.html)
* **Reflection/Learning Note:** Explored the `class` attribute as a powerful method for grouping HTML elements and applying reusable CSS styles. This allows for consistent design rules across multiple elements without redundant code, offering greater flexibility and maintainability compared to direct element styling or `id` attributes.

---

#### Step 181: CLASS IN EXTERNAL FILE - Modular Styling
* **Objective:** Learn to define and apply CSS styles, including global `body` styles and custom classes, from an external `.css` file.
* **Relevant Files:**
    * [index.html](basic-html-and-css/index.html)
    * [basic-css-1.css](basic-html-and-css/basic-css-1.css)
* **Reflection/Learning Note:** This step highlighted the importance of separating CSS from HTML by using an external stylesheet. It demonstrated how global styles (e.g., for `body` elements) and class-specific styles can be managed in a `.css` file and linked to an HTML document via the `<link>` tag in the `<head>` section. This approach significantly improves code organization, reusability, and maintainability.

---

#### Step 182: CSS ASSIGNMENT - Class Attribute Application
* **Objective:** Create and apply an external CSS class to a paragraph element within a new HTML document, demonstrating practical styling.
* **Relevant Files:**
    * [basic-css-2.css](basic-html-and-css/basic-css-2.css)
    * [basic-html-5.html](basic-html-and-css/basic-html-5.html)
* **Reflection/Learning Note:** Successfully implemented an external CSS file (`basic-css-2.css`) defining a custom class. Applied this class to a `<p>` element in a new HTML file (`basic-html-5.html`), verifying that the styles (color, background-color, font-weight, text-align) were correctly applied in the browser. This hands-on exercise reinforced the concepts of CSS file linking and class-based styling.

---

#### Step 183: COMMENTING CODE - HTML Comments
* **Objective:** Understand the purpose and syntax of HTML comments for code documentation and readability.
* **Relevant Files:**
    * [index.html](basic-html-and-css/index.html)
* **Reflection/Learning Note:** Learned that HTML comments (``) are crucial for explaining code sections, enhancing readability for other developers, and serving as future reminders. Confirmed that these comments are visible in the page source but not rendered in the browser, aligning with best practices for code documentation.

---

#### Step 184: CSS COMMENTS
* **Objective:** Learn the syntax and purpose of comments within CSS code.
* **Relevant Files:**
    * N/A
* **Reflection/Learning Note:** Understood that CSS comments (`/* ... */`) are used to document stylesheets, making them more readable and maintainable for developers. Confirmed their syntax and role in clarifying code without affecting browser rendering.

---

#### Step 185: COMMENTS ASSIGNMENT - Viewing HTML Comments
* **Objective:** Gain practical experience viewing HTML comments in a live website's source code using browser developer tools.
* **Relevant Files:**
    * N/A <!-- External website observation -->
* **Reflection/Learning Note:** Successfully navigated to `https://www.learncodinganywhere.com/` and utilized Chrome's developer tools to inspect the page source, confirming the presence of HTML comments that are not rendered visually on the page. This hands-on assignment reinforced the understanding of HTML comment visibility and their purpose.

---

## SUBSECTION E: LISTS AND TABLES WITH HTML AND CSS

### Course Step Number: 186
### Assignment Title: [Transition to Lists and Tables with HTML and CSS]
### Date Assigned: 2025-07-18 <! -- Today's date -->
### Status: In Progress

### Objective
* Begin exploring methods for structuring data using HTML lists and tables.
* Understand the conceptual shift to organizing complex content effectively.

---

#### Step 187: HTML TABLES
* **Objective:** Understand the fundamental HTML tags used to create structured tables for displaying data.
* **Relevant Files:**
    * [index.html](basic-html-and-css/index.html) <! -- or any HTML file used for tables -->
* **Reflection/Learning Note:** Learned the core tags for constructing HTML tables: `<table>` for the overall table, `<tr>` for defining rows, `<th>` for table headers (bold and centered by default), and `<td>` for regular table data cells. This structure is essential for organizing tabular information on web pages.

---

#### Step 188: TABLE ASSIGNMENT - Custom Table Creation
* **Objective:** Create a custom HTML table and apply granular CSS styling for content alignment and row separation.
* **Relevant Files:**
    * [html-table.html](basic-html-and-css/html-table.html)
    * [basic-css-2.css](basic-html-and-css/basic-css-2.css)
* **Reflection/Learning Note:** Successfully constructed an HTML table to display structured data, including row and column headers. Applied `text-align: center;` to `<td>` elements for centralized data. Implemented specific styling for left-aligned row headers using `.header-align-l` and centered the main `<h1>` title using `.title-align-c`. Further refined visual presentation by applying `border-bottom` and `padding-bottom` via the `.header-row-spacing` class to the first **two** table rows (`<tr>`), creating distinct visual separation below those rows.

---

#### Step 189: HTML LISTS
* **Objective:** Understand the two main types of HTML lists (`<ol>` and `<ul>`) and the common list item tag (`<li>`).
* **Relevant Files:**
    * [index.html](basic-html-and-css/index.html) <! -- or any HTML file used for lists -->
* **Reflection/Learning Note:** Learned about ordered lists (`<ol>`) for sequential items (numbered by default) and unordered lists (`<ul>`) for non-sequential items (bullet points by default). Both types use the `<li>` tag to define individual list items. This provides semantic structure for grouped content.

---

#### Step 190: LIST ASSIGNMENT - Creating HTML Lists
* **Objective:** Practice creating and displaying both ordered (`<ol>`) and unordered (`<ul>`) HTML lists.
* **Relevant Files:**
    * [html-lists.html](basic-html-and-css/html-lists.html)
* **Reflection/Learning Note:** Successfully created an `html-lists.html` file containing an ordered list (`<ol>`) for book release order and an unordered list (`<ul>`) for publication years, using `<li>` for individual items. This reinforced the practical application and visual distinction between different list types in HTML.

---

#### Step 191: STYLING TABLES WITH CSS
* **Objective:** Enhance the visual aesthetic of an HTML table using various CSS properties and selectors.
* **Relevant Files:**
    * [html-table.html](basic-html-and-css/html-table.html)
    * [css-table.css](basic-html-and-css/css-table.css)
* **Reflection/Learning Note:** Applied CSS to transform a basic table, including adding `border` to cells, implementing a `:hover` effect for rows, and setting distinct `background-color` and `color` for the first row (`tr:first-child`) and subsequent rows (`tr:nth-child(n+2)`). A key learning point was understanding CSS specificity, particularly the importance of rule order for `:hover` effects to override other `tr` styles. Ensured `border-collapse: collapse;` was applied to the table for clean borders.

---

#### Step 192: HELPFUL LINK - Google Fonts

### Course Step Number: 192
### Date Completed: 2025-07-19

### Objective:
* To discover Google Fonts as a valuable external resource for free web fonts and understand its utility in CSS styling.

### Core Course Concepts:
* Introduction to external font libraries.
* Basic understanding of typography's role in web design.

### Relevant Files:
* N/A <! -- No specific HTML/CSS file created; this step introduces a resource -->

### Reflection/Learning Note:
* This step highlighted Google Fonts as a practical external resource for expanding font options. The primary takeaway was the efficient integration of external fonts for web styling.

### Independent Research & Best Practices:
* Gained awareness of performance considerations and general best practices related to integrating external fonts, which were clarified through discussion.

---

#### Step 193: CSS TABLE ASSIGNMENT

### Course Step Number: 193
### Date Completed: 2025-07-19

### Objective:
* To create a `css-table.css` file and link it to `html-table.html` to apply specified styling to a table.
* To apply custom background color, font color, hover effects, and borders to the table elements.

### Core Course Concepts:
* Application of CSS properties: `background-color`, `color`, `border`.
* Use of `border-collapse` for table styling.
* Implementation of the `:hover` pseudo-class for interactive effects.
* Linking external CSS files to HTML using the `<link>` tag.

### Relevant Files:
* `Basic_HTML_and_CSS/css-table.css`
* `Basic_HTML_and_CSS/html-table.html`

### Reflection/Learning Note:
* This assignment reinforced practical application of core CSS styling properties for tables, including background, text, borders, and hover effects. It also solidified understanding of external stylesheet linking.

### Independent Research & Best Practices:
* Reconfirmed the importance of `border-collapse: collapse;` for proper table border rendering.
* Noted that the order of CSS rules can impact `hover` selector functionality, with more specific or later-defined rules taking precedence, leading to a fix by adjusting code order.

---

#### Step 194: CSS LISTS

### Course Step Number: 194
### Date Completed: 2025-07-19

### Objective:
* To learn how to style HTML ordered and unordered lists using CSS `list-style-type` property.

### Core Course Concepts:
* `list-style-type` property for ordered lists (e.g., `upper-roman`, `lower-roman`).
* `list-style-type` property for unordered lists (e.g., `square`, `disc`, `circle`, `none`).
* The process of creating a separate CSS file for list styling and linking it to an HTML document.

### Relevant Files:
* N/A <! -- This was an informational step; no specific new files created as part of this lesson. -->

### Reflection/Learning Note:
* This step clearly demonstrated the flexibility of CSS in controlling list markers beyond default numbering or bullet points, which is valuable for presentation.

### Independent Research & Best Practices:
* Reconfirmed the use of `<ul>` for unordered and `<ol>` for ordered lists for semantic correctness, regardless of styling.
* Briefly considered `list-style` shorthand property for efficiency in future styling.

---

#### Step 195: CSS LIST ASSIGNMENT

### Course Step Number: 195
### Date Completed: 2025-07-19

### Objective:
* To apply CSS styling to ordered and unordered HTML lists using the `list-style-type` property.
* To create and link an external CSS file for list styling.

### Core Course Concepts:
* Practical application of `list-style-type` for `<ol>` (e.g., `upper-roman`) and `<ul>` (e.g., `square`).
* Linking external stylesheets (`.css`) to HTML documents.

### Relevant Files:
* `Basic_HTML_and_CSS/css-lists.css`
* `Basic_HTML_and_CSS/html-lists.html`

### Reflection/Learning Note:
* This assignment was a straightforward application of the `list-style-type` property learned in the previous step, confirming its direct effect on list markers.

### Independent Research & Best Practices:
* Ensured `css-lists.css` followed `kebab-case` naming convention.

---


