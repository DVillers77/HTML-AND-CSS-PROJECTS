# Course Assignment Index - HTML & CSS Projects
---

#### AI ASSITANT PROJECT GUIDELINES
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
* **Reflection/Learning Note:** This assignment reinforced the use of deprecated HTML attributes for styling. It's an important educational step to understand historical web development practices before moving to modern CSS methods for font customization, which offer more control and maintainability.