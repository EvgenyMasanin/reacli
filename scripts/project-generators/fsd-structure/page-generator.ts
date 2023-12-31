import { join } from 'path'
import { Folders } from 'scripts/constants'
import { appendToIndex, createComponentFiles } from 'scripts/utils/file-system'
import { sliceGenerator } from './slice/slice-generator'

export const pageGenerator = (name: string) => {
  const pageFolderPath = join(Folders.src, Folders.pages)
  const pagePath = join(pageFolderPath, name)
  const pageUiPath = join(pagePath, Folders.ui)

  sliceGenerator(Folders.pages, name, {
    withApi: false,
    withModel: false
  })

  createComponentFiles(pageUiPath, name)

  appendToIndex(pageFolderPath, name)
}
