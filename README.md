# Jones Automation Exercise

This repository contains my solution for the Jones Automation Exercise.

The submission includes:
- A Playwright automation script for the provided website.
- A screenshot captured before clicking the submit button.
- Answers for the billing widget UI and product testing questions.

---

## Part 1 — Automation

The automation script is written in JavaScript using the Playwright library.

The script opens the following website:

```text
https://test.netlify.app/
```

Then it performs the required automation flow:

1. Opens a Chromium browser.
2. Navigates to the provided website.
3. Fills in the form fields:
   - Name
   - Email
   - Phone
   - Company
   - Website
4. Changes the "Number of Employees" dropdown from `1-10` to `51-500`.
5. Takes a screenshot before clicking the "Request a call back" button.
6. Clicks the "Request a call back" button.
7. Waits until the "Thank You!" page is displayed.
8. Writes a message to the console after reaching the thank you page.

---

## How to Run

From the project root directory, run the following commands:

Install the project dependencies:

```bash
npm install
```

Install the Playwright browsers:

```bash
npx playwright install
```

Run the automation script:

```bash
node automation.js
```

---

## Screenshot Output

The screenshot is created before clicking the submit button and saved under:

```text
screenshots/before-submit.png
```

---

## Implementation Notes

During the implementation, I first tried to target the form fields by their visible placeholder text, for example:

```javascript
'input[placeholder="NAME *"]'
```

However, the automation timed out because the visible field labels were not exposed as real `placeholder` attributes in the HTML.

Because of that, I changed the implementation to locate all input elements on the page and fill them according to their order in the form:

```javascript
const inputs = page.locator('input');

await inputs.nth(0).fill('Ofir Duek');
await inputs.nth(1).fill('ofir.test@example.com');
await inputs.nth(2).fill('0501234567');
await inputs.nth(3).fill('Jones Automation Exercise');
await inputs.nth(4).fill('https://example.com');
```

This approach matched the actual structure of the page and allowed the automation to interact with the form successfully.

---

## Project Structure

```text
jones-automation-exercise/
├── automation.js
├── package.json
├── package-lock.json
├── README.md
├── screenshots/
│   └── before-submit.png
└── answers.md
```

---

## Part 2 — UI / Product Testing Answers

The answers for the billing widget UI and product testing questions are included in a separate file:

```text
answers.md
```