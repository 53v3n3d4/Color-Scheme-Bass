import { pathFile, projectDir, schemeDir, schemePath } from './dirPaths.js'

// Sublime color-scheme files. https://louisem.com/29880/color-thesaurus-infographic
const bcScheme = pathFile('Bass Blackcomb.sublime-color-scheme', projectDir)
const bioScheme = pathFile('Bass Biohack.sublime-color-scheme', projectDir)
const bowScheme = pathFile('Bass Bowtruckle.sublime-color-scheme', projectDir)
const doScheme = pathFile('Bass D-O.sublime-color-scheme', projectDir)
const fujiScheme = pathFile('Bass Fuji.sublime-color-scheme', projectDir)
const lagoonScheme = pathFile('Bass Lagoon.sublime-color-scheme', projectDir)
const nimbusScheme = pathFile('Bass Nimbus.sublime-color-scheme', projectDir)
const rociScheme = pathFile('Bass Roci.sublime-color-scheme', projectDir)
const zoraScheme = pathFile('Bass Zora.sublime-color-scheme', projectDir)

// Filenames.
const bcVars = 'bc-vars.hidden-color-scheme'
const bioVars = 'bio-vars.hidden-color-scheme'
const bowVars = 'bow-vars.hidden-color-scheme'
const doVars = 'do-vars.hidden-color-scheme'
const colorsScheme = 'colors-palette.hidden-color-scheme'
const fujiVars = 'fuji-vars.hidden-color-scheme'
const lagoonVars = 'lagoon-vars.hidden-color-scheme'
const globalsRules = 'globals-rules.hidden-color-scheme'
const nimbusVars = 'nimbus-vars.hidden-color-scheme'
const rociVars = 'roci-vars.hidden-color-scheme'
const zoraVars = 'zora-vars.hidden-color-scheme'

// Used by Watch.
export const schemeWatch = {
  folderPath: schemePath,
  folder: 'scheme',
  schemes: [
    {
      name: 'bc-replace',
      filenames: [bcVars, colorsScheme, globalsRules]
    },
    {
      name: 'bio-replace',
      filenames: [bioVars, colorsScheme, globalsRules]
    },
    {
      name: 'bow-replace',
      filenames: [bowVars, colorsScheme, globalsRules]
    },
    {
      name: 'do-replace',
      filenames: [doVars, colorsScheme, globalsRules]
    },
    {
      name: 'fuji-replace',
      filenames: [fujiVars, colorsScheme, globalsRules]
    },
    {
      name: 'lagoon-replace',
      filenames: [lagoonVars, colorsScheme, globalsRules]
    },
    {
      name: 'nimbus-replace',
      filenames: [nimbusVars, colorsScheme, globalsRules]
    },
    {
      name: 'roci-replace',
      filenames: [rociVars, colorsScheme, globalsRules]
    },
    {
      name: 'zora-replace',
      filenames: [zoraVars, colorsScheme, globalsRules]
    }
  ]
}

// Color-scheme data
// Merge files order: 1. colors, 2. vars, 3. rules
// Replace files order: 1. vars, 2. colors.
export const bcData = {
  name: 'blackcomb',
  filename: bcScheme,
  title: 'Bass Blackcomb.sublime-color-scheme - Bass Blackcomb',
  author: 'Seven Eda',
  license: 'MIT license',
  rules: pathFile(globalsRules, schemeDir),
  mergeFiles: [
    pathFile(colorsScheme, schemeDir),
    pathFile(bcVars, schemeDir),
    pathFile(globalsRules, schemeDir)
  ],
  replaceFiles: [
    pathFile(bcVars, schemeDir),
    pathFile(colorsScheme, schemeDir)
  ],
  tabSpaces: 2
}

export const bioData = {
  name: 'biohack',
  filename: bioScheme,
  title: 'Bass Biohack.sublime-color-scheme - Bass Biohack',
  author: 'Seven Eda',
  license: 'MIT license',
  rules: pathFile(globalsRules, schemeDir),
  mergeFiles: [
    pathFile(colorsScheme, schemeDir),
    pathFile(bioVars, schemeDir),
    pathFile(globalsRules, schemeDir)
  ],
  replaceFiles: [
    pathFile(bioVars, schemeDir),
    pathFile(colorsScheme, schemeDir)
  ],
  tabSpaces: 2
}

