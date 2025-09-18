"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CircleDotDashed } from "@/app/_component/CircleDotDashed";
import { useAnimation } from "motion/react";

const blogPosts = [
  {
    title: " Reels & Reads: Books That Built the Silver Screen",
    date: "2025-07-30",
    desc: "A cluttered desk, a world of cinema — books that shaped, shadowed, and stood behind the magic of movies....",
    content: `The desk is no ordinary desk. It’s a stage. And on this stage lie volumes that hold the secrets of the silver screen — scriptwriting bibles, cinematic theory, memoirs of legends, behind-the-scenes truths, and timeless critiques.

Every book placed here carries the heartbeat of cinema. Some are weathered with age, their pages yellowing like old film reels, yet their stories still pulse with energy. Others are fresh, still crisp, waiting to inspire the next great storyteller. It's a silent collection, yet it screams with drama, passion, sacrifice, and stardust.

These books don't just talk about films. They build them. They are the blueprints of storytelling, capturing how a thought turns into a screenplay, how a camera angle adds emotion, how a dialogue can echo in a theater long after the lights dim.

To the casual eye, it's just a messy desk. But to the dreamer — it’s a creative war zone. Each book is a weapon, each page a lesson. It's where reels are born from reads. Where passion meets precision. Where celluloid dreams begin their journey in ink.

So next time you see a pile of film books, don’t underestimate them. They may just be holding the next great scene inside.`,

    image: "/blogimg/1.jpg",
    slug: "how-to-start-writing-your-thoughts",
  },
  {
    title: "The Soundtrack of Your Life",
    date: "2025-07-28",
    desc: "Headphones lying on an old diary, sunlight casting shadows....",
    content: `Have you ever listened to a song that instantly transported you back in time? Music isn’t just entertainment — it’s memory, mood, and identity.
This blog explores how we all carry personal soundtracks: songs that played during heartbreaks, tracks from road trips, playlists that got us through hard times. Music encodes emotion in ways words often can't. Neuroscience shows that music activates the hippocampus — the brain’s memory center — in powerful ways.
The post invites readers to reflect: What’s the song of your first love? What tune defines your current chapter? And what music will future you remember this moment by?
It’s not just about listening. It’s about living through sound. Curate your emotional landscape with care, because one day, these songs will tell your story better than any photo album ever could.`,
    image: "/blogimg/2.jpg",
    slug: "the-art-of-slow-living",
  },
  {
    title: "A Language Without Words: The Geometry of Feeling",
    date: "2025-07-20",
    desc: "Blocks of color, layered with emotion — abstract art that speaks to the soul without ever saying a word.",
    content: `At first glance, it’s just a painting — a composition of blocks, filled with vivid colors, shapes, and texture. But linger a little longer, and you'll find yourself being pulled into a world where there are no rules, no explanations… just pure, raw emotion.

Abstract art doesn’t demand understanding. It invites reflection. Each color holds a mood. Each edge, a decision. Some blocks are sharp and deliberate, others soft and uncertain — just like us. It’s not about what the painting shows; it’s about what it feels like.

This colorful grid of blocks is a conversation without language — a geometry of feeling. It lets your thoughts run free, making space for interpretation. Maybe the yellow represents joy, or maybe it’s a cover for something deeper. Maybe the overlapping blues feel like calm… or confusion. That’s the magic: everyone sees something different.

And in that ambiguity, we find freedom. We’re reminded that life doesn’t always have a clear message. Sometimes, we just need to stand still, stare at the chaos of color, and breathe it all in — without trying to make sense of it.`,
    image: "/blogimg/3.jpg",
    slug: "minimalism-in-everyday-life",
  },
  {
    title: "The Quiet Charm of Bookshelves",
    date: "2025-07-19",
    desc: "A single shelf packed with stories—each spine holding a world waiting to be opened.",
    content: `There’s something profoundly comforting about a bookshelf—especially one that’s overflowing, chaotic yet complete, like a personal library shaped by time. The kind that isn’t arranged by color or category, but by memory. Each title has been picked, read, borrowed, or rediscovered. Some books are dog-eared and worn; others are untouched, waiting patiently for the right moment. Together, they hum a quiet story of curiosity, knowledge, and comfort.

Bookshelves aren’t just furniture—they are personal archives, holding not just paper and ink, but pieces of our identity. One glance at the shelf and you see who we were, who we are becoming, and what we once dreamed of.

There is beauty in this quiet chaos—a messy stack of poetry, a tucked-away novel from childhood, a philosophy book bought but never read. And in every corner of that shelf lies the potential for discovery—because sometimes, you don’t need a grand library; just a humble shelf of good books is enough to feel full.`,
    image: "/blogimg/4.jpg",
    slug: "writing-at-night",
  },
  {
    title: "Geometry of Silence: When Light Becomes the Architect",
    date: "2025-07-18",
    desc: "A corridor of columns and shadows becomes a poem of angles — where silence and design speak the same language.",
    content: `This is not just architecture — it’s meditation made tangible. The light slices through the corridor, making every shadow a stroke of deliberate contrast. Each pillar, each angle, is placed not just for structure — but for story.

Spaces like this aren’t made overnight. They’re imagined in silence and built with intention. Here, minimalism doesn’t mean emptiness. It means clarity. The interplay of dark and light becomes a spiritual geometry.

The image holds mystery: where does this path lead? What lies at the vanishing point? It doesn’t matter. What matters is the experience of standing there — of seeing the way light moves like breath, the way space invites stillness.

Good architecture doesn’t just impress. It makes you feel. Think. Pause.

Maybe we all need to design more silence into our lives — more moments where light can move through us, unobstructed.`,
    image: "/blogimg/5.jpg",
    slug: "write-every-morning",
  },
  {
    title: "Salt, Sand & Soul: The Art of Walking Without a Destination",
    date: "2025-07-17",
    desc: "At the edge of land and sea, a silhouette walks with a dog—neither in a hurry, nor lost. Just present.",
    content: `There’s magic in coastal moments. Where the land ends and the ocean begins, something in us exhales. This image — of a quiet walk at sunset with a loyal dog — speaks of that rare rhythm where time softens and presence deepens.

No phone in hand. No shoes. Just footsteps syncing with waves and the soft laughter of a dog discovering seaweed treasures. Here, walking isn’t a way to get somewhere — it’s an end in itself.

We often forget how healing movement can be when we remove the pressure of progress. To walk without a destination is to remember we are not just minds — we are bodies. Moving, breathing, sensing.

This sunset scene isn’t just beautiful — it’s an invitation. To walk slowly. To let nature recalibrate your senses. To let companionship — human or canine — anchor you.

Next time you feel scattered, don’t seek answers. Seek the shore.`,
    image: "/blogimg/6.jpg",
    slug: "build-writing-habit",
  },
  {
    title: "Chapters of Stillness: Finding Yourself Between Pages",
    date: "2025-07-16",
    desc: "In the hush of a sunlit afternoon, a woman reads — not just a book, but her own becoming.",
    content: `
There’s a quiet revolution in reading. Away from notifications and the world’s noise, a girl sits by the window — light caressing her thoughts as she turns each page. Books aren’t just words; they’re mirrors, mentors, and maps. In solitude, she’s discovering multitudes.

What do we really seek when we read? It’s not just knowledge. It’s permission. Permission to feel, to question, to reimagine the world and our place in it. The woman in the frame isn’t escaping — she’s arriving.

Every page she turns is a step inward. Maybe it’s fiction. Maybe a manifesto. Maybe healing. But more than what she reads is how she reads — with stillness, with presence, with reverence for her own unfolding.

In a world constantly rushing us forward, this image reminds us to pause. To read. To rest. To re-root.`,
    image: "/blogimg/7.jpg",
    slug: "digital-detox-journaling",
  },
  {
    title: "Stories in the Stacks: The Soul of Handmade Ceramics",
    date: "2025-07-15",
    desc: "A tower of imperfectly perfect plates—glazed with memory, chipped with love, and fired with patience.",
    content: `There’s something profoundly human about ceramics. In every hand-thrown bowl or unevenly glazed plate lies a story of intention. This stack of earthenware tells not just of meals shared, but of hands that shaped, glazes that cracked, and fires that forged their unique character.

Unlike factory perfection, these plates celebrate flaws. A missed line in the pattern, a blotch of extra color — these become marks of authenticity. Each piece is singular. No replicas. No symmetry. Just art meeting utility.

Ceramics like these don’t belong behind glass — they belong in our hands, on our tables, becoming vessels of nourishment and nostalgia. They are heirlooms in the making.

In an age of digital speed, holding something that has taken time to exist — that passed through clay, water, fire, and patience — is revolutionary. So next time you sip from a slightly wobbly mug or serve on a plate with a faded edge, remember: it wasn’t made by a machine. It was made by someone like you.`,
    image: "/blogimg/8.jpg",
    slug: "capturing-emotions-in-words",
  },
  {
    title: "Neon Highways: Where Data Travels at Light Speed",
    date: "2025-07-14",
    desc: "Futuristic light trails hint at an invisible world — where bits, bytes, and bandwidth move faster than thought. Welcome to the dataverse.",
    content: `In a world driven by information, speed isn’t a luxury — it’s the foundation. This stunning image, full of pulsating neon trails and streaming lights, visualizes the digital backbone of our connected lives. It’s not just art — it’s the unseen universe of data highways that keep our modern world alive.

Imagine trillions of digital signals racing across oceans, satellites, and fiber-optic cables. What we see here is an artistic abstraction of what happens in milliseconds — financial transactions, health reports, WhatsApp messages, satellite telemetry, AI computations — all surging silently behind our screens.

The rising streaks of blue and pink resemble data towers, or perhaps even stock market graphs, symbolizing the peaks and valleys of human activity online. Every spike is a moment: a search, a stream, a voice call, a heartbeat monitored remotely.

But beneath this beauty lies complexity. Questions about data privacy, digital inequality, energy use, and internet freedom linger in the shadows of the glow. As we marvel at the brilliance, we must also acknowledge the cost of constant connectivity.

This image reminds us — the digital world isn’t just code and servers. It’s a living rhythm. And in this rhythm, we are all both signals and receivers.`,
    image: "/blogimg/9.jpg",
    slug: "writing-for-self-discovery",
  },
  {
    title: "The Transparent Mind: Exploring the Ethics of Artificial Intelligence",
    date: "2025-07-13",
    desc: "A translucent human head etched with circuitry raises questions — not just about how AI thinks, but how we choose to let it evolve.",
    content: `Artificial Intelligence is no longer a future fantasy — it’s a present force. The image of a transparent human head, embedded with silicon circuits, becomes a metaphor too deep to ignore. It’s not just a sculpture — it’s a mirror to our collective curiosity and fear.

What does it mean when machines begin to mimic not just tasks, but thought? This crystalline form reflects more than just aesthetics — it symbolizes the ethical transparency that the world demands from modern AI systems. As lines blur between human cognition and machine logic, we are not just building technology; we are crafting entities that can predict, decide, and even learn from us.

But with this creation comes responsibility. Transparency, as shown in the visual, must extend beyond hardware. It must reach our intentions, algorithms, and impacts. Who controls the AI? Who trains it? Who gets affected when it fails — or succeeds beyond measure?

This art isn’t just futuristic. It’s philosophical. In a world where data is currency and algorithms influence behavior, maybe it’s time we stop asking how smart AI can get — and start asking how wise we are in designing it.`,
    image: "/blogimg/10.jpg",
    slug: "letters-you-never-send",
  },
  {
    title: "Colors of Soul: When Art Dances with Culture",
    date: "2025-07-12",
    desc: "A vivid abstract mural capturing the rhythm of life — from dance and devotion to music and meditation, all flowing together in a kaleidoscope of emotion.",
    content: `Some paintings don’t ask for attention — they command it. This mural is one of those. With colors exploding across the canvas like the echo of a sitar string or the swirl of a dancer’s ghungroo, this artwork isn’t just a feast for the eyes, it’s a story for the spirit.

At first glance, it may seem chaotic — but look closer. Each element carries the pulse of tradition blended with the brush of abstraction. A woman in blue, poised mid-dance, stands as the central figure — perhaps representing Shakti, or simply the spirit of expression. Her posture is fluid, yet deliberate — as if dancing not just on a stage, but on the very timeline of Indian culture.

To the left, a musician strums a vibrant guitar, painted in fragmented strokes that still sing unity. It’s a nod to the blend of Indian and Western musical influences, echoing through generations. Below, another female figure appears meditative, her tilak-marked forehead and closed eyes rooted in devotion, while the lotus beside her whispers spirituality and rebirth.

What ties this mural together is its celebration of human expression — in movement, in melody, and in stillness. The geometry, the color palette, and the layering techniques turn each shape into a symbol — of joy, faith, community, and chaos that somehow forms harmony.

This isn’t just a wall painting. It’s a living, breathing emotion painted in hues of yellow ochre, sapphire blue, crimson red, and forest green. It doesn’t belong to any one culture, yet it belongs to all who feel deeply. It asks nothing — yet leaves you thinking long after you’ve walked away.

Art like this isn’t just made. It’s felt. It reminds us that no matter how fragmented the world gets, beauty is born when everything dares to exist together — just like this mural.`,
    image: "/blogimg/11.jpg",
    slug: "silence-between-lines",
  },
  {
    title: "Echoes of Stone: The Silent Salute to Forgotten Heroes",
    date: "2025-07-11",
    desc: "A timeless war memorial standing proud by the sea — sculpted in stone and silence, it honors soldiers whose names may be forgotten, but whose sacrifice lives on in every wave and breeze.",
    content: `Nestled at the edge of the sea, this monumental arch doesn’t just face the ocean — it speaks to it. It tells stories of men who crossed continents not for conquest, but for courage. The inscription, “Aux Héros de l'Armée d'Orient et des Terres Lointaines,” translates to “To the Heroes of the Army of the Orient and of Distant Lands.” And that’s exactly what this place represents — a tribute to those who journeyed far from home, only to find eternity on foreign soil.

Three figures hold their place in silence: two stone soldiers guarding the passage of history, and a bronze woman lifting her arms to the sky — perhaps in prayer, perhaps in grief, or maybe both. She doesn’t speak, but her posture says everything. She could be a mother, a sister, or the soul of a nation — holding space for all who were lost.

What makes this monument powerful is not just its design, but its location — set against the infinite blue of the sea, where the sky kisses the horizon. It makes you wonder: how many last letters, whispered prayers, and final heartbeats were offered under this very sky?

Memorials like this aren’t built for decoration. They’re built for remembrance. For reflection. For pausing a busy life and whispering a silent “thank you” to those who gave up everything so we could have something.

So next time you pass such a structure, don’t just look. Listen. These stones speak — not in words, but in weight. Not in sound, but in silence. And sometimes, that’s the loudest message of all.`,
    image: "/blogimg/12.jpg",
    slug: "writing-for-clarity",
  },
];

export default function BlogPage() {
  const controls = useAnimation();
  const [selectedPost, setSelectedPost] = useState(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [selectedPost]);

  return (
    <main className="bg-[#fafafa] min-h-screen py-12 px-4 ">
      <section>
        <h2
          onMouseEnter={() => controls.start("animate")}
          onMouseLeave={() => controls.start("normal")}
          className="text-2xl text-black font-bold mb-8 text-center flex justify-center items-center gap-3"
        >
          <CircleDotDashed controls={controls} stroke="#4f46e5" />
          Latest Blog Posts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {blogPosts.map((post, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between h-full hover:-translate-y-2 transition-transform"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
              )}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-1">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-1">{post.date}</p>
                <p className="text-sm text-gray-700 line-clamp-3">{post.desc}</p>
              </div>
              <button
                className="text-sm text-blue-600 hover:underline font-medium mt-4 text-left"
                onClick={() => setSelectedPost(post)}
              >
                Read More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for selected blog */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-lg relative p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
              onClick={() => setSelectedPost(null)}
            >
              &times;
            </button>
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {selectedPost.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">{selectedPost.date}</p>
            <p className="text-gray-800 leading-relaxed whitespace-pre-line">
              {selectedPost.content}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}