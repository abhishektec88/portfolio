const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-8 border-t" style={{borderColor: '#E5E7EB'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <p className="mb-4" style={{color: '#6B7280'}}>
            © {currentYear} Abhishek Ranjan. All rights reserved.
          </p>
          <p className="text-sm" style={{color: '#9CA3AF'}}>
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
