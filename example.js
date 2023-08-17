import React, { useEffect, useRef } from "react";
import marked from "marked";
import DOMPurify from "dompurify";



export function a({
    a,
}: a): JSX.Element {

    const [searchTerm, setSearchTerm] = React.useState(new URLSearchParams(location.search).get('s'))
    const [searchTerm1, setSearchTerm1] = React.useState(new URLSearchParams(window.location.search).get('s'))
    const [searchTerm2, setSearchTerm2] = React.useState(new URLSearchParams(location.hash.substr(1)).get('s'))
    const return_url = React.useRef<string>(); 
    React.useEffect(() => {
        try {
            return_url.current =
                new URLSearchParams(window.location.search).get("return") 
        } catch (e) {
            console.error(e);
        }
    }, [a]);
        const { foo123 } = useLocation();
        let oopsie = new URLSearchParams(foo123)


      const bodyText = useRef();
      // ok
      bodyText.current.innerHTML = marked(DOMPurify.sanitize(searchTerm));

        const setBodyText = () => {
          // ok
          bodyText.current.innerHTML = marked(DOMPurify.sanitize(searchTerm1));
        };
          // ruleid: react-refs-url
          bodyText.current.innerHTML = marked(searchTerm);

        const setBodyText = () => {
          // ruleid: react-refs-url
          bodyText.current.innerHTML = marked(searchTerm1);
        };

          const bodyText6 = useRef<string>();
          // ruleid: react-refs-url
          bodyText6.current.innerHTML = marked(return_url.current);

          const setBodyText = () => {
            // ruleid: react-refs-url
          bodyText.current.innerHTML = marked(oopsie.get('a'));
        };
}
