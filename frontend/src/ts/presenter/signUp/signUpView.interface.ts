export interface SignUpView {
  clearError(): void;
  startSession(): void;
  showError(errorMessage: string): void;
}
