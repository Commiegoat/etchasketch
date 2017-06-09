This is a simple drawing program (a la etch-a-sketch) using HTML, CSS, Javascript, and Jquery.

Made as part of the Odin Project.

Updates:

Learned a lot doing this project.  I think I'm going to call it "good enough" for now, though tons of improvements could be made.

Biggest (and most annoying thing) I learned was to check how your code renders in different browsers - I encountered a bug in chrome where the inline-block elements of my board were flowing out the bottom of my board element (somehow, the boxes were rendering taller than they should have.  Rounding error in chrome?).  Firefox looked fine, so I didn't notice this until my final commits.  Using Float and percentage-based sizing on my divs instead seems to have solved this problem.

Ian Olson
6/2017