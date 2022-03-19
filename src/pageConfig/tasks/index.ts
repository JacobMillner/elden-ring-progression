import { Task } from './types';

const taskHash: Map<string, Task> = new Map([
  [
    'obtain-wetstone-knife',
    {
      id: 'obtain-wetstone-knife',
      title: 'Obtain Whetstone Knife',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/whetstone_knife-elden-ring-wiki-guide-200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Whetstone+Knife',
    },
  ],
  [
    'limegrave-west-map-fragment',
    {
      id: 'limegrave-west-map-fragment',
      title: 'Obtain Limgrave West Map Fragment',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/map_limgrave_west_key_items_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Map+(Limgrave,+West)',
    },
  ],
  [
    'boc-seamster-quest',
    {
      id: 'boc-seamster-quest',
      title: "Do Boc the Seamster's Quest",
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/boc_npcs_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Boc+the+Seamster',
      longDesc: `South-east from Gatefront Ruins (past east of the telescope on the map), you'll hear him shout, so hit the small tree around here to begin <a class="wiki_link" title="Elden Ring Boc the Seamster" href="/Boc+the+Seamster" target="">Boc the Seamster</a>'s questline (see <a class="wiki_link" title="Elden Ring Side Quests" href="/Side+Quests" target="">Side Quests</a> for other quests). It will take you to <a class="wiki_link" title="Elden Ring Coastal Cave" href="/Coastal+Cave" target="">Coastal Cave</a>&nbsp;(southern portion of the western beach), which also unlocks access to the <a class="wiki_link" title="Elden Ring Church of Dragon Communion" href="/Church+of+Dragon+Communion" target="">Church of Dragon Communion</a>&nbsp;(if you continue further in the cave without exiting it via portal).`,
    },
  ],
  [
    'find-sellen',
    {
      id: 'find-sellen',
      title: "Find Sorceress Sellen (if you're a mage)",
      longDesc: `<p>If you are a mage, you will want to unlock <a class="wiki_link" title="Elden Ring Sorceress Sellen" href="/Sorceress+Sellen" target="">Sorceress Sellen</a> in <a class="wiki_link" title="Elden Ring Waypoint Ruins" href="/Waypoint+Ruins" target="">Waypoint Ruins</a> - follow the road south from Gatefront Ruins to find it.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/sorceress-sellen-npc-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Sorceress+Sellen',
    },
  ],
  [
    'talk-to-roderika',
    {
      id: 'talk-to-roderika',
      title: 'Talk to Roderika',
      longDesc: `<p>Head towards <a class="wiki_link" title="Elden Ring Stormhill" href="/Stormhill" target="">Stormhill</a>&nbsp;(past the Gatefront grace leading west) and talk to <a class="wiki_link" title="Elden Ring Roderika" href="/Roderika">Roderika</a> to begin her quest and receive the Sitting Sideways gesture, alongstide the <a class="wiki_link" title="Elden Ring Spirit Jellyfish Ashes" href="/Spirit+Jellyfish+Ashes" target="">Spirit Jellyfish Ashes</a>. You will pick up a <a class="wiki_link" title="Elden Ring Golden Seed" href="/Golden+Seed" target="">Golden Seed</a> just before arriving at <a class="wiki_link" title="Elden Ring Stormhill Shack" href="/Stormhill+Shack" target="">Stormhill Shack</a>. There's also a <a class="wiki_link" title="Elden Ring Stonesword Key" href="/Stonesword+Key" target="">Stonesword Key</a> here that you will want to start collecting.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/woman_with_a_red_hood_npc_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Roderika',
    },
  ],
  [
    'find-ashes-of-war-merchant',
    {
      id: 'find-ashes-of-war-merchant',
      title: 'Find Ashes of War Merchant',
      longDesc: `<p>Follow the road East from the <a class="wiki_link" title="Elden Ring Stormhill Shack" href="/Stormhill+Shack" target="">Stormhill Shack</a> in Stormhill and you'll come to <a class="wiki_link" title="Elden Ring Warmaster's Shack" href="/Warmaster's+Shack" target="">Warmaster's Shack</a>, where you can purchase Ashes of War from <a class="wiki_link" title="Elden Ring Knight Bernahl" href="/Knight+Bernahl" target="">Knight Bernahl</a>. Just south from here in the hills were the trolls are, you can visit at night and be invaded by a <a class="wiki_link" title="Elden Ring Deathbird" href="/Deathbird" target="">Deathbird</a> mini-boss and get the <a class="wiki_link" title="Elden Ring Blue-Feathered Branchsword" href="/Blue-Feathered+Branchsword" target="">Blue-Feathered Branchsword</a> talisman.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/warmasters_shack_locations_elden_ring_wiki_guide.jpg',
      link: "https://eldenring.wiki.fextralife.com/Warmaster's+Shack",
    },
  ],
  [
    'meet-potboy',
    {
      id: 'meet-potboy',
      title: 'Meet Potboy (Alexander)',
      longDesc: `<p>Continue East from this location and turn right as you see a bridge and hear someone shouting. There is a small path to take up the cliff to your right hand side. You will meet <a class="wiki_link" title="Elden Ring Iron Fist Alexander" href="/Iron+Fist+Alexander">Alexander (Potboy)</a> and can free him to begin his quest and earn the Triumphant Delight gesture and 1x <a class="wiki_link" title="Elden Ring Exalted Flesh" href="/Exalted+Flesh" target="">Exalted Flesh</a>. You have to hit him with a heavy attack or several times from behind.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/alexander_npc_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Iron+Fist+Alexander',
    },
  ],
  [
    'talk-to-d-hunter',
    {
      id: 'talk-to-d-hunter',
      title: 'Talk to D, Hunter of the Dead',
      longDesc: `<p>Further down the road, past the bridge, you can meet <a class="wiki_link" title="Elden Ring D, Hunter of the Dead" href="/D,+Hunter+of+the+Dead" target="">D, Hunter of the Dead</a>, and begin his quest (if you already reached the Roundtable Hold before this point, he will not show up since you would have first met him&nbsp;at the hold&nbsp;instead of near past the bridge, but quest progression remains the same).</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/d-hunter-of-the-dead-npc-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/D+Hunter+of+the+Dead',
    },
  ],
  [
    'talk-to-kenneth',
    {
      id: 'talk-to-kenneth',
      title: 'Talk to Kenneth Haight',
      longDesc: `<p>First you will head to some broken structures along the northern cliff of the area (easiest place to start would be at the Artist's Shack grace, or follow the road North from the Gatefront Ruins after passing the bridge). A group of demi-humans must be dispatched, then you can talk to <a class="wiki_link" title="Elden Ring Kenneth Haight" href="/Kenneth+Haight" target="">Kenneth Haight</a> atop the ruins, and agree to serve him. He asks you to liberate his keep to the south.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/kenneth_haight_npcs_elden_ring_wiki_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Kenneth+Haight',
    },
  ],
  [
    'murkwater-cave',
    {
      id: 'murkwater-cave',
      title: 'Complete Murkwater Cave',
      longDesc: `<p>You will now want to return to the lower area of Limgrave, to go up the ravine from Agheel Lake until you find <a class="wiki_link" title="Elden Ring Murkwater Catacombs" href="/Murkwater+Catacombs" target="">Murkwater Catacombs</a>, and then <a class="wiki_link" title="Elden Ring Murkwater Cave" href="/Murkwater+Cave" target="">Murkwater Cave</a> that has a special surprise. You will get invaded here, so be careful!</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/murkwater_cave_locations_elden_ring_wiki_guide_300x.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Murkwater+Cave',
    },
  ],
  [
    'get-wondrous',
    {
      id: 'get-wondrous',
      title: 'get the flask of wondrous physik',
      longDesc: `<p>Continue following the road northeast from here until you reach the <a class="wiki_link" title="Elden Ring Third Church of Marika" href="/Third+Church+of+Marika" target="">Third Church of Marika</a>, where you can loot the <a class="wiki_link" title="Elden Ring Flask of Wondrous Physick" href="/Flask+of+Wondrous+Physick">Flask of Wondrous Physick</a> and the <a class="wiki_link" title="Elden Ring Crimson Crystal Tear" href="/Crimson+Crystal+Tear" target="">Crimson Crystal Tear</a>. This is an important flask for your journey so don't miss it!</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/flask_of_wondrous_physick_tools_consumables_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/flask+of+wondrous+physick',
    },
  ],
  [
    'limegrave-east-map-fragment',
    {
      id: 'limegrave-east-map-fragment',
      title: 'Get Limgrave, East Map Fragment',
      longDesc: `<p>Follow the road south until you find the area's map fragment. Beware of Rune Bears, but just by the map fragment you'll also find an altar with the&nbsp;<a class="wiki_link" title="Elden Ring Greenspill Crystal Tear" href="/Greenspill+Crystal+Tear">Greenspill Crystal Tear</a> and <a class="wiki_link" title="Elden Ring Spiked Cracked Tear" href="/Spiked+Cracked+Tear" target="">Spiked Cracked Tear</a>. There's also a Teardrop Scarab nearby that drops <a class="wiki_link" title="Elden Ring Ash of War: Ground Slam" href="/Ash+of+War:+Ground+Slam" target="">Ash of War: Ground Slam</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/map-limgrave,-east_key-items-elden-ring-wiki-guide-200.png',
      link: 'https://eldenring.wiki.fextralife.com/Map+(Limgrave,+East)',
    },
  ],
  [
    'get-flask-materials-from-erdtree',
    {
      id: 'get-flask-materials-from-erdtree',
      title: 'Get Flask Materials from Minor Erdtree',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/minor-erdtree-weeping-peninsula-location-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Minor+Erdtree+(Mistwood)',
    },
  ],
  [
    'activate-siofra-river-well',
    {
      id: 'activate-siofra-river-well',
      title: 'Activate Siofra River Well',
      longDesc: `<p>Once you have looted the above, go inside the structure. Take the lift down all the way to the <a class="wiki_link" title="Elden Ring Siofra River" href="/Siofra+River" target="">Siofra River</a>, activate the Site of Grace down there, and head back up - you will come here later as it's very above your current level.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/siofra-river-a-locations-elden-ring-wiki-guide-300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Siofra+River',
    },
  ],
  [
    'trigger-blaidd',
    {
      id: 'trigger-blaidd',
      title: 'Trigger Blaidd event',
      longDesc: `<p>Nearby is the mistwood ruins, there is a howling wolf that you will hear. Once you hear him you can go back to the Church of Elleh location and talk to <a class="wiki_link" title="Elden Ring Merchant Kale" href="/Merchant+Kale">Merchant Kalé</a> who will give you a gesture. Do the gesture (<strong>Finger Snap</strong>) to the wolf and he will jump down and you can talk to <a class="wiki_link" title="Elden Ring Blaidd" href="/Blaidd" target="">Blaidd</a> and start his quest.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/blaidd-wolfman-location2-npc-elden-ring-wiki-300px-min.jpeg',
      link: 'https://eldenring.wiki.fextralife.com/Blaidd',
    },
  ],
  [
    'liberate-fort-haight',
    {
      id: 'liberate-fort-haight',
      title: 'Liberate Fort Haight',
      longDesc: `<p>Continue south from here, you can take a detour to meet the Nomadic Merchant of the area if you wish. To the very south, you will encounter <a class="wiki_link" title="Elden Ring Fort Haight" href="/Fort+Haight" target="">Fort Haight</a>. There's a <a class="wiki_link" title="Elden Ring Golden Seed" href="/Golden+Seed" target="">Golden Seed</a> to be picked up before you go in. Then kill all the enemies within, and loot the tower on the right side from the entrance to obtain the very important key item: <a class="wiki_link" title="Elden Ring Dectus Medallion (Left)" href="/Dectus+Medallion+(Left)" target="">Dectus Medallion (Left)</a>. There's also <a class="wiki_link" title="Elden Ring Nomadic Warrior's Cookbook (6)" href="/Nomadic+Warrior's+Cookbook+(6)" target="">Nomadic Warrior's Cookbook (6)</a> and <a class="wiki_link" title="Elden Ring Ash of War: Bloody Slash" href="/Ash+of+War:+Bloody+Slash" target="">Ash of War: Bloody Slash</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/post-town-remains-ruined-cellar-location-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Fort+Haight',
    },
  ],
  [
    'get-reward-kenneth-haight',
    {
      id: 'get-reward-kenneth-haight',
      title: 'Get Reward from Kenneth Haight',
      longDesc: `<p>Now that the fort is free, report back to Kenneth in the northern area. He will reward you with&nbsp;<a class="wiki_link" title="Elden Ring Erdsteel Dagger" href="/Erdsteel+Dagger" target="">Erdsteel Dagger</a> and offer you the opportunity to enter into his service, choice is up to you.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/kenneth_haight_npcs_elden_ring_wiki_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Kenneth+Haight',
    },
  ],
  [
    'complete-summonwater',
    {
      id: 'complete-summonwater',
      title: 'Complete Summonwater',
      longDesc: `<p>Once this is done, head to <a class="wiki_link" title="Elden Ring Summonwater" href="/Summonwater" target="">Summonwater</a>&nbsp;(northwest from the Third Church of Marika), where you will face a <a class="wiki_link" title="Elden Ring Tibia Mariner" href="/Tibia+Mariner" target="">Tibia Mariner</a> boss. Defeat it to gain your first <a class="wiki_link" title="Elden Ring Deathroot" href="/Deathroot" target="">Deathroot</a>&nbsp;and the <a class="wiki_link" title="Elden Ring Skeletal Militiaman Ashes" href="/Skeletal+Militiaman+Ashes" target="_blank" rel="noopener noreferrer">Skeletal Militiamen Ashes</a>), which will enable a discussion with <a class="wiki_link" title="Elden Ring D, Hunter of the Dead" href="/D,+Hunter+of+the+Dead" target="">D, Hunter of the Dead</a> at the <a class="wiki_link" title="Elden Ring Roundtable Hold" href="/Roundtable+Hold" target="">Roundtable Hold</a>&nbsp;(you may also find him instead near the Summonwater Village Outskirts grace west of here if you didn't reach&nbsp;the Hold yet).</p> <p>Afterwards, go back to the Third Chirch of Marika. In the back there will be a portal that will take you to your next location. Open the door and rest at the site of grace. Melina will offer to take you to the Roundtable Hold (which again, if you have not already&nbsp;reached yet earlier from resting at enough graces, since&nbsp;activating them alone isn't enough).</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/post-town-remains-ruined-cellar-location-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Summonwater+Village',
    },
  ],
  [
    'talk-to-d-hunter-at-roundtable',
    {
      id: 'talk-to-d-hunter-at-roundtable',
      title: 'Talk to D, Hunter of the Dead at the Roundtable Hold.',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/d-hunter-of-the-dead-npc-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/D+Hunter+of+the+Dead',
    },
  ],
  [
    'teleport-bestial-sanctum',
    {
      id: 'teleport-bestial-sanctum',
      title: '*Teleport to Bestial Sanctum',
      longDesc: `<p>* If you have access to the Roundtable Hold, after that discussion a gateway will be marked on your map that allows you to teleport to the <a class="wiki_link" title="Elden Ring Bestial Sanctum" href="/Bestial+Sanctum" target="">Bestial Sanctum</a> in eastern <a class="wiki_link" title="Elden Ring Caelid" href="/Caelid" target="">Caelid</a>. You don't need to do this now so don't worry about it if you haven't been to Roundtable Hold!</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/bestial-sanctuary-location-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Bestial+Sanctum',
    },
  ],
  [
    'meet-yura',
    {
      id: 'meet-yura',
      title: 'Meet Yura',
      longDesc: `<p><a class="wiki_link" title="Elden Ring Interactive Map?id=499&amp;lat=-198.859375&amp;lng=106.943373&amp;zoom=5&amp;code=mapA" href="/Interactive+Map?id=499&amp;lat=-198.859375&amp;lng=106.943373&amp;zoom=5&amp;code=mapA">Elden Ring Map: Southern Limgrave Starting Point</a>. You are now ready to explore Southern <a class="wiki_link" title="Elden Ring Limgrave" href="/Limgrave" target="">Limgrave</a>. Travel northeast to the underpass (directly west of the Artist's Shack, down at the ravine underneath a ruin) and talk to <a class="wiki_link" title="Elden Ring Bloody Finger Hunter Yura" href="/Bloody+Finger+Hunter+Yura" target="">Bloody Finger Hunter Yura</a>, then proceed to Lake Agheel to challenge and defeat the dragon in this area, <a class="wiki_link" title="Elden Ring Flying Dragon Agheel" href="/Flying+Dragon+Agheel" target="">Flying Dragon Agheel</a>. You can summon players or use <a class="wiki_link" title="Elden Ring Spirits" href="/Spirits">Spirit Ashes</a> to help with the fight. Using Torrent is suggested. The Dragon Heart you obtain can be traded for <a class="wiki_link" title="Elden Ring Incantations" href="/Incantations" target="">Incantations</a> at the <a class="wiki_link" title="Elden Ring Church of Dragon Communion" href="/Church+of+Dragon+Communion" target="">Church of Dragon Communion</a> accessed by traversing through <a class="wiki_link" title="Elden Ring Coastal Cave" href="/Coastal+Cave" target="">Coastal Cave</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/bloody-finger-hunter-yura-npc-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Bloody+Finger+Hunter+Yura',
    },
  ],
  [
    'kill-dragon-agheel',
    {
      id: 'kill-dragon-agheel',
      title: 'Kill Dragon Agheel',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/flying_dragon_agheel_wildlife_creature_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Flying+Dragon+Agheel',
    },
  ],
  [
    'obtain-royal-house-scroll',
    {
      id: 'obtain-royal-house-scroll',
      title: 'Obtain Royal House Scroll',
      longDesc: `<p>If you are a sorcerer, you will want to get the <a class="wiki_link" title="Elden Ring Royal House Scroll" href="/Royal+House+Scroll" target="">Royal House Scroll</a>, that you can bring to <a class="wiki_link" title="Elden Ring Sorceress Sellen" href="/Sorceress+Sellen" target="">Sorceress Sellen</a> to unlock more inventory at her shop. Head southeast from the Agheel Lake South site of grace, toward the top of a cliff and you'll see a statue of an object that looks like the half piece of a bowl or a circle. Face the other way, to see a Knight. Keep going to a structure to see a man standing watching over the big structure, alongside a dead body. In that body, you will find the Royal House Scroll.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/royal_house_scroll-elden-ring-wiki-guide-200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Royal+House+Scroll',
    },
  ],
  [
    'default-knights-cavalry',
    {
      id: 'default-knights-cavalry',
      title: "Defeat Night's Cavalry",
      longDesc: `<p>Proceed south into the <a class="wiki_link" title="Elden Ring Weeping Peninsula" href="/Weeping+Peninsula" target="">Weeping Peninsula</a> and you'll meet <a class="wiki_link" title="Elden Ring Irina " href="/Irina+" target="">Irina</a>&nbsp;by the road. She will ask you to talk to her Father at Castle Morne. You will get there later so for now just continue down the road and rest at the Castle Morne Rampart site of grace. A miniboss roams the area at night. This is a <a class="wiki_link" title="Elden Ring Night's Cavalry" href="/Night's+Cavalry" target="">Night's Cavalry</a> and defeating him will give you the&nbsp;<a class="wiki_link" title="Elden Ring Ash of War: Barricade" href="/Ash+of+War:+Barricade" target="">Ash of War: Barricade</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nights_cavalry_bosses_elden_ring_wiki_guide.jpg',
      link: "https://eldenring.wiki.fextralife.com/Night's+Cavalry",
    },
  ],
  [
    'obtain-memory-slot-1',
    {
      id: 'obtain-memory-slot-1',
      title: 'Obtain memory slot',
      longDesc: `<p>Take the jump spring near the Site of Grace to gain access to a tower.&nbsp;<a class="wiki_link" title="Elden Ring Oridys's Rise" href="/Oridys's+Rise">Oridy's Rise</a> is a mage tower and contains an item that increases your memory slots, the <a class="wiki_link" title="Elden Ring Memory Stone" href="/Memory+Stone" target="">Memory Stone</a>. There are multiple of these to be found throughout the game, and they are usually in towers such as this one. You have to find and hit 3 turtles to unlock the entrance. See the Oridy's Rise page for details on where they are. After that, head north of the twower to find a site of grace, and a few enemies. Further after that, you'll find a corpse on a chair holding a Stonesword Key, and a statue which points to a catabombs to complete).</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/oridyss-rise-location-elden-ring-wiki-guide.jpg',
      link: "https://eldenring.wiki.fextralife.com/Oridys's+Rise",
    },
  ],
  [
    'get-sacred-tears-1',
    {
      id: 'get-sacred-tears-1',
      title: 'Get Sacred Tears',
      longDesc: `<p>From here you will head North to find a <a class="wiki_link" title="Elden Ring Faith-knot Crystal Tear" href="/Faith-knot+Crystal+Tear" target="_blank" rel="noopener noreferrer">Faith-knot Crystal Tear</a> guarded by some hostile plants. Directly west is a church containing a <a class="wiki_link" title="Elden Ring Sacred Tear" href="/Sacred+Tear" target="_blank" rel="noopener noreferrer">Sacred Tear</a> for your flask. South from here leads to both the <a class="wiki_link" title="Elden Ring Tombsward Catacombs" href="/Tombsward+Catacombs" target="_blank" rel="noopener noreferrer">Tombsward Catacombs</a> and the <a class="wiki_link" title="Elden Ring Minor Erdtree" href="/Minor+Erdtree" target="_blank" rel="noopener noreferrer">Minor Erdtree</a>, which contains both the&nbsp;&nbsp;<a class="wiki_link" title="Elden Ring Crimsonburst Crystal Tear" href="/Crimsonburst+Crystal+Tear" target="">Crimsonburst Crystal Tear</a> and <a class="wiki_link" title="Elden Ring Opaline Bubbletear" href="/Opaline+Bubbletear" target="">Opaline Bubbletear</a> for your flask. Down the plains, you can see a <a class="wiki_link" title="Elden Ring Walking Mausoleum" href="/Walking+Mausoleum">Mausoleum</a>: these are used to replicate Remembrances, which are the "Boss Souls" of the main bosses of the game.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/sacred_tear_consumable-elden-ring-wiki-guide-200.png',
      link: 'https://eldenring.wiki.fextralife.com/Interactive+Map?id=817&lat=-210.828125&lng=95.226796&zoom=8',
    },
  ],
  [
    'get-flask-materials-erdtree-1',
    {
      id: 'get-flask-materials-erdtree-1',
      title: 'Get Flask Materials from Erdtree',
      longDesc: `<p>Several points of interest are also west of the Minor Erdtree, including another church holding another <a class="wiki_link" title="Elden Ring Sacred Tear" href="/Sacred+Tear" target="_blank" rel="noopener noreferrer">Sacred Tear</a>, and the Isolated Merchant's Shack, which you can buy a <a class="wiki_link" title="Elden Ring Lantern" href="/Lantern" target="_blank" rel="noopener noreferrer">Lantern</a>&nbsp;to avoid needing a torch for dark areas. Note that in the Witchbane Ruins north of the shack, the Sorceress Sellen is there, but there is no way to interact with her. <em>(It also seems unrelated to her "well-being"&nbsp; back at the Waypoint Ruins, so it's unknown if this is a quest progression bug or if the character isn't actually Sellen)</em></p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/minor-erdtree-weeping-peninsula-location-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Minor+Erdtree+(Weeping+Peninsula)',
    },
  ],
  [
    'defeat-margit',
    {
      id: 'defeat-margit',
      title: 'Defeat Margit',
      longDesc: `<p>Once you complete the boss of the area, return to Irina and again to him to progress their quest (however, I would advise against completing this quest too soon until your weapon upgrade is at least +8, because you'll obtain a+8 weapon after progressing enough in this questline, which may affect your ability to interact with other players if matchmaking is affected by weapon level).</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/margit-the-fell-omen-boss-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Margit,+The+Fell+Omen',
    },
  ],
  [
    'visit-roundtable-hold',
    {
      id: 'visit-roundtable-hold',
      title: 'Visit Roundtable Hold',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/roundtable-hold-hub-location-preview-elden-ring-wiki-guide-300px-min.jpeg',
      link: 'https://eldenring.wiki.fextralife.com/Roundtable+Hold',
    },
  ],
  [
    'talk-roundtable-npcs',
    {
      id: 'talk-roundtable-npcs',
      title: 'Talk to all Roundtable NPCs',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/roundtable-hold-hub-location-preview-elden-ring-wiki-guide-300px-min.jpeg',
      link: 'https://eldenring.wiki.fextralife.com/Roundtable+Hold',
    },
  ],
  [
    'upgrade-weapons-1',
    {
      id: 'upgrade-weapons-1',
      title: 'Upgrade your Weapons',
      longDesc: `<p>The most important thing to do here right now is to ensure that you <a class="wiki_link" title="Elden Ring Upgrades" href="/Upgrades" target="">Upgrade</a> your weapons as much as possible as <a class="wiki_link" title="Elden Ring Stormveil Castle" href="/Stormveil+Castle" target="">Stormveil Castle</a> is a difficult endeavor and you will need all the help you can get.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/greatsword_colossal_swords_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Upgrades',
    },
  ],
  [
    'stormveil-alternate-entrance',
    {
      id: 'stormveil-alternate-entrance',
      title: 'Take the alternate entrance to the Stormveil Castle',
      longDesc: `<p>Right before you head for Stormveil Castle, head northeast of the Stormhill Shack to pick up the Strength-Knot Crystal Tear guarded by a giant. Now head for the castle. There will be a site of grace named "Castleward Tunnel" right before a mini-boss inside the tunnel.&nbsp;</p> <p>Once you reach the main gate, head to the left side and go down to grab a couple items and make your way around back on the main path. Once near the gate, interact with the grace nearby, then head left and speak to Gatekeeper Gostoc. Take his suggestion by entering through&nbsp;the alternate route.&nbsp; Outside near the summoning pool, loot the body to obtain <a class="wiki_link" title="Elden Ring Golden Rune (1)." href="/Golden+Rune+(1)." target="">Golden Rune (1).</a>&nbsp;Uptop another concrete beam nearby is another bootable body which will give you 3 <a class="wiki_link" title="Elden Ring Ruin Fragment" href="/Ruin+Fragment">Ruin Fragments</a>. Another body towards&nbsp;the alternate entrance will carry a Smithing stone. After looting the area, you can continue to make your way into the castle. Clear the Bladed Talon Eagle that may intercept you from above. You will come across another Site of Grace&nbsp;to the right called Stormveil Cliffside. Head up on the wooden platforms and loot the body on the path to obtain a <a class="wiki_link" title="Elden Ring Marred Leather Shield" href="/Marred+Leather+Shield" target="">Marred Leather Shield</a>. Continue, but be wary of the three Castle Guards. Clear them to continue inside and there will be another body at the edge of the platform and another <a class="wiki_link" title="Elden Ring Castle Guard " href="/Castle+Guard+" target="">Castle Guard</a>. Clear him and loot the corpse to obtain a <a class="wiki_link" title="Elden Ring Golden Rune (2)" href="/Golden+Rune+(2)" target="">Golden Rune (2)</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/back-entrance-stormveil-castle-walkthrough-location-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Stormveil+Castle',
    },
  ],
  [
    'defeat-banished-knight',
    {
      id: 'defeat-banished-knight',
      title: 'Defeat the Banished Knight and retrieve the Rusty Key',
      longDesc: `<p>Once you reach the main gate, head to the left side and go down to grab a couple items and make your way around back on the main path. Once near the gate, interact with the grace nearby, then head left and speak to Gatekeeper Gostoc. Take his suggestion by entering through&nbsp;the alternate route.&nbsp; Outside near the summoning pool, loot the body to obtain <a class="wiki_link" title="Elden Ring Golden Rune (1)." href="/Golden+Rune+(1)." target="">Golden Rune (1).</a>&nbsp;Uptop another concrete beam nearby is another bootable body which will give you 3 <a class="wiki_link" title="Elden Ring Ruin Fragment" href="/Ruin+Fragment">Ruin Fragments</a>. Another body towards&nbsp;the alternate entrance will carry a Smithing stone. After looting the area, you can continue to make your way into the castle. Clear the Bladed Talon Eagle that may intercept you from above. You will come across another Site of Grace&nbsp;to the right called Stormveil Cliffside. Head up on the wooden platforms and loot the body on the path to obtain a <a class="wiki_link" title="Elden Ring Marred Leather Shield" href="/Marred+Leather+Shield" target="">Marred Leather Shield</a>. Continue, but be wary of the three Castle Guards. Clear them to continue inside and there will be another body at the edge of the platform and another <a class="wiki_link" title="Elden Ring Castle Guard " href="/Castle+Guard+" target="">Castle Guard</a>. Clear him and loot the corpse to obtain a <a class="wiki_link" title="Elden Ring Golden Rune (2)" href="/Golden+Rune+(2)" target="">Golden Rune (2)</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/banished-knight-enemy-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Banished+Knight',
    },
  ],
  [
    'obtain-the-stonesword-key',
    {
      id: 'obtain-the-stonesword-key',
      title: 'Obtain the Stonesword Key',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/stonesword_key-elden-ring-wiki-guide-200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Stonesword+Key',
    },
  ],
  [
    'dispel-fog-enter-gates',
    {
      id: 'dispel-fog-enter-gates',
      title: 'Use the Key to dispel the fog in front of the gates and enter',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/stonesword_key-elden-ring-wiki-guide-200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Stormveil+Castle',
    },
  ],
  [
    'locate-nepheli-loux',
    {
      id: 'locate-nepheli-loux',
      title: 'Locate Nepheli Loux and speak to her',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nepheli-loux-npc-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Nepheli+Loux',
    },
  ],
  [
    'clear-the-castle-1',
    {
      id: 'clear-the-castle-1',
      title: 'Clear the Castle',
      image: '',
      link: '',
    },
  ],
  [
    'clear-the-castle-1',
    {
      id: 'clear-the-castle-1',
      title: 'Fight the Lion Guardian Mini-boss',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/lion-guardian-enemy-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Lion+Guardian',
    },
  ],
  [
    'prepare-for-boss-summon-nepheli',
    {
      id: 'prepare-for-boss-summon-nepheli',
      title: 'Prepare for a Boss battle and summon Nepheli',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nepheli-loux-npc-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Nepheli+Loux',
    },
  ],
  [
    'fight-godrick',
    {
      id: 'fight-godrick',
      title: 'Fight Godrick the Grafted',
      longDesc: `<p>Finally, face Godrick. Remember to use the summon sign to summon <a class="wiki_link" title="Elden Ring Nepheli" href="/Nepheli" target="">Nepheli</a>. Clear the boss. A boss guide can be found on the <a class="wiki_link" title="Elden Ring Godrick the Grafted" href="/Godrick+the+Grafted" target="">Godrick the Grafted</a>&nbsp;page. The second phase will be indicated with a cutscene where he grafts a dragon arm and can now deal additional <a class="wiki_link" title="Elden Ring Fire Damage" href="/Fire+Damage" target="">Fire Damage</a>. Clear both phases and you will defeat Godrick. You will be rewarded with&nbsp;<a class="wiki_link" title="Elden Ring Godrick's Great Rune" href="/Godrick's+Great+Rune" target="">Godrick's Great Rune</a>&nbsp;and x1&nbsp;<a class="wiki_link" title="Elden Ring Remembrance of the Grafted" href="/Remembrance+of+the+Grafted" target="">Remembrance of the Grafted</a>, as well as 15000 Runes.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/boss_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Godrick+the+Grafted',
    },
  ],
  [
    'restore-godricks-great-rune',
    {
      id: 'restore-godricks-great-rune',
      title: "Restore Godrick's Great Rune at the Divine Tower of Limgrave",
      longDesc: `<p>Now you can make your way to the Throne Room. The west room will have a set of steps leading to the basement. Climb down the ladder and you can approach the praying spirit. loot the item next to it to obtain&nbsp;x1&nbsp;<a class="wiki_link" title="Elden Ring Shabriri Grape" href="/Shabriri+Grape" target="">Shabriri Grape</a>. Turn back and you will arrive at&nbsp;&nbsp;<a class="wiki_link" title="Elden Ring Liurnia of the Lakes" href="/Liurnia+of+the+Lakes" target="">Liurnia of the Lakes</a>.&nbsp;<a class="wiki_link" title="Elden Ring Nepehli Loux" href="/Nepehli+Loux" target="">Nepehli Loux</a>&nbsp;will also be available at the <a class="wiki_link" title="Elden Ring Roundtable Hold" href="/Roundtable+Hold" target="">Roundtable Hold</a>. Speak to her so that she can give you x1&nbsp;<a class="wiki_link" title="Elden Ring Arsenal Charm" href="/Arsenal+Charm" target="">Arsenal Charm</a>.</p> <p>To use the newly&nbsp;obtained &nbsp;<a class="wiki_link" title="Elden Ring Godrick's Great Rune" href="/Godrick's+Great+Rune" target="">Godrick's Great Rune</a>, you will need to fast travel to the Limgrave Tower Bridge site at&nbsp;<a class="wiki_link" title="Elden Ring Stormveil Castle" href="/Stormveil+Castle" target="">Stormveil Castle</a>. More enemies and Colossal Statues will be here. You need to reach a waygate then a large door to the tower and activate the lift inside. Here, you can discover a new <a class="wiki_link" title="Elden Ring Site of Grace" href="/Site+of+Grace" target="">Site of Grace</a>. Continue to ascend and there will a glowing sigil. Restore the power of the great rune.&nbsp;Godrick's Great Rune blesses the player's character by raising all attributes</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/limgrave_divine_tower_locations_elden_ring_wiki_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Divine+Tower+of+Limgrave',
    },
  ],
  [
    'talk-to-boc-the-seamster',
    {
      id: 'talk-to-boc-the-seamster',
      title: 'Talk to Boc the Seamster',
      longDesc: `<p><a class="wiki_link" title="Elden Ring Interactive Map?id=745&amp;lat=-170.984375&amp;lng=82.102865&amp;zoom=5&amp;code=mapA" href="/Interactive+Map?id=745&amp;lat=-170.984375&amp;lng=82.102865&amp;zoom=5&amp;code=mapA">Elden Ring Map: Liurnia of the Lakes Starting Point</a>. You can meet <a class="wiki_link" title="Elden Ring Boc the Seamster" href="/Boc+the+Seamster" target="">Boc the Seamster</a> at the first Site of Grace of the area. Nearby, a church houses <a class="wiki_link" title="Elden Ring Thops" href="/Thops">Thops</a>, who will teach you some basic sorcery and ask if you can help him get into the academy.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/boc_npcs_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Boc+the+Seamster',
    },
  ],
  [
    'meet-sorcerer-thops',
    {
      id: 'meet-sorcerer-thops',
      title: 'Meet Sorcerer Thops',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/thops_npc_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Thops',
    },
  ],
  [
    'obtain-academy-scroll',
    {
      id: 'obtain-academy-scroll',
      title: 'Obtain Academy Scroll',
      longDesc: `<p>Northwest from their position, a graveyard hides the <a class="wiki_link" title="Elden Ring Academy Scroll" href="/Academy+Scroll" target="">Academy Scroll</a>, that can be given to Sorceress Sellen to unlock more inventory at her Shop. Follow the road south, collecting <a class="wiki_link" title="Elden Ring Glintstone Craftman's Cookbook (1)" href="/Glintstone+Craftman's+Cookbook+(1)" target="">Glintstone Craftman's Cookbook (1)</a>, and talk to the <a class="wiki_link" title="Elden Ring Nomadic Merchant Liurnia of the Lakes" href="/Nomadic+Merchant+Liurnia+of+the+Lakes" target="">Nomadic Merchant</a> of the area. Head into the water and north until you come to <a class="wiki_link" title="Elden Ring Laskyar Ruins" href="/Laskyar+Ruins" target="">Laskyar Ruins</a>, where you can loot two key items:&nbsp;<a class="wiki_link" title="Elden Ring Glintstone Craftsman's Cookbook (2)" href="/Glintstone+Craftsman's+Cookbook+(2)" target="">Glintstone Craftsman's Cookbook (2)</a> and <a class="wiki_link" title="Elden Ring Ritual Pot" href="/Ritual+Pot" target="">Ritual Pot</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/academy-scroll_spells-elden-ring-wiki-guide-200.png',
      link: 'https://eldenring.wiki.fextralife.com/Academy+Scroll',
    },
  ],
  [
    'obtain-fire-monks-prayerbook',
    {
      id: 'obtain-fire-monks-prayerbook',
      title: "Obtain Fire Monk's Prayerbook",
      image:
        "https://eldenring.wiki.fextralife.com/file/Elden-Ring/fire_monk's_prayerbook__key_items-elden-ring-wiki-guide-200.png",
      link: "https://eldenring.wiki.fextralife.com/Fire+Monks'+Prayerbook",
    },
  ],
  [
    'get-liurnia-map-fragments',
    {
      id: 'get-liurnia-map-fragments',
      title: 'Get Liurnia of the Lakes map fragments',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/map-liurna,-east_key-items-elden-ring-wiki-guide-200.png',
      link: 'https://eldenring.wiki.fextralife.com/Liurnia+of+the+Lakes',
    },
  ],
  [
    'get-cookbooks-and-ritual-pot',
    {
      id: 'get-cookbooks-and-ritual-pot',
      title: 'Get Cookbooks & Ritual Pot',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ritual_pot_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Ritual+Pot',
    },
  ],
  [
    'meet-patches-get-flask-upgrades',
    {
      id: 'meet-patches-get-flask-upgrades',
      title: 'Meet Patches and Get Flask Upgrades',
      longDesc: `<p>Your next stops will be to get the <a class="wiki_link" title="Elden Ring Dexterity-Knot Crystal Tear" href="/Dexterity-Knot+Crystal+Tear" target="">Dexterity-Knot Crystal Tear</a> from a small island found north-west from the Telescope icon - and you can access <a class="wiki_link" title="Elden Ring Patches" href="/Patches" target="">Patches</a> for his shop by the Scenic Isle Site of Grace. This is before you reach <a class="wiki_link" title="Elden Ring Academy Gate Town" href="/Academy+Gate+Town" target="">Academy Gate Town</a>, where you should search for a <a class="wiki_link" title="Elden Ring Golden Seed" href="/Golden+Seed" target="">Golden Seed</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/patches_bosses_elden_ring_wiki_guide_300x.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Patches',
    },
  ],
  [
    'visit-rose-church',
    {
      id: 'visit-rose-church',
      title: 'Visit Rose Church',
      longDesc: `<p>Take a brief detour north and west, until you find <a class="wiki_link" title="Elden Ring Rose Church" href="/Rose+Church" target="">Rose Church</a> and talk to <a class="wiki_link" title="Elden Ring White-Faced Varre" href="/White-Faced+Varre" target="">White-Faced Varre</a>. He wants you to invade other players (see his page for specifics). You can get&nbsp;<a class="wiki_link" title="Elden Ring Nomadic Warrior's Cookbook (12)" href="/Nomadic+Warrior's+Cookbook+(12)" target="">Nomadic Warrior's Cookbook (12)</a> from here.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/rose_church_location_elden_ring_wiki_guide_300x.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Rose+Church',
    },
  ],
  [
    'complete-malefactors-evergoal',
    {
      id: 'complete-malefactors-evergoal',
      title: "Complete Malefactor's Evergaol",
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/malefactors_evergaol_locations_elden_ring_wiki_guide.jpg',
      link: "https://eldenring.wiki.fextralife.com/Malefactor's+Evergaol",
    },
  ],
  [
    'defeat-erdtree-avatar',
    {
      id: 'defeat-erdtree-avatar',
      title: 'Defeat Erdtree Avatar',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/erdtree-avatar-boss-elden-ring-compressed-300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Erdtree+Avatar',
    },
  ],
  [
    'loot-upgrade-materials-deeproot-depths',
    {
      id: 'loot-upgrade-materials-deeproot-depths',
      title: 'Loot Upgrade Materials',
      image: '',
      link: '',
    },
  ],
  [
    'talk-to-palm-reader',
    {
      id: 'talk-to-palm-reader',
      title: 'Talk to Palm Reader',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/palm_reader_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Palm+Reader',
    },
  ],
  [
    'obtain-area-map-deeproot-depths',
    {
      id: 'obtain-area-map-deeproot-depths',
      title: 'Talk to Palm Reader',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/deeproot-depths-location-undeground-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Deeproot+Depths',
    },
  ],
  [
    'activate-walking-mausoleum',
    {
      id: 'activate-walking-mausoleum',
      title: 'Activate Walking Mausoleum',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/walking-mausoleum-location-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Walking+Mausoleum',
    },
  ],
  [
    'defeat-crucible-knight-siluria',
    {
      id: 'defeat-crucible-knight-siluria',
      title: 'Defeat Crucible Knight Siluria',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/crucible_knight_siluria_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Crucible+Knight+Siluria',
    },
  ],
  [
    'defeat-fias-champions',
    {
      id: 'defeat-fias-champions',
      title: 'Defeat Fia"s Champions',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/crucible_knight_siluria_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Fia"s+Champions',
    },
  ],
  [
    'talk-to-fia',
    {
      id: 'talk-to-fia',
      title: 'Talk to Fia',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/fia-npc-elden-ring-wiki-300px2-min.jpeg',
      link: 'https://eldenring.wiki.fextralife.com/Fia',
    },
  ],
  [
    'defeat-lichdragon-fortissax',
    {
      id: 'defeat-lichdragon-fortissax',
      title: 'TDefeat Lichdragon Fortissax',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/lichdragon-fortissax-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Lichdragon+Fortissax',
    },
  ],
  [
    'enter-ainsel-river-main',
    {
      id: 'enter-ainsel-river-main',
      title: 'Obtain Area Map',
      image: '',
      link: 'https://eldenring.wiki.fextralife.com/Ainsel+River+Main',
    },
  ],
  [
    'collect-miniature-ranni',
    {
      id: 'collect-miniature-ranni',
      title: 'Collect Miniature Ranni',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/miniature-ramni-key-items-description.png',
      link: 'https://eldenring.wiki.fextralife.com/Miniature+Ranni',
    },
  ],
  [
    'enter-nokstella-eternal-city',
    {
      id: 'enter-nokstella-eternal-city',
      title: 'Enter Nokstella, Eternal City',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nokstella-eternal-city-locations-elden-ring-wiki-guide-300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Nokstella,+Eternal+City',
    },
  ],
  [
    'collect-key-items-and-spirit-ashes-nokstella',
    {
      id: 'collect-key-items-and-spirit-ashes-nokstella',
      title: 'Collect Key Items & Spirit Ashes',
      image: '',
      link: '',
    },
  ],
  [
    'talk-to-miniature-ranni',
    {
      id: 'talk-to-miniature-ranni',
      title: 'Talk to Miniature Ranni',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/miniature-ramni-key-items-description.png',
      link: 'https://eldenring.wiki.fextralife.com/Miniature+Ranni',
    },
  ],
  [
    'enter-lake-of-rot',
    {
      id: 'enter-lake-of-rot',
      title: 'Enter Lake of Rot',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/lake-of-rot-a-locations-elden-ring-wiki-guide-300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Lake+of+Rot',
    },
  ],
  [
    'obtain-map-fragment-nokstella',
    {
      id: 'obtain-map-fragment-nokstella',
      title: 'Obtain Map Fragment',
      image: '',
      link: '',
    },
  ],
  [
    'use-the-discarded-palace-key',
    {
      id: 'use-the-discarded-palace-key',
      title: 'Obtain Map Fragment',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/discarded-palace-key-elden-ring-wiki-guide.png',
      link: 'https://eldenring.wiki.fextralife.com/Discarded+Palace+Key',
    },
  ],
  [
    'defeat-dragonkin-soldier',
    {
      id: 'defeat-dragonkin-soldier',
      title: 'Defeat Dragonkin Soldier',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragonkin-soldier-boss-enemies-elden-ring-wiki-guide-300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Dragonkin+Soldier',
    },
  ],
  [
    'enter-grand-cloister-nokstella',
    {
      id: 'enter-grand-cloister-nokstella',
      title: 'Enter Grand Cloister',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/grand_cloister_locations_elden_ring_wiki_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Grand+Cloister',
    },
  ],
  [
    'defeat-astel-naturalborn-of-the-void',
    {
      id: 'defeat-astel-naturalborn-of-the-void',
      title: 'Defeat Astel, Naturalborn of the Void',
      image: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/astel.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Astel+Naturalborn+of+the+Void',
    },
  ],
  [
    'get-access-to-altus-plateau',
    {
      id: 'get-access-to-altus-plateau',
      title: 'Get access to the Altus Plateau',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/altus-plateau-hub-location-preview-elden-ring-wiki-guide-300px.jpghttps://eldenring.wiki.fextralife.com/file/Elden-Ring/malefactors_evergaol_locations_elden_ring_wiki_guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Altus+Plateau',
    },
  ],
  [
    'complete-western-altus-objectives',
    {
      id: 'complete-western-altus-objectives',
      title: 'Complete Western Altus Objectives',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/altus-plateau-hub-location-preview-elden-ring-wiki-guide-300px.jpghttps://eldenring.wiki.fextralife.com/file/Elden-Ring/malefactors_evergaol_locations_elden_ring_wiki_guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Altus+Plateau',
    },
  ],
  [
    'talk-to-millicent',
    {
      id: 'talk-to-millicent',
      title: 'Talk to Millicent',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/millicent-npc-elden-ring-wiki-300px-min-min-min.jpeg',
      link: 'https://eldenring.wiki.fextralife.com/Millicent',
    },
  ],
  [
    'complete-old-altus-tunnel',
    {
      id: 'complete-old-altus-tunnel',
      title: 'Complete Old Altus Tunnel',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/old_altus_tunnel_locations_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Old+Altus+Tunnel',
    },
  ],
  [
    'complete-shaded-castle',
    {
      id: 'complete-shaded-castle',
      title: 'Complete Shaded Castle',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/the-shaded-castle-location-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/The+Shaded+Castle',
    },
  ],
  [
    'talk-to-millicent-again',
    {
      id: 'talk-to-millicent-again',
      title: 'Talk to Millicent',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/millicent-npc-elden-ring-wiki-300px-min-min-min.jpeg',
      link: 'https://eldenring.wiki.fextralife.com/Millicent',
    },
  ],
  [
    'complete-golden-lineage-evergaolboc-the-seamster',
    {
      id: 'complete-golden-lineage-evergaolboc-the-seamster',
      title: 'Complete Golden Lineage EvergaolBoc the Seamster',
      image: '',
      link: 'https://eldenring.wiki.fextralife.com/Golden+Lineage+Evergaol',
    },
  ],
  [
    'obtain-zone-map-talk-to-boc-and-corhyn',
    {
      id: 'obtain-zone-map-talk-to-boc-and-corhyn',
      title: 'Obtain Zone Map & Talk to Boc and Corhyn',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/brother_corhyn_npcs_elden_ring_wiki_guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Brother+Corhyn',
    },
  ],
  [
    'complete-secong-church-of-marika',
    {
      id: 'complete-secong-church-of-marika',
      title: 'Complete Second Church of Marika',
      image: '',
      link: 'https://eldenring.wiki.fextralife.com/Second+Church+of+Marika',
    },
  ],
  [
    'get-minord-erdtree-flask-upgrade-complete-valley-objectives',
    {
      id: 'get-minord-erdtree-flask-upgrade-complete-valley-objectives',
      title: 'Get Minord Erdtree Flask Upgrades & complete valley objectives',
      image: '',
      link: '',
    },
  ],
  [
    'complete-dominula-and-talk-to-millicent',
    {
      id: 'complete-dominula-and-talk-to-millicent',
      title: 'Complete Dominula & talk to Millicent',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/millicent-npc-elden-ring-wiki-300px-min-min-min.jpeg',
      link: 'https://eldenring.wiki.fextralife.com/Millicent',
    },
  ],
  [
    'explore-eastern-altus-heights',
    {
      id: 'explore-eastern-altus-heights',
      title: 'Explore Eastern Altus Heights',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/altus-plateau-hub-location-preview-elden-ring-wiki-guide-300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Altus+Plateau',
    },
  ],
  [
    'meet-goldmask-report-to-corhyb',
    {
      id: 'meet-goldmask-report-to-corhyb',
      title: 'Meet Goldmask and report to Corhyn',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/goldmask_npcs_elden_ring_wiki_guide300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Goldmask',
    },
  ],
  [
    'unlock-mt-gelmir-site-of-grace',
    {
      id: 'unlock-mt-gelmir-site-of-grace',
      title: "Unlock Mt Gelmir's site of grace",
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/mt-gelmir-hub-location-preview-elden-ring-wiki-guide-300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Mt+Gelmir',
    },
  ],
  [
    'defeat-tibia-mariner',
    {
      id: 'defeat-tibia-mariner',
      title: 'Defeat Tibia Mariner',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/tibia-mariner_ground_boss_enemies_elden_ring_wiki_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Tibia+Mariner',
    },
  ],
  [
    'complete-wyndham-ruins-and-catacombs',
    {
      id: 'complete-wyndham-ruins-and-catacombs',
      title: 'Complete Wyndham Ruins & Catacombs',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/wyndham_ruins_2_locations_elden_ring_wiki_guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Wyndham+Ruins',
    },
  ],
  [
    'defeat-draconic-tree-sentinel',
    {
      id: 'defeat-draconic-tree-sentinel',
      title: 'Defeat Draconic Tree Sentinel',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/draconic_tree_sentinel_boss_elden_ring_wiki_guide_300x.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Draconic+Tree+Sentinel',
    },
  ],
  [
    'enter-leyndell',
    {
      id: 'enter-leyndell',
      title: 'Enter Leyndell',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/leyndell_royal_capital_locations_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Leyndell+Royal+Capital',
    },
  ],
  [
    'go-to-the-erdtree-sanctuary',
    {
      id: 'go-to-the-erdtree-sanctuary',
      title: 'Go to the Erdtree Sanctuary',
      image: '',
      link: 'https://eldenring.wiki.fextralife.com/Interactive+Map?id=4121&lat=-106.921&lng=115.778&zoom=8&code=mapA',
    },
  ],
  [
    'defeat-godfrey-first-elden-lord-golden-shade',
    {
      id: 'defeat-godfrey-first-elden-lord-golden-shade',
      title: 'Defeat Godfrey, First Elden Lord (Golden Shade)',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/godfrey_golden_shade_bosses_elden_ring_wiki_guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Godfrey,+First+Elden+Lord+(Golden+Shade)',
    },
  ],
  [
    'get-in-the-queens-bedchamber',
    {
      id: 'get-in-the-queens-bedchamber',
      title: "Get in the Queen's Bedchamber",
      image: '',
      link: 'https://eldenring.wiki.fextralife.com/Interactive+Map?id=3222&lat=-105.62&lng=119.168&zoom=8&code=mapA',
    },
  ],
  [
    'defeat-morgott-the-omen-king',
    {
      id: 'defeat-morgott-the-omen-king',
      title: 'Defeat Morgott the Omen King',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/morgott-the-omen-king.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Morgott+the+Omen+King',
    },
  ],
  [
    'barrier-in-capital-outskirts-is-no-longer',
    {
      id: 'barrier-in-capital-outskirts-is-no-longer',
      title: 'Barrier in the Capital Outskirts is no longer',
      image: '',
      link: 'https://eldenring.wiki.fextralife.com/Interactive+Map?id=1451&lat=-102.398437&lng=125.082242&zoom=8&code=mapA',
    },
  ],
  [
    'proceed-to-the-forbidden-lands',
    {
      id: 'proceed-to-the-forbidden-lands',
      title: 'Proceed to the Forbidden Lands',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/forbidden-lands-hub-location-preview-elden-ring-wiki-guide-300px.jpeg',
      link: 'https://eldenring.wiki.fextralife.com/Forbidden+Lands',
    },
  ],
  [
    'enter-leyndell-royal-capital',
    {
      id: 'enter-leyndell-royal-capital',
      title: 'Enter from Leyndell Royal Capital',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/leyndell_royal_capital_locations_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Leyndell+Royal+Capital',
    },
  ],
  [
    'defeat-black-blade-kindred',
    {
      id: 'defeat-black-blade-kindred',
      title: 'Defeat Black Blade Kindred',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/leyndell_royal_capital_locations_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Leyndell+Royal+Capital',
    },
  ],
  [
    'proceed-to-mountaintops-of-giants',
    {
      id: 'proceed-to-mountaintops-of-giants',
      title: 'Proceed to Mountaintops of the Giants',
      image: '',
      link: 'https://eldenring.wiki.fextralife.com/Mountaintops+of+the+Giants',
    },
  ],
  [
    'loot-sacrificial-twig',
    {
      id: 'loot-sacrificial-twig',
      title: 'Loot Sacrificial Twig',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/sacrificial_twig_talisman_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Sacrificial+Twig',
    },
  ],
  [
    'obtain-razya-lucaria-academy-key',
    {
      id: 'obtain-raya-lucaria-academy-key',
      title: 'Obtain Raya Lucaria Academy Key',
      longDesc: `<p>If you follow the map directions, they will bring you north and west from this position, to the left side of the <a class="wiki_link" title="Elden Ring Raya Lucaria Academy" href="/Raya+Lucaria+Academy" target="">Raya Lucaria Academy</a> on your map. The&nbsp;<a class="wiki_link" title="Elden Ring Academy Glintstone Key" href="/Academy+Glintstone+Key" target="">Academy Glintstone Key</a> is guarded by a <a class="wiki_link" title="Elden Ring Glintstone Dragon Smarag" href="/Glintstone+Dragon+Smarag">Dragon</a> that is also magic resistant, so you can either pick it up and run or prepare for a difficult fight.</p> <p>Once you have the key, return to the Academy Gate and go through.</p>`,
      image: '',
      link: '',
    },
  ],
  [
    'acquire-academy-glintstone-key',
    {
      id: 'acquire-academy-glintstone-key',
      title: 'Acquire the Academy Glintstone Key',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/academy-glintstone-key_key-items-elden-ring-wiki-guide-200.png',
      link: 'https://eldenring.wiki.fextralife.com/Academy+Glintstone+Key',
    },
  ],
  [
    'obtain-gravity-well-sorcery',
    {
      id: 'obtain-gravity-well-sorcery',
      title: 'Obtain Gravity Well Sorcery',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/gravity_well_sorcery_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Gravity+Well',
    },
  ],
  [
    'get-carian-knight-set',
    {
      id: 'get-carian-knight-set',
      title: 'Get Carian Knight Set',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/carian-knight-armor-set-elden-ring-wiki-guide.png',
      link: 'https://eldenring.wiki.fextralife.com/Carian+Knight+Set',
    },
  ],
  [
    'get-conspectus-scroll',
    {
      id: 'get-conspectus-scroll',
      title: 'Get Conspectus Scroll',
      image: '',
      link: 'https://eldenring.wiki.fextralife.com/Conspectus+Scroll',
    },
  ],
  [
    'get-olivinus-glintstone-crown-and-ritual-pot',
    {
      id: 'get-olivinus-glintstone-crown-and-ritual-pot',
      title: 'Get Olivinus Glintstone Crown and Ritual Pot',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/olivinus_glintstone_crown_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Olivinus+Glintstone+Crown',
    },
  ],
  [
    'defeat-red-wolf-of-radagon',
    {
      id: 'defeat-red-wolf-of-radagon',
      title: 'Defeat Red Wolf of Radagon',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/red-wolf-of-radagon.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Red+Wolf+of+Radagon',
    },
  ],
  [
    'access-secret-radagon-upstairs-area',
    {
      id: 'access-secret-radagon-upstairs-area',
      title: 'Access Secret Radagon Upstairs Area',
      image: '',
      link: '',
    },
  ],
  [
    'get-key-golden-seed-glintstone-crown',
    {
      id: 'get-key-golden-seed-glintstone-crown',
      title: 'Get Stonesword Key, Golden Seed and Karolos Glintstone Crown',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/karolos_glintstone_crown_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Karolos+Glintstone+Crown',
    },
  ],
  [
    'expore-upper-rooftops',
    {
      id: 'expore-upper-rooftops',
      title: 'Explore Upper Rooftops',
      image: '',
      link: '',
    },
  ],
  [
    'get-imbued-sword-key',
    {
      id: 'get-imbued-sword-key',
      title: 'Get Imbued Sword Key',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/imbued-sword-key-elden-ring-wiki-guide.png',
      link: 'https://eldenring.wiki.fextralife.com/Imbued+Sword+Key',
    },
  ],
  [
    'loot-scademy-glintstone-key',
    {
      id: 'loot-scademy-glintstone-key',
      title: 'Loot Academy Glintstone Key',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/academy-glintstone-key_key-items-elden-ring-wiki-guide-200.png',
      link: 'https://eldenring.wiki.fextralife.com/Academy+Glintstone+Key',
    },
  ],
  [
    'defeat-moongrum-carian-knight',
    {
      id: 'defeat-moongrum-carian-knight',
      title: 'Defeat Moongrum, Carian Knight',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/moongrum-carian-knight-hostile-npc-enemy-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Moongrum+Carian+Knight',
    },
  ],
  [
    'deal-with-iron-ball',
    {
      id: 'deal-with-iron-ball',
      title: 'Deal with Iron Ball Trap',
      image: '',
      link: '',
    },
  ],
  [
    'defeat-rennala',
    {
      id: 'defeat-rennala',
      title: 'Defeat Rennala, Queen of the Full Moon',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/renala_bosses_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Rennala+Queen+of+the+Full+Moon',
    },
  ],
  [
    'talk-to-irina',
    {
      id: 'talk-to-irina',
      title: 'Talk to Irina',
      longDesc: `<p>Proceed south into the <a class="wiki_link" title="Elden Ring Weeping Peninsula" href="/Weeping+Peninsula" target="">Weeping Peninsula</a> and you'll meet <a class="wiki_link" title="Elden Ring Irina " href="/Irina+" target="">Irina</a>&nbsp;by the road. She will ask you to talk to her Father at Castle Morne. You will get there later so for now just continue down the road and rest at the Castle Morne Rampart site of grace. A miniboss roams the area at night. This is a <a class="wiki_link" title="Elden Ring Night's Cavalry" href="/Night's+Cavalry" target="">Night's Cavalry</a> and defeating him will give you the&nbsp;<a class="wiki_link" title="Elden Ring Ash of War: Barricade" href="/Ash+of+War:+Barricade" target="">Ash of War: Barricade</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/irina_npcs_elden_ring_wiki_guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Rennala+Queen+of+the+Full+Moon',
    },
  ],
  [
    'get-kaiden-sellsword-ashes',
    {
      id: 'get-kaiden-sellsword-ashes',
      title: 'Get Kaiden Sellsword Ashes',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/kaiden_sellsword_ashes_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Kaiden+Sellsword+Ashes',
    },
  ],
  [
    'get-shabiri-grape-talk-to-hyetta',
    {
      id: 'get-shabiri-grape-talk-to-hyetta',
      title: 'Get Shabriri Grape at Purified Ruins and Talk to Hyetta',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/purefied-ruins-location-elden-ring-wiki-300px-min-min.jpeg',
      link: 'https://eldenring.wiki.fextralife.com/Purified+Ruins',
    },
  ],
  [
    'get-cookbook-staff-highway-lookout',
    {
      id: 'get-cookbook-staff-highway-lookout',
      title: 'Get Cookbook & Staff at Highway Lookout Tower',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/carian_glintblade_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Highway+Lookout+Tower',
    },
  ],
  [
    'kill-knighs-cavalry-2',
    {
      id: 'kill-knighs-cavalry-2',
      title: "Defeat Night's Cavalry",
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nights_cavalry_bosses_elden_ring_wiki_guide.jpg',
      link: "https://eldenring.wiki.fextralife.com/Night's+Cavalry",
    },
  ],
  [
    'defeat-tibia-mariner-2',
    {
      id: 'defeat-tibia-mariner-2',
      title: 'Defeat Tibia Mariner',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/tibia-mariner_ground_boss_enemies_elden_ring_wiki_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Tibia+Mariner',
    },
  ],
  [
    'obtain-dragon-cult-prayerbook',
    {
      id: 'obtain-dragon-cult-prayerbook',
      title: 'Obtain Dragon Cult Prayerbook',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragon_cult_prayerbook_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Dragon+Cult+Prayerbook',
    },
  ],
  [
    'visit-church-of-vows',
    {
      id: 'visit-church-of-vows',
      title: 'Visit Church of Vows',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/church_of_vows_locations_elden_ring_wiki_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Church+of+Vows',
    },
  ],
  [
    'obtain-flask-upgrades-from-erdtree-2',
    {
      id: 'obtain-flask-upgrades-from-erdtree-2',
      title: 'Obtain Flask Upgrades from Minor Erdtree',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/minor_erdtree_(liurnia_northeast)_full_map_elden_ring_wiki_guide_600px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Minor+Erdtree+(Liurnia+Northeast)',
    },
  ],
  [
    'obtain-flask-upgrades-from-erdtree-2',
    {
      id: 'obtain-flask-upgrades-from-erdtree-2',
      title: 'Obtain Flask Upgrades from Minor Erdtree',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/minor_erdtree_(liurnia_northeast)_full_map_elden_ring_wiki_guide_600px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Minor+Erdtree+(Liurnia+Northeast)',
    },
  ],
  [
    'walking-mausoleum-2',
    {
      id: 'walking-mausoleum-2',
      title: 'Unlock Walking Mausoleum',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/walking-mausoleum-location-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Walking+Mausoleum',
    },
  ],
  [
    'upgrades-raya-lucaria-crystal-tunnel',
    {
      id: 'upgrades-raya-lucaria-crystal-tunnel',
      title: 'Get upgrades from Raya Lucaria Crystal Tunnel',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/raya_lucaria_crystal_tunnel_locations_elden_ring_wiki_guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Raya+Lucaria+Crystal+Tunnel',
    },
  ],
  [
    'visit-frenzied-flame-village',
    {
      id: 'visit-frenzied-flame-village',
      title: 'Visit Frenzied Flame Village',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/frenzied_flame_village_full_map_elden_ring_wiki_guide_600px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Frenzied+Flame+Village',
    },
  ],
  [
    'spells-from-fringe-tower',
    {
      id: 'spells-from-fringe-tower',
      title: 'Obtain powerful spells from Converted Fringe Tower',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/converted_fringe_tower_full_map_elden_ring_wiki_guide_600px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Converted+Fringe+Tower',
    },
  ],
  [
    'unlock-ainsel-river-well',
    {
      id: 'unlock-ainsel-river-well',
      title: 'Unlock Ainsel River Well',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ainsel-river-well-location-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Ainsel+River+Well',
    },
  ],
  [
    'complete-castle-morne',
    {
      id: 'complete-castle-morne',
      title: 'Complete Castle Morne',
      longDesc: `Once you complete the boss of the area, return to Irina and again to him to progress their quest (however, I would advise against completing this quest too soon until your weapon upgrade is at least +8, because you'll obtain a+8 weapon after progressing enough in this questline, which may affect your ability to interact with other players if matchmaking is affected by weapon level).`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/castle-mourne-locationpreview-elden-ring-wiki-guide-300px-min.jpeg',
      link: 'https://eldenring.wiki.fextralife.com/Castle+Morne',
    },
  ],
]);

export default taskHash;
