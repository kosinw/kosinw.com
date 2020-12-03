import { Styled, Divider, Box } from "theme-ui";
import { RSSDocument, useCopypasta } from "lib/copypasta";
import { useEffect, useState } from "react";

interface RSSFeedEntry {
    title: string;
    op: string;
    body: string;
}

function parseRSSFeed(doc: RSSDocument): RSSFeedEntry[] {
    const entries = Array.from(doc.querySelectorAll("entry"));

    return entries.map(entry => ({
        title: entry.querySelector("title").innerHTML,
        op: entry.querySelector("author>name").innerHTML,
        body: htmlDecode(entry.querySelector("content").innerHTML)
    })).splice(2);
}

function htmlDecode(input: string): string {
    var e = document.createElement('textarea');
    e.innerHTML = input;
    // handle case of empty input
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

const RSSView: React.FC<{}> = () => {
    const [loading, doc] = useCopypasta();
    const [rss, setRss] = useState<RSSFeedEntry[]>(null);

    useEffect(() => {
        if (!!doc) {
            const entries = parseRSSFeed(doc);
            setRss(entries);
        }
    }, [doc]);

    if (loading || !rss) {
        return <p>Fetching data...</p>;
    }

    return (
        <Box>
            {rss.map(entry => {
                return <>
                    <Divider />
                    <Styled.h3>{entry.title}</Styled.h3>
                    <Styled.p>by {entry.op}</Styled.p>
                    <Styled.p dangerouslySetInnerHTML={{ __html: entry.body }} />
                </>;
            })}
        </Box>
    );
};

export default RSSView;