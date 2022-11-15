## Build

Yarn/PnP and node -e {script} gives error module not found.  
Npm and node -e works.  

If prefer using yarn, use setting below.  
```
// .yarnrc.yml
nodeLinker: "pnpm"
```

```
// Script
$ yarn build-adaptive-replace

// Node
$ node -e 'import("./builder.js").then(b => b.sublimeFile("adaptive-replace"));'
```

Option to build files using merge files or replace variables.  
For releases, using replace variables.
<table class="tg">
<thead>
  <tr>
    <th class="tg-0lax">Name</th>
    <th class="tg-0lax">Kind</th>
    <th class="tg-0lax">sublimeFile name</th>
    <th class="tg-0lax">Script</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0lax" rowspan="2">Biohack</td>
    <td class="tg-0lax">merge</td>
    <td class="tg-0lax">bio-merge</td>
    <td class="tg-0lax">build-bio-merge</td>
  </tr>
  <tr>
    <td class="tg-0lax">replace</td>
    <td class="tg-0lax">bio-replace</td>
    <td class="tg-0lax">build-bio-replace</td>
  </tr>
  <tr>
    <td class="tg-0lax" rowspan="2">BlackComb</td>
    <td class="tg-0lax">merge</td>
    <td class="tg-0lax">bc-merge</td>
    <td class="tg-0lax">build-bc-merge</td>
  </tr>
  <tr>
    <td class="tg-0lax">replace</td>
    <td class="tg-0lax">bc-replace</td>
    <td class="tg-0lax">build-bc-replace</td>
  </tr>
  <tr>
    <td class="tg-0lax" rowspan="2">Bowtruckle</td>
    <td class="tg-0lax">merge</td>
    <td class="tg-0lax">bow-merge</td>
    <td class="tg-0lax">build-bow-merge</td>
  </tr>
  <tr>
    <td class="tg-0lax">replace</td>
    <td class="tg-0lax">bow-replace</td>
    <td class="tg-0lax">build-bow-replace</td>
  </tr>
  <tr>
    <td class="tg-0lax" rowspan="2">D-O</td>
    <td class="tg-0lax">merge</td>
    <td class="tg-0lax">do-merge</td>
    <td class="tg-0lax">build-do-merge</td>
  </tr>
  <tr>
    <td class="tg-0lax">replace</td>
    <td class="tg-0lax">do-replace</td>
    <td class="tg-0lax">build-do-replace</td>
  </tr>
  <tr>
    <td class="tg-0lax" rowspan="2">Fuji</td>
    <td class="tg-0lax">merge</td>
    <td class="tg-0lax">fuji-merge</td>
    <td class="tg-0lax">build-fuji-merge</td>
  </tr>
  <tr>
    <td class="tg-0lax">replace</td>
    <td class="tg-0lax">fuji-replace</td>
    <td class="tg-0lax">build-fuji-replace</td>
  </tr>
  <tr>
    <td class="tg-0lax" rowspan="2">Lagoon</td>
    <td class="tg-0lax">merge</td>
    <td class="tg-0lax">lagoon-merge</td>
    <td class="tg-0lax">build-lagoon-merge</td>
  </tr>
  <tr>
    <td class="tg-0lax">replace</td>
    <td class="tg-0lax">lagoon-replace</td>
    <td class="tg-0lax">build-lagoon-replace</td>
  </tr>
  <tr>
    <td class="tg-0lax" rowspan="2">Nimbus</td>
    <td class="tg-0lax">merge</td>
    <td class="tg-0lax">nimbus-merge</td>
    <td class="tg-0lax">build-nimbus-merge</td>
  </tr>
  <tr>
    <td class="tg-0lax">replace</td>
    <td class="tg-0lax">nimbus-replace</td>
    <td class="tg-0lax">build-nimbus-replace</td>
  </tr>
  <tr>
    <td class="tg-0lax" rowspan="2">Roci</td>
    <td class="tg-0lax">merge</td>
    <td class="tg-0lax">roci-merge</td>
    <td class="tg-0lax">build-roci-merge</td>
  </tr>
  <tr>
    <td class="tg-0lax">replace</td>
    <td class="tg-0lax">roci-replace</td>
    <td class="tg-0lax">build-roci-replace</td>
  </tr>
  <tr>
    <td class="tg-0lax" rowspan="2">Zora</td>
    <td class="tg-0lax">merge</td>
    <td class="tg-0lax">zora-merge</td>
    <td class="tg-0lax">build-zora-merge</td>
  </tr>
  <tr>
    <td class="tg-0lax">replace</td>
    <td class="tg-0lax">zora-replace</td>
    <td class="tg-0lax">build-zora-replace</td>
  </tr>
</tbody>
</table>

### Watch option - Build sublime files when changed

```
// Option 1
$ yarn node watch.js

// Option 2
$ yarn watch
```

## Yarn PnP notes

Using Yarn PnP, if get error import package not found when use Watch.  
https://yarnpkg.com/features/pnp#initializing-pnp
```
// Instead of
$ node watch.js

// Use
$ yarn node watch.js
```
