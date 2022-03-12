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
]);

export default taskHash;
