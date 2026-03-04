export function createPageRouter({ learnPageCount, playPageCount = 1 }) {
  const LEARN_PAGE = 0;
  const LANDING_PAGE = learnPageCount;
  const PLAY_PAGE = LANDING_PAGE + 1;
  const MAX_PAGE = PLAY_PAGE + Math.max(playPageCount - 1, 0);

  const clampPage = (nextPage) =>
    Math.min(Math.max(nextPage, LEARN_PAGE), MAX_PAGE);

  const parsePageFromPath = (pathname) => {
    if (pathname === "/") {
      return LANDING_PAGE;
    }

    if (pathname === "/play") {
      return PLAY_PAGE;
    }

    const match = pathname.match(/^\/learn\/(\d+)\/?$/);
    if (match) {
      return clampPage(Number(match[1]));
    }

    return LANDING_PAGE;
  };

  const pathFromPage = (page) => {
    if (page === LANDING_PAGE) {
      return "/";
    }

    if (page === PLAY_PAGE) {
      return "/play";
    }

    return `/learn/${page}`;
  };

  return {
    LEARN_PAGE,
    LANDING_PAGE,
    PLAY_PAGE,
    MAX_PAGE,
    clampPage,
    parsePageFromPath,
    pathFromPage,
  };
}
