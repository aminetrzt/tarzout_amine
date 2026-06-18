PORTFOLIO — FILE GUIDE
=======================

Files:
  index.html   → the page structure (open this in a browser)
  style.css    → all styling
  script.js    → the animated hero background
  photos/      → put your images here

HOW TO ADD YOUR PHOTO
----------------------
Save your photo as: photos/profile.jpg
(or change the filename in index.html, search for "photoImg")

HOW TO ADD DASHBOARD SCREENSHOTS
----------------------------------
Save screenshots as:
  photos/dashboard1.png
  photos/dashboard2.png
  photos/dashboard3.png
  photos/dashboard4.png

(or change filenames in index.html, search for "img1", "img2", etc.)

If a file is missing, the matching placeholder icon will show automatically
— nothing breaks.

HOW TO EMBED A LIVE POWER BI REPORT INSTEAD OF A SCREENSHOT
--------------------------------------------------------------
In index.html, find the matching iframe tag, e.g.:
  <iframe id="iframe1" title="Dashboard 1" src="" allowfullscreen></iframe>

Paste your Power BI embed URL into src="...". Get this URL from:
  Power BI report → File → Embed report → Website or portal

VIEWING THE SITE
------------------
Just open index.html in any browser — no server needed.
To publish it, upload all four items (index.html, style.css, script.js, photos/)
to your hosting of choice, keeping them in the same folder together.
