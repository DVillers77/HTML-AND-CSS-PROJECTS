# Course Progress & Overview - HTML & CSS Projects
---

#### AI ASSITANT PROJECT GUIDELINES
For detailed rules on collaboration, documentation, and project standards, please refer to the [AI Assistant Project Guidelines](https://github.com/DVillers77/Tech-Academy-Projects-/blob/main/ai-assistant-project-guidelines.md).

---

For a detailed, step-by-step log of all assignments and course activities, including specific file paths and core concepts, please refer to the [ASSIGNMENT_INDEX.md](ASSIGNMENT_INDEX.md) file.

---

This `README.md` provides a high-level overview of the HTML & CSS projects completed during the bootcamp, highlighting key learnings, project outcomes, and implemented best practices.

---

### Section 1: Getting Started
---

#### 1. NOTEPAD++ ASSIGNMENT - Basic HTML Setup

* **Objective:** Install Notepad++ (or equivalent) and create/run a basic "hello, world!" HTML page.
* **Core Course Concepts:**
    * Writing `<!DOCTYPE html>` declaration.
    * Basic `<html>` structure with `lang="en"`.
    * Using the `<title>` element for page title.
    * Creating a paragraph with the `<p>` element.
    * Saving files with `.html` extension for browser execution.
    * Opening HTML files in Google Chrome.
* **Outcome:** Successfully configured a Notepad++ for HTML development and created a functional "hello, world!" HTML page, confirming the workflow for saving and running code in a browser.
* **Relevant Files:** [hello-world.html](hello-world.html)
* [View full details in Assignment Index](#step-24-notepad-assignment---basic-html-setup)

### Section 2: Building Basic Webpages
---

#### 2. HTML TEMPLATE ASSIGNMENT - Create Reusable Boilerplate

* **Objective:** Create a reusable HTML template for future assignments.
* **Core Course Concepts:**
    * Reinforcement of basic HTML document structure (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`, `<meta charset>`).
    * Understanding the importance of a consistent template for new HTML files.
* **Outcome:** Created `assignment.html` with a standard HTML template, ready for content addition in subsequent assignments.
* **Relevant Files:** [assignment.html](html-documents/assignment.html)
* [View full details in Assignment Index](#step-53-html-template-assignment---create-reusable-boilerplate)

#### 3. BASIC WEBPAGE ASSIGNMENT - Add Structural Elements

* **Objective:** Update the existing `assignment.html` template by incorporating basic structural elements (`p`, `h1`, `h3`, `h6`) into its body and giving the page a title.
* **Core Course Concepts**: The foundational understanding of **Document Structure (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`)**, **Headings (`<h1>`, `<h3>`, `<h6>`)**, and **Paragraphs (`<p>`)** was acquired directly through course materials and exercises. This included mastering their proper placement and hierarchical use to structure webpage content semantically.
    * **`<head>` Element**: Used to contain metadata about the HTML document, such as the page's title and character encoding.
        * **`<title>` Element**: Set the browser tab/window title for the page (e.g., "BASIC WEBPAGE ASSIGNMENT").
        * **`<meta charset="utf-8">`**: Declared the character encoding to ensure proper display of various characters.
    * **`<body>` Element**: Encapsulated all the visible content of the webpage.
* **Independent Research & Best Practices**: To enhance the assignment and understand more nuanced HTML behaviors, I conducted independent research, specifically focusing on:
    * **Lists (`<ul>`, `<li>`)**: Explored the use of an **unordered list (`<ul>`)** to semantically group related items (such as the required HTML tags for the assignment). Each item within the list was properly defined using an **`<li>` (list item) tag**, understanding that this provides a structured and accessible way to present bulleted information.
    * **HTML Entities (Escape Characters)**: Explored how to use `&lt;` and `&gt;` to accurately display literal HTML tag syntax (e.g., `<p>`, `<h1>`, etc.) on the webpage, ensuring the browser renders them as text rather than interpreting them as active code.
    * **Controlling Visual Spacing in HTML-Only Environments**: Investigated methods for adding vertical space between elements without CSS. This led to the intentional use of multiple `<br>` tags (`<br><br>`) for visual separation between list items. This research included understanding that while effective for immediate visual spacing, this method is generally superseded by CSS for best practices in production environments.
    * **HTML Comments (``) for Developer Notes**: Researched the standard and best practices for incorporating developer-facing notes directly into the HTML source code. This included learning the precise syntax (``) and optimal placement (e.g., within `<head>` for overall document notes, or preceding specific code blocks) to ensure comments are invisible to the user but provide valuable context and documentation for code maintainability. This also involved understanding the distinction between HTML comments and metadata tags.
* **Project Outcome & Learning:** The assignment was successfully completed, demonstrating a solid grasp of fundamental HTML5 elements and their structural application. The independent research significantly deepened my understanding of practical HTML challenges and the importance of choosing appropriate techniques, even when adhering to specific constraints like an HTML-only environment.
* **Relevant Files:** [assignment.html](html-documents/assignment.html)
* [View full details in Assignment Index](#step-56-basic-webpage-assignment---add-structural-elements)

#### 4. FOOTER, MAIN AND IMAGE ASSIGNMENT - Add Semantic Tags

* **Objective:** Add `<footer>`, `<main>`, and `<img>` tags to `assignment.html`.
* **Relevant Files:** [assignment.html](html-documents/assignment.html)
* [View full details in Assignment Index](#step-67-footer-main-and-image-assignment---add-semantic-tags)

#### 5. IMAGE ASSIGNMENT - Practice File Paths

* **Objective:** Practice local file path management by creating a temporary website structure with an image linked from a dedicated `Images` folder.
* **Implementation Notes:** A temporary "Website" folder was created on the desktop, containing an "Images" subfolder and an HTML file. The HTML file linked to an image saved within the "Images" folder to demonstrate relative file paths. This folder was deleted upon completion.
* **Independent Research & Best Practices:** This exercise was key for understanding how browsers resolve `src` attributes based on the HTML file's location. While the assignment focused on local file paths, it reinforced the broader concept of linking external assets. During initial exploration, challenges with local placeholder image paths led to a practical demonstration of linking external, cycling images (from Picsum) to verify general `<img>` tag functionality.
* [View full details in Assignment Index](#step-71-image-assignment---practice-file-paths)

#### 6. IMPLICIT LINK ASSIGNMENT - Two-Way Internal Links

* **Objective:** Create a new `dog.html` with an image, and link it two-way with `assignment.html` using implicit links.
* **Relevant Files:**
    * [assignment.html](html-documents/assignment.html)
    * [dog.html](html-documents/dog.html)
    * [images/xolo-art-01.png](images/xolo-art-01.png)
* [View full details in Assignment Index](#step-74-implicit-link-assignment---two-way-internal-links)

#### 7. EXPLICIT LINK ASSIGNMENT - Link External Image URL

* **Objective:** Create an explicit link in `assignment.html` that navigates directly to an online image URL.
* **Relevant Files:**
    * [assignment.html](html-documents/assignment.html)
* [View full details in Assignment Index](#step-75-explicit-link-assignment---link-external-image-url)

#### 8. DOG WEBPAGE ASSIGNMENT - Integrate Navigation and Video

* **Objective:** Create a new HTML page (`dog-video.html`) with a YouTube video link, and integrate consistent navigation across `assignment.html`, `dog.html`, and `dog-video.html`.
* **Relevant Files:**
    * [assignment.html](html-documents/assignment.html)
    * [dog.html](html-documents/dog.html)
    * [dog-video.html](html-documents/dog-video.html)
* [View full details in Assignment Index](#step-79-dog-webpage-assignment---integrate-navigation-and-video)

#### 9. DOG WEBPAGE CHALLENGE

* **Objective:** Learn and implement the `<blockquote>` element in `assignment.html` and embed a YouTube video using `<iframe>` in `dog-video.html`.
* **Relevant Files:**
    * [html-documents/assignment.html](html-documents/assignment.html)
    * [html-documents/dog.html](html-documents/dog.html)
    * [html-documents/dog-video.html](html-documents/dog-video.html)
* **Implementation Notes:** Following initial submission, all HTML files were moved into the `html-documents/` folder, and all internal and documentation links were updated to reflect this change, addressing instructor feedback on file organization.
* [View full details in Assignment Index](#step-80-dog-webpage-challenge)

#### 10. HTML DOCUMENT SUBMISSION ASSIGNMENT - Course Submission

* **Objective:** Submit completed HTML and JavaScript files created thus far for review as part of the course's submission process.
* **Implementation Notes:** This step marked a milestone, involving the bundling and submission of all completed assignments from the HTML section. It reinforced the importance of ensuring all files and links were correctly organized and functional for a successful submission.
* **Relevant Files:** All HTML and JavaScript files created/modified up to this step, including `assignment.html`, `dog.html`, `dog-video.html`, `basic-html-1.html`, `basic-html-2.html`, `basic-javascript-1.js`, and associated image files.
* [View full details in Assignment Index](#step-81-html-document-submission-assignment---course-submission)

### Section 3: Web Development Fundamentals
---

#### 11. BASIC HTML AND JAVASCRIPT ASSIGNMENT - Simple Alert Box

* **Objective:** Create an HTML file that uses JavaScript to display an alert box.
* **Relevant Files:**
    * [basic-html-and-javascript-1/basic-html-1.html](basic-html-and-javascript-1/basic-html-1.html)
* [View full details in Assignment Index](#step-107-basic-html-and-javascript-assignment---simple-alert-box)

#### 12. SOURCE ATTRIBUTE ASSIGNMENT - Link External JavaScript

* **Objective:** Create an external JavaScript file (`basic-javascript-1.js`) containing the alert method, and then link it to `basic-html-1.html` using the script `src` attribute to enable external script integration.
* **Relevant Files:**
    * [basic-html-and-javascript-1/basic-html-1.html](basic-html-and-javascript-1/basic-html-1.html) (Modified)
    * [basic-html-and-javascript-1/basic-javascript-1.js](basic-html-and-javascript-1/basic-javascript-1.js) (New)
* [View full details in Assignment Index](#step-109-source-attribute-assignment---link-external-javascript)

#### 13. CREATING A FUNCTION (Independent Exercise)

* **Objective:** Implement a basic JavaScript function triggered by an HTML button click to dynamically update content using `document.getElementById()` and `innerHTML`.
* **Core Course Concepts:**
    * Basic JavaScript function definition.
    * HTML `onclick` event handler for user interaction.
    * Accessing HTML elements using `document.getElementById()`.
    * Manipulating element content with `innerHTML`.
* **Relevant Files:** [javascript-examples/120-onclick-function.html](javascript-examples/120-onclick-function.html)
* **Implementation Notes:** Identified and corrected a syntax issue in the course's example where the `innerHTML` assignment was inadvertently split across two lines, preventing the dynamic content update. The correction involved adding the assignment operator (`=`) to ensure the `result` was correctly applied to the `innerHTML` property.
* [View full details in Assignment Index](#step-120-creating-a-function-independent-exercise)

#### 14. TWO PART ASSIGNMENT - HTML and JavaScript Separation

* **Objective:**
    1.  Create a new HTML file (`basic-html-2.html`) initially containing the interactive function from the previous step.
    2.  Separate the JavaScript function into the existing external `basic-javascript-1.js` file and link `basic-html-2.html` to it.
* **Core Course Concepts:**
    * Reinforcement of `document.getElementById()` and `onclick` event handling.
    * **Best Practice:** Separating HTML (structure) and JavaScript (behavior) into distinct files.
    * HTML `<script src="...">` tag for linking external JavaScript files.
* **Relevant Files:**
    * [basic-html-and-javascript-1/basic-html-2.html](basic-html-and-javascript-1/basic-html-2.html)
    * [basic-html-and-javascript-1/basic-javascript-1.js](basic-html-and-javascript-1/basic-javascript-1.js)
* **Implementation Notes:** This step emphasizes the importance of code organization and modularity. It demonstrates how to add new JavaScript functionality to an existing shared `.js` file, leading to cleaner, more maintainable, and reusable web projects. Adhered to kebab-case for file and folder naming for consistency and best practice. The existing `basic-javascript-1.js` was also updated to explicitly say "Hello, World!" as per Step 106's instruction.
* [View full details in Assignment Index](#step-121-two-part-assignment---html-and-javascript-separation)

#### 15. CHALLENGE - DevTools Familiarization

* **Objective:** Become familiar with Google Chrome's Developer Tools by performing foundational inspection and navigation tasks.
* **Core Course Concepts:**
    * Introduction to client-side web development tools.
    * Understanding the browser's role in rendering HTML.
    * Basic navigation within the DevTools interface.
* **Outcome:** Successfully navigated Chrome Developer Tools to inspect a live webpage's HTML structure (DOM), gaining foundational familiarity with this essential development environment.
* **Relevant Files:** Any existing HTML file (e.g., [basic-html-and-javascript-1/basic-html-2.html](basic-html-and-javascript-1/basic-html-2.html)) can be used.
* **Implementation Notes:** This challenge provided hands-on experience with DevTools, which are crucial for debugging and understanding how browsers interpret web code. Learning to inspect the live DOM is a foundational skill for future JavaScript interactions.
* [View full details in Assignment Index](#step-128-challenge---devtools-familiarization)

#### 16. WEB BROWSER TOOLS VIDEO - Cache & DevTools Essentials (Participation Activity)

* **Objective:** Understand browser caching, learn how to clear the cache, and gain further practical familiarity with essential Google Chrome Developer Tools panels.
* **Core Course Concepts:**
    * Browser caching mechanism and its impact on development.
    * Methods for clearing browser cache (full and force refresh).
    * In-depth practical use of Chrome DevTools: Elements panel (inspecting DOM, live editing), Console panel (REPL, error messages), Sources, Network, and an overview of other advanced panels.
* **Outcome:** Acquired the ability to manage browser cache effectively and utilize fundamental DevTools functionalities for inspecting, debugging, and temporarily modifying web pages during development.
* **Relevant Files:** Any local HTML file (e.g., [basic-html-and-javascript-1/basic-html-2.html](basic-html-and-javascript-1/basic-html-2.html)) was used for practical application and demonstration of DevTools.
* **Implementation Notes:** Browser caching can be a significant hurdle during development, and mastering cache clearing methods like hard refresh is crucial. DevTools are the cornerstone of front-end debugging, allowing live inspection and testing. The ability to make temporary live edits in the Elements panel is particularly powerful for rapid prototyping and style adjustments.
* [View full details in Assignment Index](#step-133-web-browser-tools-video---cache-devtools-essentials-participation-activity)

#### 17. WEB BROWSER TOOLS ASSIGNMENT - Website Inspection

* **Objective:** Apply learned Developer Tools skills to inspect the HTML structure of a live website of choice.
* **Core Course Concepts:**
    * Practical application of the Chrome DevTools `Elements` tab for navigating and understanding live HTML/DOM.
    * Identifying various HTML tags, attributes (id, class, src, href, alt), and nested structures.
    * Using DevTools to make temporary, live modifications to webpage content (e.g., text, element visibility).
* **Outcome:** Gained hands-on experience in using browser Developer Tools to analyze the underlying code of any given website, enhancing understanding of web page construction and live debugging capabilities. Successfully inspected elements, understood nesting, and performed temporary content edits.
* **Relevant Files:** This assignment involved inspecting a live website (e.g., pff.com) using browser Developer Tools; no local project files were created or modified.
* **Implementation Notes:** Directly inspecting live websites with DevTools is an invaluable skill for debugging, learning from existing sites, and rapid prototyping. It's fascinating to see how complex websites are structured and how quickly temporary changes can be made to test ideas, even if those changes aren't permanent. Recognizing dynamic content on complex sites (like the previous issue on The Tech Academy's page) versus simpler static elements is also a key practical insight gained.
* [View full details in Assignment Index](#step-134-web-browser-tools-assignment---website-inspection)

### Section 4: Writing Code in HTML
---

#### 18. COLOR ASSIGNMENT - Font Color with Deprecated Tags

* **Objective:** Add two paragraphs of text with specified colors to `basic-html-1.html` using the `<font>` element and its `color` attribute, demonstrating color names and hex codes.
* **Core Course Concepts:** Introduction to the `<font>` HTML element, specifying colors using color names and hexadecimal codes.
* **Outcome:** Successfully created/amended `basic-html-1.html` with correct HTML5 boilerplate, two colored paragraphs as instructed, and confirmed changes in the browser.
* **Relevant Files:**
    * [basic-html-and-javascript-1/basic-html-1.html](basic-html-and-javascript-1/basic-html-1.html)
* **Implementation Notes:** This assignment introduced the `<font>` HTML element for styling. While it fulfills the course requirement, it's critical to note that the `<font>` element is **deprecated in modern HTML5**. Its use is discouraged in favor of CSS for separating content from presentation. This step also highlighted the importance of a complete HTML5 boilerplate, as the initial file structure was based on an incomplete course example and required significant additions for proper best-practice setup.
* **Independent Research & Best Practices:**
    * The **initial `basic-html-1.html` file was amended to include standard HTML5 boilerplate elements**, which were missing from the course's example image. This included correcting `<!DOCTYPE HTML>` to `<!DOCTYPE html>`, adding `<meta charset="utf-8">` for proper character encoding, and including a `<title>` tag for browser tab display.
    * The **deprecated `<font>` tag** was used as per course instruction. The modern and preferred method for applying font colors is via **CSS**, using properties like `color` applied through `style` attributes (inline CSS), or more robustly, via internal or external stylesheets.
    * Through collaborative "independent research," the **best practice for `<script>` tag placement** was identified and implemented. Scripts are typically placed just before the closing `</body>` tag to ensure HTML content loads quickly and is available for JavaScript manipulation without render-blocking.
    * **Evolution of In-Code Comments:** Due to a unique display issue where standard HTML comments (``) were not visible in the chat interface, and a subsequent attempt with custom `<x-doc>` tags resulted in unwanted display on the live page, a more robust solution was implemented. **`<script type="text/plain">` tags are now used for in-code developer notes.** This method ensures the comments are visible in the code editor/source code but are explicitly ignored and not displayed on the live web page by the browser, making it a reliable and universally recognized approach for this specific purpose in HTML.
* [View full details in Assignment Index](#step-144-color-assignment---font-color-with-deprecated-tags)