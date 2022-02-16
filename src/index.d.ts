import '@archimedes/arch'

declare module '@archimedes/arch' {
  interface ExecutionOptions {
    inlineError: boolean
    confirmation: boolean
  }
}
