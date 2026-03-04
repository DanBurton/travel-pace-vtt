import React from "react";
import Preamble from "./pages/Preamble";

export default function App() {
  const learnPages = [
    <Preamble />,
    <>
      <p><BackButton /> <NextButton /></p>
      <h2>Overview: Playing the Game!</h2>
      <p>
        The goal of Travel Pace is to briefly narrate the action and plot elements of a traditional TTRPG campaign and then roleplay the in-between moments.
        That narration will set the stage for the actually important part of this game,
        scenes of character-to-character connection.
        What we're here for are the instances of character development,
        moments where characters can share how they think and feel,
        or the banter by the fireside after a bloody battle.
        The scenes between the beats of a traditional TTRPG's story:
        the celebration of a hard-earned victory, or the mourning of atragic loss.
      </p>
      <p>
        In this game, every Player takes the role of an Adventurer setting out on a quest.
        Unlike many other TTRPGs, there is no GM in Travel Pace.
        Instead, players take turns narrating what events just happened to their Adventurers,
        setting a scene for the party.
        Then the group, in character as their respective Adventurer, reacts.
        They grieve, celebrate, commiserate, plan, argue, apologize, whatever their particular situation calls for.
        Then, once the conversation has run its course, someone establishes where the party is going to next,
        and the cycle repeats until the adventuring is complete.
      </p>
      <p><NextButton /></p>
    </>,
    <>
      <p><BackButton /> <NextButton /></p>
      <h2>The Rules: Step 1: Character Creation</h2>
      <p>
        Each Player needs to create an Adventurer,
        which will be the character that they shepherd through the game.
        Character creation is a simple process:
        just briefly describe the character.
        Use maybe 2-3 words.
        Pick an archetype, a fighting style, a school or magic, an origin, or a singular adjective.
        Keep it simple, keep it iconic.
        Something as straightforward as “Dwarven Warrior,” “Elven Archer,” or “Undead Alchemist” is perfect.
      </p>
      <p>
        Try not to be too specific.
        The game is about who your character is and how they react to the events around them,
        not about who they were before the game started.
        “Devious Flamecaster” would be a great character to play! But “Flame sorcerer in a secret cult who worships the undead goddess of trickery and lies” is too much.
        Maybe we can learn that your Devious Flamecaster is in that trickery cult as the story unfolds,
        but coming into the game with too many preconceived ideas of who your character is will make you less flexible during roleplay.
        Travel Pace is a game of seeing where things go, not planning your whole course in advance.
      </p>
      <p>
        My advice? Pick a way the character would be useful in an adventuring party
        (healer, warrior, alchemist, archer, alchemist, druid, ice mage, face puncher, berserker, smooth talker)
        and pick one or two descriptors (human, dwarven, undead, elven, draconic, devious, speedy, large, law abiding, “law abiding,” vampiric).
        That should be enough to get you started, and you can let the character and their story develop as you play.
      </p>
      <p>
        All you need now is a name, pronouns, and your character's physical description.
      </p>
      <p><NextButton /></p>
    </>,
    <>
      <p><BackButton /> <NextButton /></p>
      <h2>The Rules: Step 2: The Gameplay Loop</h2>
      <p>
        (TODO. See the PDF)
      </p>
      <p><NextButton /></p>
    </>,
    <>
      <p><BackButton /> <NextButton /></p>
      <h2>Suggestions, Starters, and Adjectives</h2>
      <p>
        Sometimes it's not super easy to come up with what happens next,
        who your character should be, or how to get the game started.
        Happens to the best of us, no worries!
        Here is a collection of some things you may find useful to get the creative juices flowing.
      </p>
      <p><NextButton /></p>
    </>,
    <>
      <p><BackButton /> <NextButton /></p>
      <h2>Suggestions: How to get Roleplay flowing</h2>
      <p>
        (TODO. See the PDF)
      </p>
      <p><NextButton /></p>
    </>,
    <>
      <p><BackButton /> <NextButton /></p>
      <h2>Character Creation Suggestions</h2>
      <p>
        (TODO. See the PDF)
      </p>
      <p><NextButton /></p>
    </>,
    <>
      <p><BackButton /> <NextButton /></p>
      <h2>Campaign Scenarios</h2>
      <p>
        (TODO. See the PDF)
      </p>
      <p><NextButton /></p>
    </>,
    <>
      <p><BackButton /></p>
      <h2>On Sharing, Adding On, and Remixing</h2>
      <p>
        (TODO. See the PDF)
      </p>
      <p><PlayButton /></p>
    </>
  ];

  const LEARN_PAGE = 0;
  const LANDING_PAGE = learnPages.length;
  const MAX_PAGE = 9;

  const clampPage = React.useCallback(
    (nextPage) => Math.min(Math.max(nextPage, LANDING_PAGE), MAX_PAGE),
    []
  );

  const parsePageFromPath = React.useCallback(
    (pathname) => {
      const match = pathname.match(/^\/learn\/(\d+)\/?$/);
      if (match) {
        return clampPage(Number(match[1]));
      }
      return LANDING_PAGE;
    },
    [clampPage]
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

      const targetPath =
        normalizedPage === PLAY_PAGE ? "/" : `/learn/${normalizedPage}`;
      if (window.location.pathname !== targetPath) {
        window.history.pushState({}, "", targetPath);
      }
    },
    [clampPage]
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
    <button onClick={() => setPageAndUrl(page - 1)} disabled={page === 0}>Back</button>
  );
  const NextButton = () => (
    <button onClick={nextPage}>Next</button>
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
        <LearnButton /> <PlayButton />
      </p>
    </>
  );
  const playPages = [

  ]
  const PlayPage = () => (
    <>
      <p>
        Play! (TODO)
      </p>
    </>
  );

  const allPages = [...learnPages, <LandingPage />, ...playPages]

  return (
    <>
      <h1>Travel Pace</h1>
      <div id='header'>
        <p>Read the PDF: <a href="/Travel%20Pace%20v0.6.1.pdf" target="_blank" rel="noopener noreferrer">Travel Pace 0.6.1</a></p>
      </div>
      <div id='page' style={{ maxWidth: '600px'}}>{allPages[page]}</div>
    </>
  );
}
