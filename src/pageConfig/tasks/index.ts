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
    },
  ],
  [
    'find-sellen',
    {
      id: 'find-sellen',
      title: "Find Sorceress Sellen (if you're a mage)",
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
]);

export default taskHash;
