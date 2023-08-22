// sytanx highlight for code
import hljs from 'highlight.js/lib/core'
import typescript from 'highlight.js/lib/languages/typescript'
import css from 'highlight.js/lib/languages/css'

export function hljsInit() {
  hljs.configure({
    ignoreUnescapedHTML: true
  })
  hljs.registerLanguage('typescript', typescript)
  hljs.registerLanguage('css', css)
  hljs.highlightAll()
}
