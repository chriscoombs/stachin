const TouchGestures = require('TouchGestures');
const Materials = require('Materials');
const Scene = require('Scene');
const facemesh = Scene.root.find('facemesh0');

const materialsMap = new Map([
  [ Materials.get('stache0').identifier, 0  ],
  [ Materials.get('stache1').identifier, 1  ],
  [ Materials.get('stache2').identifier, 2  ],
  [ Materials.get('stache3').identifier, 3  ],
  [ Materials.get('stache4').identifier, 4  ],
  [ Materials.get('stache5').identifier, 5  ]
])

TouchGestures.onTap(facemesh).subscribe(() => {
  facemesh.material = Materials.get(`stache${(materialsMap.get(facemesh.materialIdentifier) + 1) % 6}`);
});
