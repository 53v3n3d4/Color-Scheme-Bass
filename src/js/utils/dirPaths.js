// Dir/Folders.
export const projectDir = new URL('../../../', import.meta.url)
export const schemeDir = new URL('../../scheme/', import.meta.url)

export const pathFile = (file, dir) => new URL(file, dir)
const cleanPath = (dirName) => dirName.pathname.replace(/%20| /g, ' ')

// Dir/folders Paths. Used by Watch.
export const schemePath = cleanPath(schemeDir)
