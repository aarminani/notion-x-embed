import { useEffect } from "react";

export default function Embed() {
  useEffect(() => {
    const loadTwitter = async () => {
      if ((window as any).twttr) {
        (window as any).twttr.widgets.load();
        return;
      }

      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.onload = () => {
        (window as any).twttr.widgets.load();
      };
      document.body.appendChild(script);
    };

    loadTwitter();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <a
        className="twitter-timeline"
        data-tweet-limit="1"
        data-width="550"
        href="https://twitter.com/tekken"
      >
        Loading Tweets...
      </a>
    </div>
  );
}