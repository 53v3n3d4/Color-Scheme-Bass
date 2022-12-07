import { schemeWatch } from '../utils/schemeData.js'
import { sublimeFile } from './builder.js'
import { watchDir } from 'sublime-builder'

watchDir(schemeWatch.folderPath, schemeWatch.folder, schemeWatch.schemes, sublimeFile)
