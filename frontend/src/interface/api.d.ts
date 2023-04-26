declare interface APITypes<T = any> {
  data: T
  error: Error | any
  message: string
}
