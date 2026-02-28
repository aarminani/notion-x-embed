export default function handler(req: any, res: any) {
  const username = "tekken"; // change if needed

  res.setHeader("Content-Type", "text/html");
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body>
        <a class="twitter-timeline"
           data-tweet-limit="1"
           href="https://twitter.com/${username}">
        </a>
        <script async src="https://platform.twitter.com/widgets.js"></script>
      </body>
    </html>
  `);
}