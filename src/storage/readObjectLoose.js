import { FileSystem } from '../models/FileSystem.js'

export async function readObjectLoose ({ fs: _fs, gitdir, oid }) {
  const fs = new FileSystem(_fs)
  let source = `objects/${oid.slice(0, 2)}/${oid.slice(2)}`
  let file = await fs.read(`${gitdir}/${source}`)
  if (!file) {
    return null
  }
  return { object: file, format: 'deflated', source }
}
