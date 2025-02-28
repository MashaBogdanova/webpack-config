// декларируем модули для использования scss модулей
declare module '*.module.scss' {
  interface ClassesNames {
    [className: string]: string
  }
  const classNames: ClassesNames
  export = classNames
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'

declare const __PLATFORM__: 'desktop' | 'mobile';
declare const __ENV__: 'development' | 'production';
