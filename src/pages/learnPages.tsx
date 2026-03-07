import React from 'react'
import { renderScenario, scenarios } from '../data/scenarios'

export const learnPages: (() => React.ReactNode)[] = [
  () => (
    <div>
      <h2>Scenes Between the Beats</h2>
      <p>
        You are an adventurer! What an exciting thing to be. Congratulations! In
        some other game, we might be embarking on a campaign that spans years of
        real time, spending days traveling through untold imaginary worlds, and
        devoting hours to our characters and their arcs, all in service of
        telling our stories.
      </p>
      <p>
        We don't have time for any of that. We have an afternoon. Well, we have
        a few hours really. Can't have this taking all day. Not this weekend, I
        have other plans, you know? Maybe some other weekend, but we're not in
        high school anymore, and it's hard to find the time or energy for big
        twelve-hour sessions like we used to.
      </p>
      <p>
        So today, let's just play a whole campaign. But combat takes so long,
        and no one really wants to be the GM, so how about this instead?
      </p>
    </div>
  ),
  () => (
    <div>
      <h2>Playing the Game!</h2>
      <p>
        The goal of Travel Pace is to briefly narrate the action and plot
        elements of a traditional TTRPG campaign and then roleplay the
        in-between moments. That narration will set the stage for the actually
        important part of this game, scenes of character-to-character
        connection. What we're here for are the instances of character
        development, moments where characters can share how they think and feel,
        or the banter by the fireside after a bloody battle. The scenes between
        the beats of a traditional TTRPG's story: the celebration of a
        hard-earned victory, or the mourning of atragic loss.
      </p>
      <p>
        In this game, every Player takes the role of an Adventurer setting out
        on a quest. Unlike many other TTRPGs, there is no GM in Travel Pace.
        Instead, players take turns narrating what events just happened to their
        Adventurers, setting a scene for the party. Then the group, in character
        as their respective Adventurer, reacts. They grieve, celebrate,
        commiserate, plan, argue, apologize, whatever their particular situation
        calls for. Then, once the conversation has run its course, someone
        establishes where the party is going to next, and the cycle repeats
        until the adventuring is complete.
      </p>
      <p>Mechanically, what does this look like?</p>
    </div>
  ),
  () => (
    <div>
      <h2>The Rules</h2>
      <h3>Step 1: Character Creation</h3>
      <p>
        Each Player needs to create an Adventurer, which will be the character
        that they shepherd through the game. Character creation is a simple
        process: just briefly describe the character. Use maybe 2-3 words. Pick
        an archetype, a fighting style, a school or magic, an origin, or a
        singular adjective. Keep it simple, keep it iconic. Something as
        straightforward as "Dwarven Warrior," "Elven Archer," or "Undead
        Alchemist" is perfect.
      </p>
      <p>
        Try not to be too specific. The game is about who your character is and
        how they react to the events around them, not about who they were before
        the game started. "Devious Flamecaster" would be a great character to
        play! But "Flame sorcerer in a secret cult who worships the undead
        goddess of trickery and lies" is too much. Maybe we can learn that your
        Devious Flamecaster is in that trickery cult as the story unfolds, but
        coming into the game with too many preconceived ideas of who your
        character is will make you less flexible during roleplay. Travel Pace is
        a game of seeing where things go, not planning your whole course in
        advance.
      </p>
      <p>
        My advice? Pick a way the character would be useful in an adventuring
        party (healer, warrior, alchemist, archer, alchemist, druid, ice mage,
        face puncher, berserker, smooth talker) and pick one or two descriptors
        (human, dwarven, undead, elven, draconic, devious, speedy, large, law
        abiding, "law abiding," vampiric). That should be enough to get you
        started, and you can let the character and their story develop as you
        play.
      </p>
      <p>
        All you need now is a name, pronouns, and your character's physical
        description.
      </p>
    </div>
  ),
  () => (
    <div>
      <h2>The Rules</h2>
      <h3>Step 2: The Gameplay Loop</h3>
      <p>
        Once everyone has made their characters, determine the order of who will
        set up scenes. This can be done by consensus, by rolling a die and going
        from highest to lowest, or some combination. You can decide what works
        best based on your group. Going first or last might be particularly
        exciting or daunting for people.
      </p>
      <p>
        The first player narrates how and why the adventuring party has come
        together. Give some details about the world, but don't take too long:
        Travel Pace is a game about sharing the spotlight, not stealing it.
      </p>
      <p>
        (Examples of play are included in <em>italics</em> throughout).
      </p>
      <p>
        <em>
          Player 1, Narration: The small village of Ashendale was cold and rainy
          on the day that the gnolls attacked. The Bolvar farmstead burned in
          the distance, and the screams of the villagers echoed through the
          night as the beasts charged up the road into town. But five
          Adventurers made their stand there at the edge of Ashendale and saved
          the small community from destruction.
        </em>
      </p>
      <p>
        The first player tells the group where the Adventurers have found a
        moment of respite. It's within this moment of peace that the Players get
        their first chance to roleplay their characters!
      </p>
      <p>
        <em>
          Player 1, Narration: Once the beasts were defeated and the villagers
          calmed, the five Adventurers were able to breathe and relax. They
          found themselves sitting at a table in the Ashendale inn, free mugs of
          ale in front of them as meager thanks for their good deeds.
          <br />
          Player 1 (Owen, the half-orc stabbomancer): "So… That was awkward."
          <br />
          Player 2 (Themetriana, the renowned orator): "Shut up, you almost got
          me killed!"
          <br />
          Player 3 (Felix, the big puncher): "He already apologized, get over
          it."
        </em>
      </p>
      <p>
        At some point during this scene the first Player establishes where the
        party needs to go next, and the scene ends when it comes to a natural
        conclusion.
      </p>
      <p>
        <em>
          Player 1 (Owen): "Thank you for accepting my apology. If we're going
          to try to find the gnolls village together, we should at least be on
          good terms."
        </em>
      </p>
      <p>
        When the scene ends, the second Player narrates what happens following
        this event, and then sets up another scene in a calm moment once the
        action has wound down.
      </p>
      <p>
        <em>
          Player 2, Narration: With some vague directions from the locals, a
          couple days of travel north brought our Adventurers to the village of
          the gnolls. The mayor of the gnoll village, Craftpaw the Unbloodied,
          was happy to talk to the party. The village had also fallen victim to
          gnoll raids, you see, and Craftpaw explained that the wizard who lives
          at the top of the tallest peak in the nearby Snowcloaked Range was
          mind controlling the mountain gnolls. That evening, the party went for
          dinner at a restaurant in town to rest and to plan.
          <br />
          Player 2 (Themetriana): "Can we trust Mayor Craftpaw?"
          <br />
          Player 1 (Owen): "Absolutely!"
          <br />
          Player 4 (Rowena, the gnome phasmalist): "Absolutely not!"
        </em>
      </p>
      <p>
        As before, the Player who set the scene originally sets up where the
        party is heading next.
      </p>
      <p>
        <em>
          Player 2 (Themetriana): "So, it's decided. We'll investigate the
          wizard's tower."
        </em>
      </p>
      <p>
        This pattern continues, with the third Player setting a scene and
        establishing the next destination{' '}
        <em>
          (Player 3 (as Felix): "So we have to find the person mind controlling
          the wizard!")
        </em>
        , and then the fourth{' '}
        <em>
          (Player 4 (as Rowena): "At the bottom of that dungeon is the beast
          that has caused all of this chaos.")
        </em>
        and so on until the last player takes their turn. Instead of setting a
        scene, the last Player has the honor of narrating the final
        confrontation.
      </p>
      <p>
        <em>
          Player 5, Narration: The fight through the dungeon was arduous. Long,
          bloody hours were spent trekking through, but ultimately the
          Adventurers made it to the cavern of the Telestrade. It threatened,
          cajoled, bribed, and begged, and when our heroes showed a moment's
          hesitation it struck. But that would ultimately seal its fate, as all
          doubt was removed from the Adventurers' minds. They fought with all
          the ferocity they had left, and were victorious.
        </em>
      </p>
      <p>
        The game is ending, and now all that is left is for each Player to give
        their Adventurer an epilogue. Go in reverse order, Player 5, then Player
        4, and so on. If anyone has a suggestion for someone else's ending, they
        can bring those suggestions forward respectfully, but the final
        decisions for each Adventurer are in the hands of their Player.
      </p>
      <p>
        <em>
          Player 5: "Gurkle, the half drunken hierophant, retired after that.
          They said nothing would live up to the excitement. If Owen ends up
          opening that tavern he mentioned, Gurkle would become a regular."
          <br />
          Player 1: "Naturally! Owen would absolutely save Gurkle a spot at the
          bar. Reserved seating, so they can shoot the shit."
          <br />
          Player 4: "Rowena would wander the land, looking for more adventure.
          There are always more people who need help."
          <br />
          Player 3: "I think Rowena and Felix kinda had a thing, would she let
          Felix tag along?"
          <br />
          Player 4 (as Rowena): "Felix, I thought I'd be waiting for you
          forever. Never do that tome again."
          <br />
          Player 3 (as Felix): "I would never dream of disappointing you."
          <br />
          Player 2: "Themetriana died in the battle with the Telestrade."
          <br />
          Player 1: "Tragic! Was it heroic at least?"
          <br />
          Player 2: "Incredibly. She was probably trying to save Owen when he
          got himself in trouble."
          <br />
          Player 1: "That tracks. Can Owen plan her funeral?"
          <br />
          Player 2: "... I think Rowena would be better suited to that."
          <br />
          Player 4 (as Rowena): "It's what Themetriana would have wanted, Owen,
          but you can help pick out flowers."
        </em>
      </p>
      <p>
        The epilogue is the last chance to tell these Adventurers' stories, to
        wrap things up. Once everyone is satisfied with their character's
        ending, that's it. Game over. I hope you had fun, let's play again soon!
      </p>
    </div>
  ),
  () => (
    <div>
      <h2>Suggestions, Starters, and Adjectives</h2>
      <p>
        Sometimes it's not super easy to come up with what happens next, who
        your character should be, or how to get the game started. Happens to the
        best of us, no worries! Here is a collection of some things you may find
        useful to get the creative juices flowing.
      </p>
    </div>
  ),
  () => (
    <div>
      <h2>How to get Roleplay flowing</h2>
      <p>
        The fun of the game comes entirely from Players wanting to explore the
        characters they and their friends have created. When the roleplay is
        good, it comes easily and naturally to everyone. But it can be difficult
        to get started sometimes, especially if Players are new to roleplaying
        or are getting used to their characters.
      </p>
      <p>
        <strong>Suggestion #1-</strong> Offer your opinion, in character, on
        whatever just happened. Saying something as simple as{' '}
        <em>
          "I think that guy was sketchy and we shouldn't trust what he told us,"
        </em>{' '}
        will prompt others to keep talking. Do the other characters agree?
        Disagree? Do we even have the luxury of being skeptical?? Now the
        roleplay is flowing.
      </p>
      <p>
        <strong>Suggestion #2-</strong> Ask a question, and give someone else a
        chance to create a detail about the game by answering. Pick a question
        that can establish the group's goal or next step towards a goal, and
        then support whatever answer you get. Or, pick a question that lets the
        group offer an opinion which can create back and forth between
        characters (this variant is similar to suggestion #1, just a different
        angle on it).
      </p>
      <p>
        <em>
          Player 1: "That guy was useless, why did we even come here?"
          <br />
          Player 2: "It wasn't totally useless, we got a clue. Besides, we have
          to find out where Captain Jaklebeard sailed off to before he's too far
          gone to chase."
          <br />
          Player 1: "I guess we have a clue now, but I have no clue how to
          interpret it."
          <br />
          Player 3: "Obviously it means we have to sail to the Cape of Dreaded
          Seaclaws. Were you not paying attention?"
        </em>
      </p>
    </div>
  ),
  () => (
    <div>
      <h2>Character Creation Suggestions</h2>
      <p>
        Below are some suggestions for descriptors and roles to help you decide
        who your character is. Pick one or two descriptors from the first list
        and a role from the second, and you're set. Or just peruse the lists and
        take some inspiration. Remember that your initial description of your
        character is simply a place to start, something to guide roleplaying
        decisions until you figure out who this character is. If I say my
        character is a Devout Farmer, and after the first scene neither of those
        things come up again, that's okay as long as I had fun roleplaying
        whoever my character ended up being.
      </p>
      <p>
        <strong>Descriptors-</strong> Lowly, Ace, Elven, Dwarven, Dragonforged,
        Holy, Educated, Heroic, Well-Traveled, Haunted, Undead, Subterranean,
        Horned, Savvy, Untrained, Expert, Scatterbrained, Caffeinated, Unknown.
      </p>
      <p>
        <strong>Roles-</strong> Archer, Fighter, Hemomancer, Savant, Chef,
        Artisan, Paladin, Clerk, Cleric, Bard, Oracle, Witch, Truthseeker,
        Cryomancer, Sparkthrower, Wrestler, Scout, Farmer, Soldier, Spy.
      </p>
    </div>
  ),
  () => (
    <div>
      <h2>Campaign Scenarios</h2>
      <p>
        Setting the stage for the game is incredibly important, and can be a
        daunting task. Included here are a few prompts for starting scenarios
        that you can use instead of creating one of your own. Feel free to
        choose one to use, or roll a d4 to decide randomly. Read or paraphrase
        the prompt to the other Players, or use it as inspiration and make
        something new. My general tip for starting the game is to put the
        Adventurers together to defeat an immediate threat and decide during the
        roleplay what to do about it, or put them in an unfamiliar setting and
        decide during the roleplay what brought them here. There are millions of
        different frameworks, but these two are the most straightforward. If you
        think the other players are strong improvisers, it could be fun to give
        them very few details at all, though that is an advanced maneuver.
      </p>
      {scenarios.map((_, index) => renderScenario(index))}
    </div>
  ),
  () => (
    <div>
      <h2>On Sharing, Adding On, and Remixing</h2>
      <p>
        I hope anyone who plays Travel Pace has a good time. It's an idea that
        has been marinating in my brain for the better part of a year, at least.
        But at the same time, I know that my idea of a great game won't be the
        right game for everyone, or for every get-together. To remedy that, I
        encourage anyone who has played the game to make additions or edits to
        make the game right for themselves.
      </p>
      <p>
        Travel Pace is openly licensed under the Creativ e Commons
        Attribution-Sharealike license. That means anyone can do almost whatever
        they want with this game, as long as I am attributed as the creator and
        anything you make from this work is shared with the same license. Feel
        free to share it, change it, add to it, subtract from it, even sell your
        own derivative works made from it. Further, I encourage every player to
        use it, break it, fix it, trash it, change it, mail upgrade it, charge
        it, point it, zoom it, press it, snap it, work it, etc. Technologic.
      </p>
      <p>
        This game is written as a fantasy game, but it can easily do sci fi or
        any other genre as long as the players all come into it with the right
        expectations. I would like to write some supplemental material for other
        genres, though that is beyond the scope of this release
      </p>
      <p>
        At time of writing, version 0.6.1 is a mostly complete vision of the
        game. The rules may change slightly through playtesting, and I intend to
        add more CampaignScenarios, as well as suggestions for plot beats and
        endings. Adding these things would also be a great way to add on and
        remix the game, which I continue to encourage all players to do.
      </p>
      <p>
        For now, this is it. This is the game. I hope you, dear reader, enjoy
        playing it. It's important to me. But even if you don't enjoy it, that's
        okay. No hard feelings, I'm just glad you took the time to at least read
        the rules. I hope Travel Pace can give anyone who experiences the game
        hours of enjoyment, or at least a couple of good ideas for their next
        creative endeavor.
      </p>
      <h2>Thank you so much for playing my game. I'll see ya around.</h2>
    </div>
  ),
  () => (
    <div>
      <h2>Afterword by Dan</h2>
      <p>
        After reading Warren's doc, I was inspired to make a web app for it. The
        game is simple enough that this app is entirely unnecessary, but, my
        hope was simply to create a few little conveniences to get your game
        going. Enjoy!
      </p>
    </div>
  ),
]
