# Part 2 — Billing Widget UI / Product Testing Answers

## 1. Problems Found in the Billing Widget UI

The billing widget has several issues related to UI, usability, security, functionality, and user efficiency. Since this screen collects sensitive credit card information, personal details, and billing address information, it should be clear, well-structured, secure, and easy to use. Based on the provided mock-up, the form looks crowded, outdated, and not user-friendly.

### 1. General Readability and Visual Design

The text in the form is not clear enough. In some places, it appears small, crowded, or visually unclear, which may make it harder for users to understand what information is required.

The form also lacks proper spacing between fields and sections. As a result, the entire screen feels like one dense block of information instead of a structured payment form.

### 2. Lack of Clear Separation Between Form Sections

There is no clear visual separation between the different parts of the form:
- Payment details: card type, card number, payment amount, and expiration date.
- Cardholder details: first name, middle initial, and last name.
- Billing address: street address, city, state or province, and postal code.

The form would be easier to understand if these sections were separated with clear section titles, spacing, or divider lines.

### 3. Unclear “MI” Field

Next to the Last Name field, there is a small field labeled “MI”. This abbreviation is not clear for many users. It probably means “Middle Initial”, but the label is too vague and may confuse users.

A better solution would be to rename it to “Middle Initial” or “Middle Name / Initial”. If the field is not required, it should be marked as optional or removed completely to reduce unnecessary friction.

### 4. Confusing Billing Address Fields

Under “Credit Card Billing Street Address”, there are two address fields, but it is not clear what the second field is used for.

If the second field is meant for apartment, suite, unit, or address line 2, it should be labeled clearly.

For example:
- Billing Street Address
- Apartment / Suite / Unit — optional

Without this clarification, users may enter inconsistent or incorrect address information.

### 5. Payment Amount Is Not Clear Enough

The payment amount appears as “30.00” near the top of the form, but it is not visually emphasized, and the currency type is not displayed.

In a billing screen, the payment amount is one of the most critical pieces of information. The user should immediately understand exactly how much they are being charged and in which currency before continuing with the payment process.

Displaying only “30.00” can be confusing, especially for a global SaaS company where different currencies may be used, such as USD, EUR, GBP, or ILS.

A clearer and more user-friendly display would be:

`Payment Amount: $30.00 USD`

The amount should also appear in a dedicated payment summary area, and it should be clear that the amount is read-only and cannot be changed by the user.

### 6. “State or Province” as a Required Field

The “State or Province” field is marked as required. This can be problematic for users from countries where this field is not relevant or where the address format is different.

For a global SaaS product, the billing address fields should adapt based on the selected country. Since there is no Country field in the mock-up, requiring State or Province may create problems for international users.

### 7. Action Buttons Are Not Prominent Enough

The “Continue” and “Cancel” buttons are small, not very noticeable, and not the same size.

In a payment flow, the main action button should be clear and easy to find. The “Continue” button should have stronger visual priority than “Cancel” to reduce the chance of user mistakes.

The buttons should also be aligned consistently, preferably on the right side or at the bottom of the form in a clear action area.

### 8. Security and Trust Issues

Since this form collects credit card information, it should communicate security and trust to the user. However, the mock-up does not show any indication that the payment is secure.

There is no visible message about secure payment, encryption, a trusted payment provider, or how the credit card information is handled.

This can reduce user trust and may cause users to abandon the payment process, especially because they are being asked to enter sensitive financial information.

In addition, the form does not include a CVV field, which is usually part of online card verification. This may indicate that the payment flow is incomplete or does not match common user expectations for an online payment form.

### 9. Functional and Validation Issues

From the mock-up, it is not clear whether the form includes proper validation.

For example:
- Does the system validate the credit card number format?
- Does it prevent expired credit cards?
- Does it detect empty required fields?
- Are clear error messages displayed next to invalid fields?
- Is the postal code validated according to the selected country?
- Is “State or Province” always required, even for countries that do not use it?

In addition, the form does not include a Country field, even though it asks for State or Province. For a global SaaS billing widget, this is a functional issue because billing address formats are different between countries.

### 10. Performance and User Efficiency Issues

Since this is a static mock-up, it is not possible to fully evaluate technical performance issues such as loading time, latency, or responsiveness.

However, from a user efficiency perspective, the form creates unnecessary friction.

For example, the user has to manually select the card type, although the system could usually detect the card type automatically from the card number.

The card number field also asks users to enter the number with no dashes or spaces. A better experience would allow users to type naturally, while the system automatically formats or cleans the input behind the scenes.

This would reduce user errors and make the payment process smoother.


## 2. Sample Test Cases

### Test Case 1 — Successful Payment Form Submission

**Objective:**  
Verify that the user can continue the billing flow after entering valid payment and billing information, and that the payment amount is clear before submission.

**Steps:**
1. Open the billing widget.
2. Select a valid credit card type.
3. Enter a valid credit card number.
4. Verify that the payment amount is displayed clearly before continuing.
5. Enter a valid expiration date.
6. Enter valid cardholder details.
7. Enter a valid billing address.
8. Click the “Continue” button.

**Expected Result:**  
The form should be submitted successfully, and the user should be redirected to the next step in the billing flow or receive a clear confirmation message. The payment amount should be clearly visible before submission. If the currency is not displayed, this should be reported as a UI/product issue.

---

### Test Case 2 — Required Fields Validation

**Objective:**  
Verify that the form prevents submission when required fields are missing.

**Steps:**
1. Open the billing widget.
2. Leave one or more required fields empty, such as credit card number, expiration date, first name, last name, postal code, or any other field marked as required.
3. Click the “Continue” button.

**Expected Result:**  
The form should not be submitted. Clear validation messages should appear next to the missing required fields, explaining what the user needs to complete.

---

### Test Case 3 — Invalid Credit Card Details Validation

**Objective:**  
Verify that the form validates incorrect or expired credit card details.

**Steps:**
1. Open the billing widget.
2. Enter an invalid credit card number.
3. Enter an expiration date that has already passed.
4. Fill in the rest of the required fields with valid information.
5. Click the “Continue” button.

**Expected Result:**  
The form should not be submitted. The user should see clear error messages explaining that the credit card number is invalid and/or that the expiration date is not valid.