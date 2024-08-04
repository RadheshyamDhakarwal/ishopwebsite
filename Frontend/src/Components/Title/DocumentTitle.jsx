import { useEffect } from "react";

const DocumentTitle = (title) => {
    useEffect(() => {
        const prevtitle = document.title;
        document.title = title
        return () => {
            document.title = prevtitle
        };
    }, [title]);
   
}

export default DocumentTitle;
