import Head from 'next/head'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
        <Head>
        <title>Problem 3: Frameworks</title>
        </Head>

        <header className={styles.Title}>Next.js</header>
        <br></br>
        <header className={styles.Name}>Jessica Wang</header>
        <header className={styles.Info}>ID: 500586571</header>

        <br></br><br></br>

        <main>
        <div className={styles.Main}>
            <header>Problem 3</header>

            <p>
                The framework used to create this web page is Next.js.
                Originally I wanted to use React, but I learned that React is a library and not a framework so I decided to use Next.js instead because it uses React applications and JavaScript.
            </p>

            <p className={styles.Info2}>Installing Next.js</p>

            <p>
                I installed Next.js by first installing Node.js and Git for Windows.
                Then, I used the Git terminal to bootstrap Vercel's template Next.js app to my computer.
                After that, I was able to run the "git run dev" command and see the web page on my localhost:3000 address and edit the pages in my IDE.
            </p>

            <p className={styles.Info2}>Building the Web Page</p>

            <p>
                Throughout the semester, I was able to create the HTML and CSS template that I use for every lab.
                For each lab I usually change the colour palette and the content of the web page to complete the week's tasks.
                I was able to import my styles into React.js using both the style tag on the page and the imported CSS file from the styles directory in the project.
                For the titles, headings, and the layout I was able to learn the JavaScript syntax used to add styles to the elements.
                Everything else was basically the same as normal HTML.
            </p>

            <p className={styles.Info2}>Difficulties</p>

            <p>
              I had a lot of difficulty getting the web page hosted on GitHub.
              At first, I had trouble pushing my directory onto GitHub itself.
              I kept getting errors that the path that I was trying to commit to wasn't found.
              I watched two YouTube videos, one on how to upload Next.js apps to GitHub and the other on how to upload React apps to GitHub because they are very similar.
              After following the instructions in both videos, I realized that I was missing the GitHub Pages dependency in my package.json and my branch was set to main instead of master.
              When those errors were fixed, my directory was uploaded onto GitHub but the GitHub Pages wasn't showing my web page (I got a 404 error).
              After more Googling, I found out that the settings for GitHub Pages had moved since the videos I watched were created and it needed to be manually activated.
              I deployed the site, and finally my web page was live.

            </p>

            <hr></hr>

            <p>
                ♦ <a href="https://www.cs.ryerson.ca/~y297wang/lab10.html">Home</a> ♠
            </p>
        </div>
        </main>

        <br></br><br></br><br></br><br></br>
        
        <footer>
            <p>Jessica Wang 2022<br></br>
            CPS530 Lab 10c</p>
        </footer>

      <style jsx>{`
        
      `}</style>

      <style jsx global>{`
        body {
            background-color: #FAE3D9;
            padding: 2px;
            font-size: 14px;
            font-family: Tahoma, Verdana;
            text-align: center;
            color: #000000;
        }
        
        a:link, a:visited {
            color: #61C0BF;
            text-decoration: none;
        }
        
        a:hover {
            color: #BBDED6;
            text-decoration: none;
        }
        
        header {
            font-size: 40px;
            font-family: 'Times New Roman', Times;
            line-height: 35px;
            letter-spacing: 2px;
            text-align: center;
            color: #000000;
            border-bottom: 1px dashed #FFB6B9;
        }
        
        nav {
            font-family: 'Courier New', Courier;
            font-size: 20px;
            text-align: center;
        }
        
        table {
            margin-left: auto;
            margin-right: auto;
            width: 400px;
            text-align: center;
            font-family: Georgia, 'Times New Roman', Times;
            font-size: 20px;
        }
        
        img {
            width: 300px;
        }
        
        hr {
            border-bottom: 1px dashed #FFB6B9;
            border-top: 0px;
        }
        
        footer {
            position: relative;
            text-align: center;
            font-weight: bold;
        }
        
        @media only screen and (min-width: 320px) and (max-width: 508px) {
            table {
                width: 90%;
            }
        }
      `}</style>
    </div>
  )
}