export const bowData = {
  name: 'bowtruckle',
  filename: bowScheme,
  title: 'Bass Bowtruckle.sublime-color-scheme - Bass Bowtruckle',
  author: 'Seven Eda',
  license: 'MIT license',
  rules: pathFile(globalsRules, schemeDir),
  mergeFiles: [
    pathFile(colorsScheme, schemeDir),
    pathFile(bowVars, schemeDir),
    pathFile(globalsRules, schemeDir)
  ],
  replaceFiles: [
    pathFile(bowVars, schemeDir),
    pathFile(colorsScheme, schemeDir)
  ],
  tabSpaces: 2
}

export const doData = {
  name: 'd-o',
  filename: doScheme,
  title: 'Bass D-O.sublime-color-scheme - Bass D-O',
  author: 'Seven Eda',
  license: 'MIT license',
  rules: pathFile(globalsRules, schemeDir),
  mergeFiles: [
    pathFile(colorsScheme, schemeDir),
    pathFile(doVars, schemeDir),
    pathFile(globalsRules, schemeDir)
  ],
  replaceFiles: [
    pathFile(doVars, schemeDir),
    pathFile(colorsScheme, schemeDir)
  ],
  tabSpaces: 2
}

export const fujiData = {
  name: 'fuji',
  filename: fujiScheme,
  title: 'Bass Fuji.sublime-color-scheme - Bass Fuji',
  author: 'Seven Eda',
  license: 'MIT license',
  rules: pathFile(globalsRules, schemeDir),
  mergeFiles: [
    pathFile(colorsScheme, schemeDir),
    pathFile(fujiVars, schemeDir),
    pathFile(globalsRules, schemeDir)
  ],
  replaceFiles: [
    pathFile(fujiVars, schemeDir),
    pathFile(colorsScheme, schemeDir)
  ],
  tabSpaces: 2
}

export const lagoonData = {
  name: 'lagoon',
  filename: lagoonScheme,
  title: 'Bass Lagoon.sublime-color-scheme - Bass Lagoon',
  author: 'Seven Eda',
  license: 'MIT license',
  rules: pathFile(globalsRules, schemeDir),
  mergeFiles: [
    pathFile(colorsScheme, schemeDir),
    pathFile(lagoonVars, schemeDir),
    pathFile(globalsRules, schemeDir)
  ],
  replaceFiles: [
    pathFile(lagoonVars, schemeDir),
    pathFile(colorsScheme, schemeDir)
  ],
  tabSpaces: 2
}

export const nimbusData = {
  name: 'nimbus',
  filename: nimbusScheme,
  title: 'Bass Nimbus.sublime-color-scheme - Bass Nimbus',
  author: 'Seven Eda',
  license: 'MIT license',
  rules: pathFile(globalsRules, schemeDir),
  mergeFiles: [
    pathFile(colorsScheme, schemeDir),
    pathFile(nimbusVars, schemeDir),
    pathFile(globalsRules, schemeDir)
  ],
  replaceFiles: [
    pathFile(nimbusVars, schemeDir),
    pathFile(colorsScheme, schemeDir)
  ],
  tabSpaces: 2
}

export const rociData = {
  name: 'roci',
  filename: rociScheme,
  title: 'Bass Roci.sublime-color-scheme - Bass Roci',
  author: 'Seven Eda',
  license: 'MIT license',
  rules: pathFile(globalsRules, schemeDir),
  mergeFiles: [
    pathFile(colorsScheme, schemeDir),
    pathFile(rociVars, schemeDir),
    pathFile(globalsRules, schemeDir)
  ],
  replaceFiles: [
    pathFile(rociVars, schemeDir),
    pathFile(colorsScheme, schemeDir)
  ],
  tabSpaces: 2
}

export const zoraData = {
  name: 'zora',
  filename: zoraScheme,
  title: 'Bass Zora.sublime-color-scheme - Bass Zora',
  author: 'Seven Eda',
  license: 'MIT license',
  rules: pathFile(globalsRules, schemeDir),
  mergeFiles: [
    pathFile(colorsScheme, schemeDir),
    pathFile(zoraVars, schemeDir),
    pathFile(globalsRules, schemeDir)
  ],
  replaceFiles: [
    pathFile(zoraVars, schemeDir),
    pathFile(colorsScheme, schemeDir)
  ],
  tabSpaces: 2
}
