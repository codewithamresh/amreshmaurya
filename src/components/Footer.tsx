interface FooterProps {
  isDark: boolean;
}

export const Footer = ({ isDark }: FooterProps) => {
  return (
    <footer
      className={`text-center ${
        isDark ? 'text-gray-500' : 'text-gray-500'
      } pt-12 border-t ${isDark ? 'border-gray-800' : 'border-gray-300'}`}
    >
      <p className="font-mono">Built with React • Designed with passion</p>
      <p className="text-sm mt-2">© 2026 Amresh Maurya</p>
    </footer>
  );
};