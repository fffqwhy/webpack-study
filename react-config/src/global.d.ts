declare module '*.module.less' {
  const classes: {
    readonly [key: string]: string
  }
  export default classes
}
declare module '*.module.scss' {
  const classes: {
    readonly [key: string]: string
  }
  export default classes
}
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}