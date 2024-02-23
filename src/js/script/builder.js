import {
  bcData, bioData, bowData, doData, lagoonData, fujiData, nimbusData, rociData, zoraData
} from '../utils/schemeData.js'
import { builder } from 'sublime-builder'

const messageFilenames =
`Color-scheme name not valid. Below you can find the names available.
Color-scheme names: bc, bio, bow, do, fuji, lagoon, nimbus, roci and zora.
Names should be followed by option merge or replace.
E.g. sublimeFile('bc-replace').`

// Write sublime file
// Color-schemes: Blackcomb, Biohack, Bowtruckle, D-O, Fuji, Lagoon, Nimbus,
// Roci and Zora
export function sublimeFile (name) {
  switch (name) {
    case 'bc-merge':
      builder(
        'merge',
        bcData.mergeFiles,
        bcData.title,
        bcData.author,
        bcData.license,
        bcData.filename,
        bcData.name
        // null,
        // bcData.tabSpace
      )
      break
    case 'bc-replace':
      builder(
        'replace',
        bcData.replaceFiles,
        bcData.title,
        bcData.author,
        bcData.license,
        bcData.filename,
        bcData.name,
        bcData.rules,
        bcData.tabSpace
      )
      break
    case 'bio-merge':
      builder(
        'merge',
        bioData.mergeFiles,
        bioData.title,
        bioData.author,
        bioData.license,
        bioData.filename,
        bioData.name
        // null,
        // bioData.tabSpace
      )
      break
    case 'bio-replace':
      builder(
        'replace',
        bioData.replaceFiles,
        bioData.title,
        bioData.author,
        bioData.license,
        bioData.filename,
        bioData.name,
        bioData.rules,
        bioData.tabSpace
      )
      break
    case 'bow-merge':
      builder(
        'merge',
        bowData.mergeFiles,
        bowData.title,
        bowData.author,
        bowData.license,
        bowData.filename,
        bowData.name
        // null,
        // bowData.tabSpace
      )
      break
    case 'bow-replace':
      builder(
        'replace',
        bowData.replaceFiles,
        bowData.title,
        bowData.author,
        bowData.license,
        bowData.filename,
        bowData.name,
        bowData.rules,
        bowData.tabSpace
      )
      break
    case 'do-merge':
      builder(
        'merge',
        doData.mergeFiles,
        doData.title,
        doData.author,
        doData.license,
        doData.filename,
        doData.name
        // null,
        // doData.tabSpace
      )
      break
    case 'do-replace':
      builder(
        'replace',
        doData.replaceFiles,
        doData.title,
        doData.author,
        doData.license,
        doData.filename,
        doData.name,
        doData.rules,
        doData.tabSpace
      )
      break
    case 'fuji-merge':
      builder(
        'merge',
        fujiData.mergeFiles,
        fujiData.title,
        fujiData.author,
        fujiData.license,
        fujiData.filename,
        fujiData.name
        // null,
        // fujiData.tabSpace
      )
      break
    case 'fuji-replace':
      builder(
        'replace',
        fujiData.replaceFiles,
        fujiData.title,
        fujiData.author,
        fujiData.license,
        fujiData.filename,
        fujiData.name,
        fujiData.rules,
        fujiData.tabSpace
      )
      break
    case 'lagoon-merge':
      builder(
        'merge',
        lagoonData.mergeFiles,
        lagoonData.title,
        lagoonData.author,
        lagoonData.license,
        lagoonData.filename,
        lagoonData.name
        // null,
        // lagoonData.tabSpace
      )
      break
    case 'lagoon-replace':
      builder(
        'replace',
        lagoonData.replaceFiles,
        lagoonData.title,
        lagoonData.author,
        lagoonData.license,
        lagoonData.filename,
        lagoonData.name,
        lagoonData.rules,
        lagoonData.tabSpace
      )
      break
    case 'nimbus-merge':
      builder(
        'merge',
        nimbusData.mergeFiles,
        nimbusData.title,
        nimbusData.author,
        nimbusData.license,
        nimbusData.filename,
        nimbusData.name
        // null,
        // nimbusData.tabSpace
      )
      break
    case 'nimbus-replace':
      builder(
        'replace',
        nimbusData.replaceFiles,
        nimbusData.title,
        nimbusData.author,
        nimbusData.license,
        nimbusData.filename,
        nimbusData.name,
        nimbusData.rules,
        nimbusData.tabSpace
      )
      break
    case 'roci-merge':
      builder(
        'merge',
        rociData.mergeFiles,
        rociData.title,
        rociData.author,
        rociData.license,
        rociData.filename,
        rociData.name
        // null,
        // rociData.tabSpace
      )
      break
    case 'roci-replace':
      builder(
        'replace',
        rociData.replaceFiles,
        rociData.title,
        rociData.author,
        rociData.license,
        rociData.filename,
        rociData.name,
        rociData.rules,
        rociData.tabSpace
      )
      break
    case 'zora-merge':
      builder(
        'merge',
        zoraData.mergeFiles,
        zoraData.title,
        zoraData.author,
        zoraData.license,
        zoraData.filename,
        zoraData.name
        // null,
        // zoraData.tabSpace
      )
      break
    case 'zora-replace':
      builder(
        'replace',
        zoraData.replaceFiles,
        zoraData.title,
        zoraData.author,
        zoraData.license,
        zoraData.filename,
        zoraData.name,
        zoraData.rules,
        zoraData.tabSpace
      )
      break
    default:
      console.log(`\u001B[91m${messageFilenames}\u001b[0m`)
      return messageFilenames
  }
}
