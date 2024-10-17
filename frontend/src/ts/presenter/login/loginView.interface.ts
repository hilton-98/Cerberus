export interface LoginView {
  clearError(): void;
  showError(errorMessage: string): void;
  startSession(): void;
}
