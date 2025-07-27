# SUPPLEMENTARY LEARNING LOG - HTML & CSS - MARKDOWN FORMATTING GUIDE

This document outlines the precise Markdown heading hierarchy and formatting conventions for the `SUPPLEMENTARY_LEARNING_HTML_CSS.md` file, ensuring consistent structure and readability for your detailed learning log entries.

---

## 1. Overall Document Title (`#` H1)
* **Purpose:** The single main title for the entire `SUPPLEMENTARY_LEARNING_HTML_CSS.md` file.
* **Example:** `# SUPPLEMENTARY LEARNING LOG - HTML & CSS`

---

## 2. Major Course Sections (`##` H2)
* **Purpose:** To designate major divisions in the course content (e.g., "SECTION 4: WRITING CODE IN HTML").
* **Example:** `## SECTION 4: WRITING CODE IN HTML`

---

## 3. Course Subsections (`###` H3)
* **Purpose:** To designate subdivisions within major course sections (e.g., "SUBSECTION A: STYLING WITH HTML").
* **Example:** `### SUBSECTION A: STYLING WITH HTML`

---

## 4. Individual Learning Entries (`####` H4)
* **Purpose:** To serve as the primary title for each distinct lesson/step's notes.
* **Format:** Follows the "[LESSON TITLE] - [short descriptive phrase]" format.
* **Blank Lines:** Must be followed by a single blank line.
* **Example:** `#### CREATING A FORM - input tags and attributes`
* **Note on Subsection Headings as Entries:** When a course step specifically designates a new subsection (e.g., "SUBSECTION B: UTILIZING LIVESHARE AND GITHUB IN VISUAL STUDIO CODE"), its corresponding entry in `SUPPLEMENTARY_LEARNING_HTML_CSS.md` should still be formatted as an `####` H4 "Individual Learning Entry" as per this section's guidelines. The `### Course Step Number:` metadata will link it to the specific step.

---

## 5. Fixed Content Fields (`###` H3)
* **Purpose:** To categorize fixed content fields within an individual learning entry.
* **Format:** Follows the `### [Section Name]:` format.
* **Blank Lines:**
    * There should be a **single blank line** between the `####` title and the first `###` section (`### Course Step Number:`).
    * There should be **NO blank line** between `### Course Step Number:` and `### Date Researched:`.
    * There should be a **single blank line** *after* `### Date Researched:` and *before* the first `#####` section (`##### Key Concepts / Summary`).
* **Example of their structure (showing all blank lines):**
    ```markdown
    #### FORM ASSIGNMENT - practical application

    ### Course Step Number: 233
    ### Date Researched: 2025-07-20

    ##### Key Concepts / Summary
    ```
* **Full list of sections:**
    * `### Course Step Number:`
    * `### Date Researched:`

---

## 6. Sub-Sections Within Learning Entries (`#####` H5)
* **Purpose:** To organize detailed content within an individual learning entry, including "Relevant Files."
* **Format:** Follows the `##### [Section Name]` format.
* **Blank Lines:** Each `#####` section should be preceded by a **single blank line**.
* **Mandatory Inclusion:** The `##### Relevant Files:` section **must be included** at the end of each entry, listing all pertinent files with Markdown links (`[filename.html](path/to/filename.html)`).
* **Examples:**
    * `##### Key Concepts / Summary`
    * `##### Independent Research / Notable Discoveries`
    * `##### Insights from Chat Discussion summary`
    * `##### Relevant Files:`

---

## 7. Horizontal Rule (`---`)
* **Purpose:** To visually separate each individual learning entry.
* **Placement:** At the end of each `####` entry.

---