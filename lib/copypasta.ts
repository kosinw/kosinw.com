import { useEffect, useState } from "react";

export type RSSDocument = Document;

export function useCopypasta(): [boolean, RSSDocument?] {
    const RSS_URL = `https://cors-anywhere.herokuapp.com/https://reddit.com/r/im15andthisisyeet.rss?q=nsfw:no&sort=hot&limit=10`;

    const [loading, setLoading] = useState<boolean>(true);
    const [doc, setDoc] = useState<RSSDocument>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(RSS_URL);
            const text = await response.text();
            setDoc(new window.DOMParser().parseFromString(text, "text/xml"));
            setLoading(false);
        }

        fetchData();
    }, []);

    return [loading, doc];
}