import React from "react";
import { createPageRouter } from "./pageRoutes";
import { learnPages } from "./pages/learnPages";
import { playPages } from "./pages/playPages";

export default function App() {
  const {
    LEARN_PAGE,
    LANDING_PAGE,
    PLAY_PAGE,
    MAX_PAGE,
    clampPage,
    parsePageFromPath,
    pathFromPage,
  } = React.useMemo(
    () =>
      createPageRouter({
        learnPageCount: learnPages.length,
        playPageCount: playPages.length,
      }),
    [learnPages.length, playPages.length]
  );

  const [page, setPage] = React.useState(() =>
    parsePageFromPath(window.location.pathname)
  );

  const setPageAndUrl = React.useCallback(
    (nextPage, { fromPopState = false } = {}) => {
      const normalizedPage = clampPage(nextPage);
      setPage(normalizedPage);

      if (fromPopState) {
        return;
      }

      const targetPath = pathFromPage(normalizedPage);

      if (window.location.pathname !== targetPath) {
        window.history.pushState({}, "", targetPath);
      }
    },
    [clampPage, pathFromPage]
  );

  React.useEffect(() => {
    const onPopState = () => {
      setPageAndUrl(parsePageFromPath(window.location.pathname), {
        fromPopState: true,
      });
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [parsePageFromPath, setPageAndUrl]);

  const nextPage = () => setPageAndUrl(page + 1);
  const BackButton = () => (
    <button onClick={() => setPageAndUrl(page - 1)} disabled={page === LEARN_PAGE}>Back</button>
  );
  const NextButton = () => (
    <button onClick={nextPage} disabled={page === MAX_PAGE}>Next</button>
  );
  const LearnButton = () => (
    <button onClick={() => setPageAndUrl(LEARN_PAGE)}>Learn</button>
  );
  const PlayButton = () => (
    <button onClick={() => setPageAndUrl(PLAY_PAGE)}>Play</button>
  );

  const LandingPage = () => (
    <>
      <p>
        Welcome!
      </p>
    </>
  );
  const allPages = [...learnPages, LandingPage, ...playPages]
  const CurrentPage = allPages[page] ?? LandingPage;
  const [character, setCharacter] = React.useState({});

  return (
    <>
      <h1>Travel Pace</h1>
      <div id='header'>
        <p>Read the PDF: <a href="/Travel%20Pace%20v0.6.1.pdf" target="_blank" rel="noopener noreferrer">Travel Pace 0.6.1</a></p>
      </div>
      <div id='nav'>
        <p><LearnButton /> <PlayButton /></p>
      </div>
      <div id='page' style={{ maxWidth: '600px'}}>
        <CurrentPage
          BackButton={BackButton}
          NextButton={NextButton}
          character={character}
          setCharacter={setCharacter}
        />
      </div>
    </>
  );
}
