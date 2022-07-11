export abstract class EnsureImportedOnce<T> {
  protected constructor(targetModule: any) {
    if (targetModule) {
      throw new Error(`You are trying to import ${targetModule.constructor.name} again`)
    }
  }
}
