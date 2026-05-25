/* ════ PROJECT DATA ════ */
const PROJECTS = [
  {
    id:'orange', icon:'🌸', cat:'Amber Garden', title:'Orange Blossom Night', titleAr:'ليلة زهر البرتقال',
    desc:'Warm amber flowers bloom one by one under a velvet sky. The center flower blooms first, then the others follow — like how love grows, from one heart outward.',
    features:['Flowers bloom in sequence with staggered delays','SVG radialGradients create warm petal glow','CSS scaleY grow-from-ground animation','Stems sway gently in an endless breeze','Floating golden particles drift upward','Pulsing light halos on every center'],
    tags:['SVG','CSS Animation','Radial Glow','Bloom'], navColor:'#ffaa44'
  },
  {
    id:'blue', icon:'🌊', cat:'Moonlit Garden', title:'Blue Teal Night Blooms',
    desc:'Ethereal teal flowers rising from a dark, still world. Stars twinkle overhead, fireflies dance, grass sways — peaceful as a night walk holding your hand.',
    features:['Twinkling stars via CSS keyframe animations','Fireflies float with organic drift paths','Soft SVG blur filters for dream-like glow','Grass blades sway with staggered timing','Three flowers bloom in a gentle sequence','Dark foliage ground adds natural depth'],
    tags:['SVG','Fireflies','Star Twinkle','Glow'], navColor:'#5dd4e8'
  },
  {
    id:'valentine', icon:'💝', cat:'A Sweet Game', title:'Will You Be Mine?',
    desc:'A playful love game where clicking "No" only makes the "Yes" grow bigger — because deep down, there\'s only ever one answer.',
    features:['9 increasingly desperate "No" messages','Yes button grows 1.45× larger each time','Bear emoji reacts with joy and panic','Hearts burst and float on every Yes click','Full celebration screen with looping hearts','Pure vanilla JS — love needs no library'],
    tags:['Interactive','Game','Hearts','Love'], navColor:'#ff6b9d'
  },
  {
    id:'pink', icon:'🌺', cat:'Neon Garden', title:'Pink Blossom in the Dark',
    desc:'Bold neon-pink flowers glow against the night — vibrant and electric, like how you light up every room you walk into.',
    features:['SVG feGaussianBlur creates intense neon glow','Layered glow halos give flowers depth','Magenta radialGradients on petals & stems','Bright green grass sways on both sides','Yellow firefly particles drift and vanish','Three blooms in a dramatically lit sequence'],
    tags:['SVG','Neon Glow','Filter','Fireflies'], navColor:'#ff2d9b'
  },
  {
    id:'heart', icon:'💚', cat:'Particle Heart', title:'A Thousand Sparks of Love',
    desc:'Thousands of glowing particles drift through darkness until they find each other and form a perfect heart — exactly like us.',
    features:['1,800 particles attracted by physics equations','Heart shape from parametric math (sin³/cos)','Glowing comet traces the heart outline','Particles drift with velocity and damping','4 romantic color themes to choose from','Runs at 60fps on requestAnimationFrame'],
    tags:['Canvas API','Particles','Physics','Math'], navColor:'#00ffcc'
  },
  {
    id:'eid', icon:'🌙', cat:'Eid Mubarak', title:'Eid Mubarak, My Love',
    desc:'A luminous letter in ivory and champagne gold — a premium Eid greeting where every word is a prayer and every arch a blessing written just for you.',
    features:['Ivory & cream luxury letter card aesthetic','Hand-crafted SVG geometric arch patterns','Pure SVG crescent moon in brushed gold gradient','Sequenced CSS fade-in-up animations on entry','Parallax 3D card tilt on hover, lift on tap','Ambient golden particle drift in background'],
    tags:['Eid','Gold','Luxury Letter','SVG Arches'], navColor:'#D4AF37'
  }
];
