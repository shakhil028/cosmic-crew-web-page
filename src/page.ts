export const html = String.raw`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>COSMIC CREW DEVELOPMENT — We Build Worlds</title>
<meta name="description" content="Cosmic Crew Development is an indie game studio forging handcrafted worlds, playful systems and unforgettable interactive experiences." />
<meta name="theme-color" content="#05030b" />
<link rel="icon" href="/static/cosmic-crew-logo.png" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=Archivo+Black&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="/static/style.css" />
<noscript><style>.reveal{opacity:1 !important;transform:none !important}</style></noscript>
</head>
<body>

<!-- ambient layers -->
<canvas id="starfield" aria-hidden="true"></canvas>
<div class="nebula nebula-1" aria-hidden="true"></div>
<div class="nebula nebula-2" aria-hidden="true"></div>
<div class="nebula nebula-3" aria-hidden="true"></div>
<div class="grid-veil" aria-hidden="true"></div>
<div class="grain" aria-hidden="true"></div>
<div class="cursor-glow" id="cursorGlow" aria-hidden="true"></div>
<div class="scroll-progress" aria-hidden="true"><span id="scrollBar"></span></div>

<a class="skip" href="#main">Skip to content</a>

<header class="nav" id="nav">
  <a class="brand" href="#top" aria-label="Cosmic Crew Development home">
    <span class="brand-badge">
      <img src="/static/cosmic-crew-logo.png" alt="Cosmic Crew astronaut logo" width="44" height="44" />
      <span class="brand-ring"></span>
    </span>
    <span class="brand-text">COSMIC CREW<em>D E V E L O P M E N T</em></span>
  </a>

  <nav class="nav-links" aria-label="Primary">
    <a href="#about">Mission</a>
    <a href="#services">Services</a>
    <a href="#work">Work</a>
    <a href="#process">Process</a>
  </nav>

  <a href="#join" class="btn btn-primary btn-sm nav-cta" data-magnetic>
    <span>Join the crew</span>
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M12 5l7 7-7 7" /></svg>
  </a>

  <button class="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu">
    <span></span><span></span><span></span>
  </button>
</header>

<div class="mobile-menu" id="mobileMenu" aria-hidden="true">
  <a href="#about">Mission</a>
  <a href="#services">Services</a>
  <a href="#work">Work</a>
  <a href="#process">Process</a>
  <a href="#join" class="mm-cta">Join the crew</a>
</div>

<main id="main">

  <!-- ══════════════ HERO ══════════════ -->
  <section class="hero" id="top">
    <div class="hero-inner">
      <div class="hero-badge reveal" data-delay="0">
        <span class="pulse-dot"></span>
        <span>Flight 04 boarding — open studio positions</span>
      </div>

      <div class="hero-mark reveal" data-delay="1">
        <div class="logo-stage" id="logoStage">
          <div class="halo"></div>
          <div class="orbit orbit-a"><span class="orb"></span></div>
          <div class="orbit orbit-b"><span class="orb"></span></div>
          <div class="orbit orbit-c"><span class="orb"></span></div>
          <img class="hero-logo" src="/static/cosmic-crew-logo.png" alt="Cosmic Crew Development logo" width="360" height="360" />
        </div>
      </div>

      <h1 class="hero-title">
        <span class="line"><span class="reveal" data-delay="2">WE BUILD</span></span>
        <span class="line"><span class="reveal grad-shift" data-delay="3">WORLDS</span></span>
      </h1>

      <p class="hero-sub reveal" data-delay="4">
        An independent game studio launching handcrafted universes — where tight mechanics,
        cinematic art and absurd amounts of love for play collide.
      </p>

      <div class="hero-cta reveal" data-delay="5">
        <a href="#join" class="btn btn-primary" data-magnetic>
          <span>Start a mission</span>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M12 5l7 7-7 7" /></svg>
        </a>
        <a href="#work" class="btn btn-ghost" data-magnetic>
          <span>Explore our work</span>
        </a>
      </div>

      <ul class="hero-stats reveal" data-delay="6">
        <li><strong data-count="12">0</strong><span>games shipped</span></li>
        <li><strong data-count="48">0</strong><span>crew members</span></li>
        <li><strong data-count="9">0</strong><span>countries</span></li>
        <li><strong data-count="31">0</strong><span>awards &amp; nods</span></li>
      </ul>
    </div>

    <div class="scroll-hint" aria-hidden="true">
      <span class="scroll-line"></span>
      <span class="scroll-txt">scroll to launch</span>
    </div>
  </section>

  <!-- ══════════════ MARQUEE ══════════════ -->
  <div class="marquee" aria-hidden="true">
    <div class="marquee-track">
      <span>UNITY</span><i>✦</i><span>UNREAL ENGINE</span><i>✦</i><span>GODOT</span><i>✦</i><span>THREE.JS</span><i>✦</i>
      <span>WEBGL</span><i>✦</i><span>BLENDER</span><i>✦</i><span>HLSL</span><i>✦</i><span>PHOTON</span><i>✦</i>
      <span>UNITY</span><i>✦</i><span>UNREAL ENGINE</span><i>✦</i><span>GODOT</span><i>✦</i><span>THREE.JS</span><i>✦</i>
      <span>WEBGL</span><i>✦</i><span>BLENDER</span><i>✦</i><span>HLSL</span><i>✦</i><span>PHOTON</span><i>✦</i>
    </div>
  </div>

  <!-- ══════════════ ABOUT ══════════════ -->
  <section class="section about" id="about">
    <div class="wrap about-grid">
      <div class="about-copy">
        <p class="eyebrow reveal"><span class="tick"></span> THE MISSION</p>
        <h2 class="section-title reveal" data-delay="1">
          Small crew.<br /><span class="grad-text">Infinite orbits.</span>
        </h2>
        <p class="lede reveal" data-delay="2">
          We are twelve people, four time zones and one shared obsession: making games that feel
          like discovering a secret. No endless meeting rooms. No committee-approved ideas.
          Just sharp prototypes, loud playtests and shipping.
        </p>
        <p class="lede muted reveal" data-delay="3">
          From a two-week game jam in a kitchen to award-winning titles played by millions —
          Cosmic Crew Development still operates the same way: build fast, ship honestly,
          keep the wonder.
        </p>
        <div class="about-tags reveal" data-delay="4">
          <span>Indie spirit</span><span>AAA craft</span><span>Remote-first</span><span>Player-owned</span>
        </div>
      </div>

      <div class="about-visual reveal" data-delay="2">
        <div class="holo-card" data-tilt>
          <div class="holo-corner tl"></div><div class="holo-corner tr"></div>
          <div class="holo-corner bl"></div><div class="holo-corner br"></div>
          <div class="holo-head">
            <span class="holo-label">CREW MANIFEST</span>
            <span class="holo-live"><i></i>LIVE</span>
          </div>
          <div class="holo-rows">
            <div class="holo-row"><span>Studio</span><strong>Cosmic Crew</strong></div>
            <div class="holo-row"><span>Founded</span><strong>2017</strong></div>
            <div class="holo-row"><span>Engine</span><strong>Unity / Unreal</strong></div>
            <div class="holo-row"><span>Focus</span><strong>Action · Roguelike</strong></div>
            <div class="holo-row"><span>Status</span><strong class="ok">Building</strong></div>
          </div>
          <div class="holo-bars">
            <div class="hbar"><span>Play feel</span><i style="--w:96%"></i></div>
            <div class="hbar"><span>Art direction</span><i style="--w:92%"></i></div>
            <div class="hbar"><span>Performance</span><i style="--w:88%"></i></div>
          </div>
          <div class="holo-scan"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ══════════════ SERVICES ══════════════ -->
  <section class="section services" id="services">
    <div class="wrap">
      <header class="section-head">
        <p class="eyebrow reveal"><span class="tick"></span> CAPABILITIES</p>
        <h2 class="section-title reveal" data-delay="1">What we <span class="grad-text">build</span></h2>
        <p class="section-sub reveal" data-delay="2">
          Full-stack game development — from a one-page pitch to a live title with seasons,
          storefronts and a community that sticks.
        </p>
      </header>

      <div class="cards">
        <article class="card reveal" data-tilt data-delay="0">
          <div class="card-glow"></div>
          <div class="card-ico">
            <svg viewBox="0 0 24 24"><path d="M7 8h10a5 5 0 0 1 5 5v3a3 3 0 0 1-5.4 1.8L15 15H9l-1.6 2.8A3 3 0 0 1 2 16v-3a5 5 0 0 1 5-5Z"/><path d="M8 11v3M6.5 12.5h3M15.5 11.5h.01M17.5 13.5h.01"/></svg>
          </div>
          <h3>Game Development</h3>
          <p>Gameplay systems, combat feel, progression loops and netcode that survives real players.</p>
          <ul class="card-list"><li>Unity &amp; Unreal</li><li>Gameplay programming</li><li>Multiplayer</li></ul>
          <span class="card-index">01</span>
        </article>

        <article class="card reveal" data-tilt data-delay="1">
          <div class="card-glow"></div>
          <div class="card-ico">
            <svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 9 9c0-1.6-1.3-2.6-2.7-2.2l-2 .6a2 2 0 0 1-2.5-1.4l-.5-1.8A2 2 0 0 0 11.4 6Z"/><circle cx="8" cy="10" r="1"/><circle cx="11" cy="7.5" r="1"/></svg>
          </div>
          <h3>Art &amp; VFX</h3>
          <p>Stylized modelling, hand-keyed animation and shader-driven effects with a signature look.</p>
          <ul class="card-list"><li>3D / 2D art</li><li>Shader work</li><li>Cinematics</li></ul>
          <span class="card-index">02</span>
        </article>

        <article class="card reveal" data-tilt data-delay="2">
          <div class="card-glow"></div>
          <div class="card-ico">
            <svg viewBox="0 0 24 24"><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9Z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/></svg>
          </div>
          <h3>Web &amp; Metaverse</h3>
          <p>Playable browser worlds, WebGL portals and real-time 3D that runs on a phone.</p>
          <ul class="card-list"><li>Three.js / WebGL</li><li>Playable ads</li><li>Landing worlds</li></ul>
          <span class="card-index">03</span>
        </article>

        <article class="card reveal" data-tilt data-delay="0">
          <div class="card-glow"></div>
          <div class="card-ico">
            <svg viewBox="0 0 24 24"><path d="M4 5h16v11H4z"/><path d="M8 21h8M12 16v5"/><path d="m9 9-2 2 2 2M15 9l2 2-2 2"/></svg>
          </div>
          <h3>Tools &amp; Backend</h3>
          <p>Live-ops dashboards, economy services, telemetry and editor tools your team actually enjoys.</p>
          <ul class="card-list"><li>Live-ops</li><li>Telemetry</li><li>Editor tooling</li></ul>
          <span class="card-index">04</span>
        </article>

        <article class="card reveal" data-tilt data-delay="1">
          <div class="card-glow"></div>
          <div class="card-ico">
            <svg viewBox="0 0 24 24"><path d="M12 3v4M3 12h4M17 12h4M12 17v4"/><circle cx="12" cy="12" r="4"/></svg>
          </div>
          <h3>Publishing &amp; Launch</h3>
          <p>Store pages, trailers, age ratings, platform certification and a launch plan that lands.</p>
          <ul class="card-list"><li>Steam / consoles</li><li>Trailer cut</li><li>Certification</li></ul>
          <span class="card-index">05</span>
        </article>

        <article class="card reveal" data-tilt data-delay="2">
          <div class="card-glow"></div>
          <div class="card-ico">
            <svg viewBox="0 0 24 24"><path d="M20 12a8 8 0 1 1-2.3-5.6"/><path d="M20 4v4.5h-4.5"/><path d="M8 12h8M12 8v8"/></svg>
          </div>
          <h3>Prototyping Sprints</h3>
          <p>Two weeks, one playable build. Find out if the idea is magic before you fund the year.</p>
          <ul class="card-list"><li>2-week sprint</li><li>Playtest report</li><li>Go / no-go</li></ul>
          <span class="card-index">06</span>
        </article>
      </div>
    </div>
  </section>

  <!-- ══════════════ WORK ══════════════ -->
  <section class="section work" id="work">
    <div class="wrap">
      <header class="section-head">
        <p class="eyebrow reveal"><span class="tick"></span> SELECTED WORKS</p>
        <h2 class="section-title reveal" data-delay="1">Worlds we <span class="grad-text">launched</span></h2>
        <p class="section-sub reveal" data-delay="2">
          A few flights from the logbook. Every one started as a whiteboard doodle and a
          questionable amount of coffee.
        </p>
      </header>

      <div class="work-list">
        <article class="work-item reveal" data-tilt>
          <div class="work-art art-1" aria-hidden="true">
            <span class="art-orb"></span><span class="art-ring"></span><span class="art-ring r2"></span>
            <span class="art-dot d1"></span><span class="art-dot d2"></span><span class="art-dot d3"></span>
          </div>
          <div class="work-body">
            <div class="work-meta"><span class="pill">Action Roguelike</span><span class="pill ghost">PC · Console</span></div>
            <h3>ORBITAL DRIFT</h3>
            <p>Gravity-slinging combat across collapsing space stations. 96% positive on Steam, 2.4M runs played.</p>
            <div class="work-foot"><span class="stat"><b>2.4M</b> runs</span><span class="stat"><b>96%</b> positive</span><span class="arrow-link">Case study <svg viewBox="0 0 24 24"><path d="M5 12h13M12 5l7 7-7 7"/></svg></span></div>
          </div>
        </article>

        <article class="work-item reveal" data-tilt>
          <div class="work-art art-2" aria-hidden="true">
            <span class="art-grid"></span><span class="art-sun"></span>
            <span class="art-peak p1"></span><span class="art-peak p2"></span><span class="art-peak p3"></span>
          </div>
          <div class="work-body">
            <div class="work-meta"><span class="pill">Co-op Adventure</span><span class="pill ghost">PC · Switch</span></div>
            <h3>NEON HORIZON</h3>
            <p>Two-player synthwave road trip through a dying neon city. Winner — Best Art, Indie Arena 2024.</p>
            <div class="work-foot"><span class="stat"><b>#1</b> indie chart</span><span class="stat"><b>4</b> awards</span><span class="arrow-link">Case study <svg viewBox="0 0 24 24"><path d="M5 12h13M12 5l7 7-7 7"/></svg></span></div>
          </div>
        </article>

        <article class="work-item reveal" data-tilt>
          <div class="work-art art-3" aria-hidden="true">
            <span class="art-core"></span><span class="art-spike s1"></span><span class="art-spike s2"></span>
            <span class="art-spike s3"></span><span class="art-spike s4"></span><span class="art-spike s5"></span>
            <span class="art-spike s6"></span>
          </div>
          <div class="work-body">
            <div class="work-meta"><span class="pill">Browser World</span><span class="pill ghost">WebGL</span></div>
            <h3>STARDUST ARCADE</h3>
            <p>A 60-second playable landing world built in Three.js. 1.8M sessions, 41s average session time.</p>
            <div class="work-foot"><span class="stat"><b>1.8M</b> sessions</span><span class="stat"><b>41s</b> avg. hold</span><span class="arrow-link">Case study <svg viewBox="0 0 24 24"><path d="M5 12h13M12 5l7 7-7 7"/></svg></span></div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- ══════════════ PROCESS ══════════════ -->
  <section class="section process" id="process">
    <div class="wrap">
      <header class="section-head center">
        <p class="eyebrow reveal"><span class="tick"></span> FLIGHT PLAN</p>
        <h2 class="section-title reveal" data-delay="1">From spark to <span class="grad-text">shipped</span></h2>
      </header>

      <ol class="timeline">
        <li class="tl-item reveal" data-delay="0">
          <span class="tl-node"><i>01</i></span>
          <div class="tl-card">
            <h3>Signal</h3>
            <p>We dig into the idea, the audience and the risk. One week, one sharp brief, zero fluff.</p>
          </div>
        </li>
        <li class="tl-item reveal" data-delay="1">
          <span class="tl-node"><i>02</i></span>
          <div class="tl-card">
            <h3>Prototype</h3>
            <p>A throwaway build that proves the core loop is fun before a single final asset exists.</p>
          </div>
        </li>
        <li class="tl-item reveal" data-delay="2">
          <span class="tl-node"><i>03</i></span>
          <div class="tl-card">
            <h3>Vertical Slice</h3>
            <p>One polished level at final quality — art, audio, UI and feel locked together.</p>
          </div>
        </li>
        <li class="tl-item reveal" data-delay="3">
          <span class="tl-node"><i>04</i></span>
          <div class="tl-card">
            <h3>Production</h3>
            <p>Two-week sprints, weekly playable builds, public playtests every four weeks.</p>
          </div>
        </li>
        <li class="tl-item reveal" data-delay="4">
          <span class="tl-node"><i>05</i></span>
          <div class="tl-card">
            <h3>Launch</h3>
            <p>Certification, store pages, trailer and a live-ops calendar that keeps players orbiting.</p>
          </div>
        </li>
      </ol>
    </div>
  </section>

  <!-- ══════════════ QUOTE ══════════════ -->
  <section class="section quote-section">
    <div class="wrap">
      <blockquote class="quote reveal">
        <svg class="qmark" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2M20 7h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2"/></svg>
        <p>They shipped a playable build in eleven days that our whole studio couldn't stop playing. That has never happened before.</p>
        <footer><strong>Mara Voss</strong><span>Creative Director, Halcyon Interactive</span></footer>
      </blockquote>
    </div>
  </section>

  <!-- ══════════════ JOIN ══════════════ -->
  <section class="section join" id="join">
    <div class="wrap join-grid">
      <div class="join-copy">
        <p class="eyebrow reveal"><span class="tick"></span> BOARDING NOW</p>
        <h2 class="section-title reveal" data-delay="1">Join the <span class="grad-text">crew</span></h2>
        <p class="lede reveal" data-delay="2">
          Open seats for developers, artists and designers who'd rather ship something strange
          than polish something safe. Tell us what you want to build.
        </p>
        <ul class="join-list reveal" data-delay="3">
          <li><span class="jdot"></span><b>Gameplay Engineer</b> — Unity / C#, remote EU</li>
          <li><span class="jdot"></span><b>Technical Artist</b> — shaders, VFX, pipelines</li>
          <li><span class="jdot"></span><b>3D Environment Artist</b> — stylized, hand-painted</li>
          <li><span class="jdot"></span><b>Narrative Designer</b> — systems + story</li>
        </ul>
        <div class="join-note reveal" data-delay="4">
          <span class="dot-live"></span> Replies within 5 working days — from a human, not a filter.
        </div>
      </div>

      <form class="join-form reveal" data-delay="2" id="crewForm" novalidate>
        <div class="form-head">
          <h3>Transmit your signal</h3>
          <p>No cover letter essays. Six fields, one honest answer.</p>
        </div>

        <div class="field">
          <label for="name">Your name</label>
          <input id="name" name="name" type="text" placeholder="Ada Lovelace" required autocomplete="name" />
        </div>

        <div class="field">
          <label for="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@studio.com" required autocomplete="email" />
        </div>

        <div class="field-row">
          <div class="field">
            <label for="role">Role</label>
            <select id="role" name="role" required>
              <option value="">Choose…</option>
              <option>Gameplay Engineer</option>
              <option>Technical Artist</option>
              <option>3D Environment Artist</option>
              <option>Narrative Designer</option>
              <option>Something else entirely</option>
            </select>
          </div>
          <div class="field">
            <label for="link">Portfolio / GitHub</label>
            <input id="link" name="link" type="url" placeholder="https://" />
          </div>
        </div>

        <div class="field">
          <label for="message">What do you want to build?</label>
          <textarea id="message" name="message" rows="4" placeholder="One game idea you can't shake…" required></textarea>
        </div>

        <button type="submit" class="btn btn-primary btn-full" id="submitBtn" data-magnetic>
          <span class="btn-label">Send transmission</span>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15M12 5l7 7-7 7"/></svg>
          <span class="spinner" aria-hidden="true"></span>
        </button>

        <p class="form-status" id="formStatus" role="status" aria-live="polite"></p>
      </form>
    </div>
  </section>

  <!-- ══════════════ CTA BAND ══════════════ -->
  <section class="cta-band">
    <div class="cta-inner reveal">
      <h2>Got a universe in your head?</h2>
      <p>Let's put it on a screen. First call is free, and we'll tell you honestly if it's a good fit.</p>
      <a href="mailto:hello@cosmiccrew.dev" class="btn btn-primary btn-lg" data-magnetic>
        <span>hello@cosmiccrew.dev</span>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
      </a>
    </div>
  </section>

</main>

<footer class="footer">
  <div class="wrap footer-grid">
    <div class="footer-brand">
      <img src="/static/cosmic-crew-logo.png" alt="Cosmic Crew Development" width="72" height="72" />
      <p>Cosmic Crew Development<br /><span>Gaming Legends · Est. 2017</span></p>
    </div>
    <nav class="footer-cols" aria-label="Footer">
      <div>
        <h4>Studio</h4>
        <a href="#about">Mission</a>
        <a href="#process">Process</a>
        <a href="#join">Careers</a>
      </div>
      <div>
        <h4>Work</h4>
        <a href="#work">Games</a>
        <a href="#services">Services</a>
        <a href="#top">Press kit</a>
      </div>
      <div>
        <h4>Signal</h4>
        <a href="#join">Contact</a>
        <a href="#top">Discord</a>
        <a href="#top">Newsletter</a>
      </div>
    </nav>
  </div>
  <div class="wrap footer-bottom">
    <span>© <span id="year">2026</span> Cosmic Crew Development. All orbits reserved.</span>
    <span class="footer-made">Built in orbit · <a href="#top">Back to top ↑</a></span>
  </div>
</footer>

<script src="/static/app.js" defer></script>
</body>
</html>`
