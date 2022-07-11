type  ToastKind = 'success' | 'danger' | 'warning' | 'info';

export interface ToastModel {
  message: string,
  duration: number
  kind: ToastKind
}
