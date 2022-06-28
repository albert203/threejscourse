Notes Before lesson practicals

    - Loading Three.js with a <scipt> has limitations
    - Doesnt include some of the classes
    - We need those classes
    - We need to run a server to emulate a website and for security reasons

Going to need a bundler
    - A too in which you send Javascript, CSS, HTML, images, Typescript, etc. to a server
    -The bundler will apply potential modifications and output a web-friendly "bundle"
    - Can do more like local server, manage dependencies, improve performance, compatibility, add modules support, optimise files, deploy, etc.

Will help for deployment and use over all browsers
We are going to use Webpack

Webpack 
    - Most popular bundler
    - Handles all the files and dependencies
    - Good documentation
    - Well maintained
    - Hard to configure

- First Download and install Node.js
- Download and unzip the starter zip file
- Now open the terminal and navigate to the folder where you unzipped the starter using cd ~path (~path is your path to the files)

- in the terminal run "npm install" (no quotes), this will install package.json and include the 'three' dependency for three.js

- Next run "npm run dev" (no quotes)

- You can build the website using "npm run build" (no quotes),
  this will create a "dist" folder 

- Dont load the style.css folder it created into the html, it is the javascripts import job

- It is live reloading

- In our static folder we would put in images, models, etc

- If you type in the url in another device you will get the same thing

- We want our webpack to work inside this
- first thing we add the <canvas> to the src/index.html file
- Webpack will add the script automatically

- console.log(THREE) gives us an error, we need to import the three.js library