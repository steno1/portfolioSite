// you can view site at https://steno1.github.io/portfolioSite/
Portfolio Site Documentation

Introduction

This documentation provides an overview and explanation of the features and functionality of my portfolio website. 

The website is built using HTML, CSS, and JavaScript, without any specific framework.
It includes a dynamic time display, various animations, mobile responsiveness, and
a contact section that allows visitors to send an email.

Table of Contents
Structure
Dynamic Time Display
Animations
Mobile Responsiveness
Contact Section

1. Structure
The structure of my portfolio website consists of multiple HTML files and a CSS file.
Here's an overview of the key files and directories:

index.html: The main HTML file that serves as the entry point to my portfolio site.

styles.css: The CSS file that contains the styles and layout for your website.

app.js: The JavaScript file that provides interactivity and additional functionality to your site.
img/: A directory containing the images used in my portfolio.

2. Dynamic Time Display
The dynamic time display feature on my website allows visitors to see the current time. This is implemented using JavaScript.
  The script responsible for this functionality is located in the app.js file.


3. Animations
My portfolio website includes various animations to enhance the user experience and make the site visually appealing.
 These animations are achieved using CSS transitions, transformations, and keyframe animations.


The CSS responsible for the animations is defined in the styles.css file.

Each animation may have its own CSS class with associated properties and keyframes.

4. Mobile Responsiveness
My portfolio website is designed to be responsive, ensuring a consistent and user-friendly experience across different devices and screen sizes.

 This is accomplished by using responsive CSS techniques such as media queries.

Media queries in the styles.css file define specific styles based on the screen width or device characteristics.

These styles adjust the layout, font sizes, and other properties to optimize the website for mobile devices, tablets, and desktop screens.


5. Contact Section
My portfolio website includes a contact section that allows visitors to send me an email.

The contact form functionality is implemented using JavaScript in the app.js file.

To enable visitors to contact me through the website, the JavaScript code listens for the form submission event. 

When the form is submitted, it retrieves the values entered by the user for the name, email, and message fields.

It then constructs the email body and opens the default email client with the pre-filled recipient address, subject, and body.

In the HTML code, the contact form is structured with input fields for name, email, and message, along with a submit button.
The form has an id attribute assigned as "contact-form", and the input fields have corresponding id attributes as "name", "email", and "message".

When the form is submitted, the JavaScript code in app.js intercepts the event using the addEventListener method. 
It prevents the default form submission behavior to handle the form data manually.

The JavaScript code retrieves the values entered by the user from the input fields using their id attributes. 
It then constructs the email body by combining the name, email, and message into a formatted string.

Finally, the window.location.href property is set to open the default email client with the pre-filled recipient address, subject, and body. 
The recipient email address is set as "/my email address", the subject of the email is "Portfolio Form Submission",
and the body contains the formatted string with the user's name, email, and message.

After the form submission, the input fields are cleared to reset the form for further submissions.





