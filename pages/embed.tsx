import { useEffect } from "react";

export default function Embed() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div style={{ padding: 0, margin: 0 }}>
            <a
                className="twitter-timeline"
                data-tweet-limit="1"
                href="https://twitter.com/tekken"
            >
                Loading Tweets...
            </a>
        </div>
    );
}
