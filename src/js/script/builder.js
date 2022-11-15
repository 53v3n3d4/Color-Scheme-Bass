import {
  bcData, bioData, bowData, doData, lagoonData, fujiData, nimbusData, rociData, zoraData
} from '../utils/schemeData.js'
import { builder } from 'sublime-builder'

const messageFilenames =
`Theme or color-scheme name not valid. Below you can find the names available.
theme: adaptive, light or dark.
color-scheme: bc, `

// Write sublime file
// Color-schemes: Bc,
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
        bcData.rules
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
        bioData.rules
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
        bowData.rules
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
        doData.rules
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
        fujiData.rules
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
        lagoonData.rules
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
        nimbusData.rules
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
        rociData.rules
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
        zoraData.rules
      )
      break
    default:
      // console.log(color(messageFilenames, 'red'))
      console.log(`\u001B[91m${messageFilenames}\u001b[0m`)
      return messageFilenames
  }
}
