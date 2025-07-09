# HTML-AND-CSS-PROJECTS
---

### Project Guidelines and Collaboration Standards

This project, and all subsequent projects in The Tech Academy bootcamp, adhere to a clear set of collaborative guidelines between the student and the AI assistant. These guidelines ensure transparency, effective learning, and consistent documentation.

You can review the full details of these guidelines [here](https://github.com/DVillers77/Tech-Academy-Projects-/blob/main/ai-assistant-project-guidelines.md).
---
This repository contains all coding projects and assignments completed during the HTML and CSS Course.

## Course Assignments

Here is a chronological list of assignments, detailing their purpose and the key skills acquired. **For a more granular breakdown of each assignment tied to specific course steps, please refer to the [Assignment Index](ASSIGNMENT_INDEX.md).**

### Section 1: Getting Started

#### 1. Notepad++ Setup & First HTML Page (Section 1 Subsection B Step 24)

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

### Section 2: Building Basic Webpages

#### 2. HTML Template Creation (Section 2 Subsection B Step 53)

* **Objective:** Create a reusable HTML template for future assignments.
* **Core Course Concepts:**
    * Reinforcement of basic HTML document structure (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`, `<meta charset>`).
    * Understanding the importance of a consistent template for new HTML files.
* **Outcome:** Created `assignment.html` with a standard HTML template, ready for content addition in subsequent assignments.
* **Relevant Files:** [assignment.html](html-documents/assignment.html)

#### 3. Basic Webpage Assignment (Section 2 Subsection B Step 56)

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

#### 4. Footer, Main, and Image Assignment (Section 2 Subsection C step 67)

* **Objective:** Integrate `<footer>`, `<main>`, and `<img>` tags into the `assignment.html` document.
* **Core Course Concepts:**
    * Understanding the basic syntax and general purpose of the `<footer>` tag for document footers.
    * Understanding the basic syntax and general purpose of the `<main>` tag for primary content.
    * Understanding the basic syntax of the `<img>` tag for embedding images.
    * Initial exposure to `src` (source) and `alt` (alternative text) attributes for the `<img>` tag.
* **Independent Research & Best Practices:**
    * **Semantic Indentation:** Applied principles of code readability and hierarchy by consistently indenting child elements relative to their parent tags. This was done even though formal indentation rules had not yet been covered, demonstrating proactive learning and a commitment to clean code.
    * **Semantic Placement of `<main>` and `<footer>`:** Researched and applied best practices for the logical and semantic placement of these tags. This involved understanding that `<main>` should encompass all primary, unique page content, and `<footer>` should contain document-level footer information, typically placed after the main content, for better document outline and structure.
    * **Image Placeholders:** Utilized an online image placeholder (`https://picsum.photos/150`) for the `src` attribute during development, showcasing a practical approach to displaying images for testing when local assets are not yet available.
    * **Structuring Footer Content:** Ensured that text content within the `<footer>` was properly wrapped in a `<p>` tag, adhering to HTML's block-level element requirements for text, even when the course had not explicitly covered this nuance.
* **Outcome:** Successfully incorporated the new HTML5 semantic tags, structuring the webpage content more logically and enhancing its readability through consistent indentation. The page now includes a clear main content area, a footer, and a visible image.
* **Relevant Files:** [assignment.html](html-documents/assignment.html)

#### 5. Implicit Link Assignment (Section 2 Subsection C Step 74)

* **Objective:** Create a new webpage (`dog.html`) with an image, and establish two-way implicit (relative) links between `assignment.html` and `dog.html`.
* **Core Course Concepts:**
    * Understanding and creating **implicit (relative) links** using the `<a>` (anchor) element and `href` attribute to navigate between pages within the same local directory structure.
    * Creating a **new, complete HTML file** (`dog.html`) with proper boilerplate structure.
    * Embedding **local images** using the `<img>` tag with a relative `src` path.
    * Ensuring `alt` attributes provide descriptive alternative text for images.
* **Independent Research & Best Practices:**
    * **Repository File Organization:** Implemented a best practice by organizing new HTML files into a `pages/` subfolder and image assets into an `images/` subfolder, enhancing project structure and scalability beyond simple root-level placement.
    * **Relative Path Mastery:** Confirmed understanding that for internal links and local image sources, relative paths (e.g., `pages/dog.html`, `../images/dog.jpg`) are essential, rather than absolute URLs from GitHub's website, to ensure functionality both locally and when hosted.
* **Outcome:** Successfully created `dog.html` containing a locally sourced image, and established seamless navigation between `assignment.html` and `dog.html` using implicit links, demonstrating foundational understanding of multi-page websites.
* **Relevant Files:**
    * [assignment.html](html-documents/assignment.html) (Modified)
    * [dog.html](html-documents/dog.html) (New)
    * [images/xolo-art-01.png](images/xolo-art-01.png) (New)

#### 6. Explicit Link Assignment (Section 2 Subsection C Step 75)

* **Objective:** Create an explicit link (`<a>` tag) in `assignment.html` that navigates directly to an online image URL.
* **Core Course Concepts:**
    * Distinguishing between embedding an image (`<img>` tag) and linking to an image (`<a>` tag with image URL as `href`).
    * Using the `<a>` (anchor) element with an absolute URL in the `href` attribute to link to external resources.
* **Independent Research & Best Practices:**
    * **External Link Etiquette:** Employed `target="_blank"` on the explicit link to open the external image in a new browser tab, ensuring the user's original `assignment.html` page remains open, enhancing user experience.
* **Outcome:** Successfully added a functional explicit link to an external image URL in `assignment.html`, demonstrating the ability to integrate external web content navigation.
* **Relevant Files:**
    * [assignment.html](html-documents/assignment.html) (Modified)

#### 7. Dog Webpage Assignment (Section 2 Subsection C Step 76)

* **Objective:** Create a new HTML page (`dog-video.html`) featuring a YouTube video link, and integrate a comprehensive navigation bar across `assignment.html`, `dog.html`, and `dog-video.html`.
* **Core Course Concepts:**
    * Creating new HTML documents with proper boilerplate.
    * Embedding external content via explicit links (`<a>` tag with YouTube URL).
    * Understanding and implementing the `<nav>` semantic element for site navigation.
    * Mastering **implicit (relative) linking** from different directory depths (`html-documents/` vs. root) to ensure seamless navigation across all pages.
* **Independent Research & Best Practices:**
    * **Consistent Navigation:** Applied the principle of consistent navigation by including the same `<nav>` bar on all three primary HTML pages for a uniform user experience.
    * **Relative Path Precision:** Demonstrated careful attention to relative pathing (`assignment.html`, `html-documents/dog.html`, `html-documents/dog-video.html`, `../assignment.html`) to ensure all links function correctly regardless of the source file's location.
    * **External Link Etiquette:** Continued using `target="_blank"` for the YouTube video link.
    * **Code Cleanliness:** Removed redundant old "Back to Home" links after implementing the central navigation bar.
* **Outcome:** Successfully created a new `dog-video.html` page and implemented a robust, site-wide navigation system that allows users to easily move between `assignment.html`, `dog.html`, and `dog-video.html`, demonstrating proficiency in multi-page website structuring and navigation.
* **Relevant Files:**
    * [assignment.html](html-documents/assignment.html) (Modified)
    * [dog.html](html-documents/dog.html) (Modified)
    * [dog-video.html](html-documents/dog-video.html) (New)

#### 8. Dog Webpage Challenge (Section 2 Subsection C Step 80)

* **Objective:** Successfully learn and utilize previously untaught HTML elements to enhance existing webpages, specifically implementing an extended quotation and embedding external video content, emphasizing self-teaching and problem-solving skills.
* **Core Course Concepts:**
    * Utilizing the `<blockquote>` element for semantic block-level quotations, including visible attribution and the `cite` attribute.
    * Embedding external media (YouTube video) using the `<iframe>` element and its attributes.
* **Independent Research & Best Practices:**
    * **Self-Teaching & Problem Solving:** Researched and identified correct methods for embedding external content. Successfully debugged and adapted to variations in YouTube's "Share" interface (e.g., lack of "Embed" option for Shorts, leading to finding it on regular videos).
    * **Semantic HTML:** Applied `<blockquote>` for its semantic meaning, not just visual indentation.
    * **Code Readability:** Continuously refined and applied HTML indentation best practices across all modified files, ensuring clear hierarchical structure.
* **Outcome:** Enhanced `assignment.html` with a relevant `<blockquote>` and visibly embedded a YouTube video directly into `dog-video.html`, demonstrating proficiency in independent learning and HTML integration.
* **Relevant Files:**
    * [html-documents/assignment.html](html-documents/assignment.html) (Modified)
    * [html-documents/dog.html](html-documents/dog.html) (Modified)
    * [html-documents/dog-video.html](html-documents/dog-video.html) (New)

**Post-Submission Correction / File Reorganization Note:**
* **Reason:** Following initial submission, instructor feedback required reorganization of all HTML files into a dedicated `html-documents/` folder for standardized project structure.
* **Action Taken:** Moved `assignment.html`, `dog.html`, and `dog-video.html` into `html-documents/`. All internal HTML links (`<nav>`) and documentation links (`README.md`, `ASSIGNMENT_INDEX.md`) were updated to reflect these new relative paths, ensuring continued navigability and accuracy.
* **Relevant Files (affected by correction):**
    * [html-documents/assignment.html](html-documents/assignment.html) (Path Updated & Link Changes)
    * [html-documents/dog.html](html-documents/dog.html) (Path Updated & Link Changes)
    * [html-documents/dog-video.html](html-documents/dog-video.html) (Path Updated & Link Changes)
    * [README.md](README.md) (Modified, including link updates)
    * [ASSIGNMENT_INDEX.md](ASSIGNMENT_INDEX.md) (Modified, including link updates)

#### 9. Basic HTML and JavaScript Assignment (Section 3 Subsection B Step 107)

* **Objective:** Create a new folder and HTML file to execute a basic JavaScript `alert()` pop-up, demonstrating the integration of JavaScript within an HTML document.
* **Core Course Concepts:**
    * Introduction to JavaScript as a scripting language for web interactivity.
    * Using the `<script>` tag to embed JavaScript code directly in HTML.
    * Understanding the `alert()` method for displaying pop-up messages.
    * Reinforcement of file organization for project management.
* **Outcome:** Successfully created an HTML file that triggers a JavaScript alert box when opened in a browser.
* **Relevant Files:**
    * [basic-html-and-javascript-1/basic-html-1.html](basic-html-and-javascript-1/basic-html-1.html)

#### 10. Source Attribute Assignment (Section 3 Subsection B Step 109)

* **Objective:** Refactor previously inline JavaScript code into an external `.js` file and link it to the HTML document using the `<script>` tag's `src` attribute, demonstrating proper external script integration.
* **Core Course Concepts:**
    * Creating and saving external JavaScript files (e.g., `.js` extension).
    * Utilizing the `src` attribute within the `<script>` tag to establish a link between an HTML document and an external JavaScript file.
    * Understanding the basic structure and execution of JavaScript from an external source.
* **Independent Research & Best Practices:**
    * **Separation of Concerns:** Applied the principle of separating HTML (structure) from JavaScript (behavior) by moving the `alert()` function to an external file, leading to cleaner, more organized, and maintainable code.
    * **Benefits of External Scripts:** Understood that external scripts can be cached by browsers, potentially leading to faster page loads for repeat visitors, and simplify code management across multiple HTML pages.
    * **Script Placement:** Ensured the `<script>` tag referencing the external file was appropriately placed (typically before the closing `</body>` tag) to avoid blocking HTML rendering while the JavaScript loads, enhancing perceived performance.
* **Outcome:** Successfully moved the JavaScript `alert()` function to `basic-javascript-1.js` and linked it to `basic-html-1.html`. This demonstrates proficiency in integrating external scripts and adheres to modern web development practices, with the JavaScript alert now executing from the linked external file.
* **Relevant Files:**
    * [basic-html-and-javascript-1/basic-html-1.html](basic-html-and-javascript-1/basic-html-1.html) (Modified)
    * [basic-html-and-javascript-1/basic-javascript-1.js](basic-html-and-javascript-1/basic-javascript-1.js) (New)

#### 11. Creating a Function (Section 3 Subsection B Step 120)

* **Objective:** Implement a basic JavaScript function to respond to a button click and dynamically change text color on the page.
* **Core Course Concepts:**
    * **Event Handling (`onclick`):** First direct interaction between user action (button click) and JavaScript.
    * **DOM Manipulation:** Utilizing `document.getElementById()` to select an HTML element and modifying its content using `innerHTML`.
    * **Functions for Interactivity:** Encapsulating dynamic behavior within a callable JavaScript function.
* **Outcome:** Created an interactive webpage where clicking a button updates a paragraph's text content and color.
* **Relevant Files:** [javascript-examples/120-onclick-function.html](javascript-examples/120-onclick-function.html)

#### 12. HTML and JavaScript Separation (Section 3 Subsection B Step 121)

* **Objective:** Implement an interactive web page by separating HTML structure and JavaScript behavior into distinct files, utilizing external script linking.
* **Core Course Concepts:**
    * Reinforcement of JavaScript functions and DOM manipulation.
    * **Key Best Practice:** Modularizing code by moving JavaScript into dedicated `.js` files.
    * Understanding the `<script src="...">` tag for linking external scripts.
* **Outcome:** Successfully demonstrated an `onclick` event triggering a JavaScript function that modifies HTML content, with HTML and JavaScript residing in separate, linked files within an existing project folder. Confirmed the `basic-javascript-1.js` file correctly includes the "Hello, World!" alert from Step 106.
* **Relevant Files:**
    * [basic-html-and-javascript-1/basic-html-2.html](basic-html-and-javascript-1/basic-html-2.html)
    * [basic-html-and-javascript-1/basic-javascript-1.js](basic-html-and-javascript-1/basic-javascript-1.js)

#### 13. DevTools Familiarization Challenge (Section 3 Subsection C Step 128)
* **Objective:** Gain initial familiarity with Google Chrome's Developer Tools to inspect and interact with live web page code.
* **Core Course Concepts:**
    * Introduction to browser-based development and debugging tools.
    * Understanding the dynamic relationship between HTML, CSS, and browser rendering.
* **Outcome:** Successfully utilized Chrome DevTools to view a webpage's HTML source, identify elements, and begin understanding the practical application of client-side inspection.
* **Relevant Files:** Any existing HTML file (e.g., [basic-html-and-javascript-1/basic-html-2.html](basic-html-and-javascript-1/basic-html-2.html)) was used for this exercise.

#### 14. Web Browser Tools - Cache & DevTools (Section 3 Subsection C Step 133)
* **Objective:** Learn critical web browser tools, including cache management and core Developer Tools functionalities, for efficient web development.
* **Core Course Concepts:**
    * Browser caching (purpose and common development issues).
    * Techniques for clearing browser cache and performing a force refresh.
    * Practical application of Google Chrome Developer Tools (Elements, Console, Sources, Network panels) for inspecting, debugging, and live editing web pages.
* **Outcome:** Developed essential skills in managing browser cache to ensure current content display and gained proficiency in using DevTools for on-the-fly webpage inspection and testing, crucial for effective debugging.
* **Relevant Files:** Local HTML files (e.g., [basic-html-and-javascript-1/basic-html-2.html](basic-html-and-javascript-1/basic-html-2.html)) were used for hands-on practice.

#### 15. Web Browser Tools Assignment - Website Inspection (Section 3 Subsection C Step 134)
* **Objective:** Utilize Developer Tools to inspect and understand the HTML code and structure of any chosen website.
* **Core Course Concepts:**
    * Practical application of the Chrome DevTools `Elements` tab for in-depth website analysis.
    * Identification of HTML elements, their attributes, and their hierarchical relationships within the DOM.
    * Temporary live modification of webpage content for testing and learning purposes.
* **Outcome:** Successfully used browser Developer Tools to explore the HTML structure of a chosen website, solidifying practical inspection and live-editing skills crucial for web development and debugging.
* **Relevant Files:** This assignment was a hands-on exercise primarily within the browser's Developer Tools; no project files were created or modified.

#### X. Color Assignment (Section 4 Subsection A Step 144)
    * **Objective:** Add two paragraphs of text with specified colors to `Basic_HTML_1.html` using the `<font>` element and its `color` attribute, demonstrating color names and hex codes.
    * **Core Course Concepts:** Introduction to the `<font>` HTML element, specifying colors using color names and hexadecimal codes.
    * **Outcome:** Successfully created/amended `Basic_HTML_1.html` with correct HTML5 boilerplate, two colored paragraphs as instructed, and confirmed changes in the browser.
    * **Relevant Files:**
        * `Basic_HTML_1.html`
    * **Reflection/Learning Note:** This assignment introduced the `<font>` HTML element for styling. While it fulfills the course requirement, it's critical to note that the `<font>` element is **deprecated in modern HTML5**. Its use is discouraged in favor of CSS for separating content from presentation. This step also highlighted the importance of a complete HTML5 boilerplate, as the initial file structure was based on an incomplete course example and required significant additions for proper best-practice setup.
    * **Independent Research & Best Practices:**
        * The **initial `Basic_HTML_1.html` file was amended to include standard HTML5 boilerplate elements**, which were missing from the course's example image. This included correcting `<!DOCTYPE HTML>` to `<!DOCTYPE html>`, adding `<meta charset="utf-8">` for proper character encoding, and including a `<title>` tag for browser tab display.
        * The **deprecated `<font>` tag** was used as per course instruction. The modern and preferred method for applying font colors is via **CSS**, using properties like `color` applied through `style` attributes (inline CSS), or more robustly, via internal or external stylesheets.
        * Through collaborative "independent research," the **best practice for `<script>` tag placement** was identified and implemented. Scripts are typically placed just before the closing `</body>` tag to ensure HTML content loads quickly and is available for JavaScript manipulation without render-blocking.
        * **Evolution of In-Code Comments:** Due to a unique display issue where standard HTML comments (``) were not visible in the chat interface, and a subsequent attempt with custom `<x-doc>` tags resulted in unwanted display on the live page, a more robust solution was implemented. **`<script type="text/plain">` tags are now used for in-code developer notes.** This method ensures the comments are visible in the code editor/source code but are explicitly ignored and not displayed on the live web page by the browser, making it a reliable and universally recognized approach for this specific purpose in HTML.
