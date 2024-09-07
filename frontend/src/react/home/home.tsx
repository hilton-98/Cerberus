const phrases = {
  welcome: 'Welcome to ExpenseHound',
} as const;

export function HomeComponent() {
  return <main>{phrases.welcome}</main>;
}
