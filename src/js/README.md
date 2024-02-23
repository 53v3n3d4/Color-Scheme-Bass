## Build

```
// Install using corepack
$ corepack enable

// Install the package manager configured in the local project
$ corepack install

// Install dependecies
$ yarn install

// Script
$ yarn build-bc-replace

// Node
$ node -e 'import("./index.js").then(b => b.sublimeFile("bc-replace"));'
```

Option to build files using merge files or replace variables.  
For releases, using replace variables.
<table class="tg">
<thead>
  <tr>
    <th>Name</th>
    <th>Kind</th>
    <th>sublimeFile name</th>
    <th>Script</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="2">Biohack</td>
    <td>merge</td>
    <td>bio-merge</td>
    <td>build-bio-merge</td>
  </tr>
  <tr>
    <td>replace</td>
    <td>bio-replace</td>
    <td>build-bio-replace</td>
  </tr>
  <tr>
    <td rowspan="2">BlackComb</td>
    <td>merge</td>
    <td>bc-merge</td>
    <td>build-bc-merge</td>
  </tr>
  <tr>
    <td>replace</td>
    <td>bc-replace</td>
    <td>build-bc-replace</td>
  </tr>
  <tr>
    <td rowspan="2">Bowtruckle</td>
    <td>merge</td>
    <td>bow-merge</td>
    <td>build-bow-merge</td>
  </tr>
  <tr>
    <td>replace</td>
    <td>bow-replace</td>
    <td>build-bow-replace</td>
  </tr>
  <tr>
    <td rowspan="2">D-O</td>
    <td>merge</td>
    <td>do-merge</td>
    <td>build-do-merge</td>
  </tr>
  <tr>
    <td>replace</td>
    <td>do-replace</td>
    <td>build-do-replace</td>
  </tr>
  <tr>
    <td rowspan="2">Fuji</td>
    <td>merge</td>
    <td>fuji-merge</td>
    <td>build-fuji-merge</td>
  </tr>
  <tr>
    <td>replace</td>
    <td>fuji-replace</td>
    <td>build-fuji-replace</td>
  </tr>
  <tr>
    <td rowspan="2">Lagoon</td>
    <td>merge</td>
    <td>lagoon-merge</td>
    <td>build-lagoon-merge</td>
  </tr>
  <tr>
    <td>replace</td>
    <td>lagoon-replace</td>
    <td>build-lagoon-replace</td>
  </tr>
  <tr>
    <td rowspan="2">Nimbus</td>
    <td>merge</td>
    <td>nimbus-merge</td>
    <td>build-nimbus-merge</td>
  </tr>
  <tr>
    <td>replace</td>
    <td>nimbus-replace</td>
    <td>build-nimbus-replace</td>
  </tr>
  <tr>
    <td rowspan="2">Roci</td>
    <td>merge</td>
    <td>roci-merge</td>
    <td>build-roci-merge</td>
  </tr>
  <tr>
    <td>replace</td>
    <td>roci-replace</td>
    <td>build-roci-replace</td>
  </tr>
  <tr>
    <td rowspan="2">Zora</td>
    <td>merge</td>
    <td>zora-merge</td>
    <td>build-zora-merge</td>
  </tr>
  <tr>
    <td>replace</td>
    <td>zora-replace</td>
    <td>build-zora-replace</td>
  </tr>
</tbody>
</table>

### Watch option - Build sublime files when changed

```
// Option 1
$ yarn node script/watch.js

// Option 2
$ yarn watch
```

## Yarn PnP notes

Using Yarn PnP, if get error import package not found when use Watch.  
https://yarnpkg.com/features/pnp#initializing-pnp
```
// Instead of
$ node script/watch.js

// Use
$ yarn node script/watch.js
```
