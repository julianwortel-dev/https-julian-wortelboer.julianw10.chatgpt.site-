export type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author?: string;
  academyUrl?: string;
  intro: string[];
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  source: string;
};

export const articles: Article[] = [
  {
    slug: 'before-you-fix-the-shot-find-the-problem',
    title: 'Before You Fix the Shot, Find the Problem',
    category: 'Coaching & Player Development',
    date: 'September 6, 2026',
    readTime: '5 min read',
    intro: [
      'A player sends another volley into the net. The coach responds immediately: “Push through the ball.” On the next attempt, the player pushes harder. The ball goes long.',
      'The instruction changed the swing. It may have missed the problem.',
      'One of the most important ideas in my book, Mastering the Art of Coaching Padel, is that coaching begins with diagnosis. Before we ask a player to change something, we need to understand what is causing the mistake.',
      'That takes observation, curiosity, and the discipline to resist giving an instant answer.',
    ],
    sections: [
      { heading: 'Watch the pattern', paragraphs: [
        'A single missed shot tells you what happened once. Several repetitions begin to tell you why.',
        'When a player struggles, I encourage coaches to observe three to five attempts before offering a correction. Look beyond where the ball lands. Notice the preparation, the feet, the spacing, and the decision that came before contact.',
        'A player who appears to have a late swing may be arriving late to the ball. A short volley may begin with delayed preparation. A rushed overhead may reflect an attempt to attack a ball that calls for a more patient response.',
        'Those situations need different solutions. Repeating the same technical cue will not address all of them.',
      ]},
      { heading: 'Choose one useful change', paragraphs: [
        'Observation often reveals several things worth improving. The next responsibility is choosing where to begin.',
        'Ask yourself: which adjustment could help the rest of the movement fall into place?',
        'Earlier preparation, for example, may give a player more time to establish spacing, find a comfortable contact point, and select a target. That makes it a more useful starting point than separate instructions about the arm, wrist, feet, and finish.',
        'Give the player one clear focus. Demonstrate it. Then create a manageable situation in which they can try it.',
        'The purpose of the next few repetitions is to test your diagnosis. If the correction does not help, observe again. A coach needs to be willing to revise an explanation as readily as a player needs to revise a movement.',
      ]},
      { heading: "Include the player's perspective", paragraphs: [
        '“What did you feel on that shot?” can reveal something a technical instruction will miss.',
        'Perhaps the player felt crowded. Perhaps they were worried about the opponent at the net. Perhaps they were trying so hard to avoid another error that they stopped moving freely.',
        'Their answer gives you information. It also invites them to participate in solving the problem. Over time, that participation helps players recognise patterns for themselves during matches, when the coach is no longer standing beside them.',
      ]},
      { heading: 'Try this in your next session', paragraphs: [
        'Choose one recurring error and watch several repetitions without interrupting. Identify a likely cause, ask the player what they noticed, and test one correction. Then return to a rally or point situation to see whether the improvement holds.',
        'For players, the same idea offers a useful question to bring to a lesson: “What is happening before I make this mistake?”',
        'The answer may change what you practise. And it may turn a frustrating cycle of corrections into progress you can understand.',
      ]},
    ],
    source: 'Adapted from Chapter 1, “The Identity of a Great Padel Coach,” and Chapter 5, “The P.A.D.E.L. Framework — Stage by Stage,” in Mastering the Art of Coaching Padel.',
  },
  {
    slug: 'why-padel-shots-disappear-in-matches',
    title: 'Why Your Padel Shots Work in Practice but Disappear in Matches',
    category: 'Coaching & Player Development',
    date: 'September 6, 2026',
    readTime: '5 min read',
    intro: [
      'You finish a lesson feeling confident about your bandeja. The feed was comfortable, the contact felt clean, and you found your target repeatedly. Then you play a match, an awkward lob goes up, and the shot feels unfamiliar again.',
      'That gap deserves attention in the way we practise.',
      'In a controlled drill, you often know what is coming. During a point, you must read the ball, move, choose a response, account for your partner, and recover for the next shot. The technique now has a decision attached to it.',
      'My approach to coaching connects those demands throughout the lesson. In the book, I call this the Mix Methodology: technical work combined with game-based training.',
    ],
    sections: [
      { heading: 'Give the movement a clear starting point', paragraphs: [
        'Controlled repetition has a useful role. A basket feed can give a player time to understand a new movement without dealing with every uncertainty of a rally.',
        'For a bandeja, that might mean focusing on preparation, the swing, and recovery after contact. Keep the task manageable enough for the player to experience what a good repetition feels like.',
        'The important decision is when to change the task. If the player has established a reasonably consistent pattern, introduce more of the game. Waiting for every feed to look perfect can delay the very practice they need next.',
      ]},
      { heading: 'Add movement and a live ball', paragraphs: [
        'Move from the predictable feed to a cooperative exchange in which a lob creates the opportunity to play the bandeja.',
        'Now the player has to read the ball and organise their feet. Contact is followed by recovery and another shot. The movement begins to serve a rally.',
        'Keep the technical focus simple as the situation becomes more demanding. If the session is about preparation, continue watching preparation. Avoid adding a new list of corrections just because the ball is now live.',
      ]},
      { heading: 'Make room for the decision', paragraphs: [
        'The next step is point play in which the player must choose a response.',
        'Some lobs may allow the intended overhead. Others may require a safer option. The player needs practice recognising that difference, because a well-executed shot can still be the wrong choice for the situation.',
        'This is where the coach can ask two separate questions: was the decision appropriate, and how well was the shot executed?',
        'Separating those questions makes feedback more useful. It also helps the player understand that development includes reading the game, not only reproducing a swing.',
      ]},
      { heading: 'Measure what transfers', paragraphs: [
        'At the end of the session, look beyond the best basket-fed repetition. Does the player prepare earlier when the direction is uncertain? Can they recover after the shot? Do they recognise when the opportunity is available?',
        'If the skill breaks down, simplify the situation briefly and then build back toward live play. Progress can move back and forth between technical attention and game application.',
        'In your next lesson, give a familiar shot that full journey: controlled repetition, movement, cooperative rally, and a real decision inside a point. You will learn much more about its readiness for competition than another basket of identical feeds can tell you.',
      ]},
    ],
    source: 'Adapted from Chapter 4, “The Three Methodologies & Why Mix Wins,” in Mastering the Art of Coaching Padel.',
  },
  {
    slug: 'what-should-you-get-from-a-padel-lesson',
    title: 'What Should You Get from a Padel Lesson?',
    category: 'Coaching & Player Development',
    date: 'September 6, 2026',
    readTime: '5 min read',
    intro: [
      'At the end of a padel lesson, you should be able to explain what you worked on, why it matters, and what you will take into your next match.',
      'Sweat and repetition are part of training. A clear sense of direction is part of coaching.',
      'I developed the P.A.D.E.L. Framework to give lessons that direction: Prepare, Analyze, Demonstrate, Execute, and Lock In. For coaches, it provides a dependable structure. For players, it helps explain what a purposeful learning experience should include.',
    ],
    sections: [
      { heading: 'Prepare: start with the player who arrived today', paragraphs: [
        'A useful lesson begins with a check-in and observation. How are you feeling? What happened in your recent matches? Is anything affecting how you move or concentrate today?',
        'The warm-up gives the coach a chance to watch before prescribing changes. It gives you a chance to settle into the court and describe what you want help with.',
        'A session plan should respond to that information. The goal is to make the lesson appropriate to the person and the game in front of the coach.',
      ]},
      { heading: 'Analyze: agree on a clear priority', paragraphs: [
        'There may be several things to improve. A productive session gives one of them enough attention to make progress.',
        'Your coach should be able to explain the focus in plain language. Perhaps preparing earlier will give you more time on the volley. Perhaps a different tactical choice will help you manage a difficult ball.',
        'Understanding the reason makes the work easier to carry into a match. You know what the adjustment is supposed to accomplish.',
      ]},
      { heading: 'Demonstrate: see what you are trying to do', paragraphs: [
        'A clear demonstration provides a reference. Seeing the complete movement first, then seeing it more slowly, can make a verbal explanation easier to follow.',
        'You may also rehearse the movement without a ball. This gives you time to connect the picture with the feeling before a feed or rally adds another demand.',
        'The demonstration should make the task clearer. It should leave you ready to try.',
      ]},
      { heading: 'Execute: build toward the game', paragraphs: [
        'Practice should gradually ask more of you. A controlled feed might develop into a movement drill, then a cooperative rally, then a game situation.',
        "Throughout that progression, feedback should stay connected to the session's priority. Enough challenge to stretch you; enough successful repetitions to understand what is working.",
        'Live play matters because it reveals whether you can use the adjustment while reading the ball and making decisions.',
      ]},
      { heading: 'Lock In: leave with a next step', paragraphs: [
        'The final minutes deserve attention. A brief conversation helps you put the experience into words: what felt different, what worked, and what still needs practice?',
        'Leave with one specific task. “Improve your volley” is difficult to act on. A defined practice activity, agreed with your coach and connected to today’s focus, gives the next session somewhere to begin.',
        'Before you leave your next lesson, try finishing this sentence: “The one thing I want to take into my next match is…”',
        'If you can answer clearly, you have something useful to build on after the lesson ends.',
      ]},
    ],
    source: 'Adapted from Chapter 5, “The P.A.D.E.L. Framework — Stage by Stage,” in Mastering the Art of Coaching Padel.',
  },
  {
    slug: 'give-young-padel-players-a-reason-to-come-back',
    title: 'Give Young Padel Players a Reason to Come Back',
    category: 'Coaching & Player Development',
    date: 'September 6, 2026',
    readTime: '5 min read',
    intro: [
      'A child leaves their first padel session and asks when they can play again. For a junior coach, that question matters.',
      'It means there is an opportunity to keep teaching. Another session to develop coordination, another chance to practise with a partner, another experience of trying something difficult and improving.',
      'In my approach to junior coaching, enjoyment is a central part of development. We need children to want to stay involved long enough to discover what they can do.',
    ],
    sections: [
      { heading: 'Make the activity fit the child', paragraphs: [
        'An adult may be happy to discuss the purpose of a drill before starting. A young child may need to discover that purpose through a game.',
        'With the youngest players, activities can involve foam balls, balloons, targets, hoops, and simple movement challenges. A child who cannot yet sustain a rally can still practise tracking, coordination, balance, and working with another person.',
        'The coach needs a clear objective behind the activity. The child needs something engaging to do.',
        'As players develop, sessions can introduce more stroke work, rules, tactical questions, and short matches. Watch the children in front of you and adjust the challenge to their readiness.',
      ]},
      { heading: 'Look at how much each child participates', paragraphs: [
        'A drill can look organised while giving children very little opportunity to play.',
        'Watch the waiting time. How long does each child stand in line? How often do they touch a ball? Are they involved, or watching someone else receive instruction?',
        'Use short activities and simple instructions. Where the space and supervision allow, organise tasks so players have more opportunities to participate. If attention disappears, examine the activity before assuming the children are the problem.',
        'Good session design makes it easier for them to stay engaged.',
      ]},
      { heading: 'Make mistakes safe to learn from', paragraphs: [
        "A missed ball is already visible. The coach's response determines what happens next.",
        'A child who feels embarrassed may become reluctant to try. A calm, specific adjustment gives them something useful to do. Recognising effort, persistence, or a better decision helps them see progress beyond the score.',
        "Keep comparisons focused on the child's own development. Notice what they can do today that was difficult a few weeks ago. Give that progress a name.",
        'Competition can belong in this environment. Short games and achievable challenges create excitement, provided children understand that an error is part of playing and learning.',
      ]},
      { heading: 'Let the relationship develop too', paragraphs: [
        'As juniors grow older, their needs change. They may want more independence, more explanation, and a greater voice in their goals. School demands and changing motivation also become part of the coaching conversation.',
        'Listen. Ask what they are finding difficult and what they want to improve. Keep expectations clear while recognising the person behind the performance.',
        'For parents, a useful question after a session is: “What did you enjoy, and what did you learn?” It opens a wider conversation than the score alone.',
        'For coaches, the challenge is to create a session worth returning to. Every return gives us another chance to help a young player grow.',
      ]},
    ],
    source: 'Adapted from Chapter 10, “Junior Development & Youth Coaching,” and the enjoyment and empathy principles in Chapter 1 of Mastering the Art of Coaching Padel.',
  },
  {
    slug: 'small-habits-that-build-a-padel-club-community',
    title: 'The Small Habits That Build a Padel Club Community',
    category: 'Club Strategy & Operations',
    date: 'September 6, 2026',
    readTime: '5 min read',
    intro: [
      'A player arrives at the club. Someone greets them by name, asks about the match they mentioned last week, and introduces them to another player looking for a regular game.',
      'None of those actions requires a new court or an expensive campaign. Together, they give someone a reason to feel at home.',
      'In Mastering the Art of Coaching Padel, I describe culture as something built through everyday standards and behaviours. It takes shape in the way people are welcomed, how coaches work together, and what happens after a lesson ends.',
      'For club owners and coaching directors, those details deserve deliberate attention.',
    ],
    sections: [
      { heading: 'Make recognition a habit', paragraphs: [
        "Knowing a player's name is a beginning. Remembering what they are working on carries the relationship further.",
        'Ask how their first competition went. Notice when the shot they have struggled with starts to improve. Follow up on the playing partner they were trying to find.',
        'These moments show that someone is paying attention. They also help coaches connect one session to the next, giving players a sense that their development has continuity.',
        'A brief lesson record can support that consistency. The purpose is simple: make it easier to remember what matters to the player.',
      ]},
      { heading: 'Help people find their next game', paragraphs: [
        'A welcoming first lesson should lead somewhere.',
        'A new player may enjoy the sport and still be unsure whom to play with, which clinic to join, or whether an event suits their level. The coaching team can help make that next step clear.',
        'Introduce players with compatible levels and schedules. Explain the available activities. Create regular social opportunities where people can meet without having to organise everything themselves.',
        'The practical work of making connections is part of building a community. A court booking becomes more meaningful when people recognise the faces on the other side of the net.',
      ]},
      { heading: 'Create routines the team can sustain', paragraphs: [
        'Culture becomes dependable through repetition.',
        'Start with a few behaviours everyone can deliver: a personal greeting, a clear lesson objective, and a specific acknowledgment of progress before the player leaves.',
        'Build routines for coaches too. A regular conversation about player development gives colleagues a chance to share observations and solve problems. A thoughtful event debrief helps the team improve together.',
        'Choose habits that fit the club, then give them consistent attention. A long list of values means little if players rarely experience them.',
      ]},
      { heading: 'Hold the same standards across the team', paragraphs: [
        'Players notice how coaches treat each other. They notice preparation, punctuality, and respect.',
        'Those expectations need to apply to experienced coaches and new hires alike. A strong performer who repeatedly dismisses colleagues or speaks poorly about players still affects the environment everyone shares.',
        "Give coaches responsibility for strengthening that environment. One might improve the welcome for new players; another might organise a junior social event. Shared ownership helps the culture reach beyond the director's presence.",
        'This week, choose one moment in the player experience and improve it consistently. Start with the arrival, the introduction to a playing partner, or the end of a lesson.',
        'Community grows through people doing those small things well, again and again.',
      ]},
    ],
    source: 'Adapted from Chapters 15 and 16, “Building a Coaching Culture & Team” and “Growing the Sport — Community, Media & Global Impact,” in Mastering the Art of Coaching Padel.',
  },
  {
    slug: 'real-business-model-behind-a-profitable-padel-club',
    title: 'The Real Business Model Behind a Profitable Padel Club',
    category: 'Club Strategy & Operations',
    date: 'September 6, 2026',
    readTime: '6 min read',
    intro: [
      "Most people who open a padel club think they're opening one business: a place to rent courts. They're actually opening seven.",
      "Court rentals, memberships, private lessons, group clinics, tournaments, food and beverage, pro shop retail, and corporate events each behave like their own micro-business—with a different margin profile, a different growth ceiling, and a different job to do inside your P&L.",
      "Confuse them, and you'll chase the wrong revenue for years. Understand them, and you'll know exactly where to put your next dollar of marketing spend, staffing hours, and court time.",
    ],
    sections: [
      { heading: 'Why revenue diversity is a survival strategy', paragraphs: [
        "A club that depends on court rentals alone is one slow season, one new competitor, or one economic downturn away from real trouble. Diversified revenue isn't about vanity—it's about resilience.",
        "But what matters isn't just how much a revenue line bills. It's how much of that revenue actually stays in the club after costs. That's gross margin, and it varies enormously by category.",
      ]},
      { heading: 'Where the margin actually lives', paragraphs: [], bullets: [
        'Memberships (85–95% gross margin). This is the best business in the building. Once base operating costs are covered, almost every additional membership due drops straight to the bottom line. Memberships are also the best predictor of long-term retention.',
        "Private lessons (75–85% gross margin). The highest margin per hour you'll generate anywhere in the business. Private lesson revenue is a direct function of coaching reputation and retention.",
        'Group clinics (65–75% gross margin). The most scalable format available. At a coach ratio of 1:6–8, a single coach-hour can generate significant revenue.',
        'Court rentals (60–70% gross margin). The primary driver of foot traffic, but not the highest-margin line. Rentals should become the entry point, not the destination.',
        "Food and beverage (55–65% gross margin). Inventory- and labor-intensive. Menu design and waste control are the real levers—not menu size.",
        'Pro shop and retail (40–50% gross margin). The thinnest margins, especially on paddles and technical gear. Apparel and house-brand merchandise perform better while reinforcing brand identity.',
        "Corporate events (premium margin). The highest revenue per head, with very low price sensitivity. A well-packaged corporate offering can generate outsized revenue per court-hour.",
      ]},
      { heading: 'Five pricing rules that protect your brand and margin', paragraphs: [], bullets: [
        "Price to the value you deliver, not to the club down the street. Racing to match a competitor's price destroys the brand you spent years building.",
        "Use peak and off-peak pricing with at least a 30% differential. This isn't a discount—it's demand management.",
        'Introduce dynamic pricing for high-demand weekend slots. Your busiest hours are your least price-sensitive hours.',
        'Bundle lessons with memberships at a 10–15% discount. This nudges transactional players toward your highest-margin, highest-retention product.',
        'Never discount publicly. Offer private loyalty rewards to long-tenured members instead.',
      ]},
      { heading: 'The takeaway', paragraphs: [
        'Every dollar that comes through your doors is not created equal. Thriving clubs treat their revenue mix deliberately—leaning into memberships and private lessons as the financial engine, using court rentals and clinics to build the player base, and treating retail and food and beverage as brand reinforcement first, profit center second.',
        'What you can do tomorrow: Pull your last 90 days of revenue by category and calculate actual gross margin for each. Most operators are surprised by how much staff time goes toward their lowest-margin line. That gap is your next strategic decision.',
      ]},
    ],
    source: 'This piece draws from the Padel Club Blueprint, the operating framework behind Icon Padel Club—with the full methodology available in Mastering the Art of Coaching Padel.',
  },
  {
    slug: 'what-to-look-for-in-a-padel-club-general-manager',
    title: 'Your Most Important Hire: What to Look for in a Padel Club General Manager',
    category: 'Club Strategy & Operations',
    date: 'September 6, 2026',
    readTime: '5 min read',
    intro: [
      'Before you hire a single coach, before you post a single front-desk shift, hire the person who will lead them.',
      "The Club Manager or General Manager is the highest-leverage hire in the building. Get this one wrong, and every other role underperforms—regardless of how talented your coaching staff is or how beautiful your courts are.",
      "I've watched clubs with mediocre facilities thrive under a great GM, and I've watched gorgeous facilities struggle under the wrong one. The building is not the business. The person running it is.",
    ],
    sections: [
      { heading: 'What general management experience needs to mean', paragraphs: ["A résumé that says ‘managed a facility’ tells you almost nothing. These are the competencies that actually predict whether someone can run your club:"], bullets: [
        'Proven team leadership. Has personally built, coached, and held accountable a multi-department team across the front desk, coaching, cleaning, and maintenance.',
        "Culture and mission stewardship. Can translate the club's mission into daily behavior—not merely repeat it in an interview.",
        'Hospitality and guest-experience command. Service recovery and the member journey must be personal, non-delegable standards.',
        'Financial literacy. Can build and read a P&L, control labor cost, and understand margin by revenue stream.',
        'A real local network. Vendors, local players, other clubs, and ideally a roster of micro-influencers who can help build awareness.',
        'Recruiting instinct. A GM who keeps a bench ensures the club is never one resignation away from a crisis.',
        'Systems fluency. Comfortable with the booking platform, POS, CRM, and reporting stack.',
        'Composure under pressure. Sets the emotional tone through double bookings, injuries, and peak-hour staffing problems—not only on easy days.',
      ]},
      { heading: 'Why this matters even more in a new market', paragraphs: [
        "If you're opening in a city with no existing padel community, building one typically takes 10 to 24 months. The right manager can significantly compress that window.",
        "This is why it's often smarter to be the second or third club in a new city rather than the first. Later entrants inherit a community the first club spent years and dollars building. If you are the first mover, your GM's ability to build that community from nothing is the biggest variable in how quickly you reach profitability.",
      ]},
      { heading: 'The standard to hold', paragraphs: [
        "Don't hire a facility manager. Hire a leader who happens to understand padel operations. The technical parts—the booking software, scheduling, and reporting—can be taught in weeks. Team leadership, financial judgment, and composure under pressure cannot be taught nearly as fast, if at all.",
        "What you can do tomorrow: Take your current GM job posting, or your mental checklist if you haven't written one, and run it against the eight competencies above. If it's mostly about padel knowledge and facility operations, rewrite it. Playing knowledge is easy to find. Leadership and financial judgment are rare.",
      ]},
    ],
    source: 'This hiring framework is part of the Padel Club Blueprint—the full competency matrix and manager-specific red flags are covered in Mastering the Art of Coaching Padel.',
  },
  {
    slug: 'people-process-service-padel-club-philosophy',
    title: 'People + Process = Service: The Philosophy Behind Every Great Padel Club',
    category: 'Club Strategy & Operations',
    date: 'September 6, 2026',
    readTime: '5 min read',
    intro: [
      "A club doesn't compete on courts and pricing alone. It competes on how a member feels five seconds after walking through the door.",
      "That feeling doesn't happen by accident. It's designed—deliberately, repeatedly, by staff who understand exactly what's expected of them.",
      "At Padel Smash Academy, we call this standard PPS: Personalized Player Service. It's the discipline that turns a padel facility into a club people actually belong to.",
    ],
    sections: [
      { heading: 'The equation', paragraphs: [
        'PPS captures a simple truth about hospitality: if you have the right people, using the right processes, the result is exceptional service. Take away any one of the three, and the equation breaks.',
        "Wonderful staff without process is inconsistent—great on a good day, unpredictable on a bad one. Perfect process without the right people is cold and mechanical. It's the combination of all three, applied shift after shift, that produces hospitality members can count on.",
      ], bullets: [
        "People. Hire first for a service mindset, second for technical skill. Everyone in the building needs to understand they're in the hospitality business as much as the padel business.",
        "Process. Documented operating procedures exist so service quality doesn't depend on who happens to be working that day. Consistency is a system, not a personality trait.",
        'Service. The non-negotiable result: every member greeted by name, every first-time visitor introduced, and every problem solved before the shift ends.',
      ]},
      { heading: 'Borrowing from the Ritz-Carlton, adapted for the court', paragraphs: [
        "The Ritz-Carlton built a worldwide reputation on one idea: staff aren't employees delivering a service; they're hosts creating an experience. That mindset transfers to padel almost perfectly.",
      ], bullets: [
        'A shared motto. Define a short phrase every staff member can recite and use it in onboarding, daily huddles, and performance reviews.',
        "Staff empowerment. Give every front-desk team member authority to resolve a member's problem immediately, within a clearly defined scope.",
        'Magic moments. Train staff to anticipate needs—having a court and playing partner ready, remembering a birthday, or surprising a longtime member.',
        'Member preferences, tracked. Keep a simple record of skill level, playing partners, preferred time slot, and relevant preferences.',
        'Service recovery, same-shift. Resolve problems before the shift ends and follow up personally the next day.',
      ]},
      { heading: 'Why this is the whole business, not a soft skill', paragraphs: [
        'No member joins a padel club just to play padel. They join to feel part of something. PPS and genuine hospitality transform a court rental into belonging—and belonging, not court availability, is why a member renews year after year.',
        "What you can do tomorrow: Ask your front-desk team what your club's shared service motto is. If they can't answer instantly and identically, you don't have a culture yet—you have good intentions. Fix that this week, before you fix anything else.",
      ]},
    ],
    source: 'The PPS framework is taught inside PSA Coach Certification and the Padel Club Blueprint, and detailed further in Mastering the Art of Coaching Padel.',
  },
  {
    slug: 'when-to-open-your-second-padel-club',
    title: 'When to Open Your Second Padel Club (and When Not To)',
    category: 'Club Strategy & Operations',
    date: 'September 6, 2026',
    readTime: '6 min read',
    intro: [
      'A padel club that opens successfully is an asset. A padel club that scales intelligently is a business.',
      'The two are not the same achievement, and confusing them is the most common way a thriving single-location club becomes two struggling ones.',
      'The decision to open a second location should never be made on momentum alone—on the high of a packed opening year, a full waitlist, or a competitor announcing their own club down the road.',
      'It requires a specific set of conditions to be true, and the discipline to wait until they actually are.',
    ],
    sections: [
      { heading: 'The target window—and the six conditions', paragraphs: [
        'The window for evaluating a second location is 18–24 months after your first opens. Inside that window, expansion only makes sense if all of the following are true—not most of them:',
      ], bullets: [
        "Court utilization sustained above 85% for at least six consecutive months. A single great quarter isn't a trend. Six months tells you demand is structural, not seasonal.",
        "An active membership waitlist with documented demand. Not anecdotal interest—an actual list of people you've turned away.",
        "Operating margin consistently at or above 25%. If location one isn't producing real margin, location two won't magically fix that; it will double your exposure to whatever is suppressing it.",
        "A minimum of 12–18 months of operating expenses in capital reserve. A second location has its own ramp-up period and slow first year. You need runway that doesn't depend on location one bailing out location two.",
        "A General Manager and Head Coach who can run location one without founder-level daily involvement. If you still have to show up whenever something goes wrong, you have a job—not a business.",
        "Brand standards documented well enough for a new team in a new city to execute them. If service, programming, and pricing live in your head rather than on paper, they won't survive the handoff.",
      ]},
      { heading: 'Ambition is not a substitute for readiness', paragraphs: [
        'Expanding before these six conditions are met is, by a wide margin, the most common way a successful single-location club becomes two struggling ones.',
      ]},
      { heading: 'Building the second-location framework', paragraphs: [
        'Once the conditions are met, treat location two as a fresh evaluation, not a victory lap:',
      ], bullets: [
        "Market selection. Use the same demographic criteria you used for location one. Do not assume your first market's success transfers automatically—a market that looks similar on paper can behave differently in practice.",
        'A written brand standards document. Complete a manual covering design, service scripts, programming templates, pricing parameters, and coach certification requirements. This is what lets a new team replicate what made location one work.',
        'Shared services versus standalone decisions. Decide upfront which functions centralize—marketing, accounting, and purchasing—and which stay local, including the GM, coaching, and events.',
        'Target opening timeline: 6–12 months after the expansion decision is formally made, with permits, contractor, and court builder under contract before any public announcement.',
      ]},
      { heading: 'If franchising is on the table', paragraphs: [
        "Franchising is a different business model entirely. It is only viable once your operating model is documented well enough for an independently owned location to replicate the experience without you in the room.",
        "It requires an FTC-compliant Franchise Disclosure Document, which means engaging a franchise attorney early—not after you've started selling the idea. Typical royalty structures in the fitness and sports sector run 5–8% of gross revenue, plus a marketing fund contribution of 1–2%.",
      ]},
      { heading: 'What healthy growth should look like', paragraphs: [
        "Once you're scaling, three numbers tell you whether growth is healthy or just loud:",
      ], bullets: [
        'Membership growth: 10–15% net growth year over year, measured from the same date annually.',
        'Revenue per member: 5–8% growth annually as programming and ancillary revenue mature.',
        'New revenue verticals: at least one new stream added by year two—leagues, corporate partnerships, equipment rental, or branded merchandise.',
      ]},
      { heading: 'The takeaway', paragraphs: [
        "Scaling a padel club is a discipline problem before it's a capital problem. Clubs that expand successfully treat the six conditions as a real gate, not a formality on the way to a decision they already made emotionally.",
        "What you can do tomorrow: If you're considering a second location, score your current club honestly against the six conditions. If you can't check all six with real numbers—not gut feel—that's not a ‘no.’ It's a ‘not yet,’ and it tells you exactly what to build next.",
      ]},
    ],
    source: 'This framework is part of the Padel Club Blueprint and is detailed further in Mastering the Art of Coaching Padel.',
  },
  {
    slug: '52-shots-of-padel-complete-coaching-system',
    title: 'The 52 Shots of Padel: Why We Built a Complete Coaching System Instead of a Style Guide',
    category: 'Coaching & Player Development',
    date: 'September 6, 2026',
    readTime: '7 min read',
    academyUrl: 'https://www.padelsmashacademy.com/products/courses/padelcoachcertficiation',
    intro: [
      "Ask ten padel coaches to teach a beginner their first lesson, and you'll get ten different lessons. One starts with the forehand. One starts with the volley because ‘that's where points are won.’ One skips positioning entirely and just feeds balls until something looks right.",
      'All ten might be talented players. None of them are necessarily teaching the same game.',
      "That inconsistency is the problem Padel Smash Academy was built to solve. The 52 Shots of Padel is our complete coach reference guide—every recognized shot in the sport, organized by category, each with a technical description and the two highest-leverage coaching cues that move a player forward.",
      "But the real value isn't the list. It's the system underneath it that tells a coach what to teach first, why, and in what order—so that a lesson at one PSA-certified club looks like a lesson at any other.",
    ],
    sections: [
      { heading: 'Position before technique—always', paragraphs: [
        'Here is the principle every certified PSA coach learns before touching a single shot: a player should not first learn how to swing.',
        "A player must first understand where to stand, how to position when defending and attacking, how the court's panels are organized, how the ball rebounds off the glass, and how to move according to that rebound—before technical shot development begins.",
        "This runs against how most beginners are taught: hand them a racket and start feeding balls. It feels productive. It isn't.",
        'A player who learns to swing before reading the court memorizes isolated movements with no underlying logic connecting them. A player who learns positioning first learns a system—and every shot becomes an application of something they already understand.',
      ]},
      { heading: 'A language for reading the court', paragraphs: [
        "Padel's glass and mesh walls aren't a quirky obstacle—they're an information system, if a player knows how to read them. PSA teaches this through a numbered panel map: two side panels and three back panels per side, numbered symmetrically outward from the center.",
        'Once a player knows the panels, two rules govern almost all rebound movement:',
      ], bullets: [
        'The 3→1 Rule: the ball contacts Panel 3, and the player moves to Panel 1—a Closing movement.',
        'The 2→4 Rule: the ball contacts Panel 2, and the player moves to Panel 4—an Opening movement.',
      ]},
      { heading: 'Good positioning is predictive', paragraphs: [
        "Two rules replace dozens of memorized ball-flight scenarios. They also reframe the most common beginner error in padel: moving to where the ball is instead of where it will be after it hits the glass.",
        "Good positioning isn't reactive. It's predictive—and it's teachable once a coach has language for it.",
      ]},
      { heading: 'Every shot, the same three phases', paragraphs: [
        'The 52 shots look very different from one another. But every one breaks down into the same three mechanical phases, and naming them turns imitation into understanding:',
      ], bullets: [
        'Preparation generates power. This is where the racket comes back and the body loads—and where nearly every technical flaw originates, even when it appears later in the stroke.',
        'Contact Point generates direction. It is the most teachable and correctable moment in any stroke, and it must happen in front of the body regardless of where the ball arrives from.',
        "Follow-Through generates depth and height. A cut-off follow-through changes the ball's flight even when contact was clean.",
      ]},
      { heading: 'From mimicry to understanding', paragraphs: [
        'Teaching a coach to name these three phases out loud, on every shot from #1 to #52, is what separates coaching from mimicry.',
        "A player who can identify which phase broke down on a missed shot can self-correct. A player who was only told ‘watch me and copy’ cannot.",
      ]},
      { heading: 'Shot selection as tactical logic, not habit', paragraphs: [
        "The 52 shots aren't a random inventory—they map directly onto three court zones: Offense, Transition, and Defense.",
        'Volleys and aerials belong to the Offense zone; they exist to finish points from a position of control. Lobs, bajadas, and glass returns belong to the Defense zone; they exist to survive and reset.',
        "A player attempting an Offense-zone shot from the Defense zone isn't playing a bad version of the right shot. They're playing the wrong shot for their position entirely.",
        "This is a common intermediate-to-advanced plateau: technically capable players who haven't connected shot selection to court position, so they choose weapons that don't match the moment.",
      ]},
      { heading: 'The geometry behind the decisions', paragraphs: [
        "Cross-court is padel's foundational rally shot because the corner-to-corner diagonal is roughly 12% longer than the down-the-line distance, crosses the net closer to its lowest point, and gives both players more time to recover position.",
        'Down the line is a deliberate change-of-pace weapon once an opponent is pulled out of position—not a rally default. When a cue has that kind of math behind it, it stops being a matter of style and becomes worth teaching the same way, everywhere.',
      ]},
      { heading: 'The standard we hold coaches to', paragraphs: [
        'The guide closes with the Mastery Standard: mastery of all 52 shots defines a complete padel player—and a complete PSA coach.',
        'You cannot teach what you cannot demonstrate. Every coach earning PSA certification is expected to demonstrate, explain, and coach every shot on the list, not just those that fit their own playing style.',
        "That standard makes ‘100% PSA-Certified Coaching Staff’ a meaningful claim rather than a marketing line. You develop the player by giving them a real system, not a collection of tips.",
        "What you can do tomorrow: Start one lesson this week with five minutes on positioning and panel reading before feeding a single ball for technique. Watch whether the technical work goes faster once the player understands where they're supposed to stand.",
      ]},
    ],
    source: 'The 52 Shots of Padel and the full PSA 6-Step Session Framework are part of PSA Coach Certification.',
  },
  {
    slug: 'padel-smash-tv-one-million-subscribers',
    title: 'A Milestone & a Map: One Million Padel Smash TV Subscribers',
    category: 'Padel Industry & Leadership',
    author: 'Julian Wortelboer & Cesc Caceres',
    date: 'September 6, 2026',
    readTime: '5 min read',
    intro: [
      'Padel Smash TV just crossed one million subscribers on YouTube. The number is nice. Where the audience actually lives is the real story.',
      'Every one of those million people chose to spend time with a padel show we built out of Miami, in English and Spanish. Whether you have been with us since episode one or found us last week: thank you.',
      "When we started PSTV, there was no plan to become the world's leading padel podcast and YouTube channel. There was simply a sport we loved that did not yet have a media home, so we built one—racquet reviews, player interviews, club features and tournament coverage.",
    ],
    sections: [
      { heading: 'The map surprised us more than the number', paragraphs: [
        'Our top three countries for viewership are India, Indonesia and the United States. Close behind are the Middle East, Great Britain and the Scandinavian countries as a group.',
        "That is not a random list. It closely resembles a ranking of the fastest-growing padel markets on earth. India has grown from a few hundred players in 2022 to roughly 100,000 today. Indonesia's amateur player base has expanded dramatically, while the UAE has crossed 950 courts. The United States continues to grow at a healthy pace and still finished third on our own channel.",
      ]},
      { heading: 'Media arrives before infrastructure', paragraphs: [
        'In a new sport, people search for rules, technique and community before a court exists close to home. Someone in Mumbai or Jakarta may be learning how to serve long before there is a club within twenty minutes.',
        'We happened to be answering those questions, in languages people understood, at the moment millions were asking them for the first time. We did not engineer that outcome. We kept showing up, week after week and episode after episode.',
      ]},
      { heading: 'What this changes for Padel Smash TV', paragraphs: [
        'The audience map gives us a clearer responsibility for what comes next.',
      ], bullets: [
        'Create more translated and subtitled content for India and Indonesia.',
        'Feature the coaches and clubs building padel in emerging markets before those markets become obvious.',
        'Treat channel data as a growth signal, not merely a vanity metric.',
      ]},
      { heading: 'The signal to watch', paragraphs: [
        'Subscriber growth from India and Indonesia over the next two quarters may tell us where the sport itself is headed. If it continues compounding near the pace of court growth, PSTV’s audience outside the United States could soon outnumber its US audience.',
        'This channel exists because people keep showing up—Buenos Aires or Bangalore, Jakarta or Dubai, Miami or Manchester. Thank you for a million reasons. Here is to the next one.',
      ]},
    ],
    source: 'Originally written by Julian Wortelboer and Cesc Caceres for Padel Smash TV.',
  },
  {
    slug: 'americas-padel-diamond-in-the-rough',
    title: "America's Padel Diamond in the Rough",
    category: 'Padel Industry & Leadership',
    date: 'September 6, 2026',
    readTime: '5 min read',
    academyUrl: 'https://www.padelsmashacademy.com/products/courses/padelcoachcertficiation',
    intro: [
      'The US padel market has explosive potential—but there is a ceiling coming, and it is not the one most people are watching for.',
      'I have watched this growth from the ground floor. I helped build Ultra Padel Club into the largest padel club in the country, and today I am building Icon Padel Club here in Miami—the first-ever rooftop padel club in the United States, seven courts in the sky.',
      'I have been a player, a coach, and now an operator building something that did not exist yet in this country. So when I tell you where I think this is really headed, I am not guessing from a spreadsheet.',
      'The US is closing in on a million padel players, and that number is growing by the day. Numbers like that usually mean one thing to club owners and investors: keep building, keep opening doors, ride the wave. I do not think that is the real story anymore.',
    ],
    sections: [
      { heading: 'The ceiling nobody is talking about', paragraphs: [
        'We do not have enough qualified coaches in this country who actually know how to teach padel. Not enough who can take someone who has never held a racket and turn them into a player who comes back next week, and the week after that, and eventually brings three friends onto the court.',
        'This is not just a US problem. The same shortage is showing up in every emerging padel market on earth. Wherever courts are going up fast, qualified coaches are not increasing nearly as quickly behind them.',
        'Without good coaches, growth does not slow down gently. It stalls. A new player’s first lesson decides whether they come back at all. Get that experience wrong often enough, across enough clubs, and the sport hits a ceiling that has nothing to do with real estate or court count.',
        'We can build a million courts in this country. Without enough good coaches turning curious beginners into committed players, most of those courts will sit empty. Courts do not grow this sport. Coaches do.',
      ]},
      { heading: 'Build a real coaching pathway', paragraphs: [
        'That is exactly why, through Padel Smash Academy, we built a real coaching certification journey—not a weekend workshop, but a full pathway that takes someone with potential and, through our proven methodology, develops them into a genuinely great padel coach.',
        'The golden rule I want every club owner and manager to remember is this: not all great padel players are great coaches, and not all great coaches are great padel players.',
        'Do not hire—or judge—a potential coach by how well they play. Watch how they teach. Watch how they communicate. Watch whether they can explain the game in a way that turns a nervous beginner into someone who wants to come back.',
      ]},
      { heading: 'What I tell club owners and investors now', paragraphs: [
        'Treat the people who teach the sport as seriously as the courts on which it is played.',
      ], bullets: [
        'Hire on teaching ability, not playing ranking. Watch how a candidate teaches a total beginner, not how they hit a bandeja.',
        'Certify your coaching staff before you build your ninth court. A club running eight courts with two great coaches will outgrow a club running eight courts with none.',
        'Treat coach development as core infrastructure, not a line item. It is the actual growth engine of this sport in the US and everywhere else it is taking off.',
      ]},
      { heading: 'What you can do tomorrow', paragraphs: [
        'Sit in on one lesson from every coach on your staff this week, and watch how they communicate with a beginner—not how well they play.',
        'The US padel market is still a diamond in the rough, and that potential is real. But courts will not decide whether this sport keeps growing here or anywhere else. The deciding factor will be whether we have enough good coaches ready to meet all these new players at the door.',
        'Metric to watch: the percentage of new players who take a second lesson within 30 days of their first. That number lives or dies on coaching quality, not court count—and it is the real leading indicator of whether your club, and this sport, keeps growing.',
      ]},
    ],
    source: 'Part 1 of 3 — The Market. Written by Julian Wortelboer.',
  },
  {
    slug: 'courts-dont-make-padel-coaches',
    title: "Courts Don't Make Coaches",
    category: 'Padel Industry & Leadership',
    date: 'September 6, 2026',
    readTime: '4 min read',
    academyUrl: 'https://www.padelsmashacademy.com/products/courses/padelcoachcertficiation',
    intro: [
      'The sport does not have a court problem right now. It has a teaching problem, and it is about to become expensive to ignore.',
      'I have spent 25 years on courts—first as a player, then as one of the first Racquet Sports Directors in the country to earn a PSR 4-Star rating, and now as a certified Padel Master Coach. I have seen what happens when a sport grows faster than its teaching profession.',
      'Courts are being built faster than qualified coaches are being developed. We are creating more rooms than we have teachers prepared to fill them.',
    ],
    sections: [
      { heading: 'Enthusiasm is not certification', paragraphs: [
        'Former tennis professionals are often handed a padel racket and a class roster after minimal preparation. Well-meaning managers coach because nobody else is available. New players develop habits during the exact period when good foundations are easiest to establish.',
        'I created the P.A.D.E.L. Framework—Prepare, Analyze, Demonstrate, Execute and Lock In—because playing experience alone is not a teaching qualification. At Icon Padel Club, coaches complete Padel Smash Academy certification before running lessons. That is the floor, not the ceiling.',
      ]},
      { heading: 'Standards make growth durable', paragraphs: [
        'This is the argument I made as President of the Padel Coaches Association, and it is central to Mastering the Art of Coaching Padel: standards are not the enemy of growth. They are what make growth durable.',
      ]},
      { heading: 'What coaches should do now', paragraphs: [
        'The market still rewards availability, but professional expectations are rising quickly.',
      ], bullets: [
        'Get certified before you get busy.',
        'Learn how to teach, not only how to play.',
        'Specialize early: youth development, adult social players and competitive pathways require different skills.',
      ]},
      { heading: 'What clubs should measure', paragraphs: [
        'Audit the real qualifications of your coaching staff, not only their playing résumés. Then compare 90-day member retention for players taught by certified coaches with those who were not.',
        'The sport needs qualified teachers standing on its courts. Develop them, and the growth numbers become much more sustainable.',
      ]},
    ],
    source: 'Part 2 of 3 — The Profession. Adapted from Julian Wortelboer’s perspective on coaching standards and sustainable padel growth.',
  },
  {
    slug: 'padel-clubs-that-will-win',
    title: 'The Padel Clubs That Will Win',
    category: 'Padel Industry & Leadership',
    date: 'September 6, 2026',
    readTime: '4 min read',
    intro: [
      'What separates a padel club that becomes a community from one that is merely eight courts and a parking lot? After helping build Ultra Padel Club and now building Icon Padel Club in Miami, my answer is one word: leadership.',
      'Not marketing. Not amenities. Leadership.',
      'The strongest clubs make every member feel seen, remembered and cared for. A club that only develops players builds a court schedule. A club that empowers people builds a waitlist.',
    ],
    sections: [
      { heading: 'Build belonging deliberately', paragraphs: [
        'At Icon, we built exclusivity around coaching pedigree and experience rather than price: an invitation model, capped membership tiers, seven courts and Padel Smash Academy-certified coaches who know every member’s name before they know their forehand.',
        'That is slower than opening the doors and seeing who arrives. It is also the version of growth most likely to hold after the honeymoon period of a new sport ends.',
      ]},
      { heading: 'Three leadership habits for club operators', paragraphs: [
        'Community becomes operational when responsibility, measurement and training make it part of the daily work.',
      ], bullets: [
        'Put one person’s name on community. Matchmaking, onboarding and member connection need a clear owner.',
        'Measure belonging, not just bookings. A player connected to other members represents a retention story.',
        'Train staff on the philosophy, not only the point-of-sale system. Everyone should be able to explain what the club stands for.',
      ]},
      { heading: 'People, not courts', paragraphs: [
        'Ask your front-of-house and coaching teams to name your top ten members by first name. If they cannot, you may have a schedule, but you do not yet have a community.',
        'Watch the percentage of new members who arrive through an existing member’s referral. It is one of the clearest signals that community—not marketing spend—is doing the heavy lifting.',
        'Padel will continue growing. The question for owners is whether their clubs will still thrive when the growth curve normalizes. That comes down to people, not courts.',
      ]},
    ],
    source: 'Part 3 of 3 — The Clubs. Adapted from Julian Wortelboer’s leadership principles for building lasting padel communities.',
  },
];

export const articleBySlug = Object.fromEntries(articles.map((article) => [article.slug, article]));